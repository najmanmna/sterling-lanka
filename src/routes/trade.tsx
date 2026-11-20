import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MarkOutline, MarkTick, Ribbons } from "@/components/site/swoosh";
import { img } from "@/lib/catalogue";
import { HOME_ONLY_MODE } from "@/lib/site-flags";

export const Route = createFileRoute("/trade")({
  beforeLoad: () => {
    if (HOME_ONLY_MODE) throw redirect({ to: "/" });
  },
  head: () => ({
    meta: [
      { title: "Import & Export services | Sterling Lanka Impex" },
      { name: "description", content: "Export of Sri Lankan spices and fresh produce, import of food commodities and consumer goods, and sourcing on request from Colombo." },
      { property: "og:title", content: "Import & Export services · Sterling Lanka Impex" },
      { property: "og:description", content: "Export, import and sourcing of food commodities from Colombo, Sri Lanka." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Trade,
});

const brief = ["Product", "Grade or specification", "Quantity", "Packaging requirements", "Destination port", "Preferred shipment timing"];

function Trade() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <MarkOutline className="pointer-events-none absolute -right-16 -top-10 h-[120%] text-primary/10" />
        <img src={img("ship")} alt="Container vessel loaded at port" className="h-[46vh] min-h-72 w-full object-cover" />
        <div className="mx-auto -mt-28 max-w-[1400px] px-6 pb-16">
          <div className="max-w-3xl bg-background p-8 md:p-12">
            <p className="label text-muted-foreground">Services</p>
            <h1 className="mt-4 text-5xl leading-[0.95] md:text-7xl">Import. Export. <span className="text-accent">Sourcing.</span></h1>
            <p className="mt-6 text-lg text-muted-foreground">An international trading company based in Colombo, sourcing, importing, exporting and trading food commodities, fresh produce, spices and consumer goods.</p>
          </div>
        </div>
      </section>

      {[
        { k: "A", t: "Export from Sri Lanka", d: "We connect Sri Lankan growers, producers and suppliers with importers, wholesalers and distributors overseas, with clear specifications agreed before anything ships.", list: ["Ceylon spices · whole, ground, oils & extracts", "Tropical fruits incl. king coconut, mango, mangosteen", "Vegetables, root crops and fresh herbs", "Coconut products & other agricultural goods"], im: "fruits" },
        { k: "B", t: "Import into Sri Lanka", d: "We source food commodities and consumer goods from international suppliers for distributors and businesses in Sri Lanka.", list: ["Kinnow mandarins from Pakistan", "Food commodities", "Consumer goods", "Supplier sourcing to brief", "Coordination of shipment & documents"], im: "mandarin" },
        { k: "C", t: "Sourcing on request", d: "Need something not on our list? We welcome enquiries where there is a clear market requirement and a suitable sourcing opportunity.", list: ["Matched growers & exporters", "Sample & specification check", "Pricing and MOQ confirmed", "Long-term supply relationships"], im: "vegetables" },
      ].map((s, i) => (
        <section key={s.k} className={i % 2 ? "bg-secondary" : ""}>
          <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-20 lg:grid-cols-12">
            <span className="font-display text-[8rem] leading-none text-primary lg:col-span-2">{s.k}</span>
            <div className={`lg:col-span-5 ${i % 2 ? "lg:order-3" : ""}`}>
              <h2 className="text-4xl md:text-5xl">{s.t}</h2>
              <p className="mt-5 text-lg text-muted-foreground">{s.d}</p>
              <ul className="mt-8 border-t border-ink">
                {s.list.map((l) => <li key={l} className="border-b border-border py-3">{l}</li>)}
              </ul>
            </div>
            <img src={img(s.im)} alt="" className="aspect-[4/3] w-full object-cover lg:col-span-5" loading="lazy" />
          </div>
        </section>
      ))}

      <Ribbons />
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="label text-accent">Placing an enquiry</p>
            <h2 className="mt-4 text-5xl">Six things we need for a quotation.</h2>
            <p className="mt-6 text-ink-foreground/70">We'll confirm availability, pricing, minimum order quantities and shipment terms for your requirement.</p>
            <Link to="/contact" className="group mt-8 inline-flex items-center gap-2 bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
              Start your enquiry
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <ol className="grid grid-cols-2 gap-px bg-ink-foreground/20">
            {brief.map((b, i) => (
              <li key={b} className="bg-ink p-6"><span className="font-mono text-xs text-accent">0{i + 1}</span><p className="mt-3 font-display text-2xl">{b}</p></li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
