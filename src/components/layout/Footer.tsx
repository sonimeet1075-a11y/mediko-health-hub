import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Logo } from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white/80 mt-0">
      <div className="container-x py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="[&_span]:text-white"><Logo light /></div>
          <p className="mt-5 text-[15px] leading-relaxed">
            Mediko delivers personalized, compassionate medical services designed around your well-being.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <img src="https://placehold.co/48x48/3d68f5/ffffff?text=A" alt="Alex Anderson" className="w-12 h-12 rounded-full" />
            <div>
              <div className="text-white font-semibold">Alex Anderson</div>
              <div className="text-sm opacity-70">Co Founder</div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white mb-5">Quick Links</h4>
          <ul className="space-y-3 text-[15px]">
            {[
              { to: "/", label: "Home" },
              { to: "/about-us", label: "About Us" },
              { to: "/case-studies", label: "Case Studies" },
              { to: "/services", label: "Services" },
              { to: "/blog", label: "Our Blog" },
            ].map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-[var(--color-brand)] transition">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-5">Get In Touch</h4>
          <ul className="space-y-4 text-[15px]">
            <li className="flex gap-3"><MapPin className="w-5 h-5 text-[var(--color-brand)] shrink-0 mt-0.5" /> 1615 Lyon Avenue Framingham, MA 01702</li>
            <li className="flex gap-3"><Phone className="w-5 h-5 text-[var(--color-brand)] shrink-0 mt-0.5" /> 508-872-7876</li>
            <li className="flex gap-3"><Mail className="w-5 h-5 text-[var(--color-brand)] shrink-0 mt-0.5" /> info@mediko.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-5">Our Services</h4>
          <ul className="space-y-3 text-[15px]">
            {["Prenatal Care", "Neuro Surgery", "Cardiology", "Dental Care", "Ophthalmology"].map((s) => (
              <li key={s}><Link to="/services" className="hover:text-[var(--color-brand)] transition">{s}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div>Copyright © Mediko | Designed by ThemeLuck</div>
          <div className="flex items-center gap-4">
            {[Facebook, Instagram, Twitter, Linkedin].map((I, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--color-brand)] hover:border-[var(--color-brand)] transition">
                <I className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
