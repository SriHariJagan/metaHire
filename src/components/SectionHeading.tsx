import { useInView } from '../hooks/useInView'

interface Props {
  eyebrow?: string
  heading: string
  description?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  centered = true,
  light = false,
  className = '',
}: Props) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${
        inView ? 'animate-fade-up' : 'opacity-0'
      } ${className}`}
    >
      {eyebrow && (
        <p className="text-sm font-semibold tracking-widest uppercase text-brand-green mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight ${
          light ? 'text-white' : 'text-brand-blue'
        }`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? 'text-brand-gray' : 'text-brand-gray-dark'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
