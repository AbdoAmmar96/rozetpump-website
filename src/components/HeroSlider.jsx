import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data/content.js'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

export default function HeroSlider() {
  return (
    <section className="hero-slider">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        speed={1000}
      >
        {heroSlides.map((slide, idx) => (
          <SwiperSlide key={slide.id}>
            <div className={`hero-slide ${idx === 0 ? 'hero-slide--image-only' : ''}`}>
              <div
                className="hero-slide-bg"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {idx !== 0 && (
                <div className="container">
                  <div className="hero-slide-content">
                    <span className="eyebrow">{slide.eyebrow}</span>
                    <h1>{slide.title}</h1>
                    <p>{slide.subtitle}</p>
                    <div className="hero-actions">
                      <Link to={slide.primaryCta.href} className="btn btn-primary">
                        {slide.primaryCta.label} <i className="bi bi-arrow-right"></i>
                      </Link>
                      {slide.secondaryCta.href.startsWith('#') ? (
                        <a href={slide.secondaryCta.href} className="btn btn-outline">
                          {slide.secondaryCta.label}
                        </a>
                      ) : (
                        <Link to={slide.secondaryCta.href} className="btn btn-outline">
                          {slide.secondaryCta.label}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
