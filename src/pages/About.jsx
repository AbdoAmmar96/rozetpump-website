import { Link } from 'react-router-dom'
import { aboutSections, siteInfo } from '../data/content.js'

export default function About() {
  return (
    <>
      <section className="page-banner">
        <div className="container page-banner-inner">
          <h1>About Us</h1>
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">›</span>
            <span className="current">About Us</span>
          </nav>
        </div>
      </section>

      {/* Hero block — same red-frame design as home */}
      <section className="about-block">
        <div className="container about-block-grid">
          <div className="about-block-image">
            <div className="red-frame">
              <div className="image-wrap">
                <img src="/images/1235_D8_B4.jpg" alt="ROZET pumping facility" />
              </div>
            </div>
          </div>

          <div className="about-block-text">
            <span className="eyebrow-red">
              ABOUT US <span className="eyebrow-slash">//</span>
            </span>
            <h2 className="about-heading">{aboutSections.intro.title}</h2>

            <div className="about-meta">
              <div className="years-box">
                <strong>{siteInfo.yearsOfSuccess}</strong>
                <span>YEAR OF SUCCESS</span>
              </div>
              <p className="about-body">{aboutSections.intro.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars — plain headings + paragraphs (no cards) */}
      <section className="content-section about-pillars-section">
        <div className="container">
          <div className="about-pillars-list">
            {aboutSections.pillars.map((pillar, i) => (
              <div key={i} className="about-pillar">
                <h3 className="about-pillar-title">{pillar.title}</h3>
                <p className="about-pillar-body">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
