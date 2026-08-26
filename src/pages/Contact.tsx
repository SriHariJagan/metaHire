import { useState, useCallback, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import {
  DollarSign,
  Handshake,
  Briefcase,
  HelpCircle,
  Send,
  CheckCircle,
  AlertCircle,
  MapPin,
  Loader2,
  ChevronDown,
} from "lucide-react";

function AnimDiv({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

interface FormData {
  fullName: string;
  workEmail: string;
  phone: string;
  company: string;
  companySize: string;
  helpWith: string;
  message: string;
}

const initialFormData: FormData = {
  fullName: "",
  workEmail: "",
  phone: "",
  company: "",
  companySize: "",
  helpWith: "",
  message: "",
};

const contactOptions = [
  {
    icon: DollarSign,
    title: "Sales",
    description: "Talk about using MetaHire for your recruitment needs.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Explore strategic partnerships and collaboration opportunities.",
  },
  {
    icon: Briefcase,
    title: "Careers",
    description: "Talk about joining the MetaHire team.",
  },
  {
    icon: HelpCircle,
    title: "General",
    description: "Ask us anything about MetaHire.",
  },
];

const whyTalkCards = [
  {
    icon: AlertCircle,
    title: "Hiring Challenge",
    description:
      "Tell us where your recruitment process is slowing down, and we'll explore how MetaHire can help.",
  },
  {
    icon: HelpCircle,
    title: "Product Questions",
    description:
      "Learn how MetaHire fits your workflow and meets your specific hiring requirements.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "Explore opportunities to work together and create value for your organization.",
  },
];

const faqs = [
  {
    question: "What is MetaHire?",
    answer:
      "MetaHire is a modern hiring and recruitment platform designed to help organizations manage their entire recruitment process more efficiently.",
  },
  {
    question: "Who is MetaHire built for?",
    answer:
      "MetaHire is built for recruitment teams, hiring managers, HR professionals, and organizations of all sizes looking to improve their hiring process.",
  },
  {
    question: "Can MetaHire support different hiring workflows?",
    answer:
      "MetaHire is designed to be flexible and support various recruitment workflows, adapting to the way your team works.",
  },
  {
    question: "Can recruiters and hiring managers collaborate?",
    answer:
      "Yes, MetaHire brings recruiters and hiring managers into the same connected workflow, improving communication and alignment throughout the hiring process.",
  },
  {
    question: "Does MetaHire support integrations?",
    answer:
      "MetaHire is designed to connect with common tools in your hiring ecosystem, helping you maintain a seamless workflow.",
  },
  {
    question: "Is MetaHire suitable for growing organizations?",
    answer:
      "MetaHire scales with your organization's hiring needs, making it suitable for both small teams and growing companies.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-brand-gray-light">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-brand-black pr-4 group-hover:text-brand-green transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-brand-gray flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-brand-gray-dark leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const validate = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormData]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validate()) return;

      setStatus("loading");

      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
        setFormData(initialFormData);
      } catch {
        setStatus("error");
      }
    },
    [validate]
  );

  const handleReset = useCallback(() => {
    setStatus("idle");
  }, []);

  return (
    <main className="min-h-screen bg-brand-white">
      {/* SECTION 01 — HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-brand-green-50 via-white to-brand-blue-light/30 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-brand-blue/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimDiv className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-brand-green-100 text-brand-green-dark text-sm font-medium rounded-full mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black tracking-tight mb-6">
              Let's Talk About{" "}
              <span className="text-brand-green">Better Hiring</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-gray-dark leading-relaxed max-w-2xl mx-auto">
              Whether you're exploring MetaHire, looking for a partnership, or
              interested in joining our team, we'd love to hear from you.
            </p>
          </AnimDiv>
        </div>
      </section>

      {/* SECTION 02 — CONTACT OPTIONS */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Get in Touch"
              heading="How Can We Help?"
              description="Choose the category that best fits your needs."
              centered
            />
          </AnimDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {contactOptions.map((option, i) => (
              <AnimDiv key={option.title} delay={i * 0.1}>
                <div className="bg-brand-offwhite rounded-2xl p-6 h-full border border-brand-gray-light/50 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-brand-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-green/10 transition-colors">
                    <option.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-black mb-2">
                    {option.title}
                  </h3>
                  <p className="text-brand-gray-dark leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </AnimDiv>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — CONTACT FORM */}
      <section className="py-20 lg:py-28 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimDiv>
              <SectionHeading
                eyebrow="Send a Message"
                heading="Let's Start a Conversation"
                description="Fill out the form and we'll get back to you as soon as possible."
              />
              <div className="mt-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-black">
                      Quick Response
                    </h4>
                    <p className="text-brand-gray-dark text-sm">
                      We typically respond within 1-2 business days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-black">
                      No Spam
                    </h4>
                    <p className="text-brand-gray-dark text-sm">
                      Your information is safe with us. No unsolicited emails.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-black">
                      Personalized Support
                    </h4>
                    <p className="text-brand-gray-dark text-sm">
                      Get answers tailored to your specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </AnimDiv>

            <AnimDiv delay={0.2}>
              <div className="bg-brand-white rounded-2xl p-8 shadow-sm border border-brand-gray-light/50">
                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-brand-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-brand-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-black mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-brand-gray-dark mb-6">
                      Thank you for reaching out. We'll get back to you within
                      1-2 business days.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-brand-green-100 text-brand-green-dark font-medium rounded-lg hover:bg-brand-green/10 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : status === "error" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <AlertCircle className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-black mb-3">
                      Something Went Wrong
                    </h3>
                    <p className="text-brand-gray-dark mb-6">
                      We couldn't send your message. Please try again or contact
                      us directly.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-brand-green text-white font-medium rounded-lg hover:bg-brand-green-dark transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="space-y-5">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-brand-black mb-1.5"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.fullName}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.fullName
                              ? "border-red-400 bg-red-50/50"
                              : "border-brand-gray-light bg-brand-offwhite/50"
                          } focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all text-brand-black placeholder:text-brand-gray`}
                          placeholder="Enter your full name"
                        />
                        {errors.fullName && (
                          <p
                            className="mt-1 text-sm text-red-500"
                            role="alert"
                          >
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Work Email */}
                      <div>
                        <label
                          htmlFor="workEmail"
                          className="block text-sm font-medium text-brand-black mb-1.5"
                        >
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="workEmail"
                          name="workEmail"
                          value={formData.workEmail}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.workEmail}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.workEmail
                              ? "border-red-400 bg-red-50/50"
                              : "border-brand-gray-light bg-brand-offwhite/50"
                          } focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all text-brand-black placeholder:text-brand-gray`}
                          placeholder="you@company.com"
                        />
                        {errors.workEmail && (
                          <p
                            className="mt-1 text-sm text-red-500"
                            role="alert"
                          >
                            {errors.workEmail}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-brand-black mb-1.5"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-brand-gray-light bg-brand-offwhite/50 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all text-brand-black placeholder:text-brand-gray"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-brand-black mb-1.5"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-brand-gray-light bg-brand-offwhite/50 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all text-brand-black placeholder:text-brand-gray"
                          placeholder="Your company name"
                        />
                      </div>

                      {/* Company Size */}
                      <div>
                        <label
                          htmlFor="companySize"
                          className="block text-sm font-medium text-brand-black mb-1.5"
                        >
                          Company Size
                        </label>
                        <div className="relative">
                          <select
                            id="companySize"
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-brand-gray-light bg-brand-offwhite/50 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all text-brand-black appearance-none pr-10"
                          >
                            <option value="">Select company size</option>
                            <option value="1-10">1–10 employees</option>
                            <option value="11-50">11–50 employees</option>
                            <option value="51-200">51–200 employees</option>
                            <option value="201-500">201–500 employees</option>
                            <option value="500+">500+ employees</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gray pointer-events-none" />
                        </div>
                      </div>

                      {/* What can we help with? */}
                      <div>
                        <label
                          htmlFor="helpWith"
                          className="block text-sm font-medium text-brand-black mb-1.5"
                        >
                          What can we help with? <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="helpWith"
                            name="helpWith"
                            value={formData.helpWith}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            className="w-full px-4 py-3 rounded-lg border border-brand-gray-light bg-brand-offwhite/50 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all text-brand-black appearance-none pr-10"
                          >
                            <option value="">Select a topic</option>
                            <option value="sales">Sales inquiry</option>
                            <option value="partnership">Partnership</option>
                            <option value="careers">Careers</option>
                            <option value="general">General question</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gray pointer-events-none" />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-brand-black mb-1.5"
                        >
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.message}
                          rows={5}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.message
                              ? "border-red-400 bg-red-50/50"
                              : "border-brand-gray-light bg-brand-offwhite/50"
                          } focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all text-brand-black placeholder:text-brand-gray resize-none`}
                          placeholder="Tell us about your needs..."
                        />
                        {errors.message && (
                          <p
                            className="mt-1 text-sm text-red-500"
                            role="alert"
                          >
                            {errors.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="mt-6 w-full px-6 py-3.5 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-green-dark focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:ring-offset-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimDiv>
          </div>
        </div>
      </section>

      {/* SECTION 04 — WHY TALK TO US */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Start a Conversation"
              heading="Tell Us What You're Trying to Solve"
              description="No matter where you are in the process, we're here to help."
              centered
            />
          </AnimDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {whyTalkCards.map((card, i) => (
              <AnimDiv key={card.title} delay={i * 0.1}>
                <div className="bg-brand-offwhite rounded-2xl p-8 h-full border border-brand-gray-light/50 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 bg-brand-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-green/10 transition-colors">
                    <card.icon className="w-7 h-7 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-black mb-3">
                    {card.title}
                  </h3>
                  <p className="text-brand-gray-dark leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </AnimDiv>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — LOCATION */}
      <section className="py-20 lg:py-28 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="Our Location"
              heading="Find Us"
              centered
            />
          </AnimDiv>

          <AnimDiv delay={0.2}>
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-brand-white rounded-2xl p-10 border border-brand-gray-light/50 text-center">
                <div className="w-16 h-16 bg-brand-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-3">
                  Coming Soon
                </h3>
                <p className="text-brand-gray-dark leading-relaxed">
                  We're setting up our physical location. In the meantime, we're
                  fully available online and ready to connect with you remotely.
                </p>
              </div>
            </div>
          </AnimDiv>
        </div>
      </section>

      {/* SECTION 06 — FAQ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimDiv>
            <SectionHeading
              eyebrow="FAQ"
              heading="Frequently Asked Questions"
              description="Find answers to common questions about MetaHire."
              centered
            />
          </AnimDiv>

          <AnimDiv delay={0.2}>
            <div className="mt-16 bg-brand-offwhite rounded-2xl p-6 sm:p-8 border border-brand-gray-light/50">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </AnimDiv>
        </div>
      </section>

      {/* SECTION 07 — CTA */}
      <CTASection
        heading="Let's Make Hiring Better"
        description="Join the organizations already transforming their recruitment process with MetaHire."
        primaryLabel="Get Started"
        primaryTo="/get-started"
      />
    </main>
  );
}
