"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart3, Play, Sparkles } from "lucide-react";

const stats = [
  { label: "Active learners", value: "12k+", tone: "text-sky-600" },
  { label: "Completion lift", value: "73%", tone: "text-violet-600" },
  { label: "Setup time", value: "4 days", tone: "text-orange-500" },
];

export default function Hero() {
  return (
    <section className="section-spacing px-3 sm:px-5">
      <div className="page-wrap">
        <div className="grid items-center gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="neu-surface p-4 sm:p-5"
          >
            <div className="neu-deep-inset relative overflow-hidden p-7 sm:p-9 lg:p-11">
              <div className="absolute right-4 top-4 h-28 w-28 rounded-full bg-[radial-gradient(circle,_rgba(92,147,255,0.2),_transparent_70%)] blur-xl" />
              <div className="relative">
                <p className="neu-chip w-fit text-xs font-semibold uppercase tracking-[0.28em]">
                  <Sparkles className="h-4 w-4" />
                  Built for high-clarity learning operations
                </p>
                <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-slate-800 sm:text-5xl lg:text-6xl">
                  Modern LMS experiences with clean dashboards, stronger engagement, and faster rollout.
                </h1>
                <div className="neu-inset mt-6 max-w-2xl p-5 sm:p-6">
                  <p className="section-copy text-lg sm:text-xl">
                    PRGEEQ gives teams a premium learning platform that feels polished, performs smoothly, and keeps instructors,
                    learners, and administrators focused on outcomes.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="neu-button neu-button-primary px-6 py-4">
                    Book a demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/services" className="neu-button px-6 py-4 text-slate-700">
                    Explore solutions
                  </Link>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div key={item.label} className="neu-panel p-2">
                      <div className="neu-inset px-5 py-5 text-center">
                        <p className={`text-2xl font-extrabold ${item.tone}`}>{item.value}</p>
                        <p className="mt-1 text-sm font-medium text-slate-500">{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="neu-surface p-4 sm:p-5"
          >
            <div className="neu-deep-inset grid gap-5 p-5 sm:p-6">
              <div className="neu-panel flex items-center justify-between p-4 sm:p-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Platform health</p>
                  <h2 className="mt-2 text-3xl font-bold text-slate-800">73% completion growth</h2>
                </div>
                <div className="neu-icon-wrap text-slate-600">
                  <BarChart3 className="h-6 w-6" />
                </div>
              </div>

              <div className="neu-panel p-4 sm:p-5">
                <div className="neu-deep-inset p-6">
                  <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full bg-[conic-gradient(from_110deg,_#5d92ff_0deg,_#7f5cff_240deg,_#d6e2f0_240deg,_#d6e2f0_360deg)] shadow-[inset_12px_12px_24px_rgba(162,177,196,0.22),inset_-10px_-10px_22px_rgba(255,255,255,0.96)]">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[linear-gradient(145deg,_#eef5fb,_#dbe6f2)] shadow-[12px_12px_22px_rgba(155,171,192,0.2),-10px_-10px_20px_rgba(255,255,255,0.96)]">
                      <div className="text-center">
                        <p className="text-4xl font-extrabold text-slate-800">73%</p>
                        <p className="text-sm font-medium text-slate-500">course completion</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Live analytics", "82%", "bg-cyan-400"],
                  ["Adaptive paths", "54%", "bg-amber-400"],
                  ["Mobile learning", "91%", "bg-pink-400"],
                ].map(([label, value, color]) => (
                  <div key={label} className="neu-panel p-3 text-center">
                    <div className="neu-deep-inset mx-auto flex h-32 w-18 items-end rounded-[26px] p-2">
                      <div className={`${color} w-full rounded-[18px]`} style={{ height: value === "82%" ? "82%" : value === "54%" ? "54%" : "91%" }} />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-slate-700">{label}</p>
                    <p className="text-base font-bold text-slate-500">{value}</p>
                  </div>
                ))}
              </div>

              <div className="neu-panel flex items-center justify-between gap-4 p-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Weekly walkthrough</p>
                  <p className="mt-1 text-xl font-bold text-slate-800">See the admin dashboard in action</p>
                </div>
                <div className="neu-button h-14 w-14 rounded-full p-0 text-slate-700">
                  <Play className="h-5 w-5 fill-current" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
