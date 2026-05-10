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
    return <p style={{ color: 'var(--black)', whiteSpace: 'pre-line' }}>{body}</p>
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
          {/* Intro: text left, image right — hidden when product has no intro content */}
          {(product.intro || product.sections || product.heroImage) && (
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

                {product.relatedDownload && !product.afterModelsSections && (
                  <a
                    href={product.relatedDownload.pdf}
                    className="btn-download-wide"
                    target="_blank"
                    rel="noreferrer"
                    download
                  >
                    {product.relatedDownload.label || 'Download Pdf'}
                  </a>
                )}
              </div>

              {product.heroImage && (
                <div className="product-intro-image">
                  <img
                    src={product.heroImage}
                    alt={product.title}
                    className="product-hero-img"
                  />
                </div>
              )}
            </div>
          )}

          {/* Models — minimal: image + name + CTA */}
          {product.models && product.models.length > 0 && (
            <div className="product-models">
              {product.modelsHeading && (
                <h3 className="models-heading">{product.modelsHeading}</h3>
              )}
              <div className="models-grid-clean">
                {product.models.map((model, i) => (
                  <div key={i} className="model-card-clean">
                    <div className="model-img-clean">
                      <img src={model.image} alt={model.name} loading="lazy" />
                    </div>
                    <h4>{model.name}</h4>
                    {model.href ? (
                      <Link to={model.href} className="model-cta">
                        More Details <i className="bi bi-arrow-right"></i>
                      </Link>
                    ) : model.pdf ? (
                      <a
                        href={model.pdf}
                        className="model-cta"
                        target="_blank"
                        rel="noreferrer"
                      >
                        More Details <i className="bi bi-arrow-right"></i>
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Secondary image (e.g. CDL/CDLF row on water-supply page) */}
          {product.secondaryImage && (
            <div className="product-secondary-image">
              <img src={product.secondaryImage} alt={product.title} />
            </div>
          )}

          {/* After-models sections (e.g. FEATURES AND USING LIMITS) + final download */}
          {product.afterModelsSections && product.afterModelsSections.length > 0 && (
            <div className="product-after-models">
              {product.afterModelsSections.map((s, i) => (
                <div key={i} className="tech-section">
                  <h3 className="tech-heading">{s.heading}</h3>
                  {renderBody(s.body)}
                </div>
              ))}
              {product.relatedDownload && (
                <a
                  href={product.relatedDownload.pdf}
                  className="btn-download-wide"
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  {product.relatedDownload.label || 'Download Pdf'}
                </a>
              )}
            </div>
          )}
        </div>
      </section>

    </>
  )
}
