import { Link } from 'react-router-dom'
import { productCategories } from '../data/content.js'

export default function ProductGrid() {
  return (
    <section className="product-grid-section" id="products">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title-red">Explore Our Innovative Pump Solutions</h2>
          <p className="section-subtitle">
            Discover a wide range of high-performance industrial pumps designed for reliability, efficiency, and durability in every application.
          </p>
        </div>

        <div className="product-grid">
          {productCategories.map((cat) => (
            <Link key={cat.slug} to={cat.href} className="product-card">
              <div className="product-card-body">
                <h3 className="product-card-title">{cat.title}</h3>
                <div className="product-card-img">
                  <img src={cat.image} alt={cat.title} loading="lazy" />
                </div>
              </div>
              <div className="product-card-footer">
                <span className="more-details">More Details</span>
                <span className="card-brand">
                  <img src="/images/Rozet-inverted.png" alt="ROZET" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
