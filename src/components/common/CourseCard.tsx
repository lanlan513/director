import { Link } from 'react-router-dom'
import { Clock, Heart, BookOpen, CheckCircle2 } from 'lucide-react'
import type { Course } from '../../types'
import { getCategoryById } from '../../data/categories'
import { useLearningStore, useCourseProgress } from '../../store/useLearningStore'
import { useToast } from './Toast'
import DifficultyBadge from './DifficultyBadge'
import ProgressBar from './ProgressBar'

interface Props {
  course: Course
  index?: number
}

const CourseCard = ({ course, index }: Props) => {
  const category = getCategoryById(course.categoryId)
  const progress = useCourseProgress(course.id)
  const toggleFavorite = useLearningStore((s) => s.toggleFavorite)
  const { toast } = useToast()

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite(course.id)
    toast(progress.favorite ? '已取消收藏' : '已加入收藏', 'success')
  }

  const statusLabel =
    progress.status === 'completed'
      ? '已完成'
      : progress.status === 'in-progress'
        ? '学习中'
        : '未开始'

  return (
    <Link to={`/courses/${course.id}`} className="course-card fade-up">
      <div
        className="card-cover"
        style={{
          background: `linear-gradient(135deg, ${course.cover.from}, ${course.cover.to})`,
        }}
      >
        <div className="cover-pattern" />
        {typeof index === 'number' && (
          <span className="cover-index">{String(index + 1).padStart(2, '0')}</span>
        )}
        <div className="cover-meta">
          <DifficultyBadge difficulty={course.difficulty} />
          {category && (
            <span
              className="tag"
              style={{
                background: 'rgba(0,0,0,0.35)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              {category.name}
            </span>
          )}
        </div>
      </div>

      <div className="card-body">
        <h3 className="card-title">{course.title}</h3>
        <p className="card-subtitle">{course.subtitle}</p>
        <p className="card-desc">{course.description}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
          {course.tags.slice(0, 3).map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        {progress.status !== 'not-started' && (
          <div style={{ marginTop: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                {progress.status === 'completed' ? (
                  <span style={{ color: 'var(--success)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <CheckCircle2 size={13} /> {statusLabel}
                  </span>
                ) : (
                  statusLabel
                )}
              </span>
            </div>
            <ProgressBar progress={progress.progress} showLabel />
          </div>
        )}

        <div className="card-footer">
          <div className="card-meta">
            <span className="meta-item">
              <Clock size={13} /> {course.duration}分钟
            </span>
            <span className="meta-item">
              <BookOpen size={13} /> {course.chapters.length}章
            </span>
          </div>
          <button
            className={`fav-btn ${progress.favorite ? 'active' : ''}`}
            onClick={handleFavorite}
            aria-label={progress.favorite ? '取消收藏' : '收藏课程'}
          >
            <Heart size={17} fill={progress.favorite ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>
    </Link>
  )
}

export default CourseCard
