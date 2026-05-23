import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Eye, Smile, HeartPulse, Brain, Baby, Apple, FlaskConical, Sparkles, Activity } from "lucide-react";
import { HeroBanner, SectionLabel } from "@/components/ui/Section";
import { Newsletter } from "@/components/sections/Common";
import { services } from "@/data/site";

const iconMap: Record<string, any> = { Eye, Smile, HeartPulse, Brain, Baby, Apple, FlaskConical, Sparkles, Activity };

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Mediko" },
      { name: "description", content: "Explore the full range of Mediko medical services: cardiology, dental care, neurology, prenatal care, nutrition and more." },
      { property: "og:title", content: "Mediko Services" },
      { property: "og:description", content: "All medical services offered at Mediko." },
    ],
  }),
  component: ServicesIndex,
  notFoundComponent: () => <div className="container-x py-32 text-center"><h2 className="h2">Service not found</h2></div>,
});

function ServicesIndex() {
  return (
    <>
      <HeroBanner title="Our Medical Services" breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }]} />
      <section className="section-y">
        <div className="container-x">
          <div className="text-center mb-12">
            <SectionLabel>What We Offer</SectionLabel>
            <h2 className="h2 max-w-2xl mx-auto">Comprehensive Care Across Every Specialty</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const I = iconMap[s.icon];
              return (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="card-elev p-7 group">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-section)] group-hover:bg-[var(--color-brand)] flex items-center justify-center transition">
                    <I className="w-7 h-7 text-[var(--color-brand)] group-hover:text-white transition" />
                  </div>
                  <h3 className="h4 mt-5">{s.name}</h3>
                  <p className="mt-2 text-[15px]">{s.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-[var(--color-brand)] font-semibold">Learn More <ArrowRight className="w-4 h-4" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}

export { iconMap };
