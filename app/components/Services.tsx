"use client";

import { motion } from "framer-motion";
import { Server, Cpu, Shield, Globe } from "lucide-react";

const services = [
  { icon: Server, title: "Implementation", desc: "Tailored LMS architecture, migration planning, and launch support from day one." },
  { icon: Cpu, title: "Customization", desc: "Refined workflows, brand styling, and integrations shaped around your operating model." },
  { icon: Shield, title: "Security", desc: "Strong compliance controls, enterprise access layers, and protected learner records." },
  { icon: Globe, title: "Global support", desc: "Continuous optimization and responsive service for distributed organizations." },
];

export default function Services() {
  return (
    <section className="section-spacing px-3 sm:px-5">
      <div className="page-wrap neu-surface p-4 sm:p-5">
        <div className="neu-deep-inset p-7 sm:p-9 lg:p-11">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="neu-panel p-5 sm:p-6 max-w-3xl">
              <p className="neu-chip w-fit text-xs font-semibold uppercase tracking-[0.24em]">Service layers</p>
              <h2 className="section-title mt-5">Professional support wrapped around the platform.</h2>
              <p className="section-copy mt-4">
                We pair the software with the strategic and operational help teams need to launch faster and keep improving after go-live.
              </p>
            </div>
            <div className="neu-panel p-3">
              <div className="neu-inset px-5 py-4 text-sm font-medium text-slate-600">
                End-to-end delivery from setup to long-term optimization
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="neu-panel p-4"
              >
                <div className="neu-deep-inset h-full p-5">
                  <div className="neu-icon-wrap text-blue-600">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-800">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
