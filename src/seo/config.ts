
export const SITE_URL = "https://metahire.in";
export const SITE_NAME = "MetaHire";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;
export const TWITTER_HANDLE = "@metahire_official";

export interface SeoEntry {
  title: string;
  description: string;
  canonical: string;
  robots?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  noindex?: boolean;
}

function canon(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

export const SEO_CONFIG: Record<string, SeoEntry> = {
  "/": {
    title: "MetaHire | Smarter Solutions for Modern Teams",
    description: "MetaHire is a modern platform crafted for the teams that shape the future — secure, scalable and built for real impact.",
    canonical: canon("/"),
    ogType: "website",
  },
  "/about": {
    title: "About MetaHire | Our Story & Team",
    description: "Learn about MetaHire — our mission, values and the team building the future of work.",
    canonical: canon("/about"),
    ogType: "website",
  },
  "/solutions": {
    title: "Solutions | MetaHire",
    description: "Explore MetaHire solutions tailored for modern enterprises — designed for scale and performance.",
    canonical: canon("/solutions"),
    ogType: "website",
  },
  "/careers": {
    title: "Careers | MetaHire",
    description: "Join MetaHire — build products used by thousands. Explore open roles and grow with us.",
    canonical: canon("/careers"),
    ogType: "website",
  },
  "/contact": {
    title: "Contact MetaHire | Partnership & Support",
    description: "Contact MetaHire for partnerships and support. Reach us at partnership@metahire.in — we reply within 24 hours.",
    canonical: canon("/contact"),
    ogType: "website",
  },
  "/legal/privacy-policy": {
    title: "Privacy Policy | MetaHire",
    description: "Read MetaHire's Privacy Policy — how we collect, use and protect personal data.",
    canonical: canon("/legal/privacy-policy"),
    ogType: "article",
  },
  "/legal/terms-of-service": {
    title: "Terms of Service | MetaHire",
    description: "MetaHire Terms of Service — rules governing use of our platform and services.",
    canonical: canon("/legal/terms-of-service"),
    ogType: "article",
  },
  "/legal/security": {
    title: "Security | MetaHire",
    description: "How MetaHire secures your data — encryption, access control, monitoring and incident response.",
    canonical: canon("/legal/security"),
    ogType: "article",
  },
  "/legal/compliance": {
    title: "Compliance | MetaHire",
    description: "MetaHire compliance overview — standards and principles we follow to keep you compliant.",
    canonical: canon("/legal/compliance"),
    ogType: "article",
  },
  "/legal/cancellation": {
    title: "Cancellation & Refund Policy | MetaHire",
    description: "Cancellation and refund policy for MetaHire subscriptions and services.",
    canonical: canon("/legal/cancellation"),
    ogType: "article",
  },
  "/sitemap": {
    title: "Sitemap | MetaHire",
    description: "Browse every public page on metahire.in — plus sitemap.xml and robots.txt.",
    canonical: canon("/sitemap"),
    ogType: "website",
  },
  "/login": {
    title: "Sign In | MetaHire",
    description: "Sign in to MetaHire.",
    canonical: canon("/login"),
    robots: "noindex, nofollow",
    noindex: true,
  },
};

export function getSeoForPath(pathname: string): SeoEntry | undefined {
  const clean = pathname.split("?")[0].split("#")[0].replace(/\/$/, "") || "/";
  if (SEO_CONFIG[clean]) return SEO_CONFIG[clean];
  if (SEO_CONFIG[pathname]) return SEO_CONFIG[pathname];
  if (clean === "/legal/cancellation-and-refund" || clean === "/legal/refund") {
    const base = SEO_CONFIG["/legal/cancellation"];
    return { ...base, canonical: base.canonical };
  }
  return undefined;
}

export function getBreadcrumbs(pathname: string): Array<{ name: string; url: string }> {
  const clean = pathname.split("?")[0].split("#")[0].replace(/\/$/, "") || "/";
  const parts = clean.split("/").filter(Boolean);
  const crumbs: Array<{ name: string; url: string }> = [{ name: "Home", url: canon("/") }];
  let acc = "";
  for (const part of parts) {
    acc += `/${part}`;
    const label = part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ name: label, url: canon(acc) });
  }
  return crumbs;
}
