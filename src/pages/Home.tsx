import { useInView } from '@/hooks/useInView'
import { SEO } from '@/seo/SEO';
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import { EcosystemSection } from '@/components/sections/home/EcosystemSection'
import {
  Search,
  BarChart3,
  MessageSquare,
  UserCheck,
  Briefcase,
  Users,
  Database,
  ClipboardCheck,
  Calendar,
  FileCheck,
  PieChart,
  Brain,
  Target,
  Workflow,
  Activity,
  FileText,
  Bell,
  Shield,
  Lock,
  Eye,
  Server,
  Layers,
  Zap,
  Heart,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
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
      className={`${className} transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const workflowSteps = [
  { icon: Briefcase, label: 'Create Job', desc: 'Define the role' },
  { icon: Search, label: 'Find Candidates', desc: 'Source talent' },
  { icon: ClipboardCheck, label: 'Screen', desc: 'Review applicants' },
  { icon: Users, label: 'Shortlist', desc: 'Narrow the field' },
  { icon: Calendar, label: 'Interview', desc: 'Meet candidates' },
  { icon: BarChart3, label: 'Evaluate', desc: 'Compare & decide' },
  { icon: FileCheck, label: 'Offer', desc: 'Extend offer' },
  { icon: UserCheck, label: 'Hire', desc: 'Welcome aboard' },
]

const platformFeatures = [
  {
    icon: Briefcase,
    num: '01',
    title: 'Job Management',
    desc: 'Create, publish, and manage job postings across your organization with structured workflows.',
  },
  {
    icon: Users,
    num: '02',
    title: 'Candidate Management',
    desc: 'Track every candidate through your pipeline with complete profiles and communication history.',
  },
  {
    icon: Database,
    num: '03',
    title: 'Talent Pool',
    desc: 'Build and nurture a database of qualified talent for current and future hiring needs.',
  },
  {
    icon: ClipboardCheck,
    num: '04',
    title: 'Screening',
    desc: 'Filter and assess candidates efficiently with structured screening criteria and scorecards.',
  },
  {
    icon: Calendar,
    num: '05',
    title: 'Interview Management',
    desc: 'Schedule, coordinate, and manage interviews with integrated calendar and feedback tools.',
  },
  {
    icon: BarChart3,
    num: '06',
    title: 'Candidate Evaluation',
    desc: 'Collaborate with hiring teams using structured evaluation forms and comparative analytics.',
  },
  {
    icon: FileCheck,
    num: '07',
    title: 'Offer Management',
    desc: 'Create, send, and track offer letters with digital signatures and approval workflows.',
  },
  {
    icon: PieChart,
    num: '08',
    title: 'Recruitment Analytics',
    desc: 'Gain insights into your hiring process with real-time dashboards and performance metrics.',
  },
]

const aiCapabilities = [
  {
    icon: Brain,
    title: 'Candidate Insights',
    desc: 'Surface key qualifications, experience patterns, and role-fit signals from candidate profiles.',
  },
  {
    icon: Target,
    title: 'Smart Matching',
    desc: 'Algorithmically rank candidates against job requirements to surface the best-fit profiles.',
  },
  {
    icon: Workflow,
    title: 'Automated Workflows',
    desc: 'Trigger actions, send communications, and move candidates through stages automatically.',
  },
  {
    icon: Activity,
    title: 'Hiring Intelligence',
    desc: 'Identify bottlenecks, predict hiring outcomes, and optimize your recruitment funnel.',
  },
]

const candidateCards = [
  {
    icon: FileText,
    title: 'Apply Easily',
    desc: 'Streamlined application process that respects candidate time and captures what matters.',
  },
  {
    icon: Bell,
    title: 'Stay Informed',
    desc: 'Automated status updates keep candidates engaged and informed at every stage.',
  },
  {
    icon: Calendar,
    title: 'Schedule Easily',
    desc: 'Self-service scheduling tools let candidates pick interview times that work for them.',
  },
  {
    icon: MessageSquare,
    title: 'Communicate Clearly',
    desc: 'Centralized messaging ensures consistent, timely communication throughout the process.',
  },
]

const securityFeatures = [
  {
    icon: Shield,
    title: 'Role-Based Access',
    desc: 'Control exactly who sees what with granular permissions for recruiters, hiring managers, and admins.',
  },
  {
    icon: Lock,
    title: 'Controlled Information',
    desc: 'Sensitive candidate data is compartmentalized and accessible only to authorized team members.',
  },
  {
    icon: Eye,
    title: 'Activity Visibility',
    desc: 'Complete audit trails track every action, ensuring accountability and compliance.',
  },
  {
    icon: Server,
    title: 'Secure Architecture',
    desc: 'Built on encrypted infrastructure with industry-standard security practices throughout.',
  },
]

const integrationCategories = [
  'HR Systems',
  'Email',
  'Calendar',
  'Communication',
  'Assessments',
  'Job Boards',
  'Analytics',
  'Payroll',
]

const whyCards = [
  {
    icon: Layers,
    title: 'One Platform',
    desc: 'Replace fragmented tools with a single connected system that your entire hiring team can rely on.',
  },
  {
    icon: Zap,
    title: 'Faster Hiring',
    desc: 'Reduce time-to-hire with streamlined workflows, automated tasks, and fewer context switches.',
  },
  {
    icon: Brain,
    title: 'Better Decisions',
    desc: 'Make informed hiring choices backed by structured evaluations and data-driven insights.',
  },
  {
    icon: Heart,
    title: 'Better Experience',
    desc: 'Deliver a professional, respectful experience for candidates and a frictionless one for your team.',
  },
]

const cardBg = [
  'bg-brand-green-50',
  'bg-brand-blue-light/30',
  'bg-brand-green-50',
  'bg-brand-blue-light/30',
  'bg-brand-green-50',
  'bg-brand-blue-light/30',
  'bg-brand-green-50',
  'bg-brand-blue-light/30',
]

export default function Home() {
  return (
    <>
      <SEO />
      <main className="overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 01 — HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-brand-offwhite via-brand-green-50 to-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Copy */}
            <div>
              <AnimDiv>
                <p className="text-sm font-semibold tracking-widest uppercase text-brand-green mb-4">
                  Smarter Hiring. Better Teams.
                </p>
              </AnimDiv>

              <AnimDiv delay={100}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-black leading-[1.1] tracking-tight">
                  Hire Better.{' '}
                  <span className="text-gradient">Build Stronger</span>{' '}
                  Teams.
                </h1>
              </AnimDiv>

              <AnimDiv delay={200}>
                <p className="mt-6 text-lg text-brand-gray-dark leading-relaxed max-w-xl">
                  MetaHire brings candidates, recruiters, and hiring managers
                  together on one connected platform — so every hire is faster,
                  clearer, and more confident.
                </p>
              </AnimDiv>

              <AnimDiv delay={300}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-brand-green/25 transition-all duration-200 hover:shadow-xl hover:shadow-brand-green/30"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/solutions"
                    className="inline-flex items-center gap-2 border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
                  >
                    Explore Solutions
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimDiv>
            </div>

            {/* Right — Dashboard Mockup */}
            <AnimDiv delay={400}>
              <div className="relative rounded-2xl bg-white shadow-2xl shadow-brand-green/10 border border-brand-gray-light/60 p-6 overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-green/5 rounded-full blur-2xl" />

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-sm font-bold text-brand-black">
                      Hiring Dashboard
                    </h3>
                    <p className="text-xs text-brand-gray">
                      Overview — Q4 2025
                    </p>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {[
                    { label: 'Open Positions', value: '24', color: 'text-brand-green' },
                    { label: 'Candidates', value: '1,248', color: 'text-brand-blue' },
                    { label: 'Interviews', value: '86', color: 'text-purple-600' },
                    { label: 'Offers', value: '18', color: 'text-amber-600' },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl bg-brand-offwhite p-3 text-center"
                    >
                      <p className={`text-2xl font-extrabold ${s.color}`}>
                        {s.value}
                      </p>
                      <p className="text-[11px] text-brand-gray mt-0.5">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Pipeline bars */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-brand-gray-dark mb-3">
                    Hiring Pipeline
                  </p>
                  {[
                    { label: 'Applied', pct: 100, color: 'bg-brand-green' },
                    { label: 'Screened', pct: 72, color: 'bg-brand-blue' },
                    { label: 'Interviewed', pct: 45, color: 'bg-purple-500' },
                    { label: 'Offered', pct: 18, color: 'bg-amber-500' },
                  ].map((b) => (
                    <div key={b.label} className="flex items-center gap-3 mb-2">
                      <span className="text-[11px] text-brand-gray w-16 text-right">
                        {b.label}
                      </span>
                      <div className="flex-1 h-2 rounded-full bg-brand-gray-light/50 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${b.color}`}
                          style={{ width: `${b.pct}%` }}
                        />
                      </div>
                      <span className="text-[11px] font-semibold text-brand-black w-8">
                        {b.pct}%
                      </span>
                    </div>
                  ))}
                </div>

                {/* Upcoming interviews */}
                <div>
                  <p className="text-xs font-semibold text-brand-gray-dark mb-3">
                    Upcoming Interviews
                  </p>
                  <div className="space-y-2">
                    {[
                      {
                        name: 'Sarah Chen',
                        role: 'Senior Engineer',
                        time: 'Today, 2:00 PM',
                      },
                      {
                        name: 'Marcus Johnson',
                        role: 'Product Designer',
                        time: 'Tomorrow, 10:30 AM',
                      },
                      {
                        name: 'Aisha Patel',
                        role: 'Data Analyst',
                        time: 'Wed, 3:15 PM',
                      },
                    ].map((i) => (
                      <div
                        key={i.name}
                        className="flex items-center gap-3 rounded-lg bg-brand-offwhite p-2.5"
                      >
                        <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-xs font-bold text-brand-green">
                          {i.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-brand-black truncate">
                            {i.name}
                          </p>
                          <p className="text-[11px] text-brand-gray">
                            {i.role}
                          </p>
                        </div>
                        <span className="text-[10px] text-brand-gray whitespace-nowrap">
                          {i.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimDiv>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 02 — TRUST / POSITIONING
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="The MetaHire Approach"
              heading="Hiring Shouldn't Feel Complicated"
              description="From finding the right people to making the final offer, MetaHire simplifies every step of your hiring journey."
              centered
            />
          </AnimDiv>

          {/* Animated journey */}
          <AnimDiv delay={200}>
            <div className="mt-16 relative">
              {/* Connecting line — desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-brand-green/0 via-brand-green/30 to-brand-green/0 -translate-y-1/2" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
                {[
                  {
                    icon: Search,
                    title: 'Find',
                    desc: 'Discover qualified candidates across your network and channels.',
                    color: 'bg-brand-green/10 text-brand-green',
                    arrow: '→',
                  },
                  {
                    icon: BarChart3,
                    title: 'Evaluate',
                    desc: 'Assess skills, experience, and cultural fit with structured tools.',
                    color: 'bg-brand-blue/10 text-brand-blue',
                    arrow: '→',
                  },
                  {
                    icon: MessageSquare,
                    title: 'Engage',
                    desc: 'Communicate seamlessly with candidates and your hiring team.',
                    color: 'bg-purple-100 text-purple-600',
                    arrow: '→',
                  },
                  {
                    icon: UserCheck,
                    title: 'Hire',
                    desc: 'Make confident offers and welcome your newest team members.',
                    color: 'bg-amber-100 text-amber-600',
                  },
                ].map((step) => (
                  <div key={step.title} className="relative text-center group">
                    <div
                      className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <step.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-black mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-brand-gray leading-relaxed">
                      {step.desc}
                    </p>
                    {/* Arrow between cards — desktop */}
                    {step.arrow && (
                      <span className="hidden lg:flex absolute -right-4 top-8 w-8 items-center justify-center text-brand-green/40 text-xl font-bold">
                        {step.arrow}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimDiv>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 03 — HIRING WORKFLOW
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Complete Workflow"
              heading="One Hiring Journey. One Connected Platform."
              description="Every step from posting a job to welcoming a new hire — managed in a single, connected flow."
              centered
            />
          </AnimDiv>

          <AnimDiv delay={200}>
            {/* Desktop horizontal timeline */}
            <div className="hidden lg:block mt-16">
              <div className="relative flex items-start justify-between">
                {/* Connecting line */}
                <div className="absolute top-6 left-8 right-8 h-px bg-brand-green/30" />

                {workflowSteps.map((step, idx) => (
                  <div
                    key={step.label}
                    className="relative flex flex-col items-center text-center flex-1"
                  >
                    <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-brand-green flex items-center justify-center shadow-sm mb-3">
                      <step.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <p className="text-xs font-bold text-brand-black mb-0.5">
                      {step.label}
                    </p>
                    <p className="text-[11px] text-brand-gray">{step.desc}</p>
                    {/* Step number */}
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
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-brand-green/30" />

                <div className="space-y-8">
                  {workflowSteps.map((step, idx) => (
                    <div key={step.label} className="relative flex items-start gap-4">
                      <div className="absolute -left-10 z-10 w-8 h-8 rounded-full bg-white border-2 border-brand-green flex items-center justify-center shadow-sm">
                        <step.icon className="w-4 h-4 text-brand-green" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-brand-green bg-brand-green/10 rounded-full px-2 py-0.5">
                            Step {idx + 1}
                          </span>
                        </div>
                        <p className="text-sm font-bold text-brand-black mt-1">
                          {step.label}
                        </p>
                        <p className="text-xs text-brand-gray">{step.desc}</p>
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
          SECTION 04 — CORE PLATFORM FEATURES
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Platform Features"
              heading="Everything You Need to Hire With Confidence"
              description="A full suite of hiring tools designed to work together — so nothing falls through the cracks."
              centered
            />
          </AnimDiv>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {platformFeatures.map((feat, idx) => (
              <AnimDiv key={feat.num} delay={idx * 80}>
                <div
                  className={`group relative rounded-2xl p-6 ${cardBg[idx]} border border-brand-gray-light/40 hover:border-brand-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-green/5 h-full`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center">
                      <feat.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <span className="text-xs font-bold text-brand-gray/60">
                      {feat.num}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-brand-black mb-1.5">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-brand-gray leading-relaxed mb-4">
                    {feat.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </AnimDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 05 — INTELLIGENT HIRING / AI
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue to-brand-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-brand-blue-mid/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Intelligent Hiring"
              heading="Intelligence That Helps Recruiters Move Faster"
              description="Built-in intelligence that surfaces insights, automates routine tasks, and helps you focus on the candidates that matter."
              centered
              light
            />
          </AnimDiv>

          {/* AI visual flow — desktop */}
          <AnimDiv delay={200}>
            <div className="hidden lg:flex items-center justify-center mt-16 mb-16 gap-4">
              {[
                'Job Requirements',
                'Candidate Data',
                'Intelligence Layer',
                'Relevant Candidates',
                'Hiring Decision',
              ].map((step, idx) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-sm font-semibold text-center min-w-[140px]">
                    {step}
                  </div>
                  {idx < 4 && (
                    <ChevronRight className="w-5 h-5 text-brand-green shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </AnimDiv>

          {/* Capability cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aiCapabilities.map((cap, idx) => (
              <AnimDiv key={cap.title} delay={300 + idx * 100}>
                <div className="group rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                    <cap.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </AnimDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 06 — RECRUITER EXPERIENCE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Dashboard mockup */}
            <AnimDiv>
              <div className="relative rounded-2xl bg-brand-black p-6 shadow-2xl overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl" />

                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-green/20 flex items-center justify-center">
                      <Users className="w-4 h-4 text-brand-green" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">
                        Candidate Pipeline
                      </p>
                      <p className="text-[11px] text-white/50">
                        Senior Software Engineer
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-white/40 bg-white/10 px-2 py-1 rounded-full">
                    Active
                  </span>
                </div>

                {/* Mini pipeline */}
                <div className="space-y-2 mb-5">
                  {[
                    { stage: 'Applied', count: 142, w: '100%' },
                    { stage: 'Screening', count: 89, w: '63%' },
                    { stage: 'Interview', count: 34, w: '24%' },
                    { stage: 'Offer', count: 8, w: '6%' },
                  ].map((s) => (
                    <div key={s.stage} className="flex items-center gap-3">
                      <span className="text-[11px] text-white/60 w-16">
                        {s.stage}
                      </span>
                      <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-brand-green"
                          style={{ width: s.w }}
                        />
                      </div>
                      <span className="text-[11px] font-semibold text-white/80 w-6 text-right">
                        {s.count}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tasks */}
                <div>
                  <p className="text-xs font-semibold text-white/60 mb-2">
                    Upcoming Tasks
                  </p>
                  <div className="space-y-1.5">
                    {[
                      'Review resume — Sarah Chen',
                      'Schedule screen — Marcus Johnson',
                      'Send offer — Aisha Patel',
                    ].map((t) => (
                      <div
                        key={t}
                        className="flex items-center gap-2 rounded-lg bg-white/5 p-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                        <span className="text-[11px] text-white/80">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimDiv>

            {/* Right — Copy */}
            <div>
              <AnimDiv>
                <SectionHeading
                  eyebrow="Recruiter Experience"
                  heading="Built for People Who Hire for a Living"
                  description="Everything a recruiter needs, nothing they don't. MetaHire reduces busywork so you can focus on the humans."
                />
              </AnimDiv>

              <div className="mt-8 space-y-5">
                {[
                  {
                    title: 'Spend Less Time Managing',
                    desc: 'Automated workflows handle the repetitive tasks so you can focus on meaningful candidate interactions.',
                  },
                  {
                    title: 'See Every Candidate Clearly',
                    desc: 'Structured scorecards and pipeline views give you instant clarity on where every candidate stands.',
                  },
                  {
                    title: 'Collaborate With Hiring Teams',
                    desc: 'Shared evaluations, comments, and decision tools keep everyone aligned without endless email threads.',
                  },
                  {
                    title: 'Move Faster',
                    desc: 'Streamlined scheduling, one-click communications, and smart shortcuts cut days off your hiring cycle.',
                  },
                ].map((item, idx) => (
                  <AnimDiv key={item.title} delay={100 + idx * 80}>
                    <div className="flex gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-brand-green" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-brand-black mb-0.5">
                          {item.title}
                        </h4>
                        <p className="text-sm text-brand-gray leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </AnimDiv>
                ))}
              </div>

              <AnimDiv delay={500}>
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 mt-8 text-brand-green font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Explore Recruiter Solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimDiv>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 07 — CANDIDATE EXPERIENCE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Candidate Experience"
              heading="Great Hiring Starts With a Great Candidate Experience"
              description="When candidates feel informed and respected, your employer brand strengthens — and your best hires follow."
              centered
            />
          </AnimDiv>

          {/* Cards */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {candidateCards.map((card, idx) => (
              <AnimDiv key={card.title} delay={idx * 100}>
                <div className="group rounded-2xl p-6 bg-white border border-brand-gray-light/50 hover:border-brand-green/30 hover:shadow-lg hover:shadow-brand-green/5 transition-all duration-300 h-full">
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

          {/* Candidate journey timeline */}
          <AnimDiv delay={400}>
            <div className="mt-16">
              <p className="text-center text-xs font-semibold text-brand-gray uppercase tracking-wider mb-6">
                The Candidate Journey
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
                {[
                  'Discover',
                  'Apply',
                  'Screen',
                  'Interview',
                  'Offer',
                  'Join',
                ].map((step, idx) => (
                  <div key={step} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-brand-green text-white text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </div>
                      <span className="text-xs font-semibold text-brand-black mt-2">
                        {step}
                      </span>
                    </div>
                    {idx < 5 && (
                      <div className="hidden sm:block w-12 h-px bg-brand-green/30 mx-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimDiv>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 08 — HIRING ANALYTICS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Recruitment Analytics"
              heading="Turn Recruitment Data Into Better Decisions"
              description="Real-time dashboards and performance metrics give you the visibility to optimize every stage of your hiring process."
              centered
            />
          </AnimDiv>

          {/* Analytics dashboard mockup */}
          <AnimDiv delay={200}>
            <div className="mt-16 rounded-2xl bg-white border border-brand-gray-light/60 shadow-2xl shadow-brand-green/5 p-6 lg:p-8 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-brand-black">
                  Recruitment Analytics — Demo
                </h3>
                <span className="text-[11px] text-brand-gray bg-brand-offwhite px-3 py-1 rounded-full">
                  Mock Data
                </span>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Hiring funnel */}
                <div className="lg:col-span-2 rounded-xl bg-brand-offwhite p-5">
                  <p className="text-xs font-semibold text-brand-gray-dark mb-4">
                    Hiring Funnel
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: 'Applications', count: 1248, w: '100%', color: 'bg-brand-green' },
                      { label: 'Screened', count: 892, w: '71%', color: 'bg-brand-green/80' },
                      { label: 'Phone Interview', count: 342, w: '27%', color: 'bg-brand-blue' },
                      { label: 'On-site', count: 128, w: '10%', color: 'bg-brand-blue-mid' },
                      { label: 'Offers Extended', count: 42, w: '3.4%', color: 'bg-purple-500' },
                      { label: 'Hired', count: 31, w: '2.5%', color: 'bg-amber-500' },
                    ].map((bar) => (
                      <div key={bar.label} className="flex items-center gap-3">
                        <span className="text-[11px] text-brand-gray w-28 text-right shrink-0">
                          {bar.label}
                        </span>
                        <div className="flex-1 h-3 rounded-full bg-white overflow-hidden">
                          <div
                            className={`h-full rounded-full ${bar.color}`}
                            style={{ width: bar.w }}
                          />
                        </div>
                        <span className="text-xs font-bold text-brand-black w-10 text-right">
                          {bar.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Side metrics */}
                <div className="space-y-5">
                  {/* Time to hire */}
                  <div className="rounded-xl bg-brand-offwhite p-5">
                    <p className="text-xs font-semibold text-brand-gray-dark mb-2">
                      Avg. Time to Hire
                    </p>
                    <p className="text-3xl font-extrabold text-brand-green">
                      23
                      <span className="text-lg font-bold text-brand-gray ml-1">
                        days
                      </span>
                    </p>
                    <p className="text-[11px] text-brand-gray mt-1">
                      Down from 31 days last quarter
                    </p>
                  </div>

                  {/* Source breakdown */}
                  <div className="rounded-xl bg-brand-offwhite p-5">
                    <p className="text-xs font-semibold text-brand-gray-dark mb-3">
                      Candidate Sources
                    </p>
                    <div className="space-y-2">
                      {[
                        { label: 'Direct Apply', pct: 38, color: 'bg-brand-green' },
                        { label: 'Referrals', pct: 27, color: 'bg-brand-blue' },
                        { label: 'Job Boards', pct: 22, color: 'bg-purple-500' },
                        { label: 'LinkedIn', pct: 13, color: 'bg-amber-500' },
                      ].map((s) => (
                        <div key={s.label} className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${s.color}`} />
                          <span className="text-[11px] text-brand-gray flex-1">
                            {s.label}
                          </span>
                          <span className="text-[11px] font-semibold text-brand-black">
                            {s.pct}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Open roles list */}
              <div className="mt-6 rounded-xl bg-brand-offwhite p-5">
                <p className="text-xs font-semibold text-brand-gray-dark mb-3">
                  Open Roles
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { title: 'Senior Software Engineer', dept: 'Engineering', applicants: 89 },
                    { title: 'Product Designer', dept: 'Design', applicants: 64 },
                    { title: 'Data Analyst', dept: 'Analytics', applicants: 112 },
                    { title: 'Marketing Manager', dept: 'Marketing', applicants: 47 },
                    { title: 'Sales Representative', dept: 'Sales', applicants: 73 },
                    { title: 'HR Coordinator', dept: 'People Ops', applicants: 56 },
                  ].map((r) => (
                    <div
                      key={r.title}
                      className="flex items-center gap-3 rounded-lg bg-white p-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-brand-green" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-brand-black truncate">
                          {r.title}
                        </p>
                        <p className="text-[10px] text-brand-gray">
                          {r.dept} · {r.applicants} applicants
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimDiv>

          {/* Insight cards */}
          <div className="mt-12 grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: PieChart,
                title: 'Pipeline Visibility',
                desc: 'See exactly where every candidate stands across all open positions at a glance.',
              },
              {
                icon: BarChart3,
                title: 'Hiring Performance',
                desc: 'Track recruiter productivity, time-to-hire, and conversion rates across your team.',
              },
              {
                icon: Activity,
                title: 'Data-Driven Decisions',
                desc: 'Use historical trends and real-time data to continuously improve your hiring strategy.',
              },
            ].map((insight, idx) => (
              <AnimDiv key={insight.title} delay={idx * 100}>
                <div className="rounded-2xl p-6 bg-brand-offwhite border border-brand-gray-light/40 h-full">
                  <insight.icon className="w-8 h-8 text-brand-green mb-3" />
                  <h3 className="text-base font-bold text-brand-black mb-1.5">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-brand-gray leading-relaxed">
                    {insight.desc}
                  </p>
                </div>
              </AnimDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 09 — SECURITY & TRUST
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-black to-brand-blue text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Security & Trust"
              heading="Built for Sensitive Hiring Data"
              description="Hiring data is deeply personal. MetaHire is built from the ground up to protect candidate information and ensure proper access controls."
              centered
              light
            />
          </AnimDiv>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {securityFeatures.map((feat, idx) => (
              <AnimDiv key={feat.title} delay={idx * 100}>
                <div className="group rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                    <feat.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </AnimDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 10 — INTEGRATIONS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Integrations"
              heading="Connect Your Hiring Ecosystem"
              description="MetaHire fits into your existing stack. Connect with the tools your team already uses."
              centered
            />
          </AnimDiv>

          <AnimDiv delay={200}>
            <div className="mt-16 relative">
              {/* Desktop: central hub + radiating cards */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-3xl h-[420px]">
                  {/* Center hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-dark text-white flex flex-col items-center justify-center shadow-xl shadow-brand-green/20">
                      <Layers className="w-6 h-6 mb-1" />
                      <span className="text-xs font-bold">MetaHire</span>
                    </div>
                  </div>

                  {/* Connecting lines via SVG */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 768 420">
                    {integrationCategories.map((_, idx) => {
                      const angle = (idx / integrationCategories.length) * 2 * Math.PI - Math.PI / 2
                      const rx = 300
                      const ry = 160
                      const cx = 384 + Math.cos(angle) * rx
                      const cy = 210 + Math.sin(angle) * ry
                      return (
                        <line
                          key={idx}
                          x1="384"
                          y1="210"
                          x2={cx}
                          y2={cy}
                          stroke="rgba(34,197,94,0.2)"
                          strokeWidth="2"
                          strokeDasharray="6 4"
                        />
                      )
                    })}
                  </svg>

                  {/* Radiating cards */}
                  {integrationCategories.map((cat, idx) => {
                    const angle = (idx / integrationCategories.length) * 2 * Math.PI - Math.PI / 2
                    const rx = 300
                    const ry = 160
                    const x = 50 + (Math.cos(angle) * rx / 768) * 100
                    const y = 50 + (Math.sin(angle) * ry / 420) * 100
                    return (
                      <div
                        key={cat}
                        className="absolute z-10"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                      >
                        <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-md border border-brand-gray-light/60 hover:border-brand-green/40 hover:shadow-lg transition-all duration-300">
                          <div className="w-2 h-2 rounded-full bg-brand-green" />
                          <span className="text-sm font-semibold text-brand-blue whitespace-nowrap">
                            {cat}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Mobile: 2-column grid */}
              <div className="lg:hidden grid grid-cols-2 gap-3">
                {integrationCategories.map((cat) => (
                  <div
                    key={cat}
                    className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-sm border border-brand-gray-light/60"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-green shrink-0" />
                    <span className="text-sm font-semibold text-brand-blue">{cat}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimDiv>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 11 — WHY METAHIRE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Why MetaHire"
              heading="Why Teams Choose a Connected Hiring Platform"
              description="The difference between scattered tools and a connected platform isn't just efficiency — it's confidence."
              centered
            />
          </AnimDiv>

          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            {whyCards.map((card, idx) => (
              <AnimDiv key={card.title} delay={idx * 100}>
                <div className="group relative rounded-2xl p-8 bg-brand-offwhite border border-brand-gray-light/40 hover:border-brand-green/30 hover:shadow-xl hover:shadow-brand-green/5 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-5 group-hover:bg-brand-green/15 transition-colors">
                    <card.icon className="w-7 h-7 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-2">
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

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 12 — META ECOSYSTEM
      ═══════════════════════════════════════════════════════════════ */}
      <EcosystemSection />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 13 — FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <CTASection
        heading="Your Next Great Hire Starts Here."
        description="Build a smarter hiring experience — one that works for recruiters, hiring managers, and candidates alike. Start with MetaHire today."
        primaryLabel="Get Started"
        primaryTo="/contact"
        secondaryLabel="See How It Works"
        secondaryTo="/solutions"
      />
    </main>
    </>
  )
}
