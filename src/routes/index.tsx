import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDownLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { MandarinImport } from "@/components/site/mandarin";
import { MarkOutline, MarkTick, Ribbons } from "@/components/site/swoosh";
import { categories, contact, img, totalItems } from "@/lib/catalogue";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sterling Lanka Impex · Sri Lankan spices & produce, exported worldwide" },
      { name: "description", content: "Colombo trading house exporting Ceylon spices, tropical fruits, vegetables and herbs, and importing food commodities and consumer goods." },
      { property: "og:title", content: "Sterling Lanka Impex · From the Pearl of the Indian Ocean, to the world" },
      { property: "og:description", content: "Export and import of Sri Lankan spices, fresh produce and food commodities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const why = [
  ["Export-oriented focus", "Our business is built around moving Sri Lankan produce and spices to international buyers."],
  ["Wide commodity range", "Spices, fruits, vegetables and herbs from one trading partner. Enquiries for other products welcome."],
  ["Considered sourcing", "We engage growers, suppliers and exporters that match each buyer's specific requirement."],
  ["Clear specifications", "Product, grade, quantity, packaging and destination agreed up front, so expectations are clear."],
  ["Coordinated shipments", "We work with the relevant parties on shipment arrangements and supporting trade documents."],
  ["Responsive communication", "Direct contact by email and WhatsApp, with dependable follow-through at every stage."],
];

const steps = [
  ["Send the brief", "Product, grade, quantity, packaging, destination port and shipment timing."],
  ["We source", "Matched growers and suppliers across Sri Lanka, checked against your spec."],
  ["Quote & terms", "Availability, pricing, minimum order quantity and shipment terms confirmed."],
  ["Pack & document", "Packing to your requirement, with the trade paperwork arranged."],
  ["Ship", "Coordinated dispatch from Colombo to your port."],
];

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <MandarinImport />
      <TwoWays />
      <CatalogueIndex />
      <Cinnamon />
      <Process />
      <Why />
      <Cta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="relative overflow-hidden">
        <img src={img("cinnamon-hero")} alt="Ceylon cinnamon quills" className="sterling-cut absolute inset-y-0 right-0 h-full w-full object-cover opacity-50 lg:w-[62%] lg:opacity-80" />
        <div className="sterling-cut pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[62%] bg-ink/25 lg:block" />
        <MarkOutline className="pointer-events-none absolute -left-24 top-10 h-[130%] text-accent/25" />
        <div className="relative mx-auto max-w-[1400px] px-6 pb-10 pt-14 lg:pt-20">
          <p className="label text-accent">Sri Lanka · Import & Export</p>
          <h1 className="mt-8 text-[3.6rem] leading-[0.95] sm:text-[6rem] xl:text-[8.5rem]">
            Sri Lanka<br />
            <span className="text-accent">to the</span><br />
            world.
          </h1>
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <p className="max-w-md text-lg leading-relaxed text-ink-foreground/80 lg:col-span-5">
              We source, export and import food commodities, connecting Sri Lankan growers with importers, wholesalers and distributors overseas.
            </p>
            <div className="flex flex-wrap items-end gap-3 lg:col-span-7 lg:justify-end">
              <Link to="/contact" className="group inline-flex items-center gap-2 bg-accent px-7 py-4 font-semibold text-accent-foreground transition-colors hover:bg-ink-foreground">
                Request a quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/products" className="border border-ink-foreground/40 bg-ink px-7 py-4 font-semibold transition-colors hover:border-ink-foreground">{totalItems} products</Link>
            </div>
          </div>
        </div>
      </div>
      <Ribbons className="relative" />
      <div className="relative bg-ink">
        <dl className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
          {[
            [String(totalItems), "Export commodities"],
            ["2025", "Incorporated"],
            ["2-way", "Import & export"],
            ["13", "Spice lines"],
          ].map(([v, l], i) => (
            <div key={l} className={`px-6 py-6 ${i ? "border-l border-ink-foreground/15" : ""}`}>
              <dd className="font-display text-5xl text-ink-foreground">{v}</dd>
              <dt className="label mt-1 text-ink-foreground/55">{l}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Marquee() {
  const items = categories.flatMap((c) => c.items).filter((_, i) => i % 2 === 0);
  return (
    <section aria-label="Product samples" className="overflow-hidden border-b border-border bg-ink py-5">
      <div className="marquee flex w-max gap-8">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-3 text-ink-foreground">
            <img src={img(it.slug)} alt="" className="h-12 w-12 object-cover" loading="lazy" />
            <span className="font-display text-2xl">{it.name}</span>
            <MarkTick className="h-4 text-accent" />
          </span>
        ))}
      </div>
    </section>
  );
}

function TwoWays() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24">
      <div className="grid gap-6 lg:grid-cols-12">
        <p className="label flex items-center gap-2 text-muted-foreground lg:col-span-3"><MarkTick className="text-primary" />What we trade</p>
        <h2 className="text-4xl leading-tight md:text-6xl lg:col-span-9">
          One trading desk, <span className="text-accent">two directions</span> of trade.
        </h2>
      </div>
      <div className="mt-16 grid border-t border-ink lg:grid-cols-2">
        <article className="border-b border-border py-10 lg:border-b-0 lg:border-r lg:pr-12">
          <div className="flex items-baseline justify-between">
            <h3 className="text-5xl">Export</h3>
            <ArrowUpRight className="h-14 w-14 text-primary" strokeWidth={1.5} />
          </div>
          <p className="mt-6 max-w-md text-muted-foreground">Premium Sri Lankan produce to buyers abroad, supplied to specification and packed for your market.</p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {["Ceylon spices, whole & ground", "Fresh tropical fruits", "Vegetables & root crops", "Coconut products", "Fresh herbs & aromatics"].map((t) => (
              <li key={t} className="py-3 text-lg">{t}</li>
            ))}
          </ul>
        </article>
        <article className="py-10 lg:pl-12">
          <div className="flex items-baseline justify-between">
            <h3 className="text-5xl">Import</h3>
            <ArrowDownLeft className="h-14 w-14 text-accent" strokeWidth={1.5} />
          </div>
          <p className="mt-6 max-w-md text-muted-foreground">Sourcing food commodities and consumer goods from international suppliers for the Sri Lankan market.</p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {["Kinnow mandarins from Pakistan", "Food commodities", "Consumer goods", "Sourcing on request"].map((t) => (
              <li key={t} className="py-3 text-lg">{t}</li>
            ))}
          </ul>
          <Link to="/trade" className="link-u mt-8 inline-block text-sm">How we work in both directions →</Link>
        </article>
      </div>
    </section>
  );
}

function CatalogueIndex() {
  const [hover, setHover] = useState(0);
  const active = categories[hover] ?? categories[0]!;
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="label flex items-center gap-2 text-accent"><MarkTick className="text-primary" />The catalogue</p>
          <ol className="mt-10">
            {categories.map((c, i) => (
              <li key={c.id} onMouseEnter={() => setHover(i)} onFocus={() => setHover(i)}>
                <Link to="/products" hash={c.id} className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-t border-ink-foreground/20 py-6">
                  <span className="font-mono text-xs text-ink-foreground/50">0{i + 1}</span>
                  <span className={`font-display text-4xl transition-all md:text-6xl ${hover === i ? "text-accent" : ""}`}>{c.title}</span>
                  <span className="font-mono text-xs text-ink-foreground/60">{c.items.length} items</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <div className="grid grid-cols-2 gap-2">
              {active.items.slice(0, 4).map((it) => (
                <img key={it.slug} src={img(it.slug)} alt={it.name} className="aspect-square w-full object-cover" />
              ))}
            </div>
            <p className="mt-4 text-sm text-ink-foreground/70">{active.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const spiceLine: [string, string][] = [
  ["black-pepper", "Black Pepper"],
  ["cloves", "Cloves"],
  ["cardamom", "Cardamom"],
  ["nutmeg", "Nutmeg"],
  ["mace", "Mace"],
  ["vanilla", "Vanilla"],
];

function Cinnamon() {
  return (
    <section className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-24 lg:grid-cols-12">
      <img src={img("cinnamon-hero")} alt="Ceylon cinnamon quills" className="aspect-[4/3] w-full object-cover lg:col-span-6" />
      <div className="lg:col-span-5 lg:col-start-8">
        <p className="label flex items-center gap-2 text-muted-foreground"><MarkTick className="text-primary" />Spice spotlight</p>
        <h2 className="mt-6 text-5xl leading-[1] md:text-6xl">Ceylon cinnamon, the way the world first knew it.</h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Quills, quillings, powder and oil, packed whole or ground to your specification, alongside the rest of our spice line.
        </p>
        <ul className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-8">
          {spiceLine.map(([slug, name]) => (
            <li key={slug}>
              <img src={img(slug)} alt={name} className="aspect-square w-full object-cover" />
              <p className="label mt-2 text-muted-foreground">{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl md:text-6xl">How an enquiry becomes a shipment.</h2>
          <p className="label flex items-center gap-2 text-muted-foreground"><MarkTick className="text-primary" />Process</p>
        </div>
        <ol className="mt-10 grid grid-cols-2 gap-px bg-border md:mt-16 md:grid-cols-5">
          {steps.map(([t, d], i) => (
            <li key={t} className={`bg-secondary p-4 md:min-h-64 md:p-6 ${i === steps.length - 1 ? "col-span-2 md:col-span-1" : ""}`}>
              <span className="font-display text-3xl text-primary md:text-6xl">{i + 1}</span>
              <h3 className="mt-2 font-sans text-base font-semibold tracking-normal md:mt-8 md:text-lg">{t}</h3>
              <p className="mt-1 text-xs text-muted-foreground md:mt-2 md:text-sm">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <p className="label flex items-center gap-2 text-muted-foreground"><MarkTick className="text-primary" />Why Sterling</p>
        <h2 className="mt-6 text-5xl leading-none">What buyers can expect.</h2>
        <img src={img("ship")} alt="Container ship at port" className="mt-10 aspect-[16/9] w-full object-cover object-[35%_center] lg:aspect-[3/1]" />
      </div>
      <dl className="grid gap-x-12 sm:grid-cols-2 lg:col-span-8">
        {why.map(([t, d], i) => (
          <div key={t} className="border-t border-ink py-6">
            <dt className="flex gap-4 text-xl font-medium"><span className="font-mono text-xs text-primary">0{i + 1}</span>{t}</dt>
            <dd className="mt-3 pl-8 text-muted-foreground">{d}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Cta() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-20 md:grid-cols-[1fr_auto] md:items-center">
        <h2 className="text-4xl md:text-6xl">Tell us the product, quantity and port. <span className="text-accent">We'll do the rest.</span></h2>
        <div className="flex flex-col gap-3">
          <Link to="/contact" className="group inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-forest">
            Request a quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a href={`https://wa.me/${contact.whatsapp}`} className="group inline-flex items-center justify-center gap-2 border border-ink px-8 py-4 transition-colors hover:bg-ink hover:text-ink-foreground">
            WhatsApp us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
