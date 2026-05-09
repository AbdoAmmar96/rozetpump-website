import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm.jsx'
import { siteInfo } from '../data/content.js'

export default function Contact() {
  return (
    <>
      <section className="page-banner">
        <div className="container page-banner-inner">
          <h1>Contact Us</h1>
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">›</span>
            <span className="current">Contact Us</span>
          </nav>
        </div>
      </section>

      <section className="contact-page-section">
        <div className="container">
          <div className="contact-page-grid">
            <div className="contact-page-form-card">
              <h2>Contact Form</h2>
              <p style={{ color: 'var(--red)', fontSize: 13, fontWeight: 500, marginBottom: 22 }}>
                Feel Free to Contact us any time. we will get back to you as soon as we can
              </p>
              <ContactForm variant="underline" />
            </div>

            <div className="contact-info-card">
              <h2>Info</h2>

              <ul className="contact-info-list">
                <li>
                  <i className="bi bi-geo-alt-fill"></i>
                  <div>
                    <strong>Address info</strong>
                    <span>{siteInfo.address}</span>
                  </div>
                </li>
                <li>
                  <i className="bi bi-envelope-fill"></i>
                  <div>
                    <strong>Email</strong>
                    <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
                  </div>
                </li>
                <li>
                  <i className="bi bi-headset"></i>
                  <div>
                    <strong>Support</strong>
                    <a href={`mailto:${siteInfo.supportEmail}`}>{siteInfo.supportEmail}</a>
                  </div>
                </li>
                <li>
                  <i className="bi bi-cart-check-fill"></i>
                  <div>
                    <strong>Sales Department</strong>
                    <a href={`mailto:${siteInfo.salesEmail}`}>{siteInfo.salesEmail}</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="map-wrap">
            <iframe
              title="ROZET location"
              src="https://www.google.com/maps?q=Modena,Italy&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
