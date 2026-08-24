import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface Props {
  heading: string
  description: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
  dark?: boolean
}

export default function CTASection({
  heading,
  description,
  primaryLabel = 'Get Started',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo = '/solutions',
  dark = true,
}: Props) {
  return (
    <section
      className={`relative py-24 lg:py-32 overflow-hidden ${
        dark
          ? 'bg-gradient-to-br from-brand-blue to-brand-black'
          : 'bg-brand-green-50'
      }`}
    >
      {dark && (
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-3xl" />
        </div>
      )}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight ${
            dark ? 'text-white' : 'text-brand-blue'
          }`}
        >
          {heading}
        </h2>
        <p
          className={`mt-6 text-lg max-w-2xl mx-auto ${
            dark ? 'text-brand-gray' : 'text-brand-gray-dark'
          }`}
        >
          {description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryTo}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-green hover:bg-brand-green-dark text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-glow text-lg"
          >
            {primaryLabel}
            <ArrowRight className="w-5 h-5" />
          </Link>
          {secondaryLabel && (
            <Link
              to={secondaryTo}
              className={`inline-flex items-center gap-2 px-8 py-4 border-2 font-semibold rounded-full transition-all duration-200 text-lg ${
                dark
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-brand-blue/20 text-brand-blue hover:bg-brand-blue/5'
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
