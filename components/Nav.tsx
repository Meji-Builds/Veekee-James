"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { nav } from "@/lib/content";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-oyster/85 backdrop-blur-md">
      <div className="mx-auto flex h-[86px] max-w-[1220px] items-center justify-between px-6 sm:px-10">
        <Link href="#top" className="leading-none" onClick={() => setOpen(false)}>
          <b className="font-display block text-[1.32rem] font-semibold tracking-[0.12em]">
            VEEKEE JAMES
          </b>
          <small className="mt-1 block text-[0.58rem] uppercase tracking-[0.42em] text-ink-soft">
            Fashion Academy
          </small>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-1 text-[0.76rem] uppercase tracking-[0.14em]"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden lg:block">
            <Button href="#admissions" className="!py-3 !px-6">
              Apply now
            </Button>
          </div>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-ink lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div
        className={`flex flex-col gap-1 overflow-hidden border-b border-line bg-oyster px-6 transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        {[...nav, { label: "Apply now", href: "#admissions" }].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
            className="border-b border-line py-3 text-[0.82rem] uppercase tracking-[0.14em] last:border-none"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
