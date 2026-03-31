import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="px-3 py-4 sm:px-5 sm:py-6">
      <div className="page-wrap space-y-6">
        <header className="neu-surface p-4 sm:p-5">
          <div className="neu-deep-inset p-7 sm:p-9 lg:p-11">
            <p className="neu-chip w-fit text-xs font-semibold uppercase tracking-[0.24em]">About us</p>
            <h1 className="section-title mt-5">PRGEEQ builds learning products that feel calm, useful, and modern.</h1>
            <div className="neu-inset mt-5 max-w-3xl p-5 sm:p-6">
              <p className="section-copy text-lg">
                Our mission is to help instructors, administrators, and learners work inside an LMS that is easier to understand,
                more professional to present, and better at turning activity into measurable results.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="neu-surface p-4 sm:p-5">
            <div className="neu-deep-inset h-full p-6 sm:p-7">
              <h2 className="text-2xl font-bold text-slate-800">Vision</h2>
              <div className="neu-inset mt-5 p-5">
                <p className="text-base leading-8 text-slate-600">
                  To create a future-ready LMS where continuous learning is intuitive, measurable, and accessible for everyone.
                  We believe progress grows faster when the product experience feels simple and polished.
                </p>
              </div>
            </div>
          </div>

          <div className="neu-surface p-4 sm:p-5">
            <div className="neu-deep-inset h-full p-6 sm:p-7">
              <h2 className="text-2xl font-bold text-slate-800">Values</h2>
              <div className="mt-5 grid gap-3">
                {[
                  "Learner-centered design",
                  "Data-led decisions",
                  "Scalability with trust",
                  "Accessibility and performance",
                ].map((item) => (
                  <div key={item} className="neu-panel p-3">
                    <div className="neu-inset px-4 py-3 text-slate-600">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="neu-surface p-4 sm:p-5">
          <div className="neu-deep-inset p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-slate-800">What makes PRGEEQ different?</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Adaptive course recommendations based on learner behavior and progress.",
                "Centralized calendars, milestones, and progress visibility for managers.",
                "Secure role-based access with strong enterprise security patterns.",
                "API-first integrations for HR, analytics, and broader internal systems.",
              ].map((item) => (
                <div key={item} className="neu-panel p-4">
                  <p className="neu-inset p-5 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/contact" className="neu-button neu-button-primary px-6 py-4">Talk to our team</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
