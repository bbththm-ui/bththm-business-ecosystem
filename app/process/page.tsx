export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#D5E5DF] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="/"
            className="font-bold tracking-tight text-[#0284C7]"
          >
            <span className="text-xl">BTHTHM</span>
            <span className="ml-2 hidden text-xs font-semibold uppercase tracking-[0.18em] sm:inline">
              Business Ecosystem
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
            >
              Ecosystem
            </a>

            <a
              href="/#automation"
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
            >
              AI Automation
            </a>

            <a
              href="/process"
              className="text-sm font-medium text-[#0284C7]"
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
              href="/#contact"
              className="rounded-full bg-[#0284C7] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0369A1]"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              Our Process
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-[#0284C7] sm:text-6xl lg:text-7xl">
              From business problem
              <span className="block text-[#4F8F3A]">
                to intelligent ecosystem.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#29443D] sm:text-xl">
              We start with your business, understand what is slowing you
              down, identify opportunities, and build technology that works
              together.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="border-t border-[#D5E5DF] bg-[#F8FCFA]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">

            <div className="rounded-3xl border border-[#D5E5DF] bg-white p-8">
              <span className="text-sm font-bold text-[#38BDF8]">
                01
              </span>

              <h2 className="mt-6 text-3xl font-bold text-[#0284C7]">
                Discover
              </h2>

              <p className="mt-4 leading-8 text-[#29443D]">
                We learn how your business operates, what your team does every
                day, where customers interact with you, and what challenges
                are taking the most time.
              </p>

              <ul className="mt-6 space-y-3 text-[#29443D]">
                <li>✦ Understand your business</li>
                <li>✦ Identify repetitive tasks</li>
                <li>✦ Find operational challenges</li>
                <li>✦ Understand your goals</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#D5E5DF] bg-white p-8">
              <span className="text-sm font-bold text-[#38BDF8]">
                02
              </span>

              <h2 className="mt-6 text-3xl font-bold text-[#0284C7]">
                Design
              </h2>

              <p className="mt-4 leading-8 text-[#29443D]">
                Once we understand your business, we design the right
                technology ecosystem around your needs.
              </p>

              <ul className="mt-6 space-y-3 text-[#29443D]">
                <li>✦ Plan AI automation</li>
                <li>✦ Design customer experiences</li>
                <li>✦ Connect business systems</li>
                <li>✦ Choose the right technology</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#D5E5DF] bg-white p-8">
              <span className="text-sm font-bold text-[#38BDF8]">
                03
              </span>

              <h2 className="mt-6 text-3xl font-bold text-[#0284C7]">
                Build
              </h2>

              <p className="mt-4 leading-8 text-[#29443D]">
                We build the technology, connect the systems, test the
                workflows, and make sure everything works together.
              </p>

              <ul className="mt-6 space-y-3 text-[#29443D]">
                <li>✦ Build automation</li>
                <li>✦ Develop websites and software</li>
                <li>✦ Connect systems</li>
                <li>✦ Test and refine</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#D5E5DF] bg-white p-8">
              <span className="text-sm font-bold text-[#38BDF8]">
                04
              </span>

              <h2 className="mt-6 text-3xl font-bold text-[#4F8F3A]">
                Launch & Grow
              </h2>

              <p className="mt-4 leading-8 text-[#29443D]">
                Your ecosystem goes live, and we continue improving it as your
                business changes and grows.
              </p>

              <ul className="mt-6 space-y-3 text-[#29443D]">
                <li>✦ Launch your systems</li>
                <li>✦ Monitor performance</li>
                <li>✦ Improve automation</li>
                <li>✦ Scale as you grow</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Why This Process */}
      <section className="border-t border-[#D5E5DF] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              Why this process
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Technology should fit your business.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#29443D]">
              We don't believe in adding technology just because it is new.
              Every system should have a purpose and make your business
              better.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-[#D5E5DF] bg-[#F8FCFA] p-8">
              <h3 className="text-2xl font-bold text-[#0284C7]">
                Business First
              </h3>

              <p className="mt-4 leading-7 text-[#29443D]">
                We focus on your business goals before choosing technology.
              </p>
            </div>

            <div className="rounded-3xl border border-[#D5E5DF] bg-[#F8FCFA] p-8">
              <h3 className="text-2xl font-bold text-[#0284C7]">
                Connected Systems
              </h3>

              <p className="mt-4 leading-7 text-[#29443D]">
                Your website, automation, software, and other systems can work
                together.
              </p>
            </div>

            <div className="rounded-3xl border border-[#D5E5DF] bg-[#F8FCFA] p-8">
              <h3 className="text-2xl font-bold text-[#4F8F3A]">
                Built to Grow
              </h3>

              <p className="mt-4 leading-7 text-[#29443D]">
                Your technology ecosystem can evolve as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#D5E5DF] bg-[#F8FCFA]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-[#F8FCFA] p-8 text-center sm:p-12 lg:p-16">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              Ready to start?
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0284C7] sm:text-5xl">
              Let's build your ecosystem.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#29443D]">
              Tell us about your business and we'll help you discover where
              AI, automation, software, web, and mobile technology can help.
            </p>

            <a
              href="/#contact"
              className="mt-8 inline-flex rounded-full bg-[#0284C7] px-7 py-4 font-semibold text-white hover:bg-[#0369A1]"
            >
              Get Started →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#D5E5DF] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-bold text-[#0284C7]">BTHTHM</p>
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