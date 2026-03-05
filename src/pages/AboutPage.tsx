import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { StructuredDataAbout } from '../components/StructuredData'
import '../styles/article.css'

const ABOUT_TITLE = 'About Rough Copy'
const ABOUT_DESCRIPTION =
  'We explain what\'s going on — in world affairs, tech, climate, and culture — so you can get to the point fast.'

export function AboutPage() {
  return (
    <div className="page">
      <PageMeta title={ABOUT_TITLE} description={ABOUT_DESCRIPTION} path="/about" />
      <StructuredDataAbout />
      <section className="hero hero--small">
        <div className="container container--narrow">
          <h1 className="hero-title">About Rough Copy</h1>
          <p className="hero-subtitle">
            We explain what’s going on — in world affairs, tech, climate, and culture — so you can get to the point fast.
          </p>
        </div>
      </section>

      <div className="container container--narrow">
        <div className="article-body">
          <p>
            Rough Copy is a blog that focuses on clarity. We cover current events, useful ideas, and the kind of questions people actually search for: why something is happening, how it works, and what to do about it.
          </p>
          <p>
            No fluff, no hype. Just clear takes you can read in a few minutes.
          </p>
          <p>
            Browse <Link to="/category/world">World</Link>, <Link to="/category/tech">Tech</Link>, <Link to="/category/climate">Climate</Link>, or <Link to="/category/culture">Culture</Link>, or start on the <Link to="/">homepage</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
