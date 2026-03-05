import { Link } from 'react-router-dom'
import { articles, categories } from '../data/content'
import { PageMeta } from '../components/PageMeta'
import { StructuredDataHome } from '../components/StructuredData'
import '../styles/home.css'

const featured = articles.slice(0, 8)
const rest = articles.slice(8)

const HOME_TITLE = "Rough Copy — What's happening, explained"
const HOME_DESCRIPTION =
  "Clear takes on what's happening — tech, climate, culture, and the ideas that shape the day."

export function HomePage() {
  return (
    <div className="page home">
      <PageMeta title={HOME_TITLE} description={HOME_DESCRIPTION} path="/" />
      <StructuredDataHome />
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            What’s happening, explained
          </h1>
          <p className="hero-subtitle">
            Clear takes on tech, climate, culture, and the ideas that shape the day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--with-sidebar">
          <div className="content-primary">
            <h2 className="section-title">Latest</h2>
            <ul className="card-list">
              {featured.map((article) => (
                <li key={article.slug}>
                  <article className="card">
                    <Link to={`/article/${article.slug}`} className="card-link">
                      <span className="card-category">{article.category}</span>
                      <h3 className="card-title">{article.title}</h3>
                      <p className="card-excerpt">{article.excerpt}</p>
                      <span className="card-meta">{article.readTime} min read</span>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
            <ul className="card-list">
              {rest.map((article) => (
                <li key={article.slug}>
                  <article className="card">
                    <Link to={`/article/${article.slug}`} className="card-link">
                      <span className="card-category">{article.category}</span>
                      <h3 className="card-title">{article.title}</h3>
                      <p className="card-excerpt">{article.excerpt}</p>
                      <span className="card-meta">{article.readTime} min read</span>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
          <aside className="sidebar">
            <div className="sidebar-block">
              <h3 className="sidebar-title">Categories</h3>
              <ul className="sidebar-list">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
