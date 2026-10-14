import { useMemo, type ReactNode } from 'react'
import { Film } from 'lucide-react'
import Header from './Header'

const Layout = ({ children }: { children: ReactNode }) => {
  const year = useMemo(() => new Date().getFullYear(), [])
  return (
  <>
    <Header />
    <main className="main-content">{children}</main>
    <footer className="site-footer">
      <div className="container footer-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Film size={16} color="var(--accent)" />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            导演工作与视听叙事学习实验室
          </span>
        </div>
        <div className="film-strip" aria-hidden>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
        <p>© {year} Director&apos;s Lab · 仅供学习研究使用</p>
      </div>
    </footer>
  </>
  )
}

export default Layout
