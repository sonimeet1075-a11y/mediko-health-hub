import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { HeroBanner, SectionLabel } from "@/components/ui/Section";
import { caseStudies } from "@/data/site";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.study.title ?? "Case Study"} — Mediko` },
      { name: "description", content: loaderData?.study.excerpt ?? "Mediko case study." },
    ],
  }),
  component: CaseDetail,
  notFoundComponent: () => <div className="container-x py-32 text-center"><h2 className="h2">Case study not found</h2></div>,
});

function CaseDetail() {
  const { study } = Route.useLoaderData();
  return (
    <>
      <HeroBanner title={study.title} breadcrumb={[{ label: "Home", to: "/" }, { label: "Case Studies", to: "/case-studies" }, { label: study.title }]} />
      <section className="section-y">
        <div className="container-x max-w-4xl">
          <img src={`https://placehold.co/1100x520/d0e8ff/3d68f5?text=${encodeURIComponent(study.category)}`} alt={study.title} className="rounded-2xl w-full" />
          <div className="mt-8">
            <SectionLabel>{study.category}</SectionLabel>
            <h2 className="h2">{study.title}</h2>
            <p className="mt-4 text-[17px]">{study.excerpt}</p>

            <div className="grid sm:grid-cols-3 gap-5 my-10">
              {[{l:"Specialty",v:study.category},{l:"Duration",v:"6 Weeks"},{l:"Outcome",v:"Full Recovery"}].map((s) => (
                <div key={s.l} className="card-elev p-5">
                  <div className="text-sm">{s.l}</div>
                  <div className="h4 mt-1">{s.v}</div>
                </div>
              ))}
            </div>

            <h3 className="h3">The Challenge</h3>
            <p className="mt-3">Our team faced a complex case requiring a coordinated, multi-disciplinary approach combining diagnostics, surgery and long-term rehabilitation support.</p>

            <h3 className="h3 mt-8">Our Approach</h3>
            <ul className="mt-3 space-y-2">
              {["Full diagnostic workup with advanced imaging","Personalized treatment plan with the patient","Specialist team coordination across departments","Ongoing follow-up and recovery monitoring"].map((b) => (
                <li key={b} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[var(--color-brand)] shrink-0 mt-0.5" /> {b}</li>
              ))}
            </ul>

            <h3 className="h3 mt-8">The Outcome</h3>
            <p className="mt-3">The patient achieved a full recovery and returned to their regular activities ahead of schedule. Six-month follow-up confirmed stable, sustained results.</p>

            <Link to="/contact-us" className="btn-primary mt-10">Discuss Your Case <ArrowRight className="w-4 h-4 arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
