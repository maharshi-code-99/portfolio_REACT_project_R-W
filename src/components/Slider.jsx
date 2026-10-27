// Hero section (named "Slider" to match the project brief, no carousel needed).
// The soft glowing orbs behind the text are pure CSS, see ".hero-glow" in index.css.
const STATS = [
  { value: '6 yrs', label: 'building for the web' },
  { value: '40+', label: 'projects shipped' },
  { value: '98', label: 'average Lighthouse score' },
]

export default function Slider() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-glow hero-glow-a" aria-hidden="true" />
      <div className="hero-glow hero-glow-b" aria-hidden="true" />

      <div className="container hero-inner">
        <p className="hero-kicker">Front-end developer based in Ahmedabad</p>
        <h1 id="hero-title" className="hero-title">
          I build web apps that feel fast, clear and calm to use.
        </h1>
        <p className="hero-text">
          I design and develop accessible interfaces with React. I care about
          readable code, thoughtful details and pages that load quickly on any
          device.
        </p>

        <div className="hero-actions">
          {/* These anchors scroll smoothly because of "scroll-behavior" in index.css */}
          <a href="#work" className="btn btn-primary">View my work</a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </div>

        <dl className="hero-stats">
          {STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
