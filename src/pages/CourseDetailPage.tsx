import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  ArrowLeft,
  Clock,
  BookOpen,
  User,
  Heart,
  Play,
  CheckCircle2,
  RotateCcw,
} from 'lucide-react'
import { getCourseById } from '../data/courses'
import { getCategoryById } from '../data/categories'
import { useLearningStore, useCourseProgress } from '../store/useLearningStore'
import { useToast } from '../components/common/Toast'
import DifficultyBadge from '../components/common/DifficultyBadge'
import ProgressBar from '../components/common/ProgressBar'
import EmptyState from '../components/common/EmptyState'
import './pages.css'

const CourseDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const course = id ? getCourseById(id) : undefined
  const { toast } = useToast()

  // 始终调用 Hook（即使 id 缺失，下方会渲染空状态）
  const progress = useCourseProgress(id ?? '')
  const toggleFavorite = useLearningStore((s) => s.toggleFavorite)
  const setProgress = useLearningStore((s) => s.setProgress)
  const markStarted = useLearningStore((s) => s.markStarted)
  const markCompleted = useLearningStore((s) => s.markCompleted)

  if (!course) {
    return (
      <div className="page">
        <div className="container">
          <EmptyState
            title="课程不存在"
            description="你访问的课程可能已被移除，请返回课程库重新选择。"
            action={
              <Link to="/courses" className="btn btn-primary">
                返回课程库
              </Link>
            }
          />
        </div>
      </div>
    )
  }

  const category = getCategoryById(course.categoryId)
  const pct = progress.progress

  const handleStart = () => {
    markStarted(course.id)
    toast('已开始学习，进度已记录', 'success')
  }
  const handleComplete = () => {
    markCompleted(course.id)
    toast('已标记为完成，恭喜！', 'success')
  }
  const handleFavorite = () => {
    toggleFavorite(course.id)
    toast(progress.favorite ? '已取消收藏' : '已加入收藏', 'success')
  }
  const handleReset = () => {
    setProgress(course.id, 0)
    toast('进度已重置', 'info')
  }

  return (
    <div className="page">
      <div className="container">
        <button
          className="btn btn-ghost"
          onClick={() => navigate(-1)}
          style={{ marginBottom: 20 }}
        >
          <ArrowLeft size={16} /> 返回
        </button>

        {/* 封面 Hero */}
        <div
          className="detail-hero"
          style={{
            background: `linear-gradient(135deg, ${course.cover.from}, ${course.cover.to})`,
          }}
        >
          {category && (
            <span className="dh-cat">
              <span className="dot" style={{ background: category.accent }} />
              {category.name}
            </span>
          )}
          <h1>{course.title}</h1>
          <p className="dh-subtitle">{course.subtitle}</p>
          <p className="dh-desc">{course.description}</p>

          <div className="dh-meta">
            <span>
              <User size={15} /> {course.instructor}
            </span>
            <span>
              <Clock size={15} /> {course.duration} 分钟
            </span>
            <span>
              <BookOpen size={15} /> {course.chapters.length} 章
            </span>
            <DifficultyBadge difficulty={course.difficulty} size="md" />
          </div>

          <div className="dh-actions">
            {progress.status === 'not-started' ? (
              <button className="btn btn-primary" onClick={handleStart}>
                <Play size={16} fill="currentColor" /> 开始学习
              </button>
            ) : progress.status === 'completed' ? (
              <button className="btn btn-soft" onClick={handleReset}>
                <RotateCcw size={16} /> 重新学习
              </button>
            ) : (
              <>
                <button className="btn btn-primary" onClick={handleStart}>
                  <Play size={16} fill="currentColor" /> 继续学习
                </button>
                <button className="btn btn-soft" onClick={handleComplete}>
                  <CheckCircle2 size={16} /> 标记完成
                </button>
              </>
            )}
            <button
              className={`btn ${progress.favorite ? 'btn-soft' : 'btn-ghost'}`}
              onClick={handleFavorite}
            >
              <Heart size={16} fill={progress.favorite ? 'currentColor' : 'none'} />
              {progress.favorite ? '已收藏' : '收藏'}
            </button>
          </div>
        </div>

        {/* 主体：章节 + 进度面板 */}
        <div className="detail-body">
          <div>
            <div className="detail-section">
              <h2>课程章节</h2>
              <div className="chapter-list">
                {course.chapters.map((ch, i) => (
                  <div key={ch.id} className="chapter-item">
                    <div className="chapter-num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="chapter-info">
                      <div className="chapter-title">{ch.title}</div>
                      <div className="chapter-dur">
                        <Clock size={11} style={{ marginRight: 4, verticalAlign: -1 }} />
                        {ch.duration} 分钟
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h2>知识标签</h2>
              <div className="tags-list">
                {course.tags.map((t) => (
                  <span key={t} className="tag" style={{ fontSize: 13, padding: '4px 12px' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 进度控制侧栏 */}
          <div className="progress-panel">
            <div className="progress-card">
              <div className="pc-label">学习进度</div>
              <div className="pc-percent">{pct}%</div>
              <ProgressBar progress={pct} />
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={pct}
                onChange={(e) => setProgress(course.id, Number(e.target.value))}
                className="progress-slider"
              />
              <div className="pc-actions">
                <button className="btn btn-soft" onClick={() => setProgress(course.id, pct + 10)}>
                  +10%
                </button>
                <button className="btn btn-ghost" onClick={handleReset}>
                  <RotateCcw size={15} /> 重置进度
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailPage
