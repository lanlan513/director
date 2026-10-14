import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CATEGORIES } from '../../data/categories'
import { getCoursesByCategory } from '../../data/courses'
import { getCategoryIcon } from '../../utils/icons'

const CategorySection = () => (
  <section className="category-section">
    <div className="container">
      <div className="section-head">
        <div>
          <span className="eyebrow">Knowledge Domains</span>
          <h2 className="section-title">八大知识领域</h2>
          <p className="section-subtitle">从导演基础到剪辑节奏，构建完整的视听叙事能力</p>
        </div>
        <Link to="/courses" className="link-more">
          浏览全部课程 <ArrowRight size={14} />
        </Link>
      </div>

      <div className="category-grid">
        {CATEGORIES.map((cat) => {
          const Icon = getCategoryIcon(cat.icon)
          const count = getCoursesByCategory(cat.id).length
          return (
            <Link
              key={cat.id}
              to={`/courses?category=${cat.id}`}
              className="category-card fade-up"
              style={{ ['--cat-accent' as string]: cat.accent }}
            >
              <div className="cat-icon">
                <Icon size={22} />
              </div>
              <h3 className="cat-name">{cat.name}</h3>
              <div className="cat-en">{cat.englishName}</div>
              <p className="cat-desc">{cat.description}</p>
              <div className="cat-count">{count} 门课程</div>
            </Link>
          )
        })}
      </div>
    </div>
  </section>
)

export default CategorySection
