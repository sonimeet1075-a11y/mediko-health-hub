import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, Play, X, Star, Eye, Smile, HeartPulse, Brain, Baby, Apple, FlaskConical, Sparkles, Activity, CheckCircle2, Facebook, Instagram, Twitter, Linkedin, Quote } from "lucide-react";
import { SectionLabel } from "@/components/ui/Section";
import { services, doctorsByTab, blogPosts, testimonials } from "@/data/site";

const iconMap: Record<string, any> = { Eye, Smile, HeartPulse, Brain, Baby, Apple, FlaskConical, Sparkles, Activity };

/* ───────────── Marquee ───────────── */
export function Marquee() {
  const items = ["Food & Nutrition", "Ophthalmology", "Medicine & Nephrology", "Dental Care", "Neurology", "Acne Treatment", "Neuro Surgery", "Prenatal Care"];
  const loop = [...items, ...items];
  return (
    <section className="bg-[var(--color-brand)] py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-6 px-6 text-white uppercase font-semibold text-lg">
            {t}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z"/></svg>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ───────────── Newsletter ───────────── */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setMsg("Please enter a valid email."); return; }
    setMsg("Thanks for subscribing!");
    setEmail("");
  };
  return (
    <section className="bg-[var(--color-brand)] py-20">
      <div className="container-x text-center text-white">
        <SectionLabel light>Subscribe to Newsletter</SectionLabel>
        <h2 className="h2 text-white max-w-2xl mx-auto">Let's Subscribe to Get Our Newsletter.</h2>
        <p className="mt-4 text-white/85 max-w-xl mx-auto">Get health tips, clinic updates and patient stories — straight to your inbox.</p>
        <form onSubmit={submit} className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-full">
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email address..." className="flex-1 px-5 py-3 rounded-full text-[var(--color-ink)] outline-none" />
          <button type="submit" className="px-7 py-3 rounded-full bg-[var(--color-ink)] text-white font-semibold hover:bg-[var(--color-brand-dark)] transition">Subscribe</button>
        </form>
        {msg && <p className="mt-4 text-white">{msg}</p>}
      </div>
    </section>
  );
}

/* ───────────── Services (dark bg) ───────────── */
export function ServicesSection() {
  const four = services.slice(0, 4);
  return (
    <section className="bg-[var(--color-ink)] section-y relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(135deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="container-x relative">
        <div className="text-center mb-14">
          <SectionLabel light>Our Services</SectionLabel>
          <h2 className="h2 text-white max-w-2xl mx-auto">Innovative Medical Services for Modern Healthcare</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {four.map((s) => {
            const I = iconMap[s.icon];
            return (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group bg-white rounded-2xl p-7 border-t-4 border-transparent hover:border-[var(--color-brand)] transition-all hover:-translate-y-1">
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
        <div className="mt-12 text-center">
          <p className="text-white/80 mb-5">We have 8+ more Care Services including Emergency Department.</p>
          <Link to="/services" className="btn-outline-white">View All <ArrowRight className="w-4 h-4 arrow" /></Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Testimonials ───────────── */
export function Testimonials() {
  const [i, setI] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const visible = [testimonials[i % testimonials.length], testimonials[(i + 1) % testimonials.length]];
  return (
    <section className="section-y bg-[var(--color-section)] relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--color-brand)]/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[var(--color-brand)]/10 blur-3xl" />
      <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel>Happy Patients</SectionLabel>
          <h2 className="h2">Stories of Healing and Trust From Our Valued Patients</h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {visible.map((t, idx) => (
              <div key={idx} className="card-elev p-7 relative">
                <Quote className="absolute top-5 right-5 w-12 h-12 text-[var(--color-brand)]/15" />
                <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="mt-4 text-[15px] leading-relaxed">"{t.quote}"</p>
                <div className="mt-5 pt-4 border-t border-[var(--color-card-border)]">
                  <div className="font-semibold text-[var(--color-ink)]">{t.name}</div>
                  <div className="text-sm">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3">
            <button onClick={() => setI((i - 1 + testimonials.length) % testimonials.length)} className="w-11 h-11 rounded-full border-2 border-[var(--color-brand)] text-[var(--color-brand)] flex items-center justify-center hover:bg-[var(--color-brand)] hover:text-white transition"><ChevronLeft className="w-5 h-5" /></button>
            <button onClick={() => setI((i + 1) % testimonials.length)} className="w-11 h-11 rounded-full border-2 border-[var(--color-brand)] text-[var(--color-brand)] flex items-center justify-center hover:bg-[var(--color-brand)] hover:text-white transition"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden">
            <img src="https://placehold.co/600x400/1a3a6b/ffffff?text=Watch+Patient+Story" alt="Patient story video" className="w-full" />
            <button onClick={() => setShowVideo(true)} className="absolute inset-0 flex items-center justify-center" aria-label="Play video">
              <span className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl hover:scale-110 transition pulse-ring">
                <Play className="w-8 h-8 text-[var(--color-brand)] fill-[var(--color-brand)] ml-1" />
              </span>
            </button>
          </div>
          <div className="absolute -bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-xs bg-[var(--color-ink)] text-white rounded-2xl p-5 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-extrabold">4.8</div>
              <div>
                <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}</div>
                <div className="text-xs uppercase tracking-wider opacity-80 mt-1">Average Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showVideo && (
        <div className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4" onClick={() => setShowVideo(false)}>
          <button className="absolute top-6 right-6 text-white" onClick={() => setShowVideo(false)} aria-label="Close"><X className="w-8 h-8" /></button>
          <div className="w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Patient story" allow="autoplay; encrypted-media" allowFullScreen />
          </div>
        </div>
      )}
    </section>
  );
}

/* ───────────── Doctor Tabs ───────────── */
export function DoctorsSection() {
  const tabs = Object.keys(doctorsByTab);
  const [active, setActive] = useState(tabs[0]);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const change = (t: string) => {
    if (t === active) return;
    setPhase("out");
    setTimeout(() => { setActive(t); setPhase("in"); }, 200);
  };
  return (
    <section className="section-y bg-[var(--color-section)]">
      <div className="container-x">
        <div className="text-center mb-10">
          <SectionLabel>Professional Doctors</SectionLabel>
          <h2 className="h2 max-w-2xl mx-auto">Highly Skilled Doctors, Committed to Excellence</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((t) => (
            <button key={t} onClick={() => change(t)} className={`px-6 py-2.5 rounded-full font-semibold transition ${active === t ? "bg-[var(--color-brand)] text-white" : "border-2 border-[var(--color-brand)] text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white"}`}>{t}</button>
          ))}
        </div>
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300 ${phase === "out" ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
          {doctorsByTab[active].map((d) => (
            <div key={d.name} className="group card-elev overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-accent)]">
                <img src={`https://placehold.co/360x440/e8f0ff/3d68f5?text=${encodeURIComponent(d.name)}`} alt={d.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[var(--color-ink)] to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <div className="flex justify-center gap-3">
                    {[Facebook, Instagram, Twitter, Linkedin].map((I, i) => (
                      <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[var(--color-brand)] flex items-center justify-center text-white transition"><I className="w-4 h-4" /></a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 text-center">
                <h4 className="h4">{d.name}</h4>
                <p className="text-[var(--color-brand)] mt-1">{d.specialty}</p>
                <Link to="/contact-us" className="mt-4 inline-flex items-center gap-1 px-5 py-2 rounded-full bg-[var(--color-brand)] text-white text-sm font-semibold hover:bg-[var(--color-brand-dark)]">Book Appointment <ArrowRight className="w-3.5 h-3.5" /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Blog Section ───────────── */
export function BlogSection() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <SectionLabel>Latest News & Articles</SectionLabel>
            <h2 className="h2 max-w-2xl">Trending Topics in Medicine and Wellness</h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-1 text-[var(--color-brand)] font-semibold">View All Posts <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => <BlogCard key={p.slug} post={p} />)}
        </div>
      </div>
    </section>
  );
}

export function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <article className="card-elev overflow-hidden flex flex-col">
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="block relative overflow-hidden aspect-[16/10]">
        <img src={`https://placehold.co/600x375/d0e8ff/3d68f5?text=${encodeURIComponent(post.category)}`} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
      </Link>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm">{post.date}</span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent)] text-[var(--color-brand)]">{post.category}</span>
        </div>
        <h4 className="h4 flex-1"><Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-[var(--color-brand)] transition">{post.title}</Link></h4>
        <Link to="/blog/$slug" params={{ slug: post.slug }} className="mt-4 inline-flex items-center gap-1 text-[var(--color-brand)] font-semibold">Learn More <ArrowRight className="w-4 h-4" /></Link>
      </div>
    </article>
  );
}

/* ───────────── Featured Doctor Banner ───────────── */
export function FeaturedDoctorBanner() {
  return (
    <section className="bg-[var(--color-ink)] section-y relative overflow-hidden">
      <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-semibold mb-5">08+ Years of Experience</span>
          <h2 className="h2 text-white">Dr. Rasika Is Dedicated to Helping Others Heal.</h2>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link to="/contact-us" className="btn-primary">Book an Appointment <ArrowRight className="w-4 h-4 arrow" /></Link>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[0,1,2,3].map((n) => <img key={n} src={`https://placehold.co/40x40/${["3d68f5","22c55e","f59e0b","ef4444"][n]}/ffffff?text=${n+1}`} className="w-10 h-10 rounded-full border-2 border-[var(--color-ink)]" alt="" />)}
              </div>
              <span className="font-semibold">+2000 Patients</span>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-0 m-auto w-80 h-80 rounded-full bg-[var(--color-brand)]/30 blur-3xl" />
          <img src="https://placehold.co/400x500/1a3a6b/ffffff?text=Dr.+Rasika" alt="Dr. Rasika" className="relative rounded-2xl max-h-[500px]" />
        </div>
      </div>
    </section>
  );
}

/* ───────────── Reveal helper ───────────── */
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const els = el.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.15 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return ref;
}
