export default function AboutPage() {
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
              href="/#services"
              className="text-sm text-slate-300 hover:text-white"
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
              className="text-sm text-cyan-400"
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
              About BTHTHM
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Your business.
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Your technology. Your advantage.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              BTHTHM combines AI, automation, software, websites, and mobile
              technology to help businesses work smarter, serve customers
              faster, and build systems designed around the way they operate.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="border-t border-white/10 bg-[#080b18]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Who we are
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Technology that works for your business.
              </h2>
            </div>

            <div>
              <p className="leading-8 text-slate-400">
                BTHTHM helps businesses use modern technology to solve real
                problems. We focus on practical solutions that can reduce
                repetitive work, improve customer experiences, organize
                business processes, and create new opportunities for growth.
              </p>

              <p className="mt-6 leading-8 text-slate-400">
                From AI-powered automation and custom websites to software and
                mobile applications, we build digital solutions around the
                specific needs of each business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              What we do
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              One technology partner for your digital needs.
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              We bring together AI, automation, web development, software,
              and mobile technology so businesses can build the digital tools
              they actually need.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              [
                "01",
                "AI Business Automation",
                "Automate repetitive tasks, customer conversations, lead management, appointments, and business workflows.",
              ],
              [
                "02",
                "Custom Website Design",
                "Create modern, responsive websites designed to represent your business and turn visitors into customers.",
              ],
              [
                "03",
                "Custom Software",
                "Build software around your business processes, systems, data, and specific operational needs.",
              ],
              [
                "04",
                "Mobile App Development",
                "Create intuitive mobile applications that help businesses connect with customers and improve operations.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <span className="text-sm text-cyan-400">{number}</span>

                <h3 className="mt-8 text-2xl font-bold">{title}</h3>

                <p className="mt-4 leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-white/10 bg-[#080b18]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 p-8 sm:p-12 lg:p-16">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Our mission
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl">
              Make powerful technology practical for businesses.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Technology should solve problems, not create more complexity.
              Our goal is to help businesses use modern digital tools in a
              practical way—so teams can spend less time on repetitive work
              and more time growing the business.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Our approach
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Technology built around you.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-2xl font-bold">Understand</h3>
              <p className="mt-4 leading-7 text-slate-400">
                We start by understanding your business, goals, customers,
                challenges, and existing systems.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-2xl font-bold">Build</h3>
              <p className="mt-4 leading-7 text-slate-400">
                We design and build technology around your specific needs
                rather than forcing your business into a generic solution.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-2xl font-bold">Grow</h3>
              <p className="mt-4 leading-7 text-slate-400">
                We create solutions that can evolve as your business grows and
                your technology needs change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#080b18]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12 lg:p-16">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Let's talk
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Let's build something smarter.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
              Tell us about your business, your challenges, or the technology
              you want to build. Let's explore how BTHTHM can help.
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