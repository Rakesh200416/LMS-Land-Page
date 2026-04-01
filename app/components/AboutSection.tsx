"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="section-spacing px-3 sm:px-5">
      <div className="page-wrap grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="neu-surface p-4 sm:p-5"
        >
          <div className="neu-deep-inset h-full p-7 sm:p-9">
            <p className="neu-chip w-fit text-xs font-semibold uppercase tracking-[0.24em]">About PRGEEQ</p>
            <h2 className="section-title mt-5">A learning platform built to feel premium and perform simply.</h2>
            <div className="neu-inset mt-5 p-5">
              <p className="section-copy">
                PRGEEQ helps organizations replace cluttered training systems with a calmer, more effective experience.
                Since 2022, we have focused on clean workflows, measurable growth, and dependable support for every rollout.
              </p>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                ["Adaptive learning", "Personalized paths that flex by role, pace, and learner behavior."],
                ["Global support", "Responsive onboarding and client success coverage across regions."],
                ["Cloud deployment", "Fast launches with secure infrastructure and low maintenance overhead."],
              ].map(([title, description]) => (
                <div key={title} className="neu-panel p-3">
                  <div className="neu-inset h-full p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="neu-surface p-4 sm:p-5"
        >
          <div className="neu-deep-inset overflow-hidden rounded-[28px] p-4">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
              width={1200}
              height={800}
              alt="Team collaborating"
              className="h-full min-h-[320px] w-full rounded-[24px] object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
