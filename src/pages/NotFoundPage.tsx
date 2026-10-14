import { Link } from 'react-router-dom'
import { Film } from 'lucide-react'

const NotFoundPage = () => (
  <div className="page" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 96,
          fontWeight: 900,
          background: 'linear-gradient(135deg, var(--accent), #e2574c)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          lineHeight: 1,
          marginBottom: 16,
        }}
      >
        404
      </div>
      <h1 className="section-title">镜头之外</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 28 }}>
        这个画面没有出现在分镜表里，返回工作台继续创作吧。
      </p>
      <Link to="/" className="btn btn-primary">
        <Film size={16} /> 返回工作台
      </Link>
    </div>
  </div>
)

export default NotFoundPage
