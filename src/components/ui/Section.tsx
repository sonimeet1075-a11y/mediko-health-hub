import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[var(--color-brand)]">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" fill="currentColor"/>
      </svg>
      <span className="uppercase tracking-wider text-sm font-semibold" style={{ color: light ? "#9bb8ff" : "var(--color-brand)" }}>
        {children}
      </span>
    </div>
  );
}

export function HeroBanner({ title, breadcrumb }: { title: string; breadcrumb: { label: string; to?: string }[] }) {
  return (
    <section className="relative bg-[var(--color-ink)] text-white overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-10" />
      <div className="absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-[var(--color-brand)]/20 blur-3xl" />
      <div className="container-x relative py-24 lg:py-32">
        <h1 className="h1 text-white max-w-3xl">{title}</h1>
        <nav className="mt-6 flex items-center gap-2 text-sm text-white/70">
          {breadcrumb.map((b, i) => (
            <span key={i} className="flex items-center gap-2">
              {b.to ? <Link to={b.to} className="hover:text-white">{b.label}</Link> : <span className="text-white">{b.label}</span>}
              {i < breadcrumb.length - 1 && <ChevronRight className="w-4 h-4" />}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
