import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { useLearningStore } from '../../store/useLearningStore'
import { getCourseById } from '../../data/courses'
import EmptyState from '../common/EmptyState'
import ProgressBar from '../common/ProgressBar'

const formatTime = (iso: string) => {
  const date = new Date(iso)
  const now = new Date()
  const diff = (now.getTime() - date.getTime()) / 1000
  if (diff < 60) return '刚刚'
  if (diff < 3600) return `${Math.floor(diff / 60)} 分钟前`
  if (diff < 86400) return `${Math.floor(diff / 3600)} 小时前`
  if (diff < 604800) return `${Math.floor(diff / 86400)} 天前`
  return date.toLocaleDateString('zh-CN')
}

const RecentLearning = () => {
  const recent = useLearningStore((s) => s.getRecent())

  const records = recent
    .map((r) => {
      const course = getCourseById(r.courseId)
      return course ? { ...r, course } : null
    })
    .filter((x): x is NonNullable<typeof x> => x !== null)
    .slice(0, 5)

  return (
    <section className="recent-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Recently Viewed</span>
            <h2 className="section-title">最近学习</h2>
            <p className="section-subtitle">继续上次的进度，保持学习节奏</p>
          </div>
        </div>

        {records.length === 0 ? (
          <EmptyState
            title="还没有学习记录"
            description="从课程库中挑选一门感兴趣的课程，开始你的导演学习之旅吧。"
            action={
              <Link to="/courses" className="btn btn-primary">
                浏览课程
              </Link>
            }
          />
        ) : (
          <div className="recent-list">
            {records.map((r) => (
              <Link
                key={r.courseId}
                to={`/courses/${r.courseId}`}
                className="recent-item fade-up"
              >
                <div
                  className="ri-cover"
                  style={{
                    background: `linear-gradient(135deg, ${r.course.cover.from}, ${r.course.cover.to})`,
                  }}
                >
                  {r.course.title.charAt(0)}
                </div>
                <div className="ri-main">
                  <p className="ri-title">{r.course.title}</p>
                  <div className="ri-meta">
                    {r.course.instructor} · {r.course.chapters.length} 章
                  </div>
                </div>
                <div className="ri-progress">
                  <ProgressBar progress={r.progress} showLabel />
                </div>
                <div className="ri-time">
                  <Clock size={12} style={{ marginRight: 4, verticalAlign: -2 }} />
                  {formatTime(r.lastStudiedAt)}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default RecentLearning
