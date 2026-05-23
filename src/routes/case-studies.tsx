import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeroBanner, SectionLabel } from "@/components/ui/Section";
import { caseStudies } from "@/data/site";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Mediko" },
      { name: "description", content: "Real patient outcomes and stories from across Mediko's specialty teams." },
      { property: "og:title", content: "Mediko Case Studies" },
      { property: "og:description", content: "Real patient outcomes from Mediko." },
    ],
  }),
  component: CaseStudiesList,
});

function CaseStudiesList() {
  return (
    <>
      <HeroBanner title="Our Case Studies" breadcrumb={[{ label: "Home", to: "/" }, { label: "Case Studies" }]} />
      <section className="section-y">
        <div className="container-x">
          <div className="text-center mb-12">
            <SectionLabel>Patient Outcomes</SectionLabel>
            <h2 className="h2 max-w-2xl mx-auto">Stories of Healing, Recovery and Renewed Health</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <Link key={c.slug} to="/case-studies/$slug" params={{ slug: c.slug }} className="card-elev overflow-hidden flex flex-col group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={`https://placehold.co/600x375/d0e8ff/3d68f5?text=${encodeURIComponent(c.category)}`} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="self-start px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent)] text-[var(--color-brand)] mb-3">{c.category}</span>
                  <h4 className="h4">{c.title}</h4>
                  <p className="mt-2 text-[15px] flex-1">{c.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[var(--color-brand)] font-semibold">Read More <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
