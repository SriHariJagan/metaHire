import type { LucideIcon } from 'lucide-react'
import {
  Megaphone,
  BadgeCheck,
  Receipt,
  UserPlus,
  Workflow,
  Package,
  CreditCard,
  HeartPulse,
  GraduationCap,
  Leaf,
  Navigation,
} from 'lucide-react'

export interface EcosystemProduct {
  id: string
  name: string
  subtitle: string
  description: string
  benefitForMetaHire: string
  icon: LucideIcon
  href: string
  accent: string // hex color
  external: boolean
}

const PRODUCT_ICONS: Record<string, LucideIcon> = {
  metahealth: HeartPulse,
  metaedu: GraduationCap,
  metagreen: Leaf,
  metaflow: Workflow,
  metahire: UserPlus,
  metacheck: BadgeCheck,
  metaads: Megaphone,
  metanav: Navigation,
  metaledger: Receipt,
  metacard: CreditCard,
  metaim: Package,
}

const ACCENTS: Record<string, string> = {
  metahealth: '#14B8A6',
  metaedu: '#0066FF',
  metagreen: '#10B981',
  metaflow: '#8B5CF6',
  metahire: '#0066FF',
  metacheck: '#F59E0B',
  metaads: '#8B5CF6',
  metanav: '#F97316',
  metaledger: '#10B981',
  metacard: '#6366F1',
  metaim: '#06B6D4',
}

// All products — mirrors MetaDev constants/products.ts but includes benefit copy for MetaHire
export const ALL_ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
  {
    id: 'metahealth',
    name: 'MetaHealth',
    subtitle: 'Healthcare Platform',
    description: 'Hospital & clinic operating system.',
    benefitForMetaHire: 'Healthcare recruiters source credentialed staff faster by syncing verified medical roles and compliance requirements into MetaHire.',
    icon: PRODUCT_ICONS.metahealth,
    href: 'https://metahealth.metadev.io',
    accent: ACCENTS.metahealth,
    external: true,
  },
  {
    id: 'metaedu',
    name: 'MetaEdu',
    subtitle: 'EdTech Platform',
    description: 'Learning management & live classrooms.',
    benefitForMetaHire: 'Tap graduating cohorts and alumni networks across MetaEdu campuses to fill entry-level roles early.',
    icon: PRODUCT_ICONS.metaedu,
    href: 'https://metaedu.metadev.io',
    accent: ACCENTS.metaedu,
    external: true,
  },
  {
    id: 'metagreen',
    name: 'MetaGreen',
    subtitle: 'Sustainability',
    description: 'Carbon & ESG tracking.',
    benefitForMetaHire: 'Showcase verified sustainability credentials from MetaGreen to attract purpose-driven candidates.',
    icon: PRODUCT_ICONS.metagreen,
    href: 'https://metagreen.metadev.io',
    accent: ACCENTS.metagreen,
    external: true,
  },
  {
    id: 'metaflow',
    name: 'MetaFlow',
    subtitle: 'Enterprise Workflow',
    description: 'Approvals & automation.',
    benefitForMetaHire: 'Route requisition approvals, offer sign-offs and budget checks through MetaFlow — no email chains.',
    icon: PRODUCT_ICONS.metaflow,
    href: 'https://metaflow.metadev.io',
    accent: ACCENTS.metaflow,
    external: true,
  },
  {
    id: 'metahire',
    name: 'MetaHire',
    subtitle: 'Hiring & Talent',
    description: 'Talent pipeline & interviews.',
    benefitForMetaHire: 'The core: every stage of hiring, one pipeline — sourcing, screening, interviews and offers in sync.',
    icon: PRODUCT_ICONS.metahire,
    href: '/',
    accent: ACCENTS.metahire,
    external: false,
  },
  {
    id: 'metacheck',
    name: 'MetaCheck',
    subtitle: 'Verification',
    description: 'Fraud & compliance shield.',
    benefitForMetaHire: 'Run background verification on shortlisted candidates inside MetaHire — results land on the profile automatically.',
    icon: PRODUCT_ICONS.metacheck,
    href: 'https://metacheck.metadev.io',
    accent: ACCENTS.metacheck,
    external: true,
  },
  {
    id: 'metaads',
    name: 'MetaAds',
    subtitle: 'AdTech & Marketing',
    description: 'Unified campaigns, attribution and AI optimization.',
    benefitForMetaHire: 'Amplify employer branding campaigns on MetaAds to attract higher-intent applicants into your pipeline.',
    icon: PRODUCT_ICONS.metaads,
    href: 'https://metaads.metadev.io',
    accent: ACCENTS.metaads,
    external: true,
  },
  {
    id: 'metanav',
    name: 'MetaNav',
    subtitle: 'Fleet & Logistics',
    description: 'Route & fleet control.',
    benefitForMetaHire: 'Coordinate multi-location interview logistics with location intelligence synced from MetaNav.',
    icon: PRODUCT_ICONS.metanav,
    href: 'https://metanav.metadev.io',
    accent: ACCENTS.metanav,
    external: true,
  },
  {
    id: 'metaledger',
    name: 'MetaLedger',
    subtitle: 'Billing & Finance',
    description: 'Invoicing & revenue reconciliation.',
    benefitForMetaHire: 'Reconcile recruiting spend, agency invoices and offer-to-payroll handoffs through MetaLedger.',
    icon: PRODUCT_ICONS.metaledger,
    href: 'https://metaledger.metadev.io',
    accent: ACCENTS.metaledger,
    external: true,
  },
  {
    id: 'metacard',
    name: 'MetaCard',
    subtitle: 'Digital ID',
    description: 'Verified identity cards.',
    benefitForMetaHire: 'Candidates verify identity once with MetaCard and skip repeated KYC at every hiring stage.',
    icon: PRODUCT_ICONS.metacard,
    href: 'https://metacard.metadev.io',
    accent: ACCENTS.metacard,
    external: true,
  },
  {
    id: 'metaim',
    name: 'MetaIM',
    subtitle: 'Inventory',
    description: 'Stock & catalog sync.',
    benefitForMetaHire: 'Sync headcount plans and seat availability from MetaIM so requisitions always match real capacity.',
    icon: PRODUCT_ICONS.metaim,
    href: 'https://metaim.metadev.io',
    accent: ACCENTS.metaim,
    external: true,
  },
]

// For MetaHire: only show useful companions (not every product). Curated for hiring relevance.
export const METAHIRE_ECOSYSTEM_IDS = ['metacheck', 'metacard', 'metaflow', 'metaledger', 'metaedu', 'metaads'] as const

export function getUsefulFor(productId: string): EcosystemProduct[] {
  if (productId === 'metahire') {
    return ALL_ECOSYSTEM_PRODUCTS.filter((p) => (METAHIRE_ECOSYSTEM_IDS as readonly string[]).includes(p.id))
  }
  // Generic fallback: show 4 others that are most commonly useful (used when reusing section in other product pages)
  // Highlights current product elsewhere; for other pages we can show MetaHire + 3 complementary.
  const priority: Record<string, string[]> = {
    metahire: ['metacheck', 'metacard', 'metaflow', 'metaledger'],
    metacheck: ['metahire', 'metacard', 'metaflow', 'metaledger'],
    metaledger: ['metahire', 'metacheck', 'metaflow', 'metaim'],
    metahealth: ['metahire', 'metacheck', 'metaedu', 'metacard'],
    metaedu: ['metahire', 'metacheck', 'metacard', 'metaflow'],
    default: ['metahire', 'metacheck', 'metacard', 'metaflow'],
  }
  const ids = priority[productId] || priority.default
  return ALL_ECOSYSTEM_PRODUCTS.filter((p) => ids.includes(p.id))
}

export function getProductById(id: string): EcosystemProduct | undefined {
  return ALL_ECOSYSTEM_PRODUCTS.find((p) => p.id === id)
}
