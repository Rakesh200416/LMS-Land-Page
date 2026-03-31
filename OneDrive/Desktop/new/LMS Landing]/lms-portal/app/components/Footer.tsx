import { Mail, Globe, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-2 pb-5 sm:px-4 sm:pb-7 lg:px-5 lg:pb-8">
      <div className="page-wrap neu-surface p-4 sm:p-5">
        <div className="neu-deep-inset p-7 sm:p-9">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="neu-panel max-w-md p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">PRGEEQ Global Solutions</p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Prestige Atlanta, 10/12, 80 Feet Rd, 1A Block, Koramangala, Bengaluru, Karnataka - 560034, India
              </p>
              <p className="mt-3 text-sm font-medium text-slate-500">contact@prgeeq.com</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[320px]">
              {[
                ["/about", "About"],
                ["/services", "Solutions"],
                ["/contact", "Contact"],
                ["/", "Home"],
              ].map(([href, label]) => (
                <Link key={label} href={href} className="neu-button justify-center px-4 py-3 text-sm text-slate-600 hover:text-slate-900">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="neu-divider my-6" />

          <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p className="text-center md:text-left">© {new Date().getFullYear()} PRGEEQ Global Solutions Pvt Ltd. All rights reserved.</p>
            <div className="flex items-center justify-center gap-3 md:justify-end">
              <a href="mailto:contact@prgeeq.com" className="neu-icon-button" aria-label="Email PRGEEQ">
                <Mail size={18} strokeWidth={2.2} />
              </a>
              <a href="https://www.prgeeq.com" target="_blank" rel="noreferrer" className="neu-icon-button" aria-label="Visit PRGEEQ website">
                <Globe size={18} strokeWidth={2.2} />
              </a>
              <a href="#" className="neu-icon-button" aria-label="View location">
                <MapPin size={18} strokeWidth={2.2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
