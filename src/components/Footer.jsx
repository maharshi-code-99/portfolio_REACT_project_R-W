// Replace the "#" links below with your real profile URLs.
const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'X (Twitter)', href: 'https://x.com/' },
]

export default function Footer() {
  // The year updates itself every January, no editing needed
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-brand">Alex Morgan</p>
          <p className="footer-sub">Front-end developer. Available for freelance and full-time roles.</p>
        </div>

        <nav aria-label="Social media">
          <ul className="footer-links">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-meta">
          <p>&copy; {year} Alex Morgan. All rights reserved.</p>
          <a href="#home" className="back-to-top">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
