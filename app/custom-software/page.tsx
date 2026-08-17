import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development",
  description:
    "BTHTHM builds custom software designed around your business processes, customers, employees, data, and connected technology systems.",
  alternates: {
    canonical: "https://bththm.com/custom-software",
  },
  openGraph: {
    title: "Custom Software Development | BTHTHM",
    description:
      "Custom business software designed around the way your business actually works.",
    url: "https://bththm.com/custom-software",
    siteName: "BTHTHM",
    type: "website",
  },
};

const solutions = [
  {
    number: "01",
    title: "Business Management Software",
    text: "Create software that brings important business operations, information, customers, tasks, and workflows into one connected system.",
  },
  {
    number: "02",
    title: "Customer Portals",
    text: "Give customers secure access to accounts, services, documents, appointments, communication, and other important information.",
  },
  {
    number: "03",
    title: "Internal Business Systems",
    text: "Build tools around the way your employees actually work, helping teams organize information and complete everyday processes.",
  },
  {
    number: "04",
    title: "Dashboards & Reporting",
    text: "Turn business information into useful dashboards and reports so you can understand what's happening and make better decisions.",
  },
  {
    number: "05",
    title: "Workflow Systems",
    text: "Replace disconnected spreadsheets and repetitive processes with software designed around your actual workflows.",
  },
  {
    number: "06",
    title: "Connected Business Software",
    text: "Connect your custom software with websites, mobile apps, AI, automation, databases, and other systems.",
  },
];

const possibilities = [
  "Customer management systems",
  "Employee management systems",
  "Business dashboards",
  "Scheduling systems",
  "Inventory systems",
  "Customer portals",
  "Internal workflow tools",
  "Reporting systems",
];

const features = [
  "User accounts",
  "Secure authentication",
  "Customer management",
  "Employee management",
  "Dashboards",
  "Search and filtering",
  "Reports",
  "Notifications",
  "Database integration",
  "API integrations",
  "AI features",
  "Automated workflows",
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We learn how your business operates, where information lives, what your team does, and what problems you want the software to solve.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We map the workflows, users, features, data, integrations, and technology needed for your custom system.",
  },
  {
    number: "03",
    title: "Build",
    text: "We develop the software, connect the necessary systems, test the experience, and refine the application.",
  },
  {
    number: "04",
    title: "Launch & Grow",
    text: "Your software launches with a foundation that can evolve as your business changes and grows.",
  },
];

const faqs = [
  {
    question: "Why should I build custom software instead of using existing software?",
    answer:
      "Existing software can be excellent, but sometimes your business has workflows or requirements that don't fit well into generic tools. Custom software can be designed around your specific processes.",
  },
  {
    question: "Can custom software replace spreadsheets?",
    answer:
      "In many situations, yes. If spreadsheets are being used to manage customers, schedules, inventory, workflows, or reporting, a custom system may provide a more connected and scalable solution.",
  },
  {
    question: "Can my custom software connect to other systems?",
    answer:
      "Yes. When appropriate integrations or APIs are available, custom software can connect with websites, mobile apps, databases, AI systems, automation tools, and other business platforms.",
  },
  {
    question: "Can AI be added to custom software?",
    answer:
      "Yes. AI can be incorporated into custom software when it provides a practical benefit, such as intelligent search, customer assistance, document processing, recommendations, or workflow automation.",
  },
];

export default function CustomSoftwarePage() {
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
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
            >
              Websites
            </a>

            <a
              href="/custom-software"
              className="text-sm font-semibold text-[#0284C7]"
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
                Custom Software Development
              </span>

            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[#0284C7] sm:text-6xl lg:text-7xl">

              Software Built

              <span className="block">
                Around Your Business
              </span>

            </h1>

            <p className="mt-6 text-3xl font-bold text-[#4F8F3A] sm:text-4xl">
              Your business. Your workflow. Your system.
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#29443D] sm:text-xl">
              BTHTHM creates custom software designed around the way your
              business actually works — connecting people, information,
              processes, customers, and technology in one intelligent system.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="/contact"
                className="rounded-full bg-[#0284C7] px-7 py-4 text-center font-semibold text-white shadow-lg shadow-sky-200 hover:bg-[#0369A1]"
              >
                Discuss My Software Project →
              </a>

              <a
                href="#solutions"
                className="rounded-full border border-[#D5E5DF] bg-white px-7 py-4 text-center font-semibold text-[#0284C7] hover:border-[#38BDF8] hover:bg-[#F8FCFA]"
              >
                Explore Software Solutions
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
                Business Software
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                Stop forcing your business to fit your software.
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-[#29443D]">
                Your business has its own customers, processes, people, data,
                and goals. Custom software allows those things to work together
                instead of forcing your team to work around limitations in
                generic software.
              </p>

            </div>

          </div>


          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {possibilities.map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-[#D5E5DF] bg-white p-6"
              >

                <div className="flex gap-3">

                  <span className="text-[#4F8F3A]">
                    ✓
                  </span>

                  <span className="font-medium text-[#29443D]">
                    {item}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= SOLUTIONS ================= */}

      <section
        id="solutions"
        className="border-t border-[#D5E5DF] bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              Custom Software Solutions
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Technology designed for the way you work.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#29443D]">
              We can build software around the specific problems,
              opportunities, and workflows inside your business.
            </p>

          </div>


          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {solutions.map((solution) => (

              <div
                key={solution.number}
                className="group rounded-3xl border border-[#D5E5DF] bg-[#F8FCFA] p-7 transition hover:-translate-y-1 hover:border-[#38BDF8] hover:bg-white hover:shadow-lg"
              >

                <div className="flex items-start justify-between">

                  <span className="text-sm font-bold text-[#38BDF8]">
                    {solution.number}
                  </span>

                  <span className="text-xl text-[#38BDF8]">
                    ↗
                  </span>

                </div>

                <h3 className="mt-7 text-2xl font-bold text-[#0284C7]">
                  {solution.title}
                </h3>

                <p className="mt-4 leading-7 text-[#29443D]">
                  {solution.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="border-t border-[#D5E5DF] bg-[#F8FCFA]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                Software Features
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                Build exactly what your business needs.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#29443D]">
                Your custom system can include the features, workflows,
                integrations, and automation that make the biggest difference
                to your business.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="rounded-2xl border border-[#D5E5DF] bg-white p-5"
                >

                  <div className="flex items-center gap-3">

                    <span className="text-[#4F8F3A]">
                      ✦
                    </span>

                    <span className="font-semibold text-[#0284C7]">
                      {feature}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= AI CONNECTION ================= */}

      <section className="border-t border-[#D5E5DF] bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="rounded-[2rem] border border-[#D5E5DF] bg-[#F8FCFA] p-8 sm:p-12 lg:p-16">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                  Software + AI + Automation
                </p>

                <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                  Your software can become part of an intelligent ecosystem.
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#29443D]">
                  Custom software doesn't have to work alone. It can connect
                  with AI automation, your website, mobile applications,
                  databases, customer systems, and other business tools.
                </p>

                <a
                  href="/ai-automation"
                  className="mt-8 inline-flex rounded-full bg-[#0284C7] px-7 py-4 font-semibold text-white hover:bg-[#0369A1]"
                >
                  Explore AI Automation →
                </a>

              </div>


              <div className="rounded-3xl border border-[#D5E5DF] bg-white p-7 shadow-sm">

                <div className="text-center">

                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
                    BTHTHM
                  </div>

                  <div className="mt-2 text-2xl font-bold text-[#4F8F3A]">
                    Connected Business System
                  </div>

                </div>


                <div className="mt-8 space-y-3">

                  {[
                    "Custom Software",
                    "AI Automation",
                    "Website",
                    "Mobile App",
                    "Business Data",
                  ].map((item) => (

                    <div
                      key={item}
                      className="rounded-xl border border-[#D5E5DF] bg-[#F8FCFA] p-4 text-center"
                    >

                      <span className="font-semibold text-[#0284C7]">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

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
                From business problem to working software.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#29443D]">
                We start with your business instead of starting with
                technology. The goal is to create software that solves a
                meaningful problem.
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
              Questions about custom software.
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

                    <span className="text-xl text-[#38BDF8] transition group-open:rotate-45">
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
              Start Your Software Project
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Let's build software around the way your business works.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#29443D]">
              Tell us what your business does, what takes too much time, and
              where your current tools are getting in the way.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#0284C7] px-8 py-4 font-semibold text-white shadow-lg shadow-sky-200 hover:bg-[#0369A1]"
            >
              Discuss My Software Project →
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