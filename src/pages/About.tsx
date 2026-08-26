import { useInView } from '@/hooks/useInView'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import {
  Heart,
  Lightbulb,
  Shield,
  Sparkles,
  Target,
  Search,
  PenTool,
  Link2,
  Zap,
  BarChart3,
  RefreshCw,
  Brain,
  Database,
  Users,
  Workflow,
  TrendingUp,
  Layers,
  CheckCircle2,
} from 'lucide-react'

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
      className={`${className} transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const values = [
  {
    icon: Heart,
    title: 'People First',
    desc: 'Technology should improve human experiences. Every feature we build starts with the people who use it — recruiters, hiring managers, and candidates alike.',
    color: 'bg-brand-green/10 text-brand-green',
  },
  {
    icon: Lightbulb,
    title: 'Simplicity',
    desc: 'Complex recruitment workflows should feel simple. We strip away unnecessary complexity so teams can focus on what matters — finding the right people.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Shield,
    title: 'Trust',
    desc: 'Hiring decisions depend on reliable information. We ensure data accuracy, consistency, and transparency at every stage of the hiring process.',
    color: 'bg-brand-blue/10 text-brand-blue',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    desc: 'Continuously improve how organizations discover talent. We challenge conventions and explore better ways to connect people with opportunities.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Target,
    title: 'Impact',
    desc: 'Measure success by better hiring outcomes. Every improvement we make is tied to helping organizations build stronger, more effective teams.',
    color: 'bg-rose-100 text-rose-600',
  },
]

const processSteps = [
  {
    icon: Search,
    title: 'Understand',
    desc: 'Listen to the challenges organizations face and learn what truly matters in their hiring journey.',
  },
  {
    icon: PenTool,
    title: 'Design',
    desc: 'Create intuitive solutions that fit naturally into existing workflows without adding friction.',
  },
  {
    icon: Link2,
    title: 'Connect',
    desc: 'Bring people, tools, and processes together on a single platform that everyone can rely on.',
  },
  {
    icon: Zap,
    title: 'Automate',
    desc: 'Remove manual bottlenecks so teams can spend less time on tasks and more time on decisions.',
  },
  {
    icon: BarChart3,
    title: 'Measure',
    desc: 'Track what matters with clear metrics that reveal how hiring performance improves over time.',
  },
  {
    icon: RefreshCw,
    title: 'Improve',
    desc: 'Use insights and feedback to continuously refine the platform and raise the bar for hiring quality.',
  },
]

const futureTrends = [
  {
    icon: Brain,
    title: 'Intelligent Workflows',
    desc: 'AI-assisted processes that adapt to your hiring patterns and surface the right actions at the right time.',
  },
  {
    icon: Database,
    title: 'Data-Driven Decisions',
    desc: 'Move beyond gut feeling with structured evaluations and analytics that inform every hiring choice.',
  },
  {
    icon: Users,
    title: 'Better Candidate Experiences',
    desc: 'Transparent communication and respectful processes that treat every candidate as a person, not a number.',
  },
  {
    icon: Workflow,
    title: 'Automated Operations',
    desc: 'Eliminate repetitive tasks and let technology handle scheduling, follow-ups, and status updates.',
  },
  {
    icon: TrendingUp,
    title: 'Skills-Based Hiring',
    desc: 'Focus on what candidates can do, not just where they have been — unlocking broader, more diverse talent pools.',
  },
  {
    icon: Layers,
    title: 'Connected HR Systems',
    desc: 'Unified platforms that integrate seamlessly with the broader HR ecosystem for a single source of truth.',
  },
]

const challengeCards = [
  'Fragmented workflows spread across too many tools',
  'Manual processes that consume valuable recruiter time',
  'Communication gaps between hiring teams and candidates',
  'Scattered information that is hard to find and trust',
  'Slow decision-making caused by lack of clear visibility',
  'Difficult coordination across departments and schedules',
]

export default function About() {
  return (
    <main className="overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 01 — HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-brand-offwhite via-brand-green-50 to-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimDiv>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-green mb-4">
              About MetaHire
            </p>
          </AnimDiv>

          <AnimDiv delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-black leading-[1.1] tracking-tight">
              Building Better{' '}
              <span className="text-gradient">Hiring Experiences</span>
            </h1>
          </AnimDiv>

          <AnimDiv delay={200}>
            <p className="mt-6 text-lg text-brand-gray-dark leading-relaxed max-w-2xl mx-auto">
              MetaHire exists to make recruitment more connected, intelligent,
              and human.
            </p>
          </AnimDiv>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 02 — OUR STORY
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Our Story"
              heading="Why MetaHire Exists"
              description="Hiring should be one of the most important things an organization does — yet the process often feels broken."
              centered
            />
          </AnimDiv>

          <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — The Challenge */}
            <AnimDiv delay={100}>
              <div className="rounded-2xl bg-brand-offwhite p-8 border border-brand-gray-light/40">
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  The Challenge
                </h3>
                <p className="text-sm text-brand-gray-dark leading-relaxed mb-6">
                  Recruitment today is often harder than it needs to be.
                  Essential information is scattered across tools, spreadsheets,
                  and inboxes — making it difficult to get a clear picture of
                  where things stand.
                </p>
                <div className="space-y-3">
                  {challengeCards.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      </span>
                      <p className="text-sm text-brand-gray-dark leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimDiv>

            {/* Right — The Answer */}
            <AnimDiv delay={200}>
              <div className="rounded-2xl bg-brand-green-50 p-8 border border-brand-green/10">
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  The Answer
                </h3>
                <p className="text-sm text-brand-gray-dark leading-relaxed mb-6">
                  MetaHire was created to bring the hiring journey together. We
                  believe every organization deserves a single, connected
                  platform where recruiters, candidates, and hiring managers
                  work in sync.
                </p>
                <div className="space-y-3">
                  {[
                    'One place to manage every stage of hiring',
                    'Clear visibility from posting to offer',
                    'Structured tools that replace guesswork with clarity',
                    'Connected communication across the entire team',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 w-5 h-5 text-brand-green shrink-0" />
                      <p className="text-sm text-brand-gray-dark leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimDiv>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 03 — MISSION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-brand-offwhite">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimDiv>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-green mb-4">
              Our Mission
            </p>
          </AnimDiv>

          <AnimDiv delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-black leading-tight">
              To simplify hiring through technology that connects people,
              processes, and intelligence.
            </h2>
          </AnimDiv>

          <AnimDiv delay={200}>
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="w-16 h-1 rounded-full bg-brand-green" />
              <div className="w-3 h-3 rounded-full bg-brand-green" />
              <div className="w-16 h-1 rounded-full bg-brand-green" />
            </div>
          </AnimDiv>

          <AnimDiv delay={300}>
            <p className="mt-10 text-lg text-brand-gray-dark leading-relaxed max-w-2xl mx-auto">
              We build tools that remove friction from the hiring process so
              organizations can focus on what matters most — finding and
              welcoming the right people to their teams.
            </p>
          </AnimDiv>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 04 — VISION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue to-brand-black text-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-brand-blue-mid/20 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimDiv>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-green mb-4">
              Our Vision
            </p>
          </AnimDiv>

          <AnimDiv delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              A world where finding the right people is faster, fairer, more
              transparent, and more human.
            </h2>
          </AnimDiv>

          <AnimDiv delay={200}>
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="w-16 h-1 rounded-full bg-brand-green/60" />
              <div className="w-3 h-3 rounded-full bg-brand-green/60" />
              <div className="w-16 h-1 rounded-full bg-brand-green/60" />
            </div>
          </AnimDiv>

          <AnimDiv delay={300}>
            <p className="mt-10 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              We envision a future where hiring is powered by clarity rather
              than complexity — where every decision is informed, every process
              is connected, and every person is treated with respect.
            </p>
          </AnimDiv>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 05 — VALUES
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Our Values"
              heading="What Guides Us"
              description="The principles that shape every decision we make and every feature we build."
              centered
            />
          </AnimDiv>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((val, idx) => (
              <AnimDiv key={val.title} delay={idx * 100}>
                <div className="group rounded-2xl p-6 bg-brand-offwhite border border-brand-gray-light/40 hover:border-brand-green/30 hover:shadow-lg hover:shadow-brand-green/5 transition-all duration-300 h-full">
                  <div
                    className={`w-12 h-12 rounded-xl ${val.color} flex items-center justify-center mb-4`}
                  >
                    <val.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-black mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-brand-gray leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </AnimDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 06 — HOW WE THINK
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Our Approach"
              heading="How We Think"
              description="A structured approach to solving hiring challenges — from understanding the problem to delivering lasting results."
              centered
            />
          </AnimDiv>

          <AnimDiv delay={200}>
            {/* Desktop horizontal timeline */}
            <div className="hidden lg:block mt-16">
              <div className="relative flex items-start justify-between">
                <div className="absolute top-6 left-8 right-8 h-px bg-brand-green/30" />

                {processSteps.map((step, idx) => (
                  <div
                    key={step.title}
                    className="relative flex flex-col items-center text-center flex-1"
                  >
                    <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-brand-green flex items-center justify-center shadow-sm mb-3">
                      <step.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <p className="text-xs font-bold text-brand-black mb-0.5">
                      {step.title}
                    </p>
                    <p className="text-[11px] text-brand-gray max-w-[140px]">
                      {step.desc}
                    </p>
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-brand-green text-white text-[10px] font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile vertical timeline */}
            <div className="lg:hidden mt-12">
              <div className="relative pl-10">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-brand-green/30" />

                <div className="space-y-8">
                  {processSteps.map((step, idx) => (
                    <div
                      key={step.title}
                      className="relative flex items-start gap-4"
                    >
                      <div className="absolute -left-6 z-10 w-8 h-8 rounded-full bg-white border-2 border-brand-green flex items-center justify-center shadow-sm">
                        <step.icon className="w-4 h-4 text-brand-green" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-brand-green bg-brand-green/10 rounded-full px-2 py-0.5">
                            Step {idx + 1}
                          </span>
                        </div>
                        <p className="text-sm font-bold text-brand-black mt-1">
                          {step.title}
                        </p>
                        <p className="text-xs text-brand-gray leading-relaxed">
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

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 07 — THE FUTURE OF HIRING
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Looking Ahead"
              heading="Hiring Is Changing"
              description="The way organizations find and attract talent is evolving rapidly. MetaHire is built for the future of recruitment."
              centered
            />
          </AnimDiv>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {futureTrends.map((trend, idx) => (
              <AnimDiv key={trend.title} delay={idx * 100}>
                <div className="group rounded-2xl p-6 bg-brand-offwhite border border-brand-gray-light/40 hover:border-brand-green/30 hover:shadow-lg hover:shadow-brand-green/5 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4 group-hover:bg-brand-green/15 transition-colors">
                    <trend.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-base font-bold text-brand-black mb-1.5">
                    {trend.title}
                  </h3>
                  <p className="text-sm text-brand-gray leading-relaxed">
                    {trend.desc}
                  </p>
                </div>
              </AnimDiv>
            ))}
          </div>

          <AnimDiv delay={600}>
            <div className="mt-12 text-center">
              <p className="text-sm text-brand-gray-dark max-w-2xl mx-auto leading-relaxed">
                MetaHire is designed to be at the forefront of these shifts —
                helping organizations adapt to modern hiring practices while
                keeping the human element at the center of every decision.
              </p>
            </div>
          </AnimDiv>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 08 — CTA
      ═══════════════════════════════════════════════════════════════ */}
      <CTASection
        heading="Let's Build the Future of Hiring Together"
        description="Whether you're looking to streamline your recruitment process or explore how MetaHire can help your team, we'd love to hear from you."
        primaryLabel="Talk to MetaHire"
        primaryTo="/contact"
      />
    </main>
  )
}
