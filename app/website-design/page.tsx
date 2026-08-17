import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design & Development Services",
  description:
    "BTHTHM creates professional, modern websites designed to build trust, attract customers, capture leads, and connect your business with the systems it needs.",
  alternates: {
    canonical: "https://bththm.com/website-design",
  },
  openGraph: {
    title: "Website Design & Development Services | BTHTHM",
    description:
      "Professional websites designed to attract customers, build trust, capture leads, and connect with your business systems.",
    url: "https://bththm.com/website-design",
    siteName: "BTHTHM",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Business Websites",
    text: "Professional websites built around your business, your customers, and the goals you want your website to achieve.",
  },
  {
    number: "02",
    title: "Responsive Web Design",
    text: "Websites designed to look and work properly across phones, tablets, laptops, and desktop computers.",
  },
  {
    number: "03",
    title: "Lead Generation",
    text: "Create clear paths for visitors to contact your business, request information, book appointments, or become customers.",
  },
  {
    number: "04",
    title: "Business Integrations",
    text: "Connect your website with forms, customer systems, scheduling tools, automation, databases, and other business technology.",
  },
  {
    number: "05",
    title: "Custom Web Applications",
    text: "Build more advanced web experiences when your business needs functionality beyond a traditional website.",
  },
  {
    number: "06",
    title: "Website Optimization",
    text: "Improve your website's structure, usability, performance, content, and technical foundation as your business grows.",
  },
];

const benefits = [
  "Build credibility with a professional online presence",
  "Make it easier for customers to contact you",
  "Generate and capture new leads",
  "Explain your services clearly",
  "Connect your website to business systems",
  "Create a foundation for future growth",
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We learn about your business, customers, services, goals, and what your website needs to accomplish.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We organize the website structure, pages, content, user experience, and functionality before building.",
  },
  {
    number: "03",
    title: "Design & Build",
    text: "We create the visual design and build the website with responsive, modern technology.",
  },
  {
    number: "04",
    title: "Launch & Improve",
    text: "We test the website, prepare it for launch, and continue improving it as your business evolves.",
  },
];

const websiteTypes = [
  "Local Business Websites",
  "Professional Service Websites",
  "Business Landing Pages",
  "Lead Generation Websites",
  "E-commerce Websites",
  "Custom Web Applications",
];

const faqs = [
  {
    question: "Why does my business need a professional website?",
    answer:
      "Your website can help potential customers understand what you offer, build trust, find your business online, and take the next step toward contacting or buying from you.",
  },
  {
    question: "Will my website work on phones?",
    answer:
      "Yes. We design responsive websites that adapt to different screen sizes including smartphones, tablets, laptops, and desktop computers.",
  },
  {
    question: "Can you connect my website to my business systems?",
    answer:
      "Yes. Depending on the systems you use, your website can connect with forms, scheduling, customer management systems, automation, databases, email, and other business tools.",
  },
  {
    question: "Can you build an online store?",
    answer:
      "Yes. E-commerce functionality can be designed around your products, customers, payment requirements, and business processes.",
  },
  {
    question: "Can you improve my existing website?",
    answer:
      "Yes. We can review an existing website and identify opportunities to improve its design, usability, content, performance, functionality, and business results.",
  },
];

export default function WebsiteDesignPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">

      {/* ================= NAVIGATION ================= */}

      <nav className="sticky top-0 z-50 border-b border-[#D5E5DF] bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          <a
            href="/"
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
              href="/ai-automation"
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
            >
              AI Automation
            </a>

            <a
              href="/website-design"
              className="text-sm font-semibold text-[#0284C7]"
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
                Website Design & Development
              </span>

            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[#0284C7] sm:text-6xl lg:text-7xl">

              Websites Built

              <span className="block">
                For Your Business
              </span>

            </h1>

            <p className="mt-6 text-3xl font-bold text-[#4F8F3A] sm:text-4xl">
              Build trust. Attract customers. Grow online.
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#29443D] sm:text-xl">
              BTHTHM creates professional websites designed around your
              business, your customers, and your goals. Your website should
              do more than look good — it should help your business work.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="/contact"
                className="rounded-full bg-[#0284C7] px-7 py-4 text-center font-semibold text-white shadow-lg shadow-sky-200 hover:bg-[#0369A1]"
              >
                Start My Website →
              </a>

              <a
                href="#services"
                className="rounded-full border border-[#D5E5DF] bg-white px-7 py-4 text-center font-semibold text-[#0284C7] hover:border-[#38BDF8] hover:bg-[#F8FCFA]"
              >
                Explore Website Services
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
                More Than A Website
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                Your website is part of your business system.
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-[#29443D]">
                A strong website should help people understand your business,
                trust your brand, find your services, contact you, and take
                action. It can also connect directly with the other technology
                your business uses.
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

                  <span className="text-[#4F8F3A]">
                    ✓
                  </span>

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
              Website Services
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Everything you need for a professional online presence.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#29443D]">
              From a simple business website to a more advanced web
              application, we build around what your business actually needs.
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


      {/* ================= WEBSITE TYPES ================= */}

      <section className="border-t border-[#D5E5DF] bg-[#F8FCFA]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                What We Build
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                A website for where your business is today — and where it is going.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#29443D]">
                Every business is different. Your website should reflect your
                services, customers, brand, and the way you want people to
                interact with your business.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {websiteTypes.map((type) => (

                <div
                  key={type}
                  className="rounded-2xl border border-[#D5E5DF] bg-white p-6"
                >

                  <span className="text-[#4F8F3A]">
                    ✦
                  </span>

                  <p className="mt-2 font-semibold text-[#0284C7]">
                    {type}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= BUSINESS ECOSYSTEM ================= */}

      <section className="border-t border-[#D5E5DF] bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="rounded-[2rem] border border-[#D5E5DF] bg-[#F8FCFA] p-8 sm:p-12 lg:p-16">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                  Connected Technology
                </p>

                <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                  Your website can connect to your entire business ecosystem.
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#29443D]">
                  Your website doesn't have to operate by itself. It can become
                  the front door to your AI automation, software, customer
                  systems, scheduling, forms, databases, and other business
                  technology.
                </p>

                <a
                  href="/ai-automation"
                  className="mt-8 inline-flex rounded-full bg-[#0284C7] px-7 py-4 font-semibold text-white hover:bg-[#0369A1]"
                >
                  Explore AI Automation →
                </a>

              </div>


              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  "Website",
                  "AI Automation",
                  "Lead Capture",
                  "Appointments",
                  "Customer Systems",
                  "Business Software",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-2xl border border-[#D5E5DF] bg-white p-5"
                  >

                    <span className="text-[#4F8F3A]">
                      ✦
                    </span>

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


      {/* ================= PROCESS ================= */}

      <section className="border-t border-[#D5E5DF] bg-[#F8FCFA]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                Our Process
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                From idea to professional website.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#29443D]">
                We focus on understanding your business first, then design and
                build the website around your customers and goals.
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
              Questions about website design.
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

                    <span>
                      {faq.question}
                    </span>

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
              Start Your Website
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Give your business a website that works as hard as you do.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#29443D]">
              Tell us about your business, your customers, and what you want
              your website to accomplish. We'll help you plan the right online
              presence.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#0284C7] px-8 py-4 font-semibold text-white shadow-lg shadow-sky-200 hover:bg-[#0369A1]"
            >
              Start My Website →
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