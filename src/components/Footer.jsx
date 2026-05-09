import { Link } from 'react-router-dom'
import { siteInfo } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <Link to="/" className="footer-logo">
            <img src="/images/Rozet-.png" alt="ROZET" />
          </Link>
          <p>
            ROZET delivers technical excellence and superior quality to industries worldwide,
            driving industrial growth and meeting global production standards.
          </p>
        </div>

        <div className="footer-col">
          <h4>Our Products</h4>
          <ul>
            <li><Link to="/fire-fighting-systems">Fire Fighting Systems</Link></li>
            <li><Link to="/water-supply-system">Water Supply System</Link></li>
            <li><Link to="/pv-jockey-pump">Vertical Multistage Pump</Link></li>
            <li><Link to="/sewage-pump">Sewage Pump</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>More Products</h4>
          <ul>
            <li><Link to="/deep-well-pump">Deep Well Pump</Link></li>
            <li><Link to="/split-case-pump">Split Case Pump</Link></li>
            <li><Link to="/stainless-case-pump">Stainless Case Pump</Link></li>
            <li><Link to="/self-priming-pumps">Self Priming Pumps</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="contact-list">
            <li><i className="bi bi-headset"></i> Support: <a href={`mailto:${siteInfo.supportEmail}`}>{siteInfo.supportEmail}</a></li>
            <li><i className="bi bi-envelope"></i> Email: <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></li>
            <li><i className="bi bi-cart-check"></i> Sales: <a href={`mailto:${siteInfo.salesEmail}`}>{siteInfo.salesEmail}</a></li>
            <li><i className="bi bi-geo-alt"></i> {siteInfo.address}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>Copyright © {year} by <a href="/" className="brand-link">ROZET</a> | All rights reserved</p>
          <p className="agency-credit">
            © {year} <a href="#" target="_blank" rel="noreferrer">Business Partner for Information Technology</a>. All rights reserved.
            <br />
            <span dir="rtl" lang="ar">© {year} <a href="#" target="_blank" rel="noreferrer">شركة شريك الأعمال لتقنية المعلومات</a>. جميع الحقوق محفوظة.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
