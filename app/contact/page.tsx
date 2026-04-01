export default function ContactPage() {
  return (
    <div className="px-3 py-4 sm:px-5 sm:py-6">
      <div className="page-wrap space-y-6">
        <header className="neu-surface p-4 sm:p-5">
          <div className="neu-deep-inset p-7 sm:p-9 lg:p-11">
            <p className="neu-chip w-fit text-xs font-semibold uppercase tracking-[0.24em]">Contact us</p>
            <h1 className="section-title mt-5">Let’s talk about your learning platform goals.</h1>
            <div className="neu-inset mt-5 max-w-3xl p-5 sm:p-6">
              <p className="section-copy text-lg">
                Tell us what you are planning and our team will follow up with the right next step, whether you need implementation, redesign, or platform guidance.
              </p>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="neu-surface p-4 sm:p-5">
            <div className="neu-deep-inset h-full p-6 sm:p-7">
              <h2 className="text-2xl font-bold text-slate-800">Get in touch</h2>
              <div className="mt-6 space-y-4">
                {[
                  ["Email", "support@prgeeq.com"],
                  ["Phone", "+1 (800) 123-4567"],
                  ["Location", "123 PRGEEQ Ave, Learning City, USA"],
                ].map(([label, value]) => (
                  <div key={label} className="neu-panel p-3">
                    <div className="neu-inset p-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
                      <p className="mt-2 text-base text-slate-700">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form className="neu-surface p-4 sm:p-5">
            <div className="neu-deep-inset p-6 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-slate-600">
                  Name
                  <input type="text" placeholder="Your name" className="neu-input" />
                </label>
                <label className="space-y-2 text-sm font-semibold text-slate-600">
                  Email
                  <input type="email" placeholder="you@example.com" className="neu-input" />
                </label>
              </div>
              <label className="mt-4 block space-y-2 text-sm font-semibold text-slate-600">
                Message
                <textarea rows={6} placeholder="Tell us about your project" className="neu-input resize-none" />
              </label>
              <button type="submit" className="neu-button neu-button-primary mt-6 w-full px-4 py-4">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
