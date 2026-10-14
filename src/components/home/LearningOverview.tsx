import { BookOpen, Clock, Award, Heart } from 'lucide-react'
import { useLearningStats } from '../../store/useLearningStore'

const LearningOverview = () => {
  const stats = useLearningStats()

  const items = [
    {
      icon: BookOpen,
      label: '进行中',
      value: stats.inProgressCount,
      sub: `共 ${stats.totalCourses} 门课程`,
      color: 'var(--accent)',
      bg: 'var(--accent-soft)',
    },
    {
      icon: Award,
      label: '已完成',
      value: stats.completedCount,
      sub: '已掌握的课程',
      color: 'var(--success)',
      bg: 'rgba(46, 204, 113, 0.12)',
    },
    {
      icon: Heart,
      label: '收藏',
      value: stats.favoriteCount,
      sub: '稍后学习',
      color: '#ff6b9d',
      bg: 'rgba(255, 107, 157, 0.12)',
    },
    {
      icon: Clock,
      label: '累计时长',
      value: `${stats.totalMinutes}`,
      sub: '分钟',
      color: 'var(--info)',
      bg: 'rgba(58, 166, 255, 0.12)',
    },
  ]

  return (
    <section className="overview-section">
      <div className="container">
        <div className="overview-grid">
          {items.map((it) => (
            <div key={it.label} className="overview-card fade-up">
              <div className="oc-icon" style={{ background: it.bg, color: it.color }}>
                <it.icon size={20} />
              </div>
              <div className="oc-label">{it.label}</div>
              <div className="oc-value" style={{ color: it.color }}>
                {it.value}
              </div>
              <div className="oc-sub">{it.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningOverview
