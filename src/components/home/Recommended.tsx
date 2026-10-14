import { Sparkles } from 'lucide-react'
import { COURSES } from '../../data/courses'
import { useLearningStore } from '../../store/useLearningStore'
import CourseCard from '../common/CourseCard'

const Recommended = () => {
  const progress = useLearningStore((s) => s.progress)

  // 推荐逻辑：未完成的课程中，优先入门级，再取前 3 门
  const recommended = COURSES.filter((c) => {
    const p = progress[c.id]
    return !p || p.status !== 'completed'
  })
    .sort((a, b) => {
      const order = { beginner: 0, intermediate: 1, advanced: 2 }
      return order[a.difficulty] - order[b.difficulty]
    })
    .slice(0, 3)

  return (
    <section className="recommend-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              <Sparkles size={14} /> Recommended
            </span>
            <h2 className="section-title">为你推荐</h2>
            <p className="section-subtitle">从这些课程开启你的导演学习路径</p>
          </div>
        </div>
        <div className="recommend-grid">
          {recommended.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recommended
