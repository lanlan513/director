import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { DOMAINS } from '../../data/domains'
import { getCategoryIcon } from '../../utils/icons'

const DomainSection = () => (
  <section className="category-section">
    <div className="container">
      <div className="section-head">
        <div>
          <span className="eyebrow">Learning Domains</span>
          <h2 className="section-title">八大专业学习模块</h2>
          <p className="section-subtitle">
            每个领域都是独立的学习模块，拥有专属的知识结构与内容，点击进入深度探索
          </p>
        </div>
        <Link to="/courses" className="link-more">
          浏览课程库 <ArrowRight size={14} />
        </Link>
      </div>

      <div className="domain-entry-grid">
        {DOMAINS.map((domain) => {
          const Icon = getCategoryIcon(domain.icon)
          return (
            <Link
              key={domain.id}
              to={`/domains/${domain.id}`}
              className="domain-entry-card fade-up"
              style={{ ['--domain-accent' as string]: domain.accent }}
            >
              <div className="dec-top" aria-hidden />
              <div className="dec-head">
                <div className="dec-icon">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="dec-name">{domain.name}</h3>
                  <div className="dec-en">{domain.englishName}</div>
                </div>
              </div>
              <p className="dec-desc">{domain.description}</p>

              {/* 学习目标预览 */}
              <div className="dec-goals">
                {domain.learningGoals.slice(0, 2).map((g, i) => (
                  <div key={i} className="dec-goal">
                    <span className="dec-goal-dot" />
                    <span>{g}</span>
                  </div>
                ))}
                {domain.learningGoals.length > 2 && (
                  <div className="dec-more">+{domain.learningGoals.length - 2} 项目标</div>
                )}
              </div>

              {/* 核心方向标签 */}
              <div className="dec-directions">
                {domain.knowledgeDirections.slice(0, 4).map((d) => (
                  <span key={d.name} className="dec-dir-tag">
                    {d.name}
                  </span>
                ))}
              </div>

              <div className="dec-action">
                进入模块 <ArrowRight size={14} />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  </section>
)

export default DomainSection
