export default function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "AI Business Automation",
      description:
        "Automate repetitive business tasks with intelligent AI systems that save time, reduce costs, and help your team focus on higher-value work.",
      features: [
        "AI Voice Agents",
        "Customer Conversations",
        "Lead & Sales Automation",
        "Appointment Automation",
        "Business Workflow Automation",
      ],
    },
    {
      number: "02",
      title: "Custom Website Design",
      description:
        "Modern, fast, mobile-friendly websites designed to give your business a professional online presence and turn visitors into customers.",
      features: [
        "Responsive Website Design",
        "Modern User Experience",
        "Business & Corporate Websites",
        "Contact & Lead Forms",
        "SEO-Friendly Structure",
      ],
    },
    {
      number: "03",
      title: "Custom Software",
      description:
        "Software built around your business processes, helping your team work more efficiently and connecting the tools you use every day.",
      features: [
        "Business Management Systems",
        "Custom Dashboards",
        "Workflow Systems",
        "Business Integrations",
        "Custom Internal Tools",
      ],
    },
    {
      number: "04",
      title: "Mobile App Development",
      description:
        "Intuitive mobile applications designed to help businesses connect with customers, streamline operations, and create new digital experiences.",
      features: [
        "iOS Applications",
        "Android Applications",
        "Business Mobile Apps",
        "Customer Applications",
        "Mobile User Experiences",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="/" className="text-xl font-bold tracking-tight">
            BTHT<span className="text-cyan-400">HM</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="/services"
              className="text-sm text-cyan-400"
            >
              Services
            </a>

            <a
              href="/#process"
              className="text-sm text-slate-300 hover:text-white"
            >
              Process
            </a>

            <a
              href="/about"
              className="text-sm text-slate-300 hover:text-white"
            >
              About
            </a>

            <a
              href="/#contact"
              className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              What we do
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Technology built
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                around your business.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              BTHTHM combines AI automation, website design, custom software,
              and mobile app development to create technology that helps
              businesses work smarter and grow.
            </p>

            <div className="mt-10">
              <a
                href="/#contact"
                className="inline-block rounded-full bg-cyan-400 px-7 py-4 font-semibold text-slate-950 hover:bg-cyan-300"
              >
                Discuss Your Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-white/10 bg-[#080b18]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Our services
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Digital solutions designed to move your business forward.
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Whether you need to automate repetitive work, build a new
              website, develop custom software, or create a mobile app, we
              build technology around your goals.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.number}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05] sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-cyan-400">
                    {service.number}
                  </span>

                  <span className="text-xl text-slate-500 transition group-hover:text-cyan-400">
                    ↗
                  </span>
                </div>

                <h3 className="mt-10 text-3xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-8 space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/10 text-xs text-cyan-400">
                        ✓
                      </span>

                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="/#contact"
                  className="mt-8 inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Discuss this service →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BTHTHM */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Why BTHTHM
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Technology should make business easier.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-400">
                We don't believe businesses should have to adapt themselves
                around technology. We build digital solutions around the way
                your business actually works.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-xl font-bold">Built around your needs</h3>
                <p className="mt-2 text-slate-400">
                  Every business is different. Your technology should be too.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-xl font-bold">Focused on results</h3>
                <p className="mt-2 text-slate-400">
                  We focus on solutions that save time, improve efficiency,
                  and create better customer experiences.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-xl font-bold">Designed to grow</h3>
                <p className="mt-2 text-slate-400">
                  Your technology can evolve as your business grows and your
                  needs change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#080b18]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 p-8 text-center sm:p-12 lg:p-16">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Start your project
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Have an idea? Let's build it.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
              Tell us what you're trying to accomplish and we'll help you
              explore the right technology solution for your business.
            </p>

            <a
              href="/#contact"
              className="mt-8 inline-block rounded-full bg-cyan-400 px-7 py-4 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Start a Conversation →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 BTHTHM. All rights reserved.</p>
          <p>AI Automation · Software · Web · Mobile</p>
        </div>
      </footer>
    </main>
  );
}