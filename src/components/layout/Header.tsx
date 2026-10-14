import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Clapperboard, Menu, X, Search, Heart } from 'lucide-react'
import { CATEGORIES } from '../../data/categories'
import './layout.css'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const q = keyword.trim()
    navigate(q ? `/courses?q=${encodeURIComponent(q)}` : '/courses')
    setOpen(false)
  }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? 'nav-link-active' : ''}`

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <Clapperboard size={20} />
          </span>
          <span className="brand-text">
            <span className="brand-cn">导演实验室</span>
            <span className="brand-en">Director&apos;s Lab</span>
          </span>
        </Link>

        <nav className="main-nav">
          <NavLink to="/" end className={linkClass}>
            工作台
          </NavLink>
          <NavLink to="/courses" className={linkClass}>
            课程库
          </NavLink>
          <div className="nav-cat-dropdown">
            <button className="nav-link nav-cat-trigger">分类 ▾</button>
            <div className="dropdown-panel">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.id}
                  to={`/courses?category=${c.id}`}
                  className="dropdown-item"
                  onClick={() => setOpen(false)}
                >
                  <span className="dot" style={{ background: c.accent }} />
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
          <NavLink to="/favorites" className={linkClass}>
            <Heart size={15} /> 收藏
          </NavLink>
        </nav>

        <form className="header-search" onSubmit={handleSearch}>
          <Search size={16} />
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="搜索课程…"
          />
        </form>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="菜单">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          <form className="mobile-search" onSubmit={handleSearch}>
            <Search size={16} />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="搜索课程、标签或讲师…"
            />
          </form>
          <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>
            工作台
          </NavLink>
          <NavLink to="/courses" className={linkClass} onClick={() => setOpen(false)}>
            课程库
          </NavLink>
          <NavLink to="/favorites" className={linkClass} onClick={() => setOpen(false)}>
            我的收藏
          </NavLink>
          <div className="mobile-cats">
            {CATEGORIES.map((c) => (
              <Link
                key={c.id}
                to={`/courses?category=${c.id}`}
                className="mobile-cat"
                onClick={() => setOpen(false)}
              >
                <span className="dot" style={{ background: c.accent }} />
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
