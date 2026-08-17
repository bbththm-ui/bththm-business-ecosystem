import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development",
  description:
    "BTHTHM builds custom mobile apps for businesses, customers, employees, services, communication, and connected business systems.",
  alternates: {
    canonical: "https://bththm.com/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development | BTHTHM",
    description:
      "Custom mobile applications designed around your business, customers, employees, and connected technology ecosystem.",
    url: "https://bththm.com/mobile-app-development",
    siteName: "BTHTHM",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Customer Mobile Apps",
    text: "Give your customers convenient access to your services, information, communication, appointments, accounts, and more.",
  },
  {
    number: "02",
    title: "Business Apps",
    text: "Create mobile tools that help your team manage customers, information, tasks, schedules, and everyday business operations.",
  },
  {
    number: "03",
    title: "Employee Apps",
    text: "Give employees mobile access to the information and tools they need while working in the field or away from the office.",
  },
  {
    number: "04",
    title: "Booking & Scheduling Apps",
    text: "Make it easier for customers to request services, schedule appointments, receive reminders, and manage their bookings.",
  },
  {
    number: "05",
    title: "Customer Portals",
    text: "Create secure mobile experiences where customers can view information, communicate with your team, and manage their accounts.",
  },
  {
    number: "06",
    title: "Connected Mobile Systems",
    text: "Connect your mobile application with websites, custom software, databases, AI automation, and other business systems.",
  },
];

const appIdeas = [
  "Customer service applications",
  "Appointment and booking apps",
  "Employee and field-service apps",
  "Business management apps",
  "Customer account portals",
  "Membership applications",
  "Retail and e-commerce apps",
  "Communication and notification apps",
];

const features = [
  "User accounts",
  "Secure authentication",
  "Push notifications",
  "Appointment scheduling",
  "Customer communication",
  "Payments and subscriptions",
  "Business dashboards",
  "Database integration",
  "AI-powered features",
  "Custom workflows",
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your customers, employees, business goals, workflows, and what the mobile application needs to accomplish.",
  },
  {
    number: "02",
    title: "Design",
    text: "We plan the user experience, screens, features, navigation, data, integrations, and overall application structure.",
  },
  {
    number: "03",
    title: "Build",
    text: "We develop, test, connect, and refine the application so it provides a reliable experience across supported devices.",
  },
  {
    number: "04",
    title: "Launch & Improve",
    text: "We launch the application and create a foundation that can continue evolving as your business and customers grow.",
  },
];

const faqs = [
  {
    question: "Why would my business need a mobile app?",
    answer:
      "A mobile app can give customers or employees a faster, more convenient way to access services, information, communication, scheduling, accounts, and business tools.",
  },
  {
    question: "Can the mobile app connect to my existing business software?",
    answer:
      "Yes. When the existing systems provide suitable integrations or APIs, a mobile application can be designed to work with your website, software, databases, customer systems, and other tools.",
  },
  {
    question: "Can you build an app for employees?",
    answer:
      "Yes. Employee and field-service applications can provide teams with mobile access to tasks, customers, schedules, documents, communication, and other business information.",
  },
  {
    question: "Can AI be included in a mobile application?",
    answer:
      "Yes. AI features can be incorporated where they provide a practical benefit, such as intelligent customer assistance, recommendations, information retrieval, or business automation.",
  },
  {
    question: "Can my mobile app grow with my business?",
    answer:
      "Yes. We can design the application with future features and integrations in mind so the system can evolve as your business grows.",
  },
];

export default function MobileAppDevelopmentPage() {
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
              className="text-sm font-medium text-[#0284Aun] hover:text-[#0369A1]"
            >
              Software
            </a>

            <a
              href="/mobile-app-development"
              className="text-sm font-semibold text-[#0284C7]"
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
                Mobile App Development
              </span>

            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[#0284C7] sm:text-6xl lg:text-7xl">

              Your Business

              <span className="block">
                In Their Hands
              </span>

            </h1>

            <p className="mt-6 text-3xl font-bold text-[#4F8F3A] sm:text-4xl">
              Mobile experiences built around your business.
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#29443D] sm:text-xl">
              BTHTHM builds custom mobile applications that help businesses
              connect with customers, support employees, simplify processes,
              and bring important business services directly to mobile devices.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="/contact"
                className="rounded-full bg-[#0284C7] px-7 py-4 text-center font-semibold text-white shadow-lg shadow-sky-200 hover:bg-[#0369A1]"
              >
                Discuss My App Project →
              </a>

              <a
                href="#services"
                className="rounded-full border border-[#D5E5DF] bg-white px-7 py-4 text-center font-semibold text-[#0284C7] hover:border-[#38BDF8] hover:bg-[#F8FCFA]"
              >
                Explore App Services
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
                Mobile Business Technology
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                Give customers and teams a better way to connect with your business.
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-[#29443D]">
                A mobile application can turn important business services into
                convenient experiences that customers and employees can access
                wherever they are.
              </p>

            </div>

          </div>


          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {appIdeas.map((idea) => (

              <div
                key={idea}
                className="rounded-2xl border border-[#D5E5DF] bg-white p-6"
              >

                <div className="flex gap-3">

                  <span className="text-[#4F8F3A]">
                    ✓
                  </span>

                  <span className="font-medium text-[#29443D]">
                    {idea}
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
              Mobile App Services
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Build an app that does something valuable.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#29443D]">
              Your application should solve a real business or customer
              problem. We focus on useful experiences instead of technology
              for technology's sake.
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


      {/* ================= FEATURES ================= */}

      <section className="border-t border-[#D5E5DF] bg-[#F8FCFA]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                App Features
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                Build the features your customers and team actually need.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#29443D]">
                Every application is different. We can plan the features and
                workflows around your specific business requirements.
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


      {/* ================= ECOSYSTEM ================= */}

      <section className="border-t border-[#D5E5DF] bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="rounded-[2rem] border border-[#D5E5DF] bg-[#F8FCFA] p-8 sm:p-12 lg:p-16">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                  Connected Ecosystem
                </p>

                <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
                  Your mobile app can connect to the rest of your business.
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#29443D]">
                  A mobile application doesn't have to stand alone. It can
                  become part of your larger BTHTHM ecosystem alongside AI,
                  automation, websites, custom software, databases, and
                  customer systems.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                  <a
                    href="/ai-automation"
                    className="rounded-full bg-[#0284C7] px-7 py-4 text-center font-semibold text-white hover:bg-[#0369A1]"
                  >
                    Explore AI Automation →
                  </a>

                  <a
                    href="/custom-software"
                    className="rounded-full border border-[#D5E5DF] bg-white px-7 py-4 text-center font-semibold text-[#0284C7] hover:border-[#38BDF8]"
                  >
                    Explore Custom Software
                  </a>

                </div>

              </div>


              <div className="rounded-3xl border border-[#D5E5DF] bg-white p-7 shadow-sm">

                <div className="text-center">

                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
                    BTHTHM
                  </div>

                  <div className="mt-2 text-2xl font-bold text-[#4F8F3A]">
                    Mobile Business Ecosystem
                  </div>

                </div>


                <div className="mt-8 grid grid-cols-2 gap-3">

                  {[
                    "Mobile App",
                    "AI",
                    "Website",
                    "Software",
                    "Customers",
                    "Data",
                  ].map((item) => (

                    <div
                      key={item}
                      className="rounded-xl border border-[#D5E5DF] bg-[#F8FCFA] p-4 text-center"
                    >

                      <span className="text-sm font-semibold text-[#0284C7]">
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
                From idea to useful mobile experience.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#29443D]">
                We start with the purpose of the application and build from
                there, focusing on usability, reliability, and business value.
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
              Questions about mobile apps.
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
              Start Your App Project
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Let's turn your mobile app idea into a useful business tool.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#29443D]">
              Tell us what you want your app to accomplish, who will use it,
              and how it should connect to your business.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#0284C7] px-8 py-4 font-semibold text-white shadow-lg shadow-sky-200 hover:bg-[#0369A1]"
            >
              Discuss My App Project →
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