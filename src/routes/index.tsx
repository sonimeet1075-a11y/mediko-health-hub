import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, CheckCircle2, Hospital, UserRound, MapPin, MessageCircle, Phone } from "lucide-react";
import { SectionLabel } from "@/components/ui/Section";
import { Marquee, Newsletter, ServicesSection, Testimonials, DoctorsSection, BlogSection, FeaturedDoctorBanner } from "@/components/sections/Common";
import { labTests } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mediko — Enhancing Lives, Reviving Health" },
      { name: "description", content: "Personalized, compassionate medical services at Mediko. 2000+ happy patients, 24/7 emergency care, and a team of expert doctors." },
      { property: "og:title", content: "Mediko — Enhancing Lives, Reviving Health" },
      { property: "og:description", content: "Personalized, compassionate medical services at Mediko." },
    ],
  }),
  component: Home,
});

const quickCards = [
  { icon: Hospital, title: "Visitor Information", text: "View all visitor info and follow all terms & conditions." },
  { icon: UserRound, title: "Find a Doctor", text: "Search our directory of specialists and book online." },
  { icon: MapPin, title: "Our Location", text: "Find directions to our clinic and parking details." },
  { icon: MessageCircle, title: "Connect With Us", text: "Reach out by phone, email, or message any time." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div className="container-x relative pt-16 pb-32 lg:pt-24 lg:pb-44 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-[var(--color-danger)] text-sm font-semibold pulse-ring">
              <span className="w-2 h-2 rounded-full bg-[var(--color-danger)]" /> Emergency
            </span>
            <h1 className="h1 mt-5 animate-fade-up" style={{ color: "#1a1a1a" }}>Enhancing Lives, Reviving Health for Better Tomorrow.</h1>
            <p className="mt-5 max-w-xl animate-fade-up" style={{ animationDelay: "150ms" }}>
              Discover a world of holistic healthcare where your well-being comes first. At Mediko, we deliver personalized, compassionate medical services designed to support every stage of your life.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <Link to="/contact-us" className="btn-primary">Request an Appointment <ArrowRight className="w-4 h-4 arrow" /></Link>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-[var(--color-ink)]">4.8 Google Rating</span>
                </div>
                <div className="text-[var(--color-ink)] font-semibold">2000+ Happy Patients</div>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-right">
            <div className="absolute inset-0 m-auto w-[90%] aspect-square rounded-full bg-[var(--color-accent)]" />
            <div className="absolute inset-4 m-auto w-[80%] aspect-square rounded-full border-2 border-dashed border-[var(--color-brand)]/30" />
            <img src="https://placehold.co/520x580/e8f0ff/3d68f5?text=Doctor" alt="Mediko doctor" className="relative mx-auto max-h-[580px] object-contain" />
            <div className="absolute bottom-6 -left-2 sm:left-0 bg-white/90 backdrop-blur rounded-2xl shadow-xl p-4 flex items-center gap-3 float-slow">
              <span className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-[var(--color-brand)]" /></span>
              <div>
                <div className="font-bold text-[var(--color-ink)]">10,000+ Patients</div>
                <div className="text-xs">Successfully Treated</div>
              </div>
            </div>
            <div className="absolute top-10 right-0 bg-white/90 backdrop-blur rounded-2xl shadow-xl p-4 flex items-center gap-3 float-fast">
              <div className="text-2xl font-extrabold text-[var(--color-brand)]">4.8</div>
              <div>
                <div className="flex gap-0.5">{Array.from({length:5}).map((_,i)=><Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400"/>)}</div>
                <div className="text-xs">Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO CARDS (overlap) */}
      <section className="relative -mt-20 lg:-mt-24 z-10">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickCards.map(({ icon: I, title, text }) => (
            <div key={title} className="bg-white border-l-4 border-[var(--color-brand)] rounded-2xl shadow-[0_4px_30px_rgba(61,104,245,0.08)] p-6 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(61,104,245,0.16)] transition group">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-section)] group-hover:bg-[var(--color-brand)] flex items-center justify-center transition">
                <I className="w-6 h-6 text-[var(--color-brand)] group-hover:text-white transition" />
              </div>
              <h3 className="h4 mt-4">{title}</h3>
              <p className="mt-2 text-[15px]">{text}</p>
              <Link to="/contact-us" className="mt-3 inline-flex items-center gap-1 text-[var(--color-brand)] font-semibold text-sm">Learn More <ArrowRight className="w-4 h-4" /></Link>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img src="https://placehold.co/500x380/d0e8ff/3d68f5?text=Doctor+Consultation" alt="" className="rounded-2xl w-full" />
            <img src="https://placehold.co/320x230/f0f8ff/3d68f5?text=Team" alt="" className="absolute -bottom-10 -right-4 sm:right-4 w-2/3 rounded-2xl border-4 border-white shadow-xl" />
            <div className="absolute -top-4 -left-4 bg-[var(--color-ink)] text-white px-5 py-4 rounded-xl text-sm font-bold uppercase tracking-wider shadow-xl">24/7 Emergency<br/>Patient Support</div>
          </div>
          <div>
            <SectionLabel>About Mediko</SectionLabel>
            <h2 className="h2">Advancing Medical Solutions for Health.</h2>
            <p className="mt-4">We combine cutting-edge technology with a human-first approach. Every patient receives a personalized treatment plan built around their lifestyle, history and goals.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-[15px]">
              {["AI-Powered Diagnostics","Comfort-First Approach","Real-Time Monitoring","Patient-Centered Care","Secure Data Encryption","Multilingual Support Team","Evidence-Based Treatment","24/7 Emergency Support"].map((f) => (
                <li key={f} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[var(--color-brand)] shrink-0 mt-0.5" /> <span>{f}</span></li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link to="/about-us" className="btn-primary">More About Us <ArrowRight className="w-4 h-4 arrow" /></Link>
              <a href="tel:8085550111" className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-[var(--color-accent)] flex items-center justify-center"><Phone className="w-5 h-5 text-[var(--color-brand)]" /></span>
                <div>
                  <div className="text-xs">Need help?</div>
                  <div className="font-bold text-[var(--color-ink)]">(808) 555-0111</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <Marquee />
      <Testimonials />

      {/* LAB TESTS */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <div>
            <SectionLabel>Affordable Lab Test Rates</SectionLabel>
            <h2 className="h2">We Have Lab Test Facilities, So Book Yours Today!</h2>
            <img src="https://placehold.co/520x420/e8f0ff/3d68f5?text=Lab+Facility" alt="" className="mt-8 rounded-2xl w-full" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {labTests.map((t) => (
              <div key={t.name} className="card-elev p-6 border-l-4 border-transparent hover:border-[var(--color-brand)]">
                <div className="flex items-start justify-between">
                  <h4 className="h4">{t.name}</h4>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">{t.discount}</span>
                </div>
                <div className="text-sm mt-3">Starting From</div>
                <div className="text-3xl font-extrabold text-[var(--color-brand)] font-heading">${t.price}</div>
                <p className="mt-2 text-sm">{t.desc}</p>
                <Link to="/contact-us" className="mt-3 inline-flex items-center gap-1 text-[var(--color-brand)] font-semibold text-sm">Book A Test <ArrowRight className="w-4 h-4" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DoctorsSection />
      <FeaturedDoctorBanner />
      <Newsletter />
      <BlogSection />
    </>
  );
}
