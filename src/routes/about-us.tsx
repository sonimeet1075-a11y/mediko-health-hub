import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Headphones, Stethoscope, ClipboardList, Microscope, Activity, Plus, Minus } from "lucide-react";
import { HeroBanner, SectionLabel } from "@/components/ui/Section";
import { Marquee, Newsletter, DoctorsSection, BlogSection } from "@/components/sections/Common";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Mediko — Our Mission, Doctors and Process" },
      { name: "description", content: "Learn how Mediko delivers patient-first healthcare with experienced doctors, modern facilities and a 24/7 emergency team." },
      { property: "og:title", content: "About Mediko" },
      { property: "og:description", content: "Patient-first healthcare with experienced doctors and modern facilities." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: 2085, suffix: "+", label: "Incredible Doctors" },
  { value: 988, suffix: "+", label: "Treatment Rooms" },
  { value: 1988, suffix: "+", label: "Years of Experience" },
  { value: 125150, suffix: "+", label: "Practitioners" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !fired.current) {
          fired.current = true;
          const start = performance.now();
          const dur = 2000;
          const step = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            setN(Math.floor(value * (0.2 + 0.8 * (1 - Math.pow(1 - p, 3)))));
            if (p < 1) requestAnimationFrame(step);
            else setN(value);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref} className="text-4xl lg:text-5xl font-extrabold text-[var(--color-brand)] font-heading">{n.toLocaleString()}{suffix}</span>;
}

function StatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s) => (
        <div key={s.label} className="bg-white rounded-2xl p-6 text-center border border-[var(--color-card-border)] shadow-[0_4px_30px_rgba(61,104,245,0.06)]">
          <Counter value={s.value} suffix={s.suffix} />
          <div className="mt-2 font-semibold text-[var(--color-ink)]">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

const accordionItems = [
  { title: "Who We Are", body: "Mediko is a modern healthcare network combining specialist clinics, diagnostic labs and a 24/7 emergency team under one trusted brand." },
  { title: "Patient-Centered Care", body: "Every plan is built around the patient — their history, preferences, work and family life — not around procedures." },
  { title: "Personalized Treatment", body: "We use AI-supported diagnostics and real-time monitoring to tailor treatment, then measure outcomes that matter to you." },
];

function Accordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-4">
      {accordionItems.map((it, i) => (
        <div key={it.title} className="rounded-2xl border border-[var(--color-card-border)] bg-white overflow-hidden">
          <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between p-5 text-left">
            <span className="h4">{it.title}</span>
            <span className="w-9 h-9 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[var(--color-brand)]">{open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}</span>
          </button>
          {open === i && <div className="px-5 pb-5 -mt-2 text-[15px]">{it.body}</div>}
        </div>
      ))}
    </div>
  );
}

const processSteps = [
  { icon: Headphones, title: "Listen & Understand", desc: "We start by hearing your story in full." },
  { icon: ClipboardList, title: "Create a Tailored Plan", desc: "A treatment plan built around your goals." },
  { icon: Microscope, title: "Checkup & Test", desc: "Modern diagnostics confirm the right path." },
  { icon: Activity, title: "Support & Empower", desc: "Ongoing support so you stay in control." },
];

function AboutPage() {
  return (
    <>
      <HeroBanner title="We Are Dedicated to Supporting You" breadcrumb={[{ label: "Home", to: "/" }, { label: "About Us" }]} />

      <section className="section-y">
        <div className="container-x"><StatsRow /></div>
      </section>

      <section className="bg-[var(--color-section)] section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="https://placehold.co/500x400/d0e8ff/3d68f5?text=Mediko+Care" alt="" className="rounded-2xl w-full" />
            <img src="https://placehold.co/320x230/f0f8ff/3d68f5?text=Mission" alt="" className="absolute -bottom-10 -right-4 sm:right-4 w-2/3 rounded-2xl border-4 border-white shadow-xl" />
          </div>
          <div>
            <SectionLabel>About Mediko</SectionLabel>
            <h2 className="h2">Our Mission Is Mental Wellness and Personalized Care</h2>
            <p className="mt-4">For two decades, Mediko has combined evidence-based medicine with deep human care. Our specialists treat the person, not just the diagnosis.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-[15px]">
              {["Experienced Specialists","Same-Day Appointments","Transparent Pricing","Insurance Friendly"].map((f) => (
                <li key={f} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[var(--color-brand)] shrink-0 mt-0.5" /> {f}</li>
              ))}
            </ul>
            <Link to="/contact-us" className="btn-primary mt-8">Get In Touch <ArrowRight className="w-4 h-4 arrow" /></Link>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src="https://placehold.co/560x460/e8f0ff/3d68f5?text=App+Features" alt="" className="rounded-2xl w-full" />
          <div>
            <SectionLabel>Application Features</SectionLabel>
            <h2 className="h2">Innovative Healthcare Solutions for a Better Future</h2>
            <div className="mt-8"><Accordion /></div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-section)] section-y">
        <div className="container-x">
          <div className="text-center mb-12">
            <SectionLabel>How We Work?</SectionLabel>
            <h2 className="h2">Our Patient Care Approach Explained</h2>
          </div>
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] border-t-2 border-dashed border-[var(--color-brand)]/30" />
            {processSteps.map((s, i) => (
              <div key={s.title} className="relative bg-white rounded-2xl p-6 text-center border border-[var(--color-card-border)] shadow-[0_4px_30px_rgba(61,104,245,0.06)]">
                <div className="mx-auto w-12 h-12 rounded-full bg-[var(--color-brand)] text-white flex items-center justify-center font-bold mb-4">{i + 1}</div>
                <s.icon className="w-10 h-10 mx-auto text-[var(--color-brand)]" />
                <h4 className="h4 mt-4">{s.title}</h4>
                <p className="mt-2 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>Customer Support</SectionLabel>
            <h2 className="h2">Always Here When You Need Us Most</h2>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <span className="w-12 h-12 rounded-xl bg-[var(--color-accent)] text-[var(--color-brand)] flex items-center justify-center shrink-0"><Stethoscope className="w-6 h-6" /></span>
                <div><h4 className="h4">Quality Support</h4><p className="mt-1 text-[15px]">Care coordinators help you navigate every step of treatment.</p></div>
              </div>
              <div className="flex gap-4">
                <span className="w-12 h-12 rounded-xl bg-[var(--color-accent)] text-[var(--color-brand)] flex items-center justify-center shrink-0"><Headphones className="w-6 h-6" /></span>
                <div><h4 className="h4">24/7 Nurse Staff</h4><p className="mt-1 text-[15px]">Trained nurses available around the clock for advice and urgent concerns.</p></div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://placehold.co/500x380/d0e8ff/3d68f5?text=Support+1" alt="" className="rounded-2xl w-full" />
            <img src="https://placehold.co/300x220/f0f8ff/3d68f5?text=Support+2" alt="" className="absolute -bottom-8 -left-4 sm:left-0 w-2/3 rounded-2xl border-4 border-white shadow-xl" />
          </div>
        </div>
      </section>

      <DoctorsSection />
      <Marquee />
      <BlogSection />
      <Newsletter />
    </>
  );
}
