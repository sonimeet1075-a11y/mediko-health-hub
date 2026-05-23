import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ChevronDown, Plus, ArrowRight } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
];

const pagesDropdown = [
  { to: "/services", label: "Our Services" },
  { to: "/services/dental-care", label: "Service Details" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/case-studies/heart-recovery", label: "Case Details" },
  { to: "/blog", label: "Our Blog" },
  { to: "/blog/sunscreen-guide", label: "Blog Details" },
  { to: "/contact-us", label: "Contact Us" },
];

export function TopBar() {
  return (
    <div className="hidden md:block bg-[var(--color-ink)] text-white text-[14px]">
      <div className="container-x flex items-center justify-between py-2.5">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[var(--color-brand)]" /> (00) 875 784 5682</span>
          <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[var(--color-brand)]" /> info@mediko.com</span>
          <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[var(--color-brand)]" /> 238, Arimantab, Moska – USA.</span>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/contact-us" className="hover:text-[var(--color-brand)] transition">Help</Link>
          <Link to="/contact-us" className="hover:text-[var(--color-brand)] transition">Support</Link>
          <Link to="/contact-us" className="hover:text-[var(--color-brand)] transition">Contact</Link>
          <div className="flex items-center gap-3 pl-3 border-l border-white/15">
            <a href="#" aria-label="Facebook" className="hover:text-[var(--color-brand)]"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[var(--color-brand)]"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="X" className="hover:text-[var(--color-brand)]"><Twitter className="w-4 h-4" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[var(--color-brand)]"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 font-heading font-extrabold text-2xl">
      <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--color-brand)] text-white">
        <Plus className="w-5 h-5" strokeWidth={3} />
      </span>
      <span style={{ color: light ? "#fff" : "var(--color-ink)" }}>Mediko</span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <div
        className={`bg-white transition-all duration-300 ${scrolled ? "shadow-md py-3" : "py-5"}`}
      >
        <div className="container-x flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8 font-medium" style={{ color: "var(--color-ink)" }}>
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover:text-[var(--color-brand)] transition"
                activeProps={{ style: { color: "var(--color-brand)" } }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setPagesOpen(true)}
              onMouseLeave={() => setPagesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[var(--color-brand)]">
                Pages <ChevronDown className="w-4 h-4" />
              </button>
              {pagesOpen && (
                <div className="absolute top-full left-0 pt-3 w-60">
                  <div className="bg-white rounded-xl shadow-xl border border-[var(--color-card-border)] py-2 animate-fade-up">
                    {pagesDropdown.map((p) => (
                      <Link
                        key={p.to}
                        to={p.to}
                        className="block px-5 py-2.5 text-[15px] hover:bg-[var(--color-section)] hover:text-[var(--color-brand)] transition"
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/contact-us" className="hover:text-[var(--color-brand)] transition">Contact Us</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact-us" className="hidden sm:inline-flex btn-danger">
              <Phone className="w-4 h-4" /> Emergency
            </Link>
            <button className="lg:hidden p-2" aria-label="Menu" onClick={() => setOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl p-6 animate-slide-right overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <Logo />
              <button onClick={() => setOpen(false)} aria-label="Close"><X className="w-6 h-6" /></button>
            </div>
            <div className="flex flex-col gap-1">
              {[...navLinks, ...pagesDropdown, { to: "/contact-us", label: "Contact Us" }].map((l) => (
                <Link
                  key={l.to + l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-3 border-b border-[var(--color-card-border)] font-medium text-[var(--color-ink)] hover:text-[var(--color-brand)]"
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/contact-us" onClick={() => setOpen(false)} className="btn-danger mt-6 justify-center">
                <Phone className="w-4 h-4" /> Emergency
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export { ArrowRight };
