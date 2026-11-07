import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const close = () => setOpen(false)

  const handleLogout = () => {
    logout()
    close()
    navigate('/')
  }

  return (
    <nav className="navbar navbar-expand-lg site-nav sticky-top">
      <div className="container">
        <Link className="navbar-brand brand" to="/" onClick={close}>
          <span className="brand-mark" aria-hidden="true">C</span>CampusLink
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse${open ? ' show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {links.map((l) => (
              <li className="nav-item" key={l.to}>
                <NavLink className="nav-link" to={l.to} end={l.end} onClick={close}>
                  {l.label}
                </NavLink>
              </li>
            ))}
            {user && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard" onClick={close}>
                  Dashboard
                </NavLink>
              </li>
            )}
            <li className="nav-item ms-lg-2 my-2 my-lg-0">
              <button
                className="btn btn-sm btn-outline-secondary theme-toggle"
                onClick={toggle}
                aria-label="Toggle dark mode"
              >
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
              </button>
            </li>
            <li className="nav-item ms-lg-2">
              {user ? (
                <button className="btn btn-sm btn-accent" onClick={handleLogout}>
                  Log out
                </button>
              ) : (
                <Link className="btn btn-sm btn-accent" to="/login" onClick={close}>
                  Student login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
