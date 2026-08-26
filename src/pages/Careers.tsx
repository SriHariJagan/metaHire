import { useInView } from '@/hooks/useInView'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import {
  Target,
  TrendingUp,
  Lightbulb,
  Sparkles,
  Users,
  BookOpen,
  Handshake,
  BarChart3,
  Sun,
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  FileText,
  Search,
  MessageSquare,
  Code,
  CheckCircle,
  Gift,
  Brain,
  Eye,
  RefreshCcw,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function AnimDiv({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={className + ' transition-all duration-700 ' + (inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
      style={{ transitionDelay: delay + 'ms' }}
    >
      {children}
    </div>
  )
}

const whyCards = [
  {
    icon: Target,
    title: 'Purpose',
    desc: 'Build technology that solves real hiring problems faced by organizations every day.',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    desc: 'Learn, experiment, and grow continuously with support from experienced teammates.',
  },
  {
    icon: Lightbulb,
    title: 'Ownership',
    desc: 'Take ideas from concept to impact with the autonomy to drive meaningful outcomes.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    desc: 'Work with modern technology and new ways of thinking that challenge the status quo.',
  },
]

const lifeCards = [
  {
    icon: Users,
    title: 'Collaboration',
    gradient: 'from-brand-green to-emerald-600',
  },
  {
    icon: BookOpen,
    title: 'Learning',
    gradient: 'from-brand-blue to-blue-600',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Handshake,
    title: 'Ownership',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: BarChart3,
    title: 'Impact',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    icon: Sun,
    title: 'Balance',
    gradient: 'from-cyan-500 to-teal-600',
  },
]

const openPositions = [
  {
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
    description:
      "Lead the development of MetaHire's web application, building responsive interfaces with React and TypeScript that recruiters and candidates love to use.",
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
    description:
      'Define and execute the product vision for core hiring features, working closely with engineering and design to deliver solutions that solve real customer problems.',
  },
  {
    title: 'UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    description:
      "Design intuitive experiences across MetaHire's platform, from candidate application flows to recruiter dashboards, turning complex workflows into simple interactions.",
  },
  {
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
    description:
      "Design and build scalable APIs and services that power MetaHire's hiring platform, ensuring reliability and performance as the platform grows.",
  },
  {
    title: 'Data Analyst',
    department: 'Analytics',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years',
    description:
      'Transform hiring data into actionable insights, building dashboards and analyses that help customers optimize their recruitment process and make better decisions.',
  },
]

const hiringSteps = [
  {
    icon: FileText,
    title: 'Application',
    desc: 'Submit your application with your resume and a brief introduction.',
  },
  {
    icon: Search,
    title: 'Initial Review',
    desc: 'Our team reviews your application and assesses fit for the role.',
  },
  {
    icon: MessageSquare,
    title: 'Interview',
    desc: 'A conversation to learn about your experience and understand your goals.',
  },
  {
    icon: Code,
    title: 'Technical / Role Discussion',
    desc: 'A deeper dive into your skills through a practical exercise or discussion.',
  },
  {
    icon: CheckCircle,
    title: 'Final Decision',
    desc: 'We align internally and make a decision on the best candidate.',
  },
  {
    icon: Gift,
    title: 'Offer',
    desc: 'We extend an offer and welcome you to the MetaHire team.',
  },
]

const cultureStatements = [
  {
    icon: Brain,
    title: 'Curiosity',
    desc: 'We ask questions, challenge assumptions, and seek to understand before building.',
  },
  {
    icon: Zap,
    title: 'Ownership',
    desc: "We take responsibility for outcomes, not just tasks. If it matters, it's ours.",
  },
  {
    icon: Users,
    title: 'Collaboration',
    desc: 'The best results come from working together across disciplines with shared context.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    desc: 'We share information openly, give honest feedback, and keep each other informed.',
  },
  {
    icon: RefreshCcw,
    title: 'Continuous Improvement',
    desc: "We reflect on what worked, learn from what didn't, and get better every cycle.",
  },
]

export default function Careers() {
  return (
    <main className="overflow-hidden">
      {/* SECTION 01 — HERO */}
      <section className="relative bg-gradient-to-br from-brand-offwhite via-brand-green-50 to-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimDiv>
              <p className="text-sm font-semibold tracking-widest uppercase text-brand-green mb-4">
                Careers at MetaHire
              </p>
            </AnimDiv>

            <AnimDiv delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-black leading-[1.1] tracking-tight">
                Build the{' '}
                <span className="text-gradient">Future of Hiring</span>
              </h1>
            </AnimDiv>

            <AnimDiv delay={200}>
              <p className="mt-6 text-lg text-brand-gray-dark leading-relaxed max-w-xl mx-auto">
                Join a team building technology that helps organizations and people find better opportunities.
              </p>
            </AnimDiv>

            <AnimDiv delay={300}>
              <div className="mt-8">
                <Link
                  to="/careers#open-positions"
                  className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-brand-green/25 transition-all duration-200 hover:shadow-xl hover:shadow-brand-green/30"
                >
                  View Open Roles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimDiv>
          </div>
        </div>
      </section>

      {/* SECTION 02 — WHY METAHIRE */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Why MetaHire"
              heading="Why People Choose MetaHire"
              description="We're building something that matters — and we're looking for people who want to do the same."
              centered
            />
          </AnimDiv>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map((card, idx) => (
              <AnimDiv key={card.title} delay={idx * 100}>
                <div className="group rounded-2xl p-6 bg-brand-offwhite border border-brand-gray-light/40 hover:border-brand-green/30 hover:shadow-lg hover:shadow-brand-green/5 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4 group-hover:bg-brand-green/15 transition-colors">
                    <card.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-base font-bold text-brand-black mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-brand-gray leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </AnimDiv>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — LIFE AT METAHIRE */}
      <section className="py-20 lg:py-28 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Life at MetaHire"
              heading="How We Work"
              description="A culture built on curiosity, ownership, and the drive to solve meaningful problems."
              centered
            />
          </AnimDiv>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {lifeCards.map((card, idx) => (
              <AnimDiv key={card.title} delay={idx * 100}>
                <div
                  className={
                    'relative rounded-2xl p-8 bg-gradient-to-br ' +
                    card.gradient +
                    ' text-white overflow-hidden group cursor-default'
                  }
                >
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold">{card.title}</h3>
                  </div>
                </div>
              </AnimDiv>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — OPEN POSITIONS */}
      <section id="open-positions" className="py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Open Positions"
              heading="Find Your Role"
              description="We're always looking for talented people who want to help shape the future of hiring."
              centered
            />
          </AnimDiv>

          <p className="text-center text-sm text-brand-gray mt-4">
            * These are example roles to showcase our team structure. We encourage you to reach out even if your role isn't listed.
          </p>

          <div className="mt-12 space-y-5">
            {openPositions.map((job, idx) => (
              <AnimDiv key={job.title} delay={idx * 100}>
                <div className="group rounded-2xl border border-brand-gray-light/50 hover:border-brand-green/30 bg-white hover:shadow-lg hover:shadow-brand-green/5 transition-all duration-300 p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-brand-black">
                          {job.title}
                        </h3>
                        <span className="text-xs font-semibold text-brand-green bg-brand-green/10 px-2.5 py-0.5 rounded-full">
                          {job.department}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-brand-gray mb-3">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5" />
                          {job.experience}
                        </span>
                      </div>

                      <p className="text-sm text-brand-gray-dark leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    <div className="lg:ml-6 shrink-0">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm hover:gap-3 transition-all duration-200"
                      >
                        View Role
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimDiv>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — HIRING PROCESS */}
      <section className="py-20 lg:py-28 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Hiring Process"
              heading="What to Expect"
              description="A clear, respectful process designed to give both sides the information they need to make a great decision."
              centered
            />
          </AnimDiv>

          <AnimDiv delay={200}>
            <div className="mt-16 max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-green/20" />

                <div className="space-y-8">
                  {hiringSteps.map((step, idx) => (
                    <div key={step.title} className="relative flex items-start gap-5">
                      <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-brand-green flex items-center justify-center shadow-sm shrink-0">
                        <span className="text-sm font-bold text-brand-green">
                          {idx + 1}
                        </span>
                      </div>
                      <div className="pt-1">
                        <div className="flex items-center gap-2.5 mb-1">
                          <step.icon className="w-4 h-4 text-brand-green" />
                          <h3 className="text-base font-bold text-brand-black">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-brand-gray leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimDiv>
        </div>
      </section>

      {/* SECTION 06 — OUR CULTURE */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Our Culture"
              heading="Work With People Who Care About the Problem"
              description="Our values aren't decorative — they guide how we make decisions, build products, and treat each other."
              centered
            />
          </AnimDiv>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="space-y-6">
              {cultureStatements.map((item, idx) => (
                <AnimDiv key={item.title} delay={idx * 100}>
                  <div className="flex gap-4 rounded-2xl p-5 bg-brand-offwhite border border-brand-gray-light/40 hover:border-brand-green/30 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-brand-green/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-brand-black mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-brand-gray leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimDiv>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — CTA */}
      <CTASection
        heading="Don't See Your Role?"
        description="If you believe you can contribute to MetaHire, we'd still love to hear from you."
        primaryLabel="Send Your Resume"
        primaryTo="/contact"
      />
    </main>
  )
}
