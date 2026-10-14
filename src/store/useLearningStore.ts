import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { useMemo } from 'react'
import type { CourseProgress, LearningStats, RecentRecord } from '../types'
import { COURSES } from '../data/courses'
import { safeGetRaw, safeSetRaw } from '../utils/storage'

const STORAGE_KEY = 'director-lab-state-v1'

interface LearningState {
  /** courseId -> 进度记录 */
  progress: Record<string, CourseProgress>
  /** 最近学习记录（按时间倒序，最多保留 12 条） */
  recent: RecentRecord[]

  // ===== actions =====
  /** 获取课程进度，不存在则返回默认 */
  getProgress: (courseId: string) => CourseProgress
  /** 切换收藏 */
  toggleFavorite: (courseId: string) => void
  /** 更新进度百分比（自动推导状态） */
  setProgress: (courseId: string, percent: number) => void
  /** 标记为开始学习（推进度至至少 5%） */
  markStarted: (courseId: string) => void
  /** 标记为已完成 */
  markCompleted: (courseId: string) => void
  /** 获取学习统计 */
  getStats: () => LearningStats
  /** 获取最近学习记录 */
  getRecent: () => RecentRecord[]
  /** 重置所有学习状态 */
  resetAll: () => void
}

const defaultProgress = (courseId: string): CourseProgress => ({
  courseId,
  progress: 0,
  status: 'not-started',
  lastStudiedAt: null,
  favorite: false,
})

const deriveStatus = (percent: number): CourseProgress['status'] => {
  if (percent >= 100) return 'completed'
  if (percent > 0) return 'in-progress'
  return 'not-started'
}

const pushRecent = (
  recent: RecentRecord[],
  courseId: string,
  progress: number,
): RecentRecord[] => {
  const now = new Date().toISOString()
  const filtered = recent.filter((r) => r.courseId !== courseId)
  return [{ courseId, progress, lastStudiedAt: now }, ...filtered].slice(0, 12)
}

// 自定义持久化存储：统一捕获 localStorage 异常
// 注意：createJSONStorage 已负责 JSON 编解码，这里只做原始字符串读写
const safeStorage = {
  getItem: (name: string) => {
    const raw = safeGetRaw(name)
    if (raw === null) return null
    // 数据损坏校验：非合法 JSON 时返回 null，让 zustand 使用默认状态而非崩溃
    try {
      JSON.parse(raw)
    } catch {
      console.warn(`[storage] "${name}" 数据损坏，已重置为默认状态。`)
      return null
    }
    // 兼容历史双重编码数据（旧版本 safeGetItem/safeSetItem 会多做一次 JSON 编解码）
    // 旧数据形如 "\"{\\\"state\\\":...}\""，需先解出内层字符串再交给 createJSONStorage 解析
    if (raw.startsWith('"')) {
      try {
        return JSON.parse(raw) as string
      } catch {
        return raw
      }
    }
    return raw
  },
  setItem: (name: string, value: string) => {
    safeSetRaw(name, value)
  },
  removeItem: (name: string) => {
    try {
      window.localStorage.removeItem(name)
    } catch {
      /* ignore */
    }
  },
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set, get) => ({
      progress: {},
      recent: [],

      getProgress: (courseId) =>
        get().progress[courseId] ?? defaultProgress(courseId),

      toggleFavorite: (courseId) =>
        set((state) => {
          const current = state.progress[courseId] ?? defaultProgress(courseId)
          return {
            progress: {
              ...state.progress,
              [courseId]: { ...current, favorite: !current.favorite },
            },
          }
        }),

      setProgress: (courseId, percent) =>
        set((state) => {
          const clamped = Math.max(0, Math.min(100, Math.round(percent)))
          const current = state.progress[courseId] ?? defaultProgress(courseId)
          const updated: CourseProgress = {
            ...current,
            progress: clamped,
            status: deriveStatus(clamped),
            lastStudiedAt: new Date().toISOString(),
          }
          return {
            progress: { ...state.progress, [courseId]: updated },
            recent: pushRecent(state.recent, courseId, clamped),
          }
        }),

      markStarted: (courseId) =>
        set((state) => {
          const current = state.progress[courseId] ?? defaultProgress(courseId)
          const percent = Math.max(current.progress, 5)
          const updated: CourseProgress = {
            ...current,
            progress: percent,
            status: 'in-progress',
            lastStudiedAt: new Date().toISOString(),
          }
          return {
            progress: { ...state.progress, [courseId]: updated },
            recent: pushRecent(state.recent, courseId, percent),
          }
        }),

      markCompleted: (courseId) =>
        set((state) => {
          const current = state.progress[courseId] ?? defaultProgress(courseId)
          const updated: CourseProgress = {
            ...current,
            progress: 100,
            status: 'completed',
            lastStudiedAt: new Date().toISOString(),
          }
          return {
            progress: { ...state.progress, [courseId]: updated },
            recent: pushRecent(state.recent, courseId, 100),
          }
        }),

      getStats: () => {
        const progress = get().progress
        const values = Object.values(progress)
        const completedCount = values.filter((v) => v.status === 'completed').length
        const inProgressCount = values.filter(
          (v) => v.status === 'in-progress',
        ).length
        const favoriteCount = values.filter((v) => v.favorite).length
        const totalMinutes = values.reduce((sum, v) => {
          const course = COURSES.find((c) => c.id === v.courseId)
          if (!course) return sum
          return sum + Math.round((course.duration * v.progress) / 100)
        }, 0)
        return {
          totalCourses: COURSES.length,
          inProgressCount,
          completedCount,
          favoriteCount,
          totalMinutes,
        }
      },

      getRecent: () => get().recent,

      resetAll: () => set({ progress: {}, recent: [] }),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => safeStorage),
      // 版本迁移：如果未来结构变化可在此处理
      version: 1,
      // 防止 hydrate 前渲染异常
      skipHydration: false,
    },
  ),
)

/**
 * 获取学习统计的 Hook。
 * 直接在 selector 中调用 getStats() 会每次返回新对象，触发无限重渲染。
 * 这里只选择稳定的 progress 引用，再用 useMemo 派生统计结果。
 */
export const useLearningStats = (): LearningStats => {
  const progress = useLearningStore((s) => s.progress)
  return useMemo(() => {
    const values = Object.values(progress)
    const completedCount = values.filter((v) => v.status === 'completed').length
    const inProgressCount = values.filter((v) => v.status === 'in-progress').length
    const favoriteCount = values.filter((v) => v.favorite).length
    const totalMinutes = values.reduce((sum, v) => {
      const course = COURSES.find((c) => c.id === v.courseId)
      if (!course) return sum
      return sum + Math.round((course.duration * v.progress) / 100)
    }, 0)
    return {
      totalCourses: COURSES.length,
      inProgressCount,
      completedCount,
      favoriteCount,
      totalMinutes,
    }
  }, [progress])
}

/**
 * 获取单门课程进度的稳定 Hook。
 * 直接在 selector 中调用 getProgress(id) 在无记录时会返回新对象，导致循环。
 * 这里选择 progress[id]（稳定引用或 undefined），再在组件层补默认值。
 */
export const useCourseProgress = (courseId: string): CourseProgress => {
  const stored = useLearningStore((s) => s.progress[courseId])
  return useMemo(
    () => stored ?? defaultProgress(courseId),
    [stored, courseId],
  )
}
