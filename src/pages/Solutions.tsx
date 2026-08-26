import { useInView } from '@/hooks/useInView'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import {
  Briefcase,
  Users,
  Database,
  ClipboardCheck,
  Calendar,
  BarChart3,
  FileCheck,
  Search,
  Filter,
  UserCheck,
  Star,
  MessageSquare,
  FileText,
  Send,
  Clock,
  History,
  Mail,
  CheckCircle2,
  ArrowRight,
  Zap,
  Bell,
  Workflow,
  Shield,
  Lock,
  Eye,
  Server,
  Layers,
  GitBranch,
  GitMerge,
  Flag,
  Bookmark,
  Activity,
  Award,
  MoveRight,
  Handshake,
  FileOutput,
  FileInput,
  UserPlus,
  CheckSquare,
  ListTodo,
  ClipboardList,
  Repeat,
  RefreshCw,
  Settings,
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

/* ─── data ─────────────────────────────────────────────────────────────── */

const recruitmentFeatures = [
  { icon: Briefcase, label: 'Job Creation' },
  { icon: Send, label: 'Job Publishing' },
  { icon: GitBranch, label: 'Recruitment Pipelines' },
  { icon: Users, label: 'Candidate Tracking' },
  { icon: Flag, label: 'Hiring Stages' },
  { icon: Workflow, label: 'Recruitment Workflows' },
  { icon: MessageSquare, label: 'Team Collaboration' },
]

const talentFeatures = [
  {
    icon: Search,
    title: 'Candidate Discovery',
    desc: 'Surface the right candidates using intelligent search across your entire talent database.',
  },
  {
    icon: Database,
    title: 'Talent Pools',
    desc: 'Build, tag, and nurture curated groups of candidates for current and future roles.',
  },
  {
    icon: UserCheck,
    title: 'Candidate Profiles',
    desc: 'Complete profiles with resumes, history, notes, and status — all in one place.',
  },
  {
    icon: Activity,
    title: 'Source Tracking',
    desc: 'Know exactly where your best candidates come from with full source attribution.',
  },
  {
    icon: Filter,
    title: 'Search & Filtering',
    desc: 'Powerful filters to narrow down candidates by skills, experience, location, and more.',
  },
]

const screeningFeatures = [
  { icon: FileText, label: 'Resume Review' },
  { icon: ClipboardCheck, label: 'Candidate Screening' },
  { icon: Settings, label: 'Custom Screening Stages' },
  { icon: Star, label: 'Shortlisting' },
  { icon: Award, label: 'Candidate Scoring' },
  { icon: Bookmark, label: 'Recruiter Notes' },
  { icon: ListTodo, label: 'Screening Workflows' },
]

const interviewFeatures = [
  { icon: Calendar, label: 'Interview Scheduling' },
  { icon: Users, label: 'Interview Panels' },
  { icon: ClipboardList, label: 'Interview Feedback' },
  { icon: History, label: 'Interview History' },
  { icon: Mail, label: 'Candidate Communication' },
]

const collabFeatures = [
  'Shared Candidate Pipeline',
  'Internal Comments',
  'Feedback Collection',
  'Approval Workflows',
  'Hiring Decisions',
  'Role-Based Access',
]

const onboardingTimeline = [
  { label: 'Selected', icon: CheckCircle2, color: 'bg-brand-green' },
  { label: 'Offer', icon: FileText, color: 'bg-brand-blue-mid' },
  { label: 'Acceptance', icon: Handshake, color: 'bg-brand-green' },
  { label: 'Documentation', icon: FileOutput, color: 'bg-brand-blue-mid' },
  { label: 'Onboarding', icon: UserPlus, color: 'bg-brand-green' },
]

const onboardingFeatures = [
  { icon: FileCheck, label: 'Offer Management' },
  { icon: CheckCircle2, label: 'Candidate Status' },
  { icon: FileInput, label: 'Document Collection' },
  { icon: ClipboardList, label: 'Joining Workflow' },
  { icon: Users, label: 'Handover to HR' },
]

const analyticsMetrics = [
  { label: 'Time-to-Hire', value: '18 days', change: '-12%', up: false },
  { label: 'Open Positions', value: '24', change: '+3', up: true },
  { label: 'Interview Activity', value: '86 this week', change: '+18%', up: true },
  { label: 'Candidate Conversion', value: '34%', change: '+5%', up: true },
]

const analyticsCharts = [
  { label: 'Hiring Funnel', values: [120, 84, 52, 31, 18] },
  { label: 'Source Performance', values: [42, 31, 18, 9] },
  { label: 'Recruitment Workload', values: [8, 6, 5, 7, 4, 3] },
]

const automationFeatures = [
  { icon: Bell, label: 'Automated Notifications', desc: 'Keep candidates and teams informed without manual effort.' },
  { icon: Zap, label: 'Workflow Triggers', desc: 'Launch actions automatically when candidates move stages.' },
  { icon: Clock, label: 'Interview Reminders', desc: 'Ensure nobody misses an interview with smart reminders.' },
  { icon: RefreshCw, label: 'Candidate Status Updates', desc: 'Automatically update statuses as candidates progress.' },
  { icon: Repeat, label: 'Task Automation', desc: 'Eliminate repetitive recruitment tasks from your workflow.' },
  { icon: CheckSquare, label: 'Approval Workflows', desc: 'Route offers and decisions through structured approval chains.' },
]

const securityFeatures = [
  { icon: Shield, label: 'Role-Based Access', desc: 'Define exactly who can view, edit, or approve across the platform.' },
  { icon: Lock, label: 'Permission Controls', desc: 'Granular permissions that match your organizational structure.' },
  { icon: Eye, label: 'Activity Tracking', desc: 'Full visibility into every action taken within the system.' },
  { icon: Server, label: 'Secure Candidate Data', desc: 'Candidate information is encrypted and access-controlled.' },
  { icon: GitMerge, label: 'Controlled Workflows', desc: 'Ensure processes are followed with enforced workflow steps.' },
  { icon: Layers, label: 'Audit Visibility', desc: 'Complete audit trails for compliance and governance.' },
]

const integrationCategories = [
  { label: 'Job Boards', icon: Briefcase },
  { label: 'Email', icon: Mail },
  { label: 'Calendar', icon: Calendar },
  { label: 'HR Systems', icon: Users },
  { label: 'Assessments', icon: ClipboardCheck },
  { label: 'Communication', icon: MessageSquare },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Payroll', icon: FileText },
]

/* ─── Page ─────────────────────────────────────────────────────────────── */

export default function Solutions() {
  return (
    <main className="overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 01 — HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-brand-offwhite via-brand-green-50 to-white pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimDiv>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-green mb-4">
              Platform Overview
            </p>
          </AnimDiv>

          <AnimDiv delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-black leading-[1.1] tracking-tight max-w-5xl mx-auto">
              Everything You Need to Build a{' '}
              <span className="text-gradient">Better Hiring Process</span>
            </h1>
          </AnimDiv>

          <AnimDiv delay={200}>
            <p className="mt-6 text-lg text-brand-gray-dark leading-relaxed max-w-2xl mx-auto">
              From job creation to final selection, MetaHire connects every
              stage of recruitment into one intelligent experience.
            </p>
          </AnimDiv>

          <AnimDiv delay={300}>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-brand-green/25 transition-all duration-200 hover:shadow-xl hover:shadow-brand-green/30 text-lg"
              >
                Explore the Platform
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimDiv>

          {/* Mini pipeline preview */}
          <AnimDiv delay={400}>
            <div className="mt-16 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                {['Create', 'Source', 'Screen', 'Interview', 'Offer', 'Hire'].map(
                  (step, i) => (
                    <div key={step} className="flex items-center gap-2 sm:gap-3">
                      <div className="px-4 py-2 rounded-full bg-white border border-brand-gray-light/60 shadow-sm text-sm font-medium text-brand-blue">
                        {step}
                      </div>
                      {i < 5 && (
                        <MoveRight className="w-4 h-4 text-brand-green hidden sm:block" />
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </AnimDiv>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 02 — RECRUITMENT MANAGEMENT
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <AnimDiv>
                <SectionHeading
                  eyebrow="Recruitment Management"
                  heading="Recruitment Management"
                  description="Manage every aspect of your recruitment from a single command center. From creating roles to closing hires, nothing falls through the cracks."
                  centered={false}
                />
              </AnimDiv>

              <AnimDiv delay={100}>
                <div className="mt-10 grid grid-cols-2 gap-3">
                  {recruitmentFeatures.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-center gap-3 p-3 rounded-xl bg-brand-green-50/60"
                    >
                      <f.icon className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-sm font-medium text-brand-blue">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimDiv>
            </div>

            {/* Dashboard mockup */}
            <AnimDiv delay={200}>
              <div className="relative rounded-2xl bg-brand-blue shadow-2xl shadow-brand-blue/20 p-6 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-green/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-white font-semibold text-sm">
                      Recruitment Pipeline
                    </h4>
                    <span className="text-brand-green text-xs font-medium bg-brand-green/10 px-3 py-1 rounded-full">
                      12 Active Jobs
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { stage: 'Applied', count: 248, width: '100%' },
                      { stage: 'Screening', count: 142, width: '57%' },
                      { stage: 'Interview', count: 64, width: '26%' },
                      { stage: 'Offer', count: 18, width: '7%' },
                      { stage: 'Hired', count: 12, width: '5%' },
                    ].map((s) => (
                      <div key={s.stage}>
                        <div className="flex items-center justify-between text-xs text-brand-gray mb-1">
                          <span>{s.stage}</span>
                          <span className="text-white font-medium">{s.count}</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-brand-green rounded-full transition-all duration-1000"
                            style={{ width: s.width }}
                          />
                        </div>
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
          SECTION 03 — TALENT ACQUISITION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Talent Acquisition"
              heading="Find the Right Talent"
              description="Discover, attract, and organize the candidates who will drive your organization forward."
            />
          </AnimDiv>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {talentFeatures.map((f, i) => (
              <AnimDiv key={f.title} delay={i * 80}>
                <div className="group relative bg-white rounded-2xl p-6 border border-brand-gray-light/40 hover:border-brand-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-green/5 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-green-50 flex items-center justify-center mb-4 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                    <f.icon className="w-6 h-6 text-brand-green group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-blue mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-brand-gray-dark leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </AnimDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 04 — SCREENING & SHORTLISTING
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Candidate comparison mockup */}
            <AnimDiv>
              <div className="relative rounded-2xl bg-white shadow-2xl border border-brand-gray-light/60 p-6 overflow-hidden order-2 lg:order-1">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-brand-blue font-semibold text-sm">
                      Candidate Comparison
                    </h4>
                    <span className="text-brand-green text-xs font-medium bg-brand-green-50 px-3 py-1 rounded-full">
                      3 Candidates
                    </span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: 'Sarah Chen', score: 92, status: 'Recommended' },
                      { name: 'James Patel', score: 87, status: 'Strong Fit' },
                      { name: 'Maria Santos', score: 79, status: 'Review' },
                    ].map((c) => (
                      <div
                        key={c.name}
                        className="flex items-center gap-4 p-3 rounded-xl bg-brand-green-50/40 border border-brand-green/10"
                      >
                        <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-sm flex-shrink-0">
                          {c.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-brand-blue truncate">
                              {c.name}
                            </span>
                            <span className="text-xs font-bold text-brand-green">
                              {c.score}%
                            </span>
                          </div>
                          <div className="mt-1 h-1.5 bg-brand-gray-light/40 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-brand-green rounded-full"
                              style={{ width: `${c.score}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-xs text-brand-gray-dark bg-white px-2 py-1 rounded-full border border-brand-gray-light/40 flex-shrink-0">
                          {c.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimDiv>

            <div className="order-1 lg:order-2">
              <AnimDiv>
                <SectionHeading
                  eyebrow="Screening & Shortlisting"
                  heading="Screen With Structure"
                  description="Replace subjective screening with structured evaluations. Score, compare, and shortlist candidates consistently."
                  centered={false}
                />
              </AnimDiv>

              <AnimDiv delay={100}>
                <div className="mt-10 flex flex-wrap gap-3">
                  {screeningFeatures.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-brand-blue-light/20 border border-brand-blue/10"
                    >
                      <f.icon className="w-4 h-4 text-brand-blue-mid" />
                      <span className="text-sm font-medium text-brand-blue">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimDiv>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 05 — INTERVIEW MANAGEMENT
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <AnimDiv>
                <SectionHeading
                  eyebrow="Interview Management"
                  heading="Make Interviews Easier"
                  description="Coordinate interviews, collect structured feedback, and keep every candidate's journey on track."
                  centered={false}
                />
              </AnimDiv>

              <AnimDiv delay={100}>
                <div className="mt-10 space-y-3">
                  {interviewFeatures.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white border border-brand-gray-light/40 hover:border-brand-green/30 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-green-50 flex items-center justify-center flex-shrink-0">
                        <f.icon className="w-5 h-5 text-brand-green" />
                      </div>
                      <span className="text-sm font-medium text-brand-blue">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimDiv>
            </div>

            {/* Interview dashboard mockup */}
            <AnimDiv delay={200}>
              <div className="relative rounded-2xl bg-white shadow-2xl border border-brand-gray-light/60 p-6 overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-green/5 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-brand-blue font-semibold text-sm">
                      Today's Interviews
                    </h4>
                    <span className="text-brand-green text-xs font-medium bg-brand-green-50 px-3 py-1 rounded-full">
                      5 Scheduled
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      {
                        time: '09:00',
                        candidate: 'Alex Kim',
                        role: 'Senior Engineer',
                        panel: '3 members',
                      },
                      {
                        time: '10:30',
                        candidate: 'Priya Sharma',
                        role: 'Product Manager',
                        panel: '2 members',
                      },
                      {
                        time: '13:00',
                        candidate: 'David Okafor',
                        role: 'UX Designer',
                        panel: '4 members',
                      },
                      {
                        time: '14:30',
                        candidate: 'Emma Liu',
                        role: 'Data Analyst',
                        panel: '2 members',
                      },
                      {
                        time: '16:00',
                        candidate: 'Carlos Mendez',
                        role: 'DevOps Engineer',
                        panel: '3 members',
                      },
                    ].map((interview) => (
                      <div
                        key={interview.candidate}
                        className="flex items-center gap-4 p-3 rounded-xl border border-brand-gray-light/30 hover:border-brand-green/20 transition-colors"
                      >
                        <div className="w-14 text-center flex-shrink-0">
                          <span className="text-xs text-brand-gray-dark">
                            {interview.time}
                          </span>
                        </div>
                        <div className="w-px h-8 bg-brand-gray-light/60 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-brand-blue truncate">
                            {interview.candidate}
                          </p>
                          <p className="text-xs text-brand-gray-dark">
                            {interview.role}
                          </p>
                        </div>
                        <span className="text-xs text-brand-gray bg-brand-gray-light/30 px-2 py-1 rounded-full flex-shrink-0">
                          {interview.panel}
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
          SECTION 06 — COLLABORATIVE HIRING
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue to-brand-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-brand-blue-mid/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Collaborative Hiring"
              heading="Hiring Is a Team Sport"
              description="Bring recruiters, hiring managers, and stakeholders together on one platform with shared visibility and structured collaboration."
              light
            />
          </AnimDiv>

          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            {/* Collaboration visual */}
            <AnimDiv delay={100}>
              <div className="relative">
                {/* Dashboard-style collaboration card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center">
                      <Users className="w-4 h-4 text-brand-green" />
                    </div>
                    <span className="text-sm font-semibold text-white">Collaborative Pipeline</span>
                  </div>

                  {/* Pipeline stages */}
                  <div className="space-y-3">
                    {[
                      { stage: 'Applied', count: 124, color: 'bg-blue-500' },
                      { stage: 'Screening', count: 86, color: 'bg-purple-500' },
                      { stage: 'Interview', count: 42, color: 'bg-amber-500' },
                      { stage: 'Final Review', count: 18, color: 'bg-brand-green' },
                    ].map((s) => (
                      <div key={s.stage} className="flex items-center gap-3">
                        <span className="text-xs text-white/60 w-24 shrink-0">{s.stage}</span>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${s.color} rounded-full`}
                            style={{ width: `${(s.count / 124) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs text-white/60 w-8 text-right">{s.count}</span>
                      </div>
                    ))}
                  </div>

                  {/* Team members collaborating */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-white/50 mb-3">Active Team Members</p>
                    <div className="flex items-center gap-3">
                      {/* Recruiter */}
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-green/15 border border-brand-green/30">
                        <Briefcase className="w-4 h-4 text-brand-green" />
                        <span className="text-xs font-medium text-brand-green">Recruiter</span>
                      </div>
                      {/* Arrow */}
                      <svg className="w-6 h-4 text-white/30" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M0 8h20M16 2l6 6-6 6" />
                      </svg>
                      {/* Candidate */}
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/15 border border-blue-500/30">
                        <UserCheck className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-medium text-blue-400">Candidate</span>
                      </div>
                      {/* Arrow */}
                      <svg className="w-6 h-4 text-white/30" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M0 8h20M16 2l6 6-6 6" />
                      </svg>
                      {/* Hiring Manager */}
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500/15 border border-amber-500/30">
                        <Users className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-medium text-amber-400">Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimDiv>

            {/* Features */}
            <AnimDiv delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {collabFeatures.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <span className="text-sm font-medium text-white/90">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </AnimDiv>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 07 — OFFER & ONBOARDING
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Offer & Onboarding"
              heading="From Offer to New Hire"
              description="Manage the final stretch of your hiring journey — from extending offers to welcoming new team members."
            />
          </AnimDiv>

          {/* Timeline */}
          <AnimDiv delay={100}>
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="flex items-center justify-between relative">
                {/* Connecting line */}
                <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-brand-gray-light/60" />
                {onboardingTimeline.map((step, i) => (
                  <div key={step.label} className="relative flex flex-col items-center z-10">
                    <div
                      className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="mt-3 text-xs sm:text-sm font-medium text-brand-blue text-center">
                      {step.label}
                    </span>
                    {i < onboardingTimeline.length - 1 && (
                      <MoveRight className="absolute top-5 -right-4 sm:-right-6 w-4 h-4 text-brand-gray-dark hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimDiv>

          {/* Features */}
          <AnimDiv delay={200}>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {onboardingFeatures.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col items-center text-center p-5 rounded-2xl bg-brand-green-50/50 border border-brand-green/10"
                >
                  <f.icon className="w-6 h-6 text-brand-green mb-3" />
                  <span className="text-sm font-medium text-brand-blue">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimDiv>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 08 — ANALYTICS & INSIGHTS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Analytics & Insights"
              heading="See What Your Hiring Data Is Telling You"
              description="Real-time dashboards that surface the metrics that matter — so you can optimize every stage of your funnel."
            />
          </AnimDiv>

          {/* Metric cards */}
          <AnimDiv delay={100}>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {analyticsMetrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-white rounded-2xl p-5 border border-brand-gray-light/40 shadow-sm"
                >
                  <p className="text-xs font-medium text-brand-gray-dark uppercase tracking-wider">
                    {m.label}
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-brand-blue">
                    {m.value}
                  </p>
                  <p
                    className={`mt-1 text-sm font-medium ${
                      m.up ? 'text-brand-green' : 'text-brand-green'
                    }`}
                  >
                    {m.change}
                  </p>
                </div>
              ))}
            </div>
          </AnimDiv>

          {/* Charts mockup */}
          <AnimDiv delay={200}>
            <div className="mt-8 grid lg:grid-cols-3 gap-6">
              {analyticsCharts.map((chart) => (
                <div
                  key={chart.label}
                  className="bg-white rounded-2xl p-6 border border-brand-gray-light/40 shadow-sm"
                >
                  <h4 className="text-sm font-semibold text-brand-blue mb-4">
                    {chart.label}
                  </h4>
                  <div className="flex items-end gap-3 h-36">
                    {chart.values.map((v, i) => {
                      const max = Math.max(...chart.values)
                      const pct = (v / max) * 100
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                          <div className="w-full rounded-t-md bg-gradient-to-t from-brand-green to-brand-green-light" style={{ height: `${pct}%` }} />
                          <span className="text-[10px] text-brand-gray-dark mt-1">{v}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </AnimDiv>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 09 — AUTOMATION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <AnimDiv>
                <SectionHeading
                  eyebrow="Automation"
                  heading="Automate the Work. Focus on the People."
                  description="Let MetaHire handle the repetitive tasks so your team can spend time on what matters — building relationships with candidates."
                  centered={false}
                />
              </AnimDiv>

              <AnimDiv delay={100}>
                <div className="mt-10 space-y-4">
                  {automationFeatures.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-green-50/40 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-green-50 flex items-center justify-center flex-shrink-0">
                        <f.icon className="w-5 h-5 text-brand-green" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand-blue">
                          {f.label}
                        </p>
                        <p className="text-xs text-brand-gray-dark mt-0.5">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimDiv>
            </div>

            {/* Animated workflow visual */}
            <AnimDiv delay={200}>
              <div className="relative rounded-2xl bg-gradient-to-br from-brand-green-50 to-brand-blue-light/20 border border-brand-green/10 p-8 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl" />
                <div className="relative space-y-4">
                  {[
                    { trigger: 'Candidate applies', action: 'Auto-acknowledge email sent' },
                    { trigger: 'Resume matches criteria', action: 'Moved to screening' },
                    { trigger: 'Screening score > 80', action: 'Shortlisted automatically' },
                    { trigger: 'Interview completed', action: 'Feedback form triggered' },
                    { trigger: 'All feedback received', action: 'Decision routed to manager' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-1 bg-white rounded-xl p-3 border border-brand-gray-light/40 shadow-sm">
                        <p className="text-xs text-brand-gray-dark">
                          {step.trigger}
                        </p>
                      </div>
                      <MoveRight className="w-4 h-4 text-brand-green flex-shrink-0" />
                      <div className="flex-1 bg-brand-green/5 rounded-xl p-3 border border-brand-green/10">
                        <p className="text-xs text-brand-green font-medium">
                          {step.action}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimDiv>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 10 — SECURITY & ACCESS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Security & Access"
              heading="Secure by Design"
              description="Your hiring data deserves protection. MetaHire gives you control over who sees what, with full visibility into system activity."
            />
          </AnimDiv>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((f, i) => (
              <AnimDiv key={f.label} delay={i * 80}>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-brand-gray-light/40 h-full">
                  <div className="w-11 h-11 rounded-xl bg-brand-blue-light/20 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-brand-blue-mid" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-blue">
                      {f.label}
                    </h3>
                    <p className="mt-1 text-xs text-brand-gray-dark leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </AnimDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 11 — INTEGRATIONS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Integrations"
              heading="Connect MetaHire With the Tools You Already Use"
              description="MetaHire plays well with the tools your team already relies on — so nothing feels disconnected."
            />
          </AnimDiv>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {integrationCategories.map((cat, i) => (
              <AnimDiv key={cat.label} delay={i * 60}>
                <div className="group relative flex flex-col items-center gap-3 p-6 rounded-2xl bg-brand-offwhite border border-brand-gray-light/40 hover:border-brand-green/30 hover:bg-brand-green-50/30 transition-all duration-300 cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-brand-gray-light/40 flex items-center justify-center group-hover:border-brand-green/30 transition-colors shadow-sm">
                    <cat.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-green transition-colors" />
                  </div>
                  <span className="text-sm font-semibold text-brand-blue text-center">
                    {cat.label}
                  </span>
                </div>
              </AnimDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 12 — FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <CTASection
        heading="Ready to Rethink Hiring?"
        description="Join MetaHire and experience a recruitment platform built for how your team actually works."
        primaryLabel="Get Started"
        primaryTo="/contact"
        secondaryLabel="Explore the Platform"
        secondaryTo="/solutions"
        dark
      />
    </main>
  )
}
