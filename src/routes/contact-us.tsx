import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { HeroBanner, SectionLabel } from "@/components/ui/Section";
import { services } from "@/data/site";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Mediko — Book an Appointment" },
      { name: "description", content: "Get in touch with the Mediko team. Call, email or send us a message — we respond within one business day." },
      { property: "og:title", content: "Contact Mediko" },
      { property: "og:description", content: "Book an appointment or speak with our care team." },
    ],
  }),
  component: ContactPage,
});

const cards = [
  { icon: MapPin, title: "Our Location", lines: ["1615 Lyon Avenue", "Framingham, MA 01702"] },
  { icon: Phone, title: "Phone Number", lines: ["508-872-7876", "Mon–Sun 24/7"] },
  { icon: Mail, title: "Email Address", lines: ["info@mediko.com", "support@mediko.com"] },
  { icon: Clock, title: "Working Hours", lines: ["Mon–Fri: 8AM – 9PM", "Sat–Sun: 10AM – 6PM"] },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim() || form.phone.length < 7) e.phone = "Valid phone required";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) { setDone(true); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }
  };

  const field = (key: keyof typeof form, label: string, type = "text") => (
    <div>
      <label className="text-sm font-semibold text-[var(--color-ink)]">{label}</label>
      <input
        type={type}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        className={`mt-1.5 w-full px-4 py-3 rounded-xl border bg-white outline-none transition ${errors[key] ? "border-red-400" : "border-[var(--color-card-border)] focus:border-[var(--color-brand)]"}`}
      />
      {errors[key] && <div className="text-red-500 text-xs mt-1">{errors[key]}</div>}
    </div>
  );

  return (
    <>
      <HeroBanner title="Get In Touch With Mediko" breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />

      <section className="section-y">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map((c) => (
              <div key={c.title} className="card-elev p-6 text-center">
                <div className="mx-auto w-14 h-14 rounded-xl bg-[var(--color-accent)] flex items-center justify-center"><c.icon className="w-7 h-7 text-[var(--color-brand)]" /></div>
                <h4 className="h4 mt-4">{c.title}</h4>
                {c.lines.map((l) => <div key={l} className="mt-1 text-[15px]">{l}</div>)}
              </div>
            ))}
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionLabel>Contact Form</SectionLabel>
              <h2 className="h2">Send Us a Message</h2>
              <p className="mt-3">Fill out the form and our team will get back to you within one business day.</p>
              <img src="https://placehold.co/560x400/d0e8ff/3d68f5?text=Mediko+Team" className="rounded-2xl mt-8 w-full" alt="" />
            </div>
            <form onSubmit={submit} className="card-elev p-8 space-y-5">
              {field("name", "Full Name *")}
              {field("email", "Email Address *", "email")}
              {field("phone", "Phone Number *", "tel")}
              <div>
                <label className="text-sm font-semibold text-[var(--color-ink)]">Service</label>
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="mt-1.5 w-full px-4 py-3 rounded-xl border border-[var(--color-card-border)] bg-white outline-none focus:border-[var(--color-brand)]">
                  <option value="">Select a service</option>
                  {services.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-[var(--color-ink)]">Message *</label>
                <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`mt-1.5 w-full px-4 py-3 rounded-xl border bg-white outline-none ${errors.message ? "border-red-400" : "border-[var(--color-card-border)] focus:border-[var(--color-brand)]"}`} />
                {errors.message && <div className="text-red-500 text-xs mt-1">{errors.message}</div>}
              </div>
              <button type="submit" className="btn-primary w-full justify-center">Send Message <ArrowRight className="w-4 h-4 arrow" /></button>
              {done && <div className="text-emerald-600 font-semibold text-center">Thanks! We'll be in touch shortly.</div>}
            </form>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-[420px] bg-[var(--color-section)]">
          <iframe
            title="Mediko location"
            className="w-full h-full"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-71.4400%2C42.2700%2C-71.3900%2C42.3100&layer=mapnik"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
