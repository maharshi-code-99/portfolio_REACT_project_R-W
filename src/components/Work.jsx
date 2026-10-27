// Edit this array to change your projects. Each object becomes one card.
// Set "demo" or "code" to '#' or remove the key to hide that link.
const PROJECTS = [
  {
    id: 'taskflow',
    title: 'Taskflow',
    description:
      'A kanban-style task manager with drag-and-drop columns, keyboard shortcuts and offline support.',
    tags: ['React', 'Vite', 'CSS Modules'],
    demo: 'https://example.com/taskflow',
    code: 'https://github.com/your-username/taskflow',
  },
  {
    id: 'weatherly',
    title: 'Weatherly',
    description:
      'A weather dashboard that shows a 7-day forecast with charts and remembers your favourite cities.',
    tags: ['JavaScript', 'REST API', 'Chart.js'],
    demo: 'https://example.com/weatherly',
    code: 'https://github.com/your-username/weatherly',
  },
  {
    id: 'bookshelf',
    title: 'Bookshelf',
    description:
      'A reading tracker with search, tags and yearly goals. Fully usable with a screen reader.',
    tags: ['React', 'Accessibility', 'LocalStorage'],
    demo: 'https://example.com/bookshelf',
    code: 'https://github.com/your-username/bookshelf',
  },
  {
    id: 'pixelpad',
    title: 'Pixelpad',
    description:
      'A tiny pixel-art editor that exports PNG files and shares drawings through a short link.',
    tags: ['Canvas', 'JavaScript', 'HTML5'],
    demo: 'https://example.com/pixelpad',
    code: 'https://github.com/your-username/pixelpad',
  },
  {
    id: 'devnotes',
    title: 'Devnotes',
    description:
      'A markdown note app for developers with live preview, code highlighting and fast full-text search.',
    tags: ['React', 'Markdown', 'ESLint'],
    code: 'https://github.com/your-username/devnotes',
  },
  {
    id: 'budgetly',
    title: 'Budgetly',
    description:
      'A personal budget planner that turns monthly spending into simple, readable summaries.',
    tags: ['React', 'CSS Grid', 'Charts'],
    demo: 'https://example.com/budgetly',
  },
]

export default function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <div className="section-head">
          <h2 id="work-title" className="section-title">Selected work</h2>
          <p className="section-lead">
            A few projects that show how I plan, build and polish interfaces.
          </p>
        </div>

        <ul className="project-grid">
          {PROJECTS.map((project) => (
            <li key={project.id}>
              <article className="card">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>

                <ul className="tags" aria-label={`Technologies used in ${project.title}`}>
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">{tag}</li>
                  ))}
                </ul>

                <div className="card-links">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo (opens in a new tab)`}
                    >
                      Live demo
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code (opens in a new tab)`}
                    >
                      Source code
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
