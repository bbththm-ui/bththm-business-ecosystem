import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Ecosystem | AI Automation, Software, Websites, Mobile Apps & SEO",

  description:
    "Explore the BTHTHM business ecosystem: AI automation, website design, custom software, mobile apps, and SEO designed to work together as connected business technology.",

  alternates: {
    canonical: "https://bththm.com/ecosystem",
  },

  openGraph: {
    title:
      "Business Ecosystem | AI Automation, Software, Websites, Mobile Apps & SEO",

    description:
      "Discover how BTHTHM connects AI automation, websites, custom software, mobile apps, and SEO into one intelligent business ecosystem.",

    url: "https://bththm.com/ecosystem",

    siteName: "BTHTHM",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Business Ecosystem | AI Automation, Software, Websites, Mobile Apps & SEO",

    description:
      "AI automation, websites, custom software, mobile apps, and SEO connected into one intelligent business ecosystem.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function EcosystemPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">

      {/* ================= NAVIGATION ================= */}

      <nav className="sticky top-0 z-50 border-b border-[#D5E5DF] bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          {/* LOGO */}

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


          {/* DESKTOP NAVIGATION */}

          <div className="hidden items-center gap-8 md:flex">

            <a
              href="/ecosystem"
              className="text-sm font-semibold text-[#0284C7]"
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


      {/* ================= HERO ================= */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
            The BTHTHM Ecosystem
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-bold leading-tight tracking-tight text-[#0284C7] sm:text-6xl lg:text-7xl">

            Everything connected.

            <span className="block text-[#4F8F3A]">
              One intelligent ecosystem.
            </span>

          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#29443D] sm:text-xl">
            Your business doesn't need more disconnected technology.
            It needs systems that work together.
          </p>

        </div>

      </section>


      {/* ================= ECOSYSTEM SERVICES ================= */}

      <section className="border-t border-[#D5E5DF] bg-[#F8FCFA]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">


            {/* AI AUTOMATION */}

            <div className="rounded-3xl border border-[#D5E5DF] bg-white p-8">

              <span className="text-sm font-bold text-[#38BDF8]">
                01
              </span>

              <h2 className="mt-6 text-3xl font-bold text-[#0284C7]">
                AI & Business Automation
              </h2>

              <p className="mt-3 font-semibold text-[#4F8F3A]">
                The intelligent brain
              </p>

              <p className="mt-5 leading-7 text-[#29443D]">
                Turn repetitive work into intelligent systems. Automate
                customer communication, lead follow-up, appointments,
                administrative work, and everyday business processes with AI.
              </p>

              <a
                href="/ai-automation"
                className="mt-6 inline-flex font-semibold text-[#0284C7] hover:text-[#0369A1]"
              >
                Explore AI Automation →
              </a>

            </div>


            {/* WEBSITE DESIGN */}

            <div className="rounded-3xl border border-[#D5E5DF] bg-white p-8">

              <span className="text-sm font-bold text-[#38BDF8]">
                02
              </span>

              <h2 className="mt-6 text-3xl font-bold text-[#0284C7]">
                Website Design
              </h2>

              <p className="mt-3 font-semibold text-[#4F8F3A]">
                Your digital front door
              </p>

              <p className="mt-5 leading-7 text-[#29443D]">
                Create a professional online presence that attracts visitors,
                builds trust, captures leads, and connects customers to your
                business.
              </p>

              <a
                href="/website-design"
                className="mt-6 inline-flex font-semibold text-[#0284C7] hover:text-[#0369A1]"
              >
                Explore Website Design →
              </a>

            </div>


            {/* CUSTOM SOFTWARE */}

            <div className="rounded-3xl border border-[#D5E5DF] bg-white p-8">

              <span className="text-sm font-bold text-[#38BDF8]">
                03
              </span>

              <h2 className="mt-6 text-3xl font-bold text-[#0284C7]">
                Custom Software
              </h2>

              <p className="mt-3 font-semibold text-[#4F8F3A]">
                Your business operating system
              </p>

              <p className="mt-5 leading-7 text-[#29443D]">
                Build software around the way your business actually works,
                connecting information, people, processes, and tools.
              </p>

              <a
                href="/custom-software"
                className="mt-6 inline-flex font-semibold text-[#0284C7] hover:text-[#0369A1]"
              >
                Explore Custom Software →
              </a>

            </div>


            {/* MOBILE APPS */}

            <div className="rounded-3xl border border-[#D5E5DF] bg-white p-8">

              <span className="text-sm font-bold text-[#38BDF8]">
                04
              </span>

              <h2 className="mt-6 text-3xl font-bold text-[#0284C7]">
                Mobile Apps
              </h2>

              <p className="mt-3 font-semibold text-[#4F8F3A]">
                Your business in their hands
              </p>

              <p className="mt-5 leading-7 text-[#29443D]">
                Give customers and teams convenient mobile access to your
                services, information, communication, and business systems.
              </p>

              <a
                href="/mobile-app-development"
                className="mt-6 inline-flex font-semibold text-[#0284C7] hover:text-[#0369A1]"
              >
                Explore Mobile Apps →
              </a>

            </div>


            {/* SEO */}

            <div className="rounded-3xl border border-[#D5E5DF] bg-white p-8">

              <span className="text-sm font-bold text-[#38BDF8]">
                05
              </span>

              <h2 className="mt-6 text-3xl font-bold text-[#0284C7]">
                SEO
              </h2>

              <p className="mt-3 font-semibold text-[#4F8F3A]">
                Your visibility engine
              </p>

              <p className="mt-5 leading-7 text-[#29443D]">
                Help your business get discovered online with search engine
                optimization designed to improve visibility, attract relevant
                visitors, and build long-term organic growth.
              </p>

              <a
                href="/seo"
                className="mt-6 inline-flex font-semibold text-[#0284C7] hover:text-[#0369A1]"
              >
                Explore SEO →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONNECTED ECOSYSTEM ================= */}

      <section className="border-t border-[#D5E5DF] bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="rounded-3xl border border-[#D5E5DF] bg-[#F8FCFA] p-8 text-center sm:p-12 lg:p-16">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              Connected Technology
            </p>

            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Your technology should work together.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#29443D]">
              Your website can attract customers. AI can automate
              communication. Software can manage your business. Mobile apps
              can keep your customers and team connected.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl border border-[#D5E5DF] bg-white p-5">
                <p className="font-semibold text-[#0284C7]">
                  Website
                </p>
              </div>

              <div className="rounded-2xl border border-[#D5E5DF] bg-white p-5">
                <p className="font-semibold text-[#0284C7]">
                  AI Automation
                </p>
              </div>

              <div className="rounded-2xl border border-[#D5E5DF] bg-white p-5">
                <p className="font-semibold text-[#0284C7]">
                  Business Software
                </p>
              </div>

              <div className="rounded-2xl border border-[#D5E5DF] bg-white p-5">
                <p className="font-semibold text-[#0284C7]">
                  Mobile Apps
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="border-t border-[#D5E5DF] bg-[#F8FCFA]">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">

          <h2 className="text-4xl font-bold text-[#0284C7] sm:text-5xl">
            Ready to build your ecosystem?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#29443D]">
            Let's connect the technology your business needs and build a
            smarter way to work.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#0284C7] px-7 py-4 font-semibold text-white shadow-lg shadow-sky-200 hover:bg-[#0369A1]"
          >
            Get Started →
          </a>

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
              AI Automation · Software · Web · Mobile · SEO
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