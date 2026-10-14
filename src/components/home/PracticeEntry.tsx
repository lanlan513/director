import { useNavigate } from 'react-router-dom'
import { PenTool, ArrowRight } from 'lucide-react'

const PracticeEntry = () => {
  const navigate = useNavigate()
  return (
    <section className="practice-section">
      <div className="container">
        <div className="practice-banner fade-up">
          <div>
            <span className="eyebrow">
              <PenTool size={14} /> Creative Practice
            </span>
            <h2>创作练习入口</h2>
            <p>
              学完理论之后，用练习巩固认知。短片分镜拆解、单场戏调度、镜头序列拍摄——
              每个练习都配有评分标准与参考案例，帮助你把知识转化为作品。
            </p>
          </div>
          <button className="btn btn-primary" onClick={() => navigate('/courses?category=editing')}>
            进入练习区 <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default PracticeEntry
