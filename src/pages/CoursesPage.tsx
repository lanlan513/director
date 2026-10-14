import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import { CATEGORIES } from '../data/categories'
import { searchCourses } from '../data/courses'
import type { CategoryFilter, DifficultyFilter, SortBy } from '../types'
import SearchBar from '../components/common/SearchBar'
import CourseCard from '../components/common/CourseCard'
import EmptyState from '../components/common/EmptyState'
import './pages.css'

const difficultyOrder = { beginner: 0, intermediate: 1, advanced: 2 }

const CoursesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  // 关键词与分类直接由 URL 派生，避免在 effect 中 setState 导致级联渲染
  const keyword = searchParams.get('q') ?? ''
  const category = (searchParams.get('category') as CategoryFilter) ?? 'all'
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('all')
  const [sortBy, setSortBy] = useState<SortBy>('default')

  const updateParam = (key: string, value: string | null) => {
    const next = new URLSearchParams(searchParams)
    if (value === null || value === '') next.delete(key)
    else next.set(key, value)
    setSearchParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    let list = searchCourses(keyword)
    if (category !== 'all') list = list.filter((c) => c.categoryId === category)
    if (difficulty !== 'all') list = list.filter((c) => c.difficulty === difficulty)

    const sorted = [...list]
    if (sortBy === 'duration-asc') sorted.sort((a, b) => a.duration - b.duration)
    else if (sortBy === 'duration-desc') sorted.sort((a, b) => b.duration - a.duration)
    else if (sortBy === 'difficulty')
      sorted.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty])
    return sorted
  }, [keyword, category, difficulty, sortBy])

  const handleCategory = (cat: CategoryFilter) => {
    updateParam('category', cat === 'all' ? null : cat)
  }

  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <span className="eyebrow">Course Library</span>
          <h1>课程库</h1>
          <p>按领域、难度筛选，或搜索你感兴趣的主题</p>
        </div>

        {/* 筛选栏 */}
        <div className="filter-bar">
          <div className="search-box" style={{ flex: 1, minWidth: 240 }}>
            <SearchBar value={keyword} onChange={(v) => updateParam('q', v)} autoFocus />
          </div>
          <select
            className="filter-select"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as DifficultyFilter)}
          >
            <option value="all">全部难度</option>
            <option value="beginner">入门</option>
            <option value="intermediate">进阶</option>
            <option value="advanced">高阶</option>
          </select>
          <select
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortBy)}
          >
            <option value="default">默认排序</option>
            <option value="duration-asc">时长从短到长</option>
            <option value="duration-desc">时长从长到短</option>
            <option value="difficulty">难度从低到高</option>
          </select>
        </div>

        {/* 分类标签 */}
        <div className="category-chips">
          <button
            className={`cat-chip ${category === 'all' ? 'active' : ''}`}
            onClick={() => handleCategory('all')}
          >
            全部
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              className={`cat-chip ${category === c.id ? 'active' : ''}`}
              onClick={() => handleCategory(c.id)}
              style={{ ['--chip-color' as string]: c.accent }}
            >
              <span className="chip-dot" />
              {c.name}
            </button>
          ))}
        </div>

        <div className="result-count">
          找到 <strong>{filtered.length}</strong> 门课程
          {keyword && (
            <span style={{ marginLeft: 8 }}>
              · 关键词「{keyword}」
            </span>
          )}
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            title="没有找到匹配的课程"
            description="试试更换关键词，或切换分类与难度筛选条件。"
            action={
              <button
                className="btn btn-ghost"
                onClick={() => {
                  updateParam('q', null)
                  updateParam('category', null)
                  setDifficulty('all')
                }}
              >
                <SlidersHorizontal size={15} /> 重置筛选
              </button>
            }
          />
        ) : (
          <div className="courses-grid">
            {filtered.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CoursesPage
