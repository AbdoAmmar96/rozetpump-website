import HeroSlider from '../components/HeroSlider.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import HomeContact from '../components/HomeContact.jsx'
import { siteInfo, aboutSections } from '../data/content.js'

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* About Us — red frame image left, big heading + 25 sidebar right */}
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

      <ProductGrid />

      <HomeContact />
    </>
  )
}
