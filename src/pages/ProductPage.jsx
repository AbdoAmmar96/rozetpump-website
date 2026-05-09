import { Link, Navigate } from 'react-router-dom'
import { productPages } from '../data/content.js'

export default function ProductPage({ slug }) {
  const product = productPages[slug]

  if (!product) {
    return <Navigate to="/404" replace />
  }

  // Split intro text by lines (some sections use bullet points starting with •)
  const renderBody = (body) => {
    if (!body) return null
    const lines = body.split('\n').map(l => l.trim()).filter(Boolean)
    const isBulleted = lines.every(l => l.startsWith('•') || l.startsWith('-'))
    if (isBulleted && lines.length > 1) {
      return (
        <ul className="product-bullets">
          {lines.map((l, i) => (
            <li key={i}>{l.replace(/^[•\-]\s*/, '')}</li>
          ))}
        </ul>
      )
    }
    return <p style={{ color: 'var(--gray-700)', whiteSpace: 'pre-line' }}>{body}</p>
  }

  return (
    <>
      <section className="page-banner page-banner-dark">
        <div className="container page-banner-inner">
          <h1>{product.title}</h1>
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">›</span>
            <span className="current">{product.breadcrumb || product.title}</span>
          </nav>
        </div>
      </section>

      <section className="product-detail">
        <div className="container">
          {/* Intro: text left, image right */}
          <div className="product-intro">
            <div className="product-intro-text">
              {product.intro && (
                <p className="product-intro-lead">{product.intro}</p>
              )}

              {product.sections && product.sections.length > 0 && (
                <div className="product-tech-desc">
                  {product.sections.map((s, i) => (
                    <div key={i} className="tech-section">
                      <h3 className="tech-heading">{s.heading}</h3>
                      {renderBody(s.body)}
                    </div>
                  ))}
                </div>
              )}

              {product.relatedDownload && (
                <a
                  href={product.relatedDownload.pdf}
                  className="btn-download-wide"
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  Download Pdf
                </a>
              )}
            </div>

            <div className="product-intro-image">
              <div className="rozet-logo-stamp">
                <img src="/images/Rozet-.png" alt="ROZET" />
              </div>
              <img
                src={product.heroImage}
                alt={product.title}
                className="product-hero-img"
              />
            </div>
          </div>

          {/* Models — minimal: just image + name */}
          {product.models && product.models.length > 0 && (
            <div className="product-models">
              <div className="models-grid-clean">
                {product.models.map((model, i) => (
                  <a
                    key={i}
                    className="model-card-clean"
                    href={model.pdf || '#'}
                    target={model.pdf ? '_blank' : undefined}
                    rel="noreferrer"
                    download={!!model.pdf}
                  >
                    <div className="model-img-clean">
                      <img src={model.image} alt={model.name} loading="lazy" />
                    </div>
                    <h4>{model.name}</h4>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container">
          <h2>Need a quote for {product.title}?</h2>
          <p>Tell us your flow rate, head, and fluid type — our engineers respond fast.</p>
          <Link to="/contact" className="btn btn-primary">
            Request a Quote <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  )
}
