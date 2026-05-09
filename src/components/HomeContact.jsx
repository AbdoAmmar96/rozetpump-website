import ContactForm from './ContactForm.jsx'
import { siteInfo } from '../data/content.js'

export default function HomeContact() {
  return (
    <section className="home-contact-section" id="contact">
      <div className="container home-contact-wrap">
        <div className="contact-card">
          <div className="contact-form-side">
            <h3 className="contact-form-title">Contact Form</h3>
            <p className="contact-form-subtitle">
              Feel Free to Contact us any time. we will get back to you as soon as we can
            </p>
            <ContactForm variant="underline" />
          </div>

          <div className="contact-info-side">
            <div className="info-accent"></div>
            <h3 className="info-title">Info</h3>

            <div className="info-block">
              <h4>Address info</h4>
              <p>{siteInfo.address}</p>
            </div>

            <div className="info-block">
              <h4>Support</h4>
              <a href={`mailto:${siteInfo.supportEmail}`}>{siteInfo.supportEmail}</a>
            </div>

            <div className="info-block">
              <h4>Sales Department</h4>
              <a href={`mailto:${siteInfo.salesEmail}`}>{siteInfo.salesEmail}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
