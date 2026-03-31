"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya R.",
    role: "Head of Learning, EduTech",
    quote: "PRGEEQ transformed our training stack in less than a quarter and made the entire learner experience feel premium.",
  },
  {
    name: "Raj K.",
    role: "Chief People Officer, FinSolutions",
    quote: "The dashboards are clean, the setup was fast, and the platform feels much more expensive than what we expected.",
  },
  {
    name: "Ayesha L.",
    role: "L&D Manager, TechForAll",
    quote: "Our teams finally have a learning portal that looks modern, reads clearly, and gives us useful performance insight.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-spacing px-3 sm:px-5">
      <div className="page-wrap neu-surface p-4 sm:p-5">
        <div className="neu-deep-inset p-7 sm:p-9 lg:p-11">
          <div className="neu-panel p-5 sm:p-6 max-w-3xl">
            <p className="neu-chip w-fit text-xs font-semibold uppercase tracking-[0.24em]">Client feedback</p>
            <h2 className="section-title mt-5">What teams notice first is the clarity.</h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="neu-panel p-4"
              >
                <div className="neu-deep-inset h-full p-5">
                  <div className="neu-chip w-fit text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Trusted partner
                  </div>
                  <p className="mt-5 text-base leading-8 text-slate-600">“{item.quote}”</p>
                  <div className="neu-divider my-5" />
                  <p className="font-semibold text-slate-800">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
