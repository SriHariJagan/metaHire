import { usePageTracking } from './seo/usePageTracking';
import { SEO } from './seo/SEO';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Footer } from './components/footer/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Solutions from './pages/Solutions'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy'
import { TermsOfService } from './pages/legal/TermsOfService'
import { Cancellation } from './pages/legal/Cancellation'
import { Security } from './pages/legal/Security'
import { Compliance } from './pages/legal/Compliance'
import { Sitemap } from './pages/legal/Sitemap'

export default function App() {
  usePageTracking();
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <SEO />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal/cancellation" element={<Cancellation />} />
          <Route path="/legal/cancellation-and-refund" element={<Cancellation />} />
          <Route path="/legal/refund" element={<Cancellation />} />
          <Route path="/legal/security" element={<Security />} />
          <Route path="/legal/compliance" element={<Compliance />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
