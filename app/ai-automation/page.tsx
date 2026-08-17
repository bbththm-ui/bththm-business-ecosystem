import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Business Automation Services",
  description:
    "BTHTHM builds AI business automation systems including AI voice agents, customer conversations, lead automation, appointment automation, and connected business workflows.",
  alternates: {
    canonical: "https://bththm.com/ai-automation",
  },
  openGraph: {
    title: "AI Business Automation Services | BTHTHM",
    description:
      "Automate repetitive business work with AI voice agents, customer automation, lead follow-up, appointment automation, and connected workflows.",
    url: "https://bththm.com/ai-automation",
    siteName: "BTHTHM",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "AI Voice Agents",
    text: "Answer calls, qualify customers, schedule appointments, answer common questions, and route important calls to your team.",
  },
  {
    number: "02",
    title: "AI Customer Conversations",
    text: "Give customers fast, helpful answers through intelligent AI-powered conversations across your business communication channels.",
  },
  {
    number: "03",
    title: "Lead & Sales Automation",
    text: "Capture leads, qualify opportunities, organize customer information, and automatically follow up with potential customers.",
  },
  {
    number: "04",
    title: "Appointment Automation",
    text: "Automate scheduling, confirmations, reminders, cancellations, and follow-ups so your team spends less time managing calendars.",
  },
  {
    number: "05",
    title: "Workflow Automation",
    text: "Connect the tools your business already uses and automate repetitive processes between your systems.",
  },
  {
    number: "06",
    title: "AI Business Integrations",
    text: "Connect AI with your CRM, website, communication tools, databases, forms, and other business systems.",
  },
];

const benefits = [
  "Reduce repetitive manual work",
  "Respond to customers faster",
  "Capture and follow up with more leads",
  "Automate appointment processes",
  "Connect disconnected business systems",
  "Give your team more time to focus on important work",
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We learn how your business operates and identify repetitive tasks, bottlenecks, and opportunities for automation.",
  },
  {
    number: "02",
    title: "Design",
    text: "We design an automation system around your actual business processes, customers, tools, and goals.",
  },
  {
    number: "03",
    title: "Build",
    text: "We build, connect, test, and refine the AI and automation systems your business needs.",
  },
  {
    number: "04",
    title: "Launch & Improve",
    text: "We launch the system and identify opportunities to improve and expand your automation as your business grows.",
  },
];

const industries = [
  "Home & Local Services",
  "Professional Services",
  "Real Estate & Property",
  "Healthcare & Dental",
  "Retail & E-commerce",
  "Restaurants & Hospitality",
];

const faqs = [
  {
    question: "What is AI business automation?",
    answer:
      "AI business automation uses artificial intelligence and connected software systems to handle repetitive business tasks, customer communication, lead follow-up, scheduling, and workflows with less manual effort.",
  },
  {
    question: "Can AI automation work with my existing business software?",
    answer:
      "In many cases, yes. BTHTHM can design automation around the tools your business already uses and connect systems where appropriate.",
  },
  {
    question: "Can an AI voice agent answer my business calls?",
    answer:
      "AI voice agents can be designed to answer common questions, collect information, qualify callers, schedule appointments, and transfer calls to your team when human assistance is needed.",
  },
  {
    question: "Do I need a large company to use AI automation?",
    answer:
      "No. Automation can be useful for small and growing businesses when it is focused on practical problems such as missed calls, repetitive customer questions, lead follow-up, scheduling, and administrative work.",
  },
  {
    question: "How do I know what I should automate?",
    answer:
      "The best starting point is to look at tasks that happen frequently, take significant employee time, create delays, or require repetitive communication. We can help identify practical opportunities.",
  },
];

export default function AIAutomationPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">

      {/* ================= NAVIGATION ================= */}

      <nav className="sticky top-0 z-50 border-b border-[#D5E5DF] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          <a
            href="/"
            className="font-bold tracking-tight text-[#0284C7]"
          >
            <span className="text-xl">BTHTHM</span>

            <span className="ml-2 hidden text-xs font-semibold uppercase tracking-[0.18em] text-[#0284C7] sm:inline">
              Business Ecosystem
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="/ai-automation"
              className="text-sm font-semibold text-[#0284C7]"
            >
              AI Automation
            </a>

            <a
              href="/website-design"
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
            >
              Websites
            </a>

            <a
              href="/custom-software"
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
            >
              Software
            </a>

            <a
              href="/mobile-app-development"
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
            >
              Mobile Apps
            </a>

            <a
              href="/about"
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
            >
              About
            </a>

            <a
              href="/contact"
              className="rounded-full bg-[#0284C7] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0369A1]"
            >
              Get Started
            </a>
          </div>

          <a
            href="/contact"
            className="rounded-full bg-[#0284C7] px-5 py-2.5 text-sm font-semibold text-white md:hidden"
          >
            Get Started
          </a>

        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-white">

        <div className="absolute left-1/2 top-0 -z-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-32">

          <div className="max-w-5xl">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#D5E5DF] bg-[#F8FCFA] px-5 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#38BDF8]" />

              <span className="text-sm font-semibold uppercase tracking-wider text-[#0284C7]">
                AI & Business Automation
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[#0284C7] sm:text-6xl lg:text-7xl">
              AI Business
              <span className="block">Automation Services</span>
            </h1>

            <p className="mt-6 text-3xl font-bold text-[#4F8F3A] sm:text-4xl">
              Put repetitive work on autopilot.
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#29443D] sm:text-xl">
              BTHTHM builds practical AI automation systems that help
              businesses reduce repetitive work, respond faster to customers,
              capture opportunities, automate processes, and connect the
              systems they already use.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="/contact"
                className="rounded-full bg-[#0284C7] px-7 py-4 text-center font-semibold text-white shadow-lg shadow-sky-200 hover:bg-[#0369A1]"
              >
                Get an Automation Consultation →
              </a>

              <a
                href="#services"
                className="rounded-full border border-[#D5E5DF] bg-white px-7 py-4 text-center font-semibold text-[#0284C7] hover:border-[#38BDF8] hover:bg-[#F8FCFA]"
              >
                Explore Automation Services
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="border-t border-[#D5E5DF] bg-[#F8FCFA]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                Why automate?
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                Let technology handle the repetitive work.
              </h2>

            </div>

            <div>
              <p className="text-lg leading-8 text-[#29443D]">
                Many businesses lose valuable time to repetitive calls,
                customer questions, lead follow-up, appointment management,
                data entry, and disconnected software. AI automation can help
                turn those processes into connected systems that work more
                efficiently.
              </p>
            </div>

          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-[#D5E5DF] bg-white p-6"
              >
                <div className="flex gap-3">
                  <span className="text-[#4F8F3A]">✓</span>

                  <span className="font-medium text-[#29443D]">
                    {benefit}
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="border-t border-[#D5E5DF] bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              Automation Services
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Practical AI solutions for everyday business problems.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#29443D]">
              We design automation around the way your business actually
              works instead of forcing your business into a one-size-fits-all
              system.
            </p>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.number}
                className="group rounded-3xl border border-[#D5E5DF] bg-[#F8FCFA] p-7 transition hover:-translate-y-1 hover:border-[#38BDF8] hover:bg-white hover:shadow-lg"
              >

                <div className="flex items-start justify-between">

                  <span className="text-sm font-bold text-[#38BDF8]">
                    {service.number}
                  </span>

                  <span className="text-xl text-[#38BDF8]">
                    ↗
                  </span>

                </div>

                <h3 className="mt-7 text-2xl font-bold text-[#0284C7]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-[#29443D]">
                  {service.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= VOICE AGENTS FEATURE ================= */}

      <section className="border-t border-[#D5E5DF] bg-[#F8FCFA]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="rounded-[2rem] border border-[#D5E5DF] bg-white p-8 shadow-sm sm:p-12 lg:p-16">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                  AI Voice Agents
                </p>

                <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                  Don't let important calls become missed opportunities.
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#29443D]">
                  AI voice agents can help businesses answer calls, collect
                  information, qualify customers, schedule appointments,
                  answer common questions, and transfer important calls to
                  your team.
                </p>

                <a
                  href="/contact"
                  className="mt-8 inline-flex rounded-full bg-[#0284C7] px-7 py-4 font-semibold text-white hover:bg-[#0369A1]"
                >
                  Explore AI Automation →
                </a>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  "Answer incoming calls",
                  "Qualify potential customers",
                  "Schedule appointments",
                  "Answer common questions",
                  "Collect customer information",
                  "Transfer important calls",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#D5E5DF] bg-[#F8FCFA] p-5"
                  >
                    <span className="text-[#4F8F3A]">✦</span>

                    <p className="mt-2 font-semibold text-[#0284C7]">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= WHO WE HELP ================= */}

      <section className="border-t border-[#D5E5DF] bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              Who We Help
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Automation built around your business.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#29443D]">
              AI automation can support businesses in many industries. The
              right solution depends on your customers, processes, team, and
              existing technology.
            </p>

          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-[#D5E5DF] bg-[#F8FCFA] p-6"
              >
                <div className="flex items-center gap-3">

                  <span className="text-[#4F8F3A]">
                    ✦
                  </span>

                  <span className="font-semibold text-[#4F8F3A]">
                    {industry}
                  </span>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="border-t border-[#D5E5DF] bg-[#F8FCFA]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                Our Process
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                From business problem to working automation.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#29443D]">
                We start with your business instead of starting with a
                technology. The goal is to build automation that solves real
                problems and creates measurable value.
              </p>

            </div>

            <div className="space-y-4">

              {process.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 rounded-2xl border border-[#D5E5DF] bg-white p-6"
                >

                  <span className="font-bold text-[#38BDF8]">
                    {step.number}
                  </span>

                  <div>

                    <h3 className="text-lg font-semibold text-[#0284C7]">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-[#29443D]">
                      {step.text}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section className="border-t border-[#D5E5DF] bg-white">

        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Questions about AI automation.
            </h2>

          </div>

          <div className="mt-14 space-y-4">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#D5E5DF] bg-[#F8FCFA] p-6"
              >

                <summary className="cursor-pointer list-none font-semibold text-[#0284C7]">
                  <div className="flex items-center justify-between gap-5">
                    <span>{faq.question}</span>

                    <span className="text-xl text-[#38BDF8] group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 leading-7 text-[#29443D]">
                  {faq.answer}
                </p>

              </details>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="border-t border-[#D5E5DF] bg-[#F8FCFA]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-[#F8FCFA] p-8 text-center sm:p-12 lg:p-16">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              Start with a conversation
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Find out what your business could automate.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#29443D]">
              Tell us about your business, the repetitive work taking up your
              team's time, and what you would like to improve. We'll help you
              identify practical opportunities for AI and automation.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#0284C7] px-8 py-4 font-semibold text-white shadow-lg shadow-sky-200 hover:bg-[#0369A1]"
            >
              Request a Free Consultation →
            </a>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-[#D5E5DF] bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <div>

            <a
              href="/"
              className="font-bold text-[#0284C7]"
            >
              BTHTHM
            </a>

            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#29443D]">
              Business Ecosystem
            </p>

          </div>

          <div className="text-left sm:text-right">

            <p className="font-semibold text-[#4F8F3A]">
              Work Smarter. Grow Faster.
            </p>

            <p className="mt-1 text-sm text-[#29443D]">
              AI Automation · Software · Web · Mobile
            </p>

            <p className="mt-2 text-xs text-[#6B7F78]">
              © 2026 BTHTHM. All rights reserved.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}