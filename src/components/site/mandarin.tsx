import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { contact, img } from "@/lib/catalogue";


/** Real import line from Instagram: Kinnow mandarins from Pakistan. Kept short on purpose: no prices, locations or phone lists. */
export function MandarinImport() {
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-20 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="label">Imported · Pakistan → Sri Lanka</p>
          <h2 className="mt-6 text-6xl leading-[0.95] md:text-8xl">Kinnow<br />mandarins.</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed">
            Sweet, juicy mandarin oranges imported directly from Pakistan, for wholesale and retail buyers across Sri Lanka.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Hi Sterling Lanka Impex, I'm interested in your Pakistan mandarins.")}`} className="group inline-flex items-center gap-2 bg-ink px-7 py-4 font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink">
              Enquire on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          <Link to="/contact" className="link-u px-3 text-sm font-semibold">Send an enquiry</Link>
          </div>
        </div>
        <img src={img("mandarin")} alt="Kinnow mandarins in a wooden crate" className="sterling-cut aspect-[4/3] w-full object-cover lg:aspect-[4/5] lg:col-span-5" loading="lazy" />
      </div>
    </section>
  );
}
