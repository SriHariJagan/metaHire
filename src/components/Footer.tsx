import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  Platform: [
    { label: 'Recruitment Management', path: '/solutions' },
    { label: 'Talent Acquisition', path: '/solutions' },
    { label: 'Candidate Management', path: '/solutions' },
    { label: 'Interview Management', path: '/solutions' },
    { label: 'Analytics', path: '/solutions' },
    { label: 'Automation', path: '/solutions' },
  ],
  Company: [
    { label: 'About', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ],
  Connect: [
    { label: 'LinkedIn', href: '#' },
    { label: 'X', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <img src="/logo.png" alt="MetaHire" className="h-12 w-auto" />
            </Link>
            <p className="text-brand-gray text-sm leading-relaxed max-w-sm">
              Smarter hiring. Better teams.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="mailto:hello@metahire.com" className="text-brand-gray hover:text-brand-green transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-gray hover:text-brand-green transition-colors" aria-label="Location">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {'path' in link ? (
                      <Link
                        to={link.path}
                        className="text-sm text-brand-gray hover:text-brand-green transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-brand-gray hover:text-brand-green transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-brand-gray">
              &copy; 2026 MetaHire. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-brand-gray hover:text-brand-green transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-brand-gray hover:text-brand-green transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-brand-gray hover:text-brand-green transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
