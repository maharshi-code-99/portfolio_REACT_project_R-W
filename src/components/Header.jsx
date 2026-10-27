import { useState, useEffect } from 'react'

// Edit these links to change the navigation. Each href must match a section id.
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  // Controls whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false)
  // Adds a background to the header after the page is scrolled a little
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled || menuOpen ? ' is-solid' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="logo" onClick={closeMenu} aria-label="Alex Morgan, home">
          <span className="logo-mark" aria-hidden="true">A</span>
          Alex Morgan
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className="menu-bars" aria-hidden="true" />
        </button>

        <nav
          id="primary-nav"
          className={`nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          <ul className="nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link" onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary btn-sm" onClick={closeMenu}>
            Hire me
          </a>
        </nav>
      </div>
    </header>
  )
}
