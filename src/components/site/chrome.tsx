import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { MarkOutline, Ribbons, WhatsAppIcon } from "./swoosh";
import { useState } from "react";
import logo from "@/assets/logo.png";
import mark from "@/assets/mark.png";
import { contact } from "@/lib/catalogue";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/trade", label: "Import & Export" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="hidden border-b border-border bg-ink text-ink-foreground md:block">
        <div className="mx-auto flex max-w-[1400px] items-center justify-end gap-6 px-6 py-1.5 label">
          <a className="link-u" href={`mailto:${contact.email}`}>{contact.email}</a>
          <a className="link-u" href={`https://wa.me/${contact.whatsapp}`}>WhatsApp {contact.phone}</a>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-4">
        <Link to="/" aria-label="Sterling Lanka Impex home" className="shrink-0">
          <img src={logo} alt="Sterling Lanka Impex" className="h-9 w-auto md:h-10" />
        </Link>
        <nav className="hidden justify-end gap-8 lg:flex">
          {nav.map((i) => (
            <Link key={i.to} to={i.to} activeOptions={{ exact: true }} className="link-u text-sm">
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="col-start-3 flex items-center gap-4 justify-self-end">
          <Link to="/contact" className="group hidden items-center gap-1.5 bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-forest sm:inline-flex">
            Request a quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="relative h-6 w-6 text-foreground lg:hidden">
            <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${open ? "rotate-45 opacity-0" : "rotate-0 opacity-100"}`} />
            <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${open ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"}`} />
          </button>
        </div>
      </div>
      {open && (
        <nav className="animate-in slide-in-from-top-4 fade-in border-t border-border bg-background px-6 pb-8 pt-4 duration-300 lg:hidden">
          {[...nav, { to: "/contact", label: "Request a quote" } as const].map((i, idx) => (
            <Link
              key={i.to}
              to={i.to}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${idx * 40}ms`, animationFillMode: "backwards" }}
              className="animate-in fade-in slide-in-from-top-2 block border-b border-border py-4 font-display text-3xl duration-300"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <>
    <Ribbons flipY className="bg-background" />
    <footer className="relative overflow-hidden bg-ink text-ink-foreground">
      <MarkOutline className="pointer-events-none absolute -bottom-20 right-0 h-[110%] text-accent/15" />
      <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-20">
        <p className="label text-primary">Sterling Lanka Impex (Pvt) Ltd</p>
        <p className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] md:text-8xl">
          Bridging markets, <span className="text-accent">moving</span> commodities.
        </p>
        <p className="label mt-4 text-accent">Trusted Quality · Honest Trade</p>
        <div className="mt-16 grid gap-10 border-t border-ink-foreground/20 pt-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex gap-4">
            <img src={mark} alt="" className="h-12 w-auto invert" />
            <address className="not-italic text-sm leading-relaxed text-ink-foreground/75">{contact.address}</address>
          </div>
          <div className="space-y-2 text-sm">
            <p className="label text-ink-foreground/50">Talk to us</p>
            <a className="link-u block w-fit" href={`mailto:${contact.email}`}>{contact.email}</a>
            <a className="link-u block w-fit" href={`https://wa.me/${contact.whatsapp}`}>{contact.phone} · WhatsApp</a>
          </div>
          <div className="space-y-2 text-sm">
            <p className="label text-ink-foreground/50">Follow</p>
            <a className="link-u block w-fit" href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a className="link-u block w-fit" href={contact.tiktok} target="_blank" rel="noreferrer">TikTok</a>
            <span className="block text-ink-foreground/60">Facebook · Sterling Lanka Impex Private Limited</span>
          </div>
        </div>
        <div className="mt-14 label text-ink-foreground/45">
          <span>© {new Date().getFullYear()} Sterling Lanka Impex (Pvt) Ltd</span>
        </div>
      </div>
    </footer>
    </>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us"
      className="animate-in slide-in-from-right-[130%] fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-700 ease-out hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
