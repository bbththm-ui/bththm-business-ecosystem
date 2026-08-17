"use client";

import { useState } from "react";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
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
    } catch (error) {
      console.error("Contact form error:", error);
    }
  };

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
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
            >
              Ecosystem
            </a>

            <a
              href="/automation"
              className="text-sm font-medium text-[#0284C7] hover:text-[#0369A1]"
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

          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-[#0284C7] md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>

        </div>

        {/* MOBILE NAVIGATION */}

        {menuOpen && (
          <div className="border-t border-[#D5E5DF] bg-[#F8FCFA] px-6 py-5 md:hidden">

            <div className="flex flex-col gap-4">

              <a
                href="/ecosystem"
                className="font-medium text-[#0284C7]"
                onClick={() => setMenuOpen(false)}
              >
                Ecosystem
              </a>

              <a
                href="/automation"
                className="font-medium text-[#0284C7]"
                onClick={() => setMenuOpen(false)}
              >
                AI Automation
              </a>

              <a
                href="/process"
                className="font-medium text-[#0284C7]"
                onClick={() => setMenuOpen(false)}
              >
                Process
              </a>

              <a
                href="/about"
                className="font-medium text-[#0284C7]"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>

              <a
                href="/contact"
                className="font-medium text-[#0284C7]"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>

            </div>

          </div>
        )}

      </nav>


      {/* ================= CONTACT HERO ================= */}

      <section className="bg-[#F8FCFA]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">

            {/* LEFT SIDE */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
                Free Automation Consultation
              </p>

              <h1 className="mt-4 text-5xl font-bold leading-tight text-[#0284C7] sm:text-6xl">
                Let's build your business ecosystem.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#29443D]">
                Tell us about your business, what takes too much time,
                and what you'd like to improve. We'll help you explore
                the right technology ecosystem.
              </p>


              {/* BENEFITS */}

              <div className="mt-10 space-y-5">

                <div className="flex gap-4">
                  <span className="text-xl font-bold text-[#4F8F3A]">
                    ✓
                  </span>

                  <div>
                    <p className="font-semibold text-[#0284C7]">
                      Identify repetitive tasks
                    </p>

                    <p className="mt-1 text-sm text-[#29443D]">
                      Find the work that could be automated or simplified.
                    </p>
                  </div>
                </div>


                <div className="flex gap-4">
                  <span className="text-xl font-bold text-[#4F8F3A]">
                    ✓
                  </span>

                  <div>
                    <p className="font-semibold text-[#0284C7]">
                      Find automation opportunities
                    </p>

                    <p className="mt-1 text-sm text-[#29443D]">
                      Discover where AI can save time and improve efficiency.
                    </p>
                  </div>
                </div>


                <div className="flex gap-4">
                  <span className="text-xl font-bold text-[#4F8F3A]">
                    ✓
                  </span>

                  <div>
                    <p className="font-semibold text-[#0284C7]">
                      Connect your business systems
                    </p>

                    <p className="mt-1 text-sm text-[#29443D]">
                      Create technology that works together instead of separately.
                    </p>
                  </div>
                </div>


                <div className="flex gap-4">
                  <span className="text-xl font-bold text-[#4F8F3A]">
                    ✓
                  </span>

                  <div>
                    <p className="font-semibold text-[#0284C7]">
                      Explore practical AI solutions
                    </p>

                    <p className="mt-1 text-sm text-[#29443D]">
                      Find solutions that actually fit your business.
                    </p>
                  </div>
                </div>

              </div>

            </div>


            {/* RIGHT SIDE FORM */}

            <div className="rounded-3xl border border-[#D5E5DF] bg-white p-6 shadow-sm sm:p-8">

              <h2 className="text-2xl font-bold text-[#0284C7]">
                Tell us about your business
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#29443D]">
                Fill out the form and we'll get back to you.
              </p>


              <form
                className="mt-7 space-y-4"
                onSubmit={handleSubmit}
              >

                {/* NAME */}

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-[#D5E5DF] bg-white px-5 py-4 text-[#0F172A] outline-none placeholder:text-[#6B7F78] focus:border-[#38BDF8]"
                />


                {/* EMAIL */}

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="w-full rounded-xl border border-[#D5E5DF] bg-white px-5 py-4 text-[#0F172A] outline-none placeholder:text-[#6B7F78] focus:border-[#38BDF8]"
                />


                {/* SERVICE */}

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


                {/* MESSAGE */}

                <textarea
                  name="message"
                  placeholder="Tell us about your business and what you'd like to improve..."
                  required
                  rows={7}
                  className="w-full rounded-xl border border-[#D5E5DF] bg-white px-5 py-4 text-[#0F172A] outline-none placeholder:text-[#6B7F78] focus:border-[#38BDF8]"
                />


                {/* SUCCESS MESSAGE */}

                {formSubmitted && (
                  <div className="rounded-xl border border-sky-200 bg-sky-50 px-5 py-4 text-sm leading-6 text-[#0284C7]">
                    Thanks! Your request has been received. We'll be in touch soon.
                  </div>
                )}


                {/* SUBMIT */}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#0284C7] px-6 py-4 font-semibold text-white shadow-lg shadow-sky-100 transition hover:bg-[#0369A1]"
                >
                  Request a Consultation →
                </button>

              </form>

            </div>

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