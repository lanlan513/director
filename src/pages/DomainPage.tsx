import { createElement } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Target, Layers, Sparkles, BookOpen, ArrowRight } from 'lucide-react'
import { getDomainById, getDomainCourses } from '../data/domains'
import { getCategoryIcon } from '../utils/icons'
import CourseCard from '../components/common/CourseCard'
import EmptyState from '../components/common/EmptyState'
import './pages.css'

const DomainPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const domain = id ? getDomainById(id) : undefined

  if (!domain) {
    return (
      <div className="page">
        <div className="container">
          <EmptyState
            title="领域不存在"
            description="你访问的学习模块可能已被调整，请返回首页选择其他领域。"
            action={
              <Link to="/" className="btn btn-primary">
                返回首页
              </Link>
            }
          />
        </div>
      </div>
    )
  }

  const relatedCourses = getDomainCourses(domain.id)

  return (
    <div className="page domain-page">
      <div className="container">
        <button
          className="btn btn-ghost"
          onClick={() => navigate(-1)}
          style={{ marginBottom: 20 }}
        >
          <ArrowLeft size={16} /> 返回
        </button>

        {/* 领域 Hero */}
        <section
          className="domain-hero"
          style={{ '--domain-accent': domain.accent } as React.CSSProperties}
        >
          <div className="domain-hero-bg" aria-hidden />
          <div className="domain-hero-content">
            <div className="domain-icon">
              {createElement(getCategoryIcon(domain.icon), { size: 28 })}
            </div>
            <span className="domain-en">{domain.englishName}</span>
            <h1>{domain.name}</h1>
            <p className="domain-desc">{domain.description}</p>
          </div>
        </section>

        {/* 学习目标 */}
        <section className="domain-section">
          <div className="domain-section-head">
            <span className="eyebrow">
              <Target size={14} /> Learning Goals
            </span>
            <h2>学习目标</h2>
          </div>
          <ul className="goal-list">
            {domain.learningGoals.map((goal, i) => (
              <li key={i} className="goal-item">
                <span className="goal-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="goal-text">{goal}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 核心知识方向（领域专属结构） */}
        <section className="domain-section">
          <div className="domain-section-head">
            <span className="eyebrow">
              <Layers size={14} /> Knowledge Directions
            </span>
            <h2>核心知识方向</h2>
            <p className="domain-section-sub">
              本模块围绕以下方向组织内容，每个方向可独立扩展为专业练习。
            </p>
          </div>
          <div className="direction-grid">
            {domain.knowledgeDirections.map((dir) => (
              <div
                key={dir.name}
                className="direction-card"
                style={{ ['--domain-accent' as string]: domain.accent }}
              >
                <h3 className="direction-name">{dir.name}</h3>
                <p className="direction-summary">{dir.summary}</p>
                <div className="direction-keypoints">
                  {dir.keyPoints.map((kp) => (
                    <span key={kp} className="keypoint-tag">
                      {kp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 代表性内容 */}
        <section className="domain-section">
          <div className="domain-section-head">
            <span className="eyebrow">
              <Sparkles size={14} /> Key Concepts
            </span>
            <h2>代表性内容</h2>
          </div>
          <div className="content-grid">
            {domain.representativeContent.map((item) => (
              <div key={item.title} className="content-card">
                <h3 className="content-title">{item.title}</h3>
                <p className="content-desc">{item.description}</p>
                {item.tags && item.tags.length > 0 && (
                  <div className="content-tags">
                    {item.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 关联课程 */}
        {relatedCourses.length > 0 && (
          <section className="domain-section">
            <div className="domain-section-head">
              <span className="eyebrow">
                <BookOpen size={14} /> Related Courses
              </span>
              <h2>关联课程</h2>
              <p className="domain-section-sub">
                以下课程与本领域相关，可在课程库中系统学习。
              </p>
            </div>
            <div className="courses-grid">
              {relatedCourses.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </div>
            <div style={{ marginTop: 24, textAlign: 'center' }}>
              <Link
                to={`/courses?category=${domain.id}`}
                className="btn btn-ghost"
              >
                在课程库中查看全部 <ArrowRight size={15} />
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default DomainPage
