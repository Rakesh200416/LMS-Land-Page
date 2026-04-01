"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-spacing px-3 sm:px-5 pb-8 sm:pb-10">
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="neu-surface p-4 sm:p-5"
        >
          <div className="neu-deep-inset p-7 sm:p-9 lg:p-11">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="neu-panel p-6 sm:p-7">
                <p className="neu-chip w-fit text-xs font-semibold uppercase tracking-[0.24em]">Ready to upgrade?</p>
                <h2 className="section-title mt-5">Let’s give your learning ecosystem a cleaner, more modern home.</h2>
                <p className="section-copy mt-4 max-w-2xl">
                  Move from generic training pages to a professional experience that feels trustworthy, easy to navigate, and built for growth.
                </p>
              </div>

              <div className="neu-panel p-4 sm:p-5">
                <div className="neu-deep-inset space-y-4 p-5 sm:p-6">
                  <div className="neu-inset p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Consultation timeline</p>
                    <p className="mt-2 text-2xl font-bold text-slate-800">24-hour response</p>
                  </div>
                  <Link href="/contact" className="neu-button neu-button-primary w-full px-6 py-4">
                    Get a free consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/services" className="neu-button w-full px-6 py-4 text-slate-700">
                    View services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
