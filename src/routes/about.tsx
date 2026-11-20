import { createFileRoute, redirect } from "@tanstack/react-router";
import { MarkOutline, MarkTick, Ribbons } from "@/components/site/swoosh";
import { img } from "@/lib/catalogue";
import { HOME_ONLY_MODE } from "@/lib/site-flags";

export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    if (HOME_ONLY_MODE) throw redirect({ to: "/" });
  },
  head: () => ({
    meta: [
      { title: "About us | Sterling Lanka Impex (Pvt) Ltd" },
      { name: "description", content: "Sterling Lanka Impex is a Sri Lankan international trading company incorporated in 2025 and based in Colombo." },
      { property: "og:title", content: "About Sterling Lanka Impex" },
      { property: "og:description", content: "A Colombo trading company connecting quality Sri Lankan producers with international markets." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative overflow-hidden mx-auto grid max-w-[1400px] gap-12 px-6 py-20 lg:grid-cols-12">
        <MarkOutline className="pointer-events-none absolute -right-16 -top-10 h-[120%] text-primary/10" />
        <div className="lg:col-span-8">
          <p className="label text-muted-foreground">About · Incorporated 2025</p>
          <h1 className="mt-6 text-5xl leading-[0.98] md:text-7xl">A Colombo trading house built on <span className="text-accent">clear specs</span> and long relationships.</h1>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
          <p>Sterling Lanka Impex (Pvt) Ltd is a Sri Lankan international trading company based in Colombo. We source, import, export and trade food commodities, fresh produce, spices and consumer goods.</p>
          <p>For our export business, we connect Sri Lankan growers, producers and suppliers with importers, wholesalers and distributors overseas. Our approach is built on clear specifications, dependable communication and a commercial focus on long-term relationships.</p>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-2 px-2">
        {["turmeric", "coconut", "cardamom"].map((s) => <img key={s} src={img(s)} alt="" className="aspect-[3/4] w-full object-cover md:aspect-[4/3]" />)}
      </section>
      <section className="mx-auto grid max-w-[1400px] px-6 py-24 md:grid-cols-2">
        {[["Vision", "To build a trusted Sri Lankan trading company recognised for connecting quality producers with customers across international markets."], ["Mission", "To source and trade food commodities, fresh produce and spices responsibly, building dependable relationships and sustainable value through integrity and service."]].map(([t, d], i) => (
          <div key={t} className={`border-t border-ink py-10 ${i ? "md:border-l md:pl-12" : "md:pr-12"}`}>
            <p className="label text-primary">Our {t}</p>
            <p className="mt-6 font-display text-3xl leading-snug md:text-4xl">{d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
