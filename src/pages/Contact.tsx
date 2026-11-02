// Contact.tsx — Clean full-height contact page
import { useState, useCallback } from "react";
import { SEO } from '@/seo/SEO';
import { Reveal, SectionHeading } from "@/components/common";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { contactService } from "@/services/contactService";
import {
  Mail,
  MapPin,
  Phone,
  Loader2,
  CheckCircle2,
  Send,
  LifeBuoy,
  Handshake,
  UserPlus,
  Clock,
  Sparkles,
  ArrowRight,
  Zap,
  Globe,
  Calendar,
} from "lucide-react";

const CONTACT_REASONS = [
  { value: "demo", label: "Request a live demo" },
  { value: "pricing", label: "Pricing & plans" },
  { value: "enterprise", label: "Enterprise / custom deployment" },
  { value: "partnership", label: "Partnership inquiry" },
  { value: "press", label: "Press & media" },
  { value: "other", label: "Other" },
];

const COMPANY_SIZES = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "501-1000", label: "501-1000 employees" },
  { value: "1000+", label: "1000+ employees" },
];

const HIRING_VOLUMES = [
  { value: "under-10", label: "Under 10 roles/month" },
  { value: "10-50", label: "10-50 roles/month" },
  { value: "50-200", label: "50-200 roles/month" },
  { value: "200+", label: "200+ roles/month" },
  { value: "not-sure", label: "Not sure yet" },
];

const channels = [
  {
    icon: LifeBuoy,
    title: "Support",
    desc: "Account & pipeline help",
    value: "support@metadev.in",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    desc: "Integrations & collaborations",
    value: "partnership@metahire.in",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    icon: UserPlus,
    title: "Careers",
    desc: "Questions about open roles",
    value: "careers@metadev.in",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Phone,
    title: "General",
    desc: "Main contact line",
    value: "+91 95595 59143",
    gradient: "from-orange-500 to-red-500",
  },
];

const METADEV_CONTACT_EMAILS = [
  "info@metadev.in",
  "contact@metadev.in",
  "support@metadev.in",
];

const METADEV_OFFICES = ["Hyderabad, Telangana (HQ)", "Bangalore, Karnataka"];

const METADEV_PHONES = ["+91 95595 59143"];

const METADEV_HOURS = ["Mon – Fri: 9AM – 6PM", "Sat: 10AM – 4PM"];

interface FormData {
  name: string;
  email: string;
  company: string;
  reason: string;
  companySize: string;
  adSpend: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  reason?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    reason: "demo",
    companySize: "",
    adSpend: "not-sure",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.reason) newErrors.reason = "Please select a reason";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 20)
      newErrors.message = "Please provide more detail (at least 20 characters)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await contactService.submit({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        reason: formData.reason,
        companySize: formData.companySize,
        adSpend: formData.adSpend,
        subject: formData.reason,
        message: formData.message,
      });
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        reason: "demo",
        companySize: "",
        adSpend: "not-sure",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-offwhite via-brand-green-50 to-white pt-28 pb-12 lg:pt-36 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-brand-green/10 via-transparent to-transparent" />
          <div className="absolute top-10 right-10 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal variant="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green/5 px-4 py-1.5 mb-5">
              <Sparkles className="h-3.5 w-3.5 text-brand-green-dark" />
              <span className="text-xs font-medium tracking-wide text-brand-green-dark">
                Get in touch
              </span>
            </span>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-blue">
              Let's build something{" "}
              <span className="text-brand-gradient">great together</span>
            </h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="mt-5 text-lg text-brand-gray-dark max-w-xl mx-auto">
              Talk to our team about hiring automation, demos, or enterprise
              solutions.
            </p>
          </Reveal>
          <Reveal variant="up" delay={300}>
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-brand-gray-dark">
              {[
                { icon: Zap, text: "4hr avg response" },
                { icon: Globe, text: "24/7 support" },
                { icon: Calendar, text: "500+ companies" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-brand-green" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="relative -mt-6 z-10 pb-6">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {channels.map((ch, index) => {
                const Icon = ch.icon;
                return (
                  <Reveal key={ch.title} variant="up" delay={index * 80}>
                    <div className="group bg-white rounded-2xl border border-slate-200 p-4 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div
                        className={`h-10 w-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${ch.gradient} shadow-md mb-3 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-brand-blue text-sm">
                        {ch.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{ch.desc}</p>
                      <p className="text-xs font-medium mt-2 text-brand-green truncate">
                        {ch.value}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content - Form + Info */}
      <section className="flex-1 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start h-full">
            {/* Left - Info */}
            <div className="flex flex-col h-full">
              <Reveal variant="left">
                <SectionHeading
                  eyebrow="Contact"
                  title="Get in touch"
                  description="We'd love to hear from you. Reach out anytime."
                  align="left"
                />
              </Reveal>

              <Reveal variant="left" delay={100}>
                <div className="mt-8 space-y-4">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      lines: METADEV_CONTACT_EMAILS,
                      gradient: "from-emerald-500 to-green-600",
                    },
                    {
                      icon: MapPin,
                      title: "Offices",
                      lines: METADEV_OFFICES,
                      gradient: "from-teal-500 to-cyan-600",
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      lines: METADEV_PHONES,
                      gradient: "from-lime-500 to-green-600",
                    },
                    {
                      icon: Clock,
                      title: "Hours",
                      lines: METADEV_HOURS,
                      gradient: "from-orange-500 to-amber-600",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 group"
                      >
                        <div
                          className={`h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${item.gradient} shadow-md group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-brand-blue text-sm">
                            {item.title}
                          </h3>
                          {item.lines.map((line) => (
                            <p key={line} className="text-sm text-slate-500">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>

              <Reveal variant="left" delay={200}>
                <div className="mt-8 rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                  <h3 className="font-semibold text-brand-blue text-sm mb-3">
                    Response times
                  </h3>
                  <div className="space-y-2">
                    {[
                      {
                        label: "Demo requests",
                        time: "< 4 hrs",
                        color: "#22C55E",
                      },
                      { label: "Pricing", time: "< 8 hrs", color: "#14B8A6" },
                      {
                        label: "Enterprise",
                        time: "< 24 hrs",
                        color: "#F59E0B",
                      },
                      { label: "Support", time: "< 1 hr", color: "#EC4899" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-xs text-slate-600">
                            {item.label}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-brand-green-dark">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right - Form */}
            <div className="h-full">
              <Reveal variant="right" delay={100}>
                {submitStatus === "success" ? (
                  <div
                    className="rounded-3xl bg-white border border-slate-200 p-10 text-center shadow-soft h-full flex flex-col items-center justify-center"
                    role="status"
                  >
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-emerald-500 mb-5 shadow-lg">
                      <CheckCircle2 className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-brand-blue">
                      Message sent!
                    </h2>
                    <p className="mt-3 text-slate-600 max-w-sm">
                      We'll review your message and get back to you within our
                      committed response time.
                    </p>
                    <Button
                      variant="brand"
                      size="lg"
                      className="mt-6"
                      onClick={() => setSubmitStatus("idle")}
                    >
                      Send another
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-7 shadow-soft relative overflow-hidden h-full flex flex-col"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green via-emerald-400 to-teal-500" />

                    <div className="mb-5">
                      <h2 className="text-xl font-bold text-brand-blue">
                        Send us a message
                      </h2>
                      <p className="text-sm text-slate-500 mt-1">
                        Fill out the form below and we'll get back to you
                        shortly.
                      </p>
                    </div>

                    <div className="flex-1 flex flex-col gap-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Full name"
                          name="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          error={errors.name}
                          required
                          placeholder="Priya Sharma"
                          autoComplete="name"
                        />
                        <Input
                          label="Work email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          error={errors.email}
                          required
                          placeholder="priya@company.com"
                          autoComplete="email"
                        />
                      </div>
                      <Input
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleChange("company", e.target.value)
                        }
                        error={errors.company}
                        required
                        placeholder="Lumenkart"
                        autoComplete="organization"
                      />
                      <Select
                        label="How can we help?"
                        name="reason"
                        value={formData.reason}
                        onChange={(e) => handleChange("reason", e.target.value)}
                        options={CONTACT_REASONS}
                        error={errors.reason}
                        required
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Select
                          label="Company size"
                          name="companySize"
                          value={formData.companySize}
                          onChange={(e) =>
                            handleChange("companySize", e.target.value)
                          }
                          options={COMPANY_SIZES}
                          placeholderOption="Select size"
                        />
                        <Select
                          label="Hiring volume"
                          name="adSpend"
                          value={formData.adSpend}
                          onChange={(e) =>
                            handleChange("adSpend", e.target.value)
                          }
                          options={HIRING_VOLUMES}
                          placeholderOption="Select volume"
                        />
                      </div>
                      <Textarea
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        error={errors.message}
                        required
                        rows={3}
                        placeholder="Tell us about your hiring needs..."
                        className="flex-1"
                      />
                    </div>

                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send message
                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        size="lg"
                        onClick={() => {
                          setFormData({
                            name: "",
                            email: "",
                            company: "",
                            reason: "demo",
                            companySize: "",
                            adSpend: "not-sure",
                            message: "",
                          });
                          setErrors({});
                        }}
                      >
                        Clear
                      </Button>
                    </div>

                    {submitStatus === "error" && (
                      <div
                        className="mt-3 p-3 rounded-xl bg-red-50 border border-red-200"
                        role="alert"
                      >
                        <p className="text-sm text-red-600 text-center font-medium">
                          Something went wrong. Please try again or email us
                          directly.
                        </p>
                      </div>
                    )}
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
