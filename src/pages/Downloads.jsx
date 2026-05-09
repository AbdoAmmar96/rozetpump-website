import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { downloads } from '../data/content.js'

export default function Downloads() {
  const [filter, setFilter] = useState('All')

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(downloads.map(d => d.category)))]
  }, [])

  const filtered = useMemo(() => {
    if (filter === 'All') return downloads
    return downloads.filter(d => d.category === filter)
  }, [filter])

  return (
    <>
      <section className="page-banner">
        <div className="container page-banner-inner">
          <h1>Downloads</h1>
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">›</span>
            <span className="current">Downloads</span>
          </nav>
        </div>
      </section>

      <section className="downloads-section">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title-red">Datasheets &amp; Brochures</h2>
            <p className="section-subtitle">
              Download technical datasheets, capacity curves, and product brochures for ROZET pump ranges.
            </p>
          </div>

          <div className="category-filter">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-chip ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="downloads-grid">
            {filtered.map((file, i) => (
              <a
                key={i}
                href={file.pdf}
                target="_blank"
                rel="noreferrer"
                className="download-card"
                download
              >
                <div className="pdf-icon">
                  <i className="bi bi-file-earmark-pdf-fill"></i>
                </div>
                <div className="info">
                  <strong>{file.title}</strong>
                  <span>{file.category}</span>
                </div>
                <div className="arrow">
                  <i className="bi bi-download"></i>
                </div>
              </a>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--gray-500)', marginTop: 40 }}>
              No downloads in this category.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
