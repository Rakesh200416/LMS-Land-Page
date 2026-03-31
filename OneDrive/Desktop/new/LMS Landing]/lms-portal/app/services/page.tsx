import Link from "next/link";

const serviceItems = [
  { title: "Platform Setup", body: "Fast onboarding with tailored course structures, roles, branding, and governance." },
  { title: "Custom Integrations", body: "Connect HRIS, SSO, CRM, analytics tools, and content repositories without messy workarounds." },
  { title: "Training & Adoption", body: "Instructor and learner enablement programs designed to boost usage and long-term confidence." },
  { title: "Enterprise Support", body: "Dedicated SLAs, regular review cycles, and proactive performance optimization." },
];

export default function ServicesPage() {
  return (
    <div className="px-3 py-4 sm:px-5 sm:py-6">
      <div className="page-wrap space-y-6">
        <header className="neu-surface p-4 sm:p-5">
          <div className="neu-deep-inset p-7 sm:p-9 lg:p-11">
            <p className="neu-chip w-fit text-xs font-semibold uppercase tracking-[0.24em]">Services</p>
            <h1 className="section-title mt-5">Delivery support that keeps your LMS rollout smooth.</h1>
            <div className="neu-inset mt-5 max-w-3xl p-5 sm:p-6">
              <p className="section-copy text-lg">
                From implementation to ongoing optimization, PRGEEQ provides the technical and strategic support needed to align the platform with your organization.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {serviceItems.map((item) => (
            <article key={item.title} className="neu-surface p-4 sm:p-5">
              <div className="neu-deep-inset h-full p-6 sm:p-7">
                <h2 className="text-2xl font-bold text-slate-800">{item.title}</h2>
                <div className="neu-inset mt-5 p-5">
                  <p className="text-base leading-8 text-slate-600">{item.body}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="neu-surface p-4 sm:p-5">
          <div className="neu-deep-inset grid gap-5 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="neu-panel p-5 sm:p-6">
              <h2 className="text-2xl font-bold text-slate-800">Need hands-on support?</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Our professional services team can scope requirements, guide migrations, and help your deployment stay future-ready as your training needs grow.
              </p>
            </div>
            <Link href="/contact" className="neu-button neu-button-primary w-full px-6 py-4 lg:w-auto">
              Reach out to sales
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
