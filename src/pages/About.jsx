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

      {/* Pillars */}
      <section className="content-section" style={{ background: 'var(--gray-100)' }}>
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title-red">The ROZET Difference</h2>
            <p className="section-subtitle">What we stand for as engineers and as a partner.</p>
          </div>

          <div className="cards-grid">
            {aboutSections.pillars.map((pillar, i) => (
              <div key={i} className="feature-card">
                <div className="icon">
                  <i className={`bi ${pillar.icon}`}></i>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="cta-strip">
        <div className="container">
          <h2>Need a custom pump solution?</h2>
          <p>Our engineers will help you specify the right pump for your project.</p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  )
}
