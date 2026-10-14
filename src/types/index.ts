// 导演工作与视听叙事学习实验室 —— 核心数据类型定义

/** 知识分类 ID（与 data/categories.ts 保持一致） */
export type CategoryId =
  | 'director-basics'
  | 'screenplay'
  | 'camera-language'
  | 'mise-en-scene'
  | 'actor-guidance'
  | 'cinematography'
  | 'sound-design'
  | 'editing'

/** 课程难度 */
export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

/** 学习状态 */
export type LearningStatus = 'not-started' | 'in-progress' | 'completed'

/** 知识分类 */
export interface Category {
  id: CategoryId
  name: string
  englishName: string
  description: string
  icon: string
  /** 主题色（用于渐变与强调） */
  accent: string
  /** 课程数量（计算得出，可选） */
  courseCount?: number
}

/** 课程章节 */
export interface Chapter {
  id: string
  title: string
  duration: number // 分钟
}

/** 课程 */
export interface Course {
  id: string
  title: string
  subtitle: string
  description: string
  categoryId: CategoryId
  difficulty: Difficulty
  duration: number // 预计学习时长（分钟）
  tags: string[]
  /** 封面渐变色（from / to） */
  cover: { from: string; to: string }
  chapters: Chapter[]
  /** 创作者 / 讲师 */
  instructor: string
}

/** 用户对单门课程的学习进度记录 */
export interface CourseProgress {
  courseId: string
  /** 完成百分比 0-100 */
  progress: number
  status: LearningStatus
  /** 最后学习时间 ISO 字符串 */
  lastStudiedAt: string | null
  /** 是否已收藏 */
  favorite: boolean
}

/** 用户学习概览统计 */
export interface LearningStats {
  totalCourses: number
  inProgressCount: number
  completedCount: number
  favoriteCount: number
  totalMinutes: number
}

/** 最近学习记录条目 */
export interface RecentRecord {
  courseId: string
  progress: number
  lastStudiedAt: string
}

/** 分类筛选选项 */
export type CategoryFilter = CategoryId | 'all'

/** 难度筛选选项 */
export type DifficultyFilter = Difficulty | 'all'

/** 排序方式 */
export type SortBy = 'default' | 'duration-asc' | 'duration-desc' | 'difficulty'
