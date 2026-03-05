import { Link, useParams } from 'react-router-dom'
import { getCategory, getArticlesByCategory } from '../data/content'
import { PageMeta } from '../components/PageMeta'
import { StructuredDataCategory } from '../components/StructuredData'
import { SITE_NAME } from '../config'
import '../styles/home.css'
import '../styles/article.css'

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const category = slug ? getCategory(slug) : null
  const items = slug ? getArticlesByCategory(slug) : []

  if (!category) {
    return (
      <div className="page container">
        <h1>Category not found</h1>
        <Link to="/">Back to home</Link>
      </div>
    )
  }

  const path = `/category/${category.slug}`
  const title = `${category.name} — ${SITE_NAME}`
  const description =
    category.description.length > 155
      ? category.description.slice(0, 152) + '...'
      : category.description

  return (
    <div className="page">
      <PageMeta title={title} description={description} path={path} />
      <StructuredDataCategory name={category.name} description={category.description} path={path} />
      <section className="hero hero--small">
        <div className="container">
          <h1 className="hero-title">{category.name}</h1>
          <p className="hero-subtitle">{category.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container container--with-sidebar">
          <div className="content-primary">
            <ul className="card-list">
              {items.map((article) => (
                <li key={article.slug}>
                  <article className="card">
                    <Link to={`/article/${article.slug}`} className="card-link">
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
              <h3 className="sidebar-title">{category.name}</h3>
              <p className="footer-tagline" style={{ margin: 0 }}>{category.description}</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
