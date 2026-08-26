import { useState, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useEffect } from 'react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  )

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-brand-blue-light'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2 group" aria-label="MetaHire Home">
              <img
                src="/logo.png"
                alt="MetaHire"
                className="h-10 lg:h-14 w-auto transition-transform group-hover:scale-105"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'text-brand-green'
                      : scrolled
                      ? 'text-brand-blue hover:text-brand-green'
                      : 'text-brand-blue/80 hover:text-brand-green'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-green rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-brand-green hover:bg-brand-green-dark text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-md hover:shadow-glow"
              >
                Get Started
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-brand-gray-light transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-6 h-6 text-brand-blue" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div
          className="absolute inset-0 bg-brand-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-brand-gray-light">
            <img src="/logo.png" alt="MetaHire" className="h-10 w-auto" />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg hover:bg-brand-gray-light transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-brand-blue" />
            </button>
          </div>

          <div className="p-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-brand-green-50 text-brand-green'
                    : 'text-brand-blue hover:bg-brand-gray-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="p-6 border-t border-brand-gray-light">
            <Link
              to="/contact"
              className="block w-full text-center px-5 py-3 bg-brand-green hover:bg-brand-green-dark text-white font-semibold rounded-full transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
