import { Link, NavLink } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/category/world', label: 'World' },
  { to: '/category/tech', label: 'Tech' },
  { to: '/category/climate', label: 'Climate' },
  { to: '/category/culture', label: 'Culture' },
  { to: '/about', label: 'About' },
]

export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo" aria-label="Rough Copy home">
          Rough Copy
        </Link>
        <nav className="nav" aria-label="Main">
          <ul className="nav-list">
            {nav.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                  end={to === '/'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" className="header-menu-btn" aria-label="Open menu" aria-expanded="false">
          <span className="header-menu-icon" />
        </button>
      </div>
    </header>
  )
}
