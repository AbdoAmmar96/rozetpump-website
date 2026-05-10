import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { siteInfo, mainNav } from '../data/content.js'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className="site-header">
      {/* Top bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <span className="top-bar-email">
            <i className="bi bi-envelope-fill"></i>
            <span>Email : {siteInfo.email}</span>
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div className="main-bar">
        <div className="container main-bar-inner">
          <Link to="/" className="logo">
            <img src="/images/Rozet-.png" alt="ROZET" />
          </Link>

          <button
            className="mobile-toggle"
            aria-label="Open navigation"
            onClick={() => setMobileOpen(true)}
          >
            <i className="bi bi-list"></i>
          </button>

          <div
            className={`nav-overlay ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(false)}
          />

          <nav className={`primary-nav ${mobileOpen ? 'open' : ''}`}>
            <div className="primary-nav-header">
              <Link to="/" className="logo" onClick={() => setMobileOpen(false)}>
                <img src="/images/Rozet-.png" alt="ROZET" />
              </Link>
              <button
                className="nav-close"
                aria-label="Close navigation"
                onClick={() => setMobileOpen(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <ul className="nav-list">
              {mainNav.map((item, i) => (
                <NavItem
                  key={i}
                  item={item}
                  index={i}
                  openDropdown={openDropdown}
                  setOpenDropdown={setOpenDropdown}
                />
              ))}
            </ul>
          </nav>

          <Link to="/contact" className="cta-quote">
            <span>Request A Quote</span>
            <span className="cta-arrow"><i className="bi bi-chevron-double-right"></i></span>
          </Link>
        </div>
      </div>
    </header>
  )
}

function NavItem({ item, index, openDropdown, setOpenDropdown }) {
  const isOpen = openDropdown === index
  const hasChildren = item.children && item.children.length > 0

  if (!hasChildren) {
    return (
      <li className="nav-item">
        <NavLink
          to={item.href}
          end={item.href === '/'}
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          {item.label}
        </NavLink>
      </li>
    )
  }

  return (
    <li
      className={`nav-item has-dropdown ${isOpen ? 'is-open' : ''}`}
      onMouseEnter={() => setOpenDropdown(index)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        className="nav-link dropdown-toggle"
        onClick={() => setOpenDropdown(isOpen ? null : index)}
      >
        {item.label} <i className="bi bi-chevron-down"></i>
      </button>
      <ul className="dropdown">
        {item.children.map((child, ci) => (
          <DropdownItem key={ci} item={child} />
        ))}
      </ul>
    </li>
  )
}

function DropdownItem({ item }) {
  const [open, setOpen] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  if (!hasChildren) {
    return (
      <li>
        <Link to={item.href}>{item.label}</Link>
      </li>
    )
  }
  return (
    <li
      className={`has-submenu ${open ? 'is-open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="submenu-toggle" onClick={() => setOpen(o => !o)}>
        {item.label} <i className="bi bi-chevron-right"></i>
      </button>
      <ul className="submenu">
        {item.children.map((c, i) => (
          <li key={i}><Link to={c.href}>{c.label}</Link></li>
        ))}
      </ul>
    </li>
  )
}
