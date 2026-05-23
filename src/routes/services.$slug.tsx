import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Plus, Minus, Eye, Smile, HeartPulse, Brain, Baby, Apple, FlaskConical, Sparkles, Activity } from "lucide-react";
import { HeroBanner, SectionLabel } from "@/components/ui/Section";
import { services } from "@/data/site";

const iconMap: Record<string, any> = { Eye, Smile, HeartPulse, Brain, Baby, Apple, FlaskConical, Sparkles, Activity };

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = services.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return { service: s };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.service.name ?? "Service"} — Mediko` },
      { name: "description", content: loaderData?.service.desc ?? "Mediko service detail." },
    ],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h2 className="h2">Service not found</h2>
      <Link to="/services" className="btn-primary mt-6">All services</Link>
    </div>
  ),
});

const faqs = [
  { q: "How do I book my first appointment?", a: "Use the contact form or call our team — we'll match you with the right specialist." },
  { q: "Do you accept insurance?", a: "Yes — we work with all major providers. Bring your card to your first visit." },
  { q: "What does the first visit include?", a: "A full consultation, history review, and a tailored treatment plan." },
];

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const I = iconMap[service.icon];
  const [open, setOpen] = useState(0);
  return (
    <>
      <HeroBanner title={service.name} breadcrumb={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.name }]} />
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[260px_1fr] gap-10">
          <aside className="lg:sticky lg:top-32 h-fit">
            <div className="card-elev p-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition ${s.slug === service.slug ? "bg-[var(--color-brand)] text-white" : "hover:bg-[var(--color-section)]"}`}
                >
                  <span className="font-semibold text-sm">{s.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </aside>
          <div>
            <img src={`https://placehold.co/900x440/d0e8ff/3d68f5?text=${encodeURIComponent(service.name)}`} alt={service.name} className="rounded-2xl w-full" />
            <div className="mt-8 inline-flex items-center gap-3">
              <span className="w-12 h-12 rounded-xl bg-[var(--color-accent)] flex items-center justify-center"><I className="w-6 h-6 text-[var(--color-brand)]" /></span>
              <SectionLabel>Service Detail</SectionLabel>
            </div>
            <h2 className="h2 mt-1">Modern {service.name} at Mediko</h2>
            <p className="mt-4">{service.desc} Our team combines evidence-based protocols with personal care so every patient gets a plan that fits their life.</p>
            <p className="mt-4">From your first consultation to follow-up support, we coordinate every step. You always know what comes next, who's involved, and what to expect.</p>

            <h3 className="h3 mt-10">Key Benefits</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {["Board-certified specialists","Same-week scheduling","Advanced diagnostic tools","Transparent treatment plans","Insurance-friendly","Ongoing patient support"].map((b) => (
                <li key={b} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[var(--color-brand)] shrink-0 mt-0.5" /> {b}</li>
              ))}
            </ul>

            <h3 className="h3 mt-10">Frequently Asked Questions</h3>
            <div className="mt-4 space-y-3">
              {faqs.map((f, i) => (
                <div key={f.q} className="rounded-2xl border border-[var(--color-card-border)] bg-white">
                  <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between p-5 text-left">
                    <span className="font-semibold text-[var(--color-ink)]">{f.q}</span>
                    <span className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[var(--color-brand)]">{open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}</span>
                  </button>
                  {open === i && <div className="px-5 pb-5 -mt-1 text-[15px]">{f.a}</div>}
                </div>
              ))}
            </div>

            <Link to="/contact-us" className="btn-primary mt-10">Book This Service <ArrowRight className="w-4 h-4 arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
