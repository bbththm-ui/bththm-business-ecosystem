import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation & Business Automation Services",
  description:
    "BTHTHM provides AI automation and business automation services that help businesses automate repetitive work, capture leads, improve customer communication, and streamline daily operations.",
  keywords: [
    "AI automation",
    "business automation",
    "AI business automation",
    "AI automation services",
    "business automation services",
    "AI voice agents",
    "lead automation",
    "sales automation",
    "appointment automation",
    "workflow automation",
  ],
  alternates: {
    canonical: "https://bththm.com/automation",
  },
};

const services = [
  {
    title: "AI Voice Agents",
    text: "Answer calls, qualify customers, book appointments, answer questions, and transfer important calls to your team.",
  },
  {
    title: "AI Customer Conversations",
    text: "Respond to customer questions through intelligent chat and provide helpful answers around the clock.",
  },
  {
    title: "Lead & Sales Automation",
    text: "Capture new leads, qualify opportunities, organize information, and automatically follow up with potential customers.",
  },
  {
    title: "Appointment Automation",
    text: "Automate scheduling, confirmations, reminders, cancellations, and follow-ups.",
  },
  {
    title: "Workflow Automation",
    text: "Connect the tools your business already uses and eliminate repetitive manual work.",
  },
];

const benefits = [
  "Reduce repetitive administrative work",
  "Respond to customers faster",
  "Capture and follow up with more leads",
  "Automate appointment scheduling",
  "Connect your business systems",
  "Give your team more time to focus on growth",
];

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">

      {/* NAVIGATION */}
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
              href="/ecosystem"
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
            >
              Ecosystem
            </a>

            <a
              href="/automation"
              className="text-sm font-semibold text-[#0369A1]"
            >
              AI Automation
            </a>

            <a
              href="/process"
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
            >
              Process
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

        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">

        <div className="absolute left-1/2 top-0 -z-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-32">

          <div className="max-w-4xl">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#D5E5DF] bg-[#F8FCFA] px-5 py-2.5">

              <span className="h-2.5 w-2.5 rounded-full bg-[#38BDF8]" />

              <span className="text-sm font-semibold uppercase tracking-wider text-[#0284C7]">
                AI & Business Automation
              </span>

            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[#0284C7] sm:text-6xl lg:text-7xl">
              AI Automation
              <span className="block text-[#4F8F3A]">
                for Smarter Businesses
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#29443D] sm:text-xl">
              Put repetitive work on autopilot with practical AI and
              business automation systems designed around the way your
              business actually works.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="/contact"
                className="rounded-full bg-[#0284C7] px-7 py-4 text-center font-semibold text-white shadow-lg shadow-sky-200 hover:bg-[#0369A1]"
              >
                Get an Automation Consultation →
              </a>

              <a
                href="/ecosystem"
                className="rounded-full border border-[#D5E5DF] bg-white px-7 py-4 text-center font-semibold text-[#0284C7] hover:border-[#38BDF8] hover:bg-[#F8FCFA]"
              >
                Explore Our Ecosystem
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-t border-[#D5E5DF] bg-[#F8FCFA]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              Business Automation
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Let technology handle the repetitive work.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#29443D]">
              AI automation can help your business respond faster, reduce
              manual work, organize information, capture opportunities,
              and improve customer experiences.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="border-t border-[#D5E5DF] bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              AI Automation Services
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Automation built around your business.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#29443D]">
              We identify repetitive processes and build practical
              automation systems that work with your existing business.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">

            {services.map((service) => (

              <div
                key={service.title}
                className="rounded-3xl border border-[#D5E5DF] bg-[#F8FCFA] p-6 transition hover:-translate-y-1 hover:border-[#38BDF8] hover:bg-white hover:shadow-lg"
              >

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-xl text-[#4F8F3A]">
                  ✦
                </div>

                <h3 className="text-xl font-bold text-[#0284C7]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-[#29443D]">
                  {service.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="border-t border-[#D5E5DF] bg-[#F8FCFA]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                Why automate?
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                More efficiency. Less repetitive work.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#29443D]">
                The goal isn't to automate everything. It's to automate
                the right things so your team can spend more time on
                customers, decisions, and growth.
              </p>

            </div>

            <div className="space-y-4">

              {benefits.map((benefit) => (

                <div
                  key={benefit}
                  className="flex items-center gap-4 rounded-2xl border border-[#D5E5DF] bg-white p-5"
                >

                  <span className="text-xl font-bold text-[#4F8F3A]">
                    ✓
                  </span>

                  <span className="font-medium text-[#29443D]">
                    {benefit}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="border-t border-[#D5E5DF] bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-[#F8FCFA] p-8 sm:p-12 lg:p-16">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              Ready to automate?
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Find out where AI can make the biggest difference.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#29443D]">
              Tell us what takes too much time in your business. We'll
              help identify practical opportunities for AI automation
              and business automation.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#0284C7] px-7 py-4 font-semibold text-white hover:bg-[#0369A1]"
            >
              Get Started →
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#D5E5DF] bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <div>

            <p className="font-bold text-[#0284C7]">
              BTHTHM
            </p>

            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#29443D]">
              Business Ecosystem
            </p>

          </div>

          <div className="text-left sm:text-right">

            <p className="font-semibold text-[#4F8F3A]">
              Work Smarter. Grow Faster.
            </p>

            <p className="mt-1 text-sm text-[#29443D]">
              AI & Business Automation · Software · Web · Mobile
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