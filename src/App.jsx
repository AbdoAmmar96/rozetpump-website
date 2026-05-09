import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Preloader from './components/Preloader.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Downloads from './pages/Downloads.jsx'
import Contact from './pages/Contact.jsx'
import ProductPage from './pages/ProductPage.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<Contact />} />

          {/* Product pages — all share the same layout */}
          <Route path="/fire-fighting-systems" element={<ProductPage slug="fire-fighting-systems" />} />
          <Route path="/two-electric-and-jockey-pump" element={<ProductPage slug="two-electric-and-jockey-pump" />} />
          <Route path="/water-supply-system" element={<ProductPage slug="water-supply-system" />} />
          <Route path="/pv-jockey-pump" element={<ProductPage slug="pv-jockey-pump" />} />
          <Route path="/pvt" element={<ProductPage slug="pvt" />} />
          <Route path="/sewage-pump" element={<ProductPage slug="sewage-pump" />} />
          <Route path="/deep-well-pump" element={<ProductPage slug="deep-well-pump" />} />
          <Route path="/split-case-pump" element={<ProductPage slug="split-case-pump" />} />
          <Route path="/stainless-case-pump" element={<ProductPage slug="stainless-case-pump" />} />
          <Route path="/self-priming-pumps" element={<ProductPage slug="self-priming-pumps" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
