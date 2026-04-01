"use client";

import { motion } from "framer-motion";
import { Rocket, Layers, ShieldCheck, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast setup",
    description: "Launch branded learning environments in days with guided migration and prebuilt workflows.",
  },
  {
    icon: Layers,
    title: "Custom course flows",
    description: "Create modular journeys with smart enrollment, milestones, and certifications.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise security",
    description: "Protect teams with SSO, role-based access, audit history, and trusted governance controls.",
  },
  {
    icon: TrendingUp,
    title: "Actionable insights",
    description: "Track retention, completion, and performance with dashboards built for decision-making.",
  },
];

export default function Features() {
  return (
    <section className="section-spacing px-3 sm:px-5">
      <div className="page-wrap neu-surface p-4 sm:p-5">
        <div className="neu-deep-inset p-7 sm:p-9 lg:p-11">
          <div className="neu-panel p-5 sm:p-6 max-w-3xl">
            <p className="neu-chip w-fit text-xs font-semibold uppercase tracking-[0.24em]">Core platform features</p>
            <h2 className="section-title mt-5">Everything your team needs to run learning at scale.</h2>
            <p className="section-copy mt-4">
              Each part of the platform is designed to feel clear, calm, and easy to manage while still giving teams serious operational control.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="neu-panel p-4"
              >
                <div className="neu-deep-inset h-full p-5">
                  <div className="neu-icon-wrap text-blue-600">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-800">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{feature.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
