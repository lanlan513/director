import { useNavigate } from 'react-router-dom'
import { Play, Compass, Sparkles } from 'lucide-react'
import { useLearningStats } from '../../store/useLearningStore'
import './home.css'

const Hero = () => {
  const navigate = useNavigate()
  const stats = useLearningStats()

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="eyebrow">
            <Sparkles size={14} /> Director&apos;s Audio-Visual Lab
          </span>
          <h1 className="hero-title">
            从理解一部电影
            <br />
            到独立完成<span className="accent-text">短片创作</span>
          </h1>
          <p className="hero-desc">
            系统学习导演工作、电影语言与视听叙事。八大知识领域、结构化课程与创作练习，
            带你从镜头语法走向完整的影像表达。
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => navigate('/courses')}>
              <Play size={16} fill="currentColor" /> 开始学习
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/domains/director-basics')}>
              <Compass size={16} /> 从导演基础入门
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-num">{stats.totalCourses}</span>
              <span className="stat-label">门课程</span>
            </div>
            <div className="hero-divider" />
            <div className="hero-stat">
              <span className="stat-num">8</span>
              <span className="stat-label">大领域</span>
            </div>
            <div className="hero-divider" />
            <div className="hero-stat">
              <span className="stat-num">{stats.inProgressCount}</span>
              <span className="stat-label">学习中</span>
            </div>
            <div className="hero-divider" />
            <div className="hero-stat">
              <span className="stat-num">{stats.completedCount}</span>
              <span className="stat-label">已完成</span>
            </div>
          </div>
        </div>

        {/* 右侧：电影分镜板视觉 */}
        <div className="hero-visual">
          <div className="clapperboard">
            <div className="clap-top">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className={`clap-stripe stripe-${i % 2 === 0 ? 'dark' : 'light'}`} />
              ))}
            </div>
            <div className="clap-body">
              <div className="clap-row">
                <span className="clap-label">场</span>
                <span className="clap-val">SCENE 01</span>
              </div>
              <div className="clap-row">
                <span className="clap-label">镜</span>
                <span className="clap-val">TAKE 03</span>
              </div>
              <div className="clap-row">
                <span className="clap-label">导</span>
                <span className="clap-val">YOU</span>
              </div>
              <div className="clap-led" />
            </div>
          </div>
          <div className="film-strip-vertical" aria-hidden>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="fs-cell">
                <span />
                <span />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
