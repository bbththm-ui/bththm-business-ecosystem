"use client";

import { useState } from "react";

const ecosystem = [
  {
    number: "01",
    title: "AI & Business Automation",
    subtitle: "The intelligent brain",
    text: "Turn repetitive work into intelligent systems. Automate customer communication, lead follow-up, appointments, administrative work, and everyday business processes with AI.",
  },
  {
    number: "02",
    title: "Website Design",
    subtitle: "Your digital front door",
    text: "Create a professional online presence that attracts visitors, builds trust, captures leads, and connects customers to your business.",
  },
  {
    number: "03",
    title: "Custom Software",
    subtitle: "Your business operating system",
    text: "Build software around the way your business actually works, connecting information, people, processes, and tools.",
  },
  {
    number: "04",
    title: "Mobile Apps",
    subtitle: "Your business in their hands",
    text: "Give customers and teams convenient mobile access to your services, information, communication, and business systems.",
  },
];

const automationServices = [
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

const industries = [
  "Home & Local Services",
  "Professional Services",
  "Real Estate & Property",
  "Healthcare & Dental",
  "Retail & E-commerce",
  "Restaurants & Hospitality",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        service: formData.get("service"),
        message: formData.get("message"),
      }),
    });

    if (response.ok) {
      setFormSubmitted(true);
      form.reset();
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#0F172A]">

      {/* ================= NAVIGATION ================= */}

      <nav className="sticky top-0 z-50 border-b border-[#D5E5DF] bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          <a
            href="#"
            className="font-bold tracking-tight text-[#0284C7]"
          >
            <span className="text-xl">
              BTHTHM
            </span>

            <span className="ml-2 hidden text-xs font-semibold uppercase tracking-[0.18em] text-[#0284C7] sm:inline">
              Business Ecosystem
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">

            <a
              href="#ecosystem"
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
            >
              Ecosystem
            </a>

            <a
              href="#automation"
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
            >
              AI Automation
            </a>

            <a
              href="#process"
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
            >
              Process
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
            >
              About
            </a>

            <a
              href="#contact"
              className="rounded-full bg-[#0284C7] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0369A1]"
            >
              Get Started
            </a>

          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-[#0284C7] md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>

        </div>

        {menuOpen && (
          <div className="border-t border-[#D5E5DF] bg-[#F8FCFA] px-6 py-5 md:hidden">

            <div className="flex flex-col gap-4">

              <a
                href="#ecosystem"
                className="font-medium text-[#0284C7]"
                onClick={() => setMenuOpen(false)}
              >
                Ecosystem
              </a>

              <a
                href="#automation"
                className="font-medium text-[#0284C7]"
                onClick={() => setMenuOpen(false)}
              >
                AI Automation
              </a>

              <a
                href="#process"
                className="font-medium text-[#0284C7]"
                onClick={() => setMenuOpen(false)}
              >
                Process
              </a>

              <a
                href="#about"
                className="font-medium text-[#0284C7]"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>

              <a
                href="#contact"
                className="font-medium text-[#0284C7]"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>

            </div>

          </div>
        )}

      </nav>


      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-white">

        <div className="absolute left-1/2 top-0 -z-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-32">

          <div className="max-w-5xl">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#D5E5DF] bg-[#F8FCFA] px-5 py-2.5">

              <span className="h-2.5 w-2.5 rounded-full bg-[#38BDF8]" />

              <span className="text-sm font-semibold uppercase tracking-wider text-[#0284C7]">
                BTHTHM Business Ecosystem
              </span>

            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[#0284C7] sm:text-6xl lg:text-8xl">

              AI Business
              <span className="block">
                Automation
              </span>

              <span className="mt-3 block text-[#4F8F3A]">
                Work Smarter. Grow Faster.
              </span>

            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#29443D] sm:text-xl">
              BTHTHM connects AI, automation, websites, software, mobile
              apps, and business systems into one intelligent ecosystem
              designed around your business.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="#contact"
                className="rounded-full bg-[#0284C7] px-7 py-4 text-center font-semibold text-white shadow-lg shadow-sky-200 hover:bg-[#0369A1]"
              >
                Build My Business Ecosystem →
              </a>

              <a
                href="#ecosystem"
                className="rounded-full border border-[#D5E5DF] bg-white px-7 py-4 text-center font-semibold text-[#0284C7] hover:border-[#38BDF8] hover:bg-[#F8FCFA]"
              >
                Explore the Ecosystem
              </a>

            </div>

          </div>


          <div className="mt-20 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-[#D5E5DF] bg-[#F8FCFA] p-6">

              <div className="text-3xl font-bold text-[#0284C7]">
                AI
              </div>

              <p className="mt-2 text-sm text-[#29443D]">
                Intelligent automation
              </p>

            </div>


            <div className="rounded-2xl border border-[#D5E5DF] bg-white p-6">

              <div className="text-3xl font-bold text-[#0284C7]">
                Systems
              </div>

              <p className="mt-2 text-sm text-[#29443D]">
                Connected business technology
              </p>

            </div>


            <div className="rounded-2xl border border-[#D5E5DF] bg-white p-6">

              <div className="text-3xl font-bold text-[#4F8F3A]">
                Growth
              </div>

              <p className="mt-2 text-sm text-[#29443D]">
                Technology that grows with you
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ECOSYSTEM ================= */}

      <section
        id="ecosystem"
        className="border-t border-[#D5E5DF] bg-[#F8FCFA]"
      >

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              The BTHTHM Ecosystem
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Everything connected. One intelligent ecosystem.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#29443D]">
              Your business doesn't need more disconnected technology.
              It needs systems that work together.
            </p>

          </div>


          <div className="mx-auto mt-16 max-w-5xl">

            <div className="relative rounded-[2rem] border border-[#D5E5DF] bg-white p-6 shadow-sm sm:p-10">

              <div className="grid gap-5 md:grid-cols-2">

                {ecosystem.map((item) => (

                  <div
                    key={item.number}
                    className="group rounded-3xl border border-[#D5E5DF] bg-[#F8FCFA] p-7 transition hover:-translate-y-1 hover:border-[#38BDF8] hover:bg-white hover:shadow-lg"
                  >

                    <div className="flex items-start justify-between">

                      <span className="text-sm font-bold text-[#38BDF8]">
                        {item.number}
                      </span>

                      <span className="text-xl text-[#38BDF8]">
                        ↗
                      </span>

                    </div>

                    <h3 className="mt-7 text-2xl font-bold text-[#0284C7]">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-semibold text-[#4F8F3A]">
                      {item.subtitle}
                    </p>

                    <p className="mt-4 leading-7 text-[#29443D]">
                      {item.text}
                    </p>

                  </div>

                ))}

              </div>


              <div className="mt-8 flex justify-center">

                <div className="rounded-2xl border-2 border-[#38BDF8] bg-white px-8 py-5 text-center shadow-lg shadow-sky-100">

                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
                    BTHTHM
                  </div>

                  <div className="mt-1 font-bold text-[#4F8F3A]">
                    Connected Business Ecosystem
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= AI AUTOMATION ================= */}

      <section
        id="automation"
        className="border-t border-[#D5E5DF] bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              AI & Business Automation
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Put repetitive work on autopilot.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#29443D]">
              AI is at the heart of the BTHTHM ecosystem. We use intelligent
              automation to help businesses respond faster, reduce repetitive
              work, capture opportunities, and improve customer experiences.
            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">

            {automationServices.map((service) => (

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


      {/* ================= WHO WE HELP ================= */}

      <section
        className="border-t border-[#D5E5DF] bg-[#F8FCFA]"
      >

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              Who we help
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Built for businesses ready to work smarter.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#29443D]">
              From local businesses to growing companies, BTHTHM helps
              identify where technology can make the biggest difference.
            </p>

          </div>


          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {industries.map((industry) => (

              <div
                key={industry}
                className="rounded-2xl border border-[#D5E5DF] bg-white p-6 hover:border-[#38BDF8] hover:shadow-md"
              >

                <div className="flex items-center gap-3">

                  {/* LEAF GREEN INDUSTRY ICON */}

                  <span className="text-[#4F8F3A]">
                    ✦
                  </span>

                  {/* LEAF GREEN INDUSTRY TITLES */}

                  <span className="font-semibold text-[#4F8F3A]">
                    {industry}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CONSULTATION ================= */}

      <section className="border-t border-[#D5E5DF] bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-[#F8FCFA] p-8 sm:p-12 lg:p-16">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              Not sure where to start?
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold text-[#0284C7] sm:text-5xl">
              We'll help you find the opportunities.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#29443D]">
              Tell us what your business does, what takes too much time,
              and where your team gets stuck. We'll help identify practical
              opportunities for AI and business automation.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-[#0284C7] px-7 py-4 font-semibold text-white hover:bg-[#0369A1]"
            >
              Get an Automation Consultation →
            </a>

          </div>

        </div>

      </section>


      {/* ================= PROCESS ================= */}

      <section
        id="process"
        className="border-t border-[#D5E5DF] bg-[#F8FCFA]"
      >

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                Our approach
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                From business problem to intelligent ecosystem.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-[#29443D]">
                We understand your business first, identify opportunities,
                design the right ecosystem, and build technology that works
                together for your team.
              </p>

            </div>


            <div className="space-y-4">

              {[
                [
                  "01",
                  "Discover",
                  "Understand your business, goals, challenges, and opportunities.",
                ],
                [
                  "02",
                  "Design",
                  "Design the right AI, automation, software, website, and app ecosystem.",
                ],
                [
                  "03",
                  "Build",
                  "Build, test, connect, and refine your technology.",
                ],
                [
                  "04",
                  "Launch & Grow",
                  "Launch your ecosystem and continue improving it as your business grows.",
                ],
              ].map(([number, title, text]) => (

                <div
                  key={number}
                  className="flex gap-5 rounded-2xl border border-[#D5E5DF] bg-white p-5"
                >

                  <span className="font-bold text-[#38BDF8]">
                    {number}
                  </span>

                  <div>

                    <h3 className="font-semibold text-[#0284C7]">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm text-[#29443D]">
                      {text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="border-t border-[#D5E5DF] bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="rounded-3xl border border-[#D5E5DF] bg-[#F8FCFA] p-8 sm:p-12 lg:p-16">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              Why BTHTHM
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Your business. Your technology. One ecosystem.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#29443D]">
              We believe technology should work together, not create more
              complexity. BTHTHM brings AI, automation, websites, software,
              mobile apps, and connected business systems into one practical
              ecosystem built around your business.
            </p>


            <div className="mt-12 grid gap-6 sm:grid-cols-3">

              <div className="rounded-2xl border border-[#D5E5DF] bg-white p-6">

                <div className="text-2xl font-bold text-[#0284C7]">
                  Business First
                </div>

                <p className="mt-3 text-sm leading-6 text-[#29443D]">
                  We start with your business and the problems you want to solve.
                </p>

              </div>


              <div className="rounded-2xl border border-[#D5E5DF] bg-white p-6">

                <div className="text-2xl font-bold text-[#0284C7]">
                  Smart Technology
                </div>

                <p className="mt-3 text-sm leading-6 text-[#29443D]">
                  We choose technology that fits your business instead of adding complexity.
                </p>

              </div>


              <div className="rounded-2xl border border-[#D5E5DF] bg-white p-6">

                <div className="text-2xl font-bold text-[#4F8F3A]">
                  Built to Grow
                </div>

                <p className="mt-3 text-sm leading-6 text-[#29443D]">
                  Your ecosystem can evolve as your business grows.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="border-t border-[#D5E5DF] bg-[#F8FCFA]"
      >

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                Free Automation Consultation
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                Let's build your business ecosystem.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#29443D]">
                Tell us about your business, what takes too much time,
                and what you'd like to improve. We'll help you explore
                the right technology ecosystem.
              </p>


              <div className="mt-8 space-y-4">

                <div className="flex gap-3">

                  <span className="text-[#4F8F3A]">
                    ✓
                  </span>

                  <span className="text-[#29443D]">
                    Identify repetitive tasks
                  </span>

                </div>

                <div className="flex gap-3">

                  <span className="text-[#4F8F3A]">
                    ✓
                  </span>

                  <span className="text-[#29443D]">
                    Find automation opportunities
                  </span>

                </div>

                <div className="flex gap-3">

                  <span className="text-[#4F8F3A]">
                    ✓
                  </span>

                  <span className="text-[#29443D]">
                    Connect your business systems
                  </span>

                </div>

                <div className="flex gap-3">

                  <span className="text-[#4F8F3A]">
                    ✓
                  </span>

                  <span className="text-[#29443D]">
                    Explore practical AI solutions
                  </span>

                </div>

              </div>

            </div>


            <form
              className="space-y-4"
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-[#D5E5DF] bg-white px-5 py-4 text-[#0F172A] outline-none placeholder:text-[#6B7F78] focus:border-[#38BDF8]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="w-full rounded-xl border border-[#D5E5DF] bg-white px-5 py-4 text-[#0F172A] outline-none placeholder:text-[#6B7F78] focus:border-[#38BDF8]"
              />

              <select
                name="service"
                required
                defaultValue=""
                className="w-full rounded-xl border border-[#D5E5DF] bg-white px-5 py-4 text-[#29443D] outline-none focus:border-[#38BDF8]"
              >

                <option value="" disabled>
                  What are you interested in?
                </option>

                <option>
                  AI & Business Automation
                </option>

                <option>
                  Business Ecosystem
                </option>

                <option>
                  Custom Software
                </option>

                <option>
                  Mobile App
                </option>

                <option>
                  Website Design
                </option>

                <option>
                  Not Sure — Help Me Find Opportunities
                </option>

              </select>


              <textarea
                name="message"
                placeholder="Tell us about your business and what you'd like to improve..."
                required
                rows={6}
                className="w-full rounded-xl border border-[#D5E5DF] bg-white px-5 py-4 text-[#0F172A] outline-none placeholder:text-[#6B7F78] focus:border-[#38BDF8]"
              />


              {formSubmitted && (
                <p className="rounded-xl border border-sky-200 bg-sky-50 px-5 py-4 text-sm text-[#0284C7]">
                  Thanks! Your request has been received. We'll be in touch soon.
                </p>
              )}


              <button
                type="submit"
                className="w-full rounded-xl bg-[#0284C7] px-6 py-4 font-semibold text-white shadow-lg shadow-sky-100 hover:bg-[#0369A1]"
              >
                Request a Consultation →
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

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