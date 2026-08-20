import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services | Search Engine Optimization for Businesses",
  description:
    "BTHTHM helps businesses improve their search visibility with SEO strategy, technical optimization, website content, local SEO, and search-focused website improvements.",

  alternates: {
    canonical: "https://bththm.com/seo",
  },

  openGraph: {
    title: "SEO Services | Search Engine Optimization for Businesses",
    description:
      "Improve your business visibility in search with SEO strategy, technical optimization, content, local SEO, and website improvements.",
    url: "https://bththm.com/seo",
    siteName: "BTHTHM",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SEO Services | Search Engine Optimization for Businesses",
    description:
      "SEO strategy, technical optimization, content, local SEO, and search-focused website improvements for growing businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    number: "01",
    title: "SEO Strategy",
    text: "Build a search strategy around your business, services, customers, competitors, and the searches that matter to your growth.",
  },
  {
    number: "02",
    title: "Technical SEO",
    text: "Improve the technical foundation of your website so search engines can better understand, crawl, and index your pages.",
  },
  {
    number: "03",
    title: "On-Page SEO",
    text: "Optimize page structure, headings, titles, descriptions, content, internal links, and other important on-page elements.",
  },
  {
    number: "04",
    title: "Local SEO",
    text: "Help local businesses improve their visibility when potential customers search for products and services in their area.",
  },
  {
    number: "05",
    title: "SEO Content",
    text: "Create useful, search-focused website content that answers customer questions and supports your business goals.",
  },
  {
    number: "06",
    title: "SEO & Website Optimization",
    text: "Connect SEO with website design, performance, user experience, lead generation, and the rest of your business technology.",
  },
];

const benefits = [
  "Improve your visibility in search engines",
  "Help potential customers find your business",
  "Build long-term organic search presence",
  "Create better website structure and content",
  "Improve local search visibility",
  "Connect SEO with your broader business strategy",
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We learn about your business, services, customers, competitors, and current online presence.",
  },
  {
    number: "02",
    title: "Analyze",
    text: "We review your website, search visibility, technical foundation, content, and opportunities for improvement.",
  },
  {
    number: "03",
    title: "Optimize",
    text: "We improve the areas that can strengthen your website's search visibility, usability, and technical foundation.",
  },
  {
    number: "04",
    title: "Improve",
    text: "SEO is an ongoing process. We continue identifying opportunities as your business, website, and search landscape evolve.",
  },
];

const faqs = [
  {
    question: "What is SEO?",
    answer:
      "SEO, or search engine optimization, is the process of improving a website so search engines can better understand it and potential customers can find it through relevant searches.",
  },
  {
    question: "Can SEO help my local business?",
    answer:
      "Yes. Local SEO can help businesses improve their visibility when people search for relevant products and services in their geographic area.",
  },
  {
    question: "Do you only work on new websites?",
    answer:
      "No. SEO can be incorporated into a new website or used to improve an existing website's structure, content, technical foundation, and search visibility.",
  },
  {
    question: "Does SEO work with website design?",
    answer:
      "Yes. SEO and website design work well together. A website can be designed with search visibility, usability, performance, content structure, and lead generation in mind from the beginning.",
  },
  {
    question: "How long does SEO take?",
    answer:
      "SEO is a long-term process and results can vary depending on the website, industry, competition, location, and starting point. The goal is to build sustainable improvements rather than rely on short-term tactics.",
  },
];

export default function SEOPage() {
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
              href="/ecosystem"
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
            >
              Ecosystem
            </a>

            <a
              href="/ai-automation"
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
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
              href="/seo"
              className="text-sm font-semibold text-[#0284C7]"
            >
              SEO
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
                Search Engine Optimization
              </span>

            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[#0284C7] sm:text-6xl lg:text-7xl">

              Get Found

              <span className="block">
                By The Right Customers
              </span>

            </h1>

            <p className="mt-6 text-3xl font-bold text-[#4F8F3A] sm:text-4xl">
              Improve visibility. Build trust. Grow organically.
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#29443D] sm:text-xl">
              BTHTHM helps businesses improve their search visibility with
              practical SEO strategies, technical optimization, useful
              content, local search improvements, and websites built with
              search engines and customers in mind.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="/contact"
                className="rounded-full bg-[#0284C7] px-7 py-4 text-center font-semibold text-white shadow-lg shadow-sky-200 hover:bg-[#0369A1]"
              >
                Start My SEO → 
              </a>

              <a
                href="#services"
                className="rounded-full border border-[#D5E5DF] bg-white px-7 py-4 text-center font-semibold text-[#0284C7] hover:border-[#38BDF8] hover:bg-[#F8FCFA]"
              >
                Explore SEO Services
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
                More Than Rankings
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                SEO should help your business get discovered.
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-[#29443D]">
                Search visibility is only part of the goal. Your website also
                needs to communicate clearly, build trust, provide a good
                experience, and give visitors a clear path toward becoming
                customers.
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
              SEO Services
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Build a stronger search presence.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#29443D]">
              We focus on the technical, content, local, and strategic
              elements that help your website become more useful to both
              customers and search engines.
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


      {/* ================= BUSINESS ECOSYSTEM ================= */}

      <section className="border-t border-[#D5E5DF] bg-[#F8FCFA]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="rounded-[2rem] border border-[#D5E5DF] bg-white p-8 sm:p-12 lg:p-16">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                  Connected Technology
                </p>

                <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                  SEO works better when your website and business systems work together.
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#29443D]">
                  Your website, SEO strategy, lead generation, AI automation,
                  software, and customer systems can work together as one
                  connected business ecosystem.
                </p>

                <a
                  href="/website-design"
                  className="mt-8 inline-flex rounded-full bg-[#0284C7] px-7 py-4 font-semibold text-white hover:bg-[#0369A1]"
                >
                  Explore Website Design →
                </a>

              </div>


              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  "SEO",
                  "Website",
                  "Local Search",
                  "Content",
                  "Lead Generation",
                  "AI Automation",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-2xl border border-[#D5E5DF] bg-[#F8FCFA] p-5"
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

      <section className="border-t border-[#D5E5DF] bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                Our SEO Process
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                A practical approach to search optimization.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#29443D]">
                We focus on understanding your business first, then identify
                and improve the SEO opportunities that matter most.
              </p>

            </div>


            <div className="space-y-4">

              {process.map((step) => (

                <div
                  key={step.number}
                  className="flex gap-5 rounded-2xl border border-[#D5E5DF] bg-[#F8FCFA] p-6"
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

      <section className="border-t border-[#D5E5DF] bg-[#F8FCFA]">

        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Questions about SEO.
            </h2>

          </div>


          <div className="mt-14 space-y-4">

            {faqs.map((faq) => (

              <details
                key={faq.question}
                className="group rounded-2xl border border-[#D5E5DF] bg-white p-6"
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

      <section className="border-t border-[#D5E5DF] bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-[#F8FCFA] p-8 text-center sm:p-12 lg:p-16">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              Improve Your Search Visibility
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Help the right customers find your business.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#29443D]">
              Tell us about your business, your website, and your goals. We'll
              help you identify the right SEO opportunities.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#0284C7] px-8 py-4 font-semibold text-white shadow-lg shadow-sky-200 hover:bg-[#0369A1]"
            >
              Start My SEO →
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
              AI Automation · SEO · Software · Web · Mobile
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