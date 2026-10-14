import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { COURSES } from '../data/courses'
import { useLearningStore } from '../store/useLearningStore'
import CourseCard from '../components/common/CourseCard'
import EmptyState from '../components/common/EmptyState'
import './pages.css'

const FavoritesPage = () => {
  const progress = useLearningStore((s) => s.progress)

  const favorites = COURSES.filter((c) => progress[c.id]?.favorite)

  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <span className="eyebrow">
            <Heart size={14} /> My Favorites
          </span>
          <h1>我的收藏</h1>
          <p>你收藏的课程会出现在这里，方便随时开始学习</p>
        </div>

        {favorites.length === 0 ? (
          <EmptyState
            icon={Heart}
            title="还没有收藏的课程"
            description="在课程卡片上点击心形图标，把感兴趣的课程加入收藏。"
            action={
              <Link to="/courses" className="btn btn-primary">
                去发现课程
              </Link>
            }
          />
        ) : (
          <>
            <div className="result-count">
              共 <strong>{favorites.length}</strong> 门收藏课程
            </div>
            <div className="courses-grid">
              {favorites.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default FavoritesPage
