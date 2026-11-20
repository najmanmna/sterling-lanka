import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MarkOutline, MarkTick, Ribbons } from "@/components/site/swoosh";
import { categories, img, totalItems } from "@/lib/catalogue";
import { HOME_ONLY_MODE } from "@/lib/site-flags";

export const Route = createFileRoute("/products")({
  beforeLoad: () => {
    if (HOME_ONLY_MODE) throw redirect({ to: "/" });
  },
  head: () => ({
    meta: [
      { title: "Products · Spices, fruits, vegetables & herbs | Sterling Lanka Impex" },
      { name: "description", content: `${totalItems} Sri Lankan export commodities: Ceylon spices, tropical fruits, vegetables and fresh herbs, supplied to buyer specification.` },
      { property: "og:title", content: "Sterling Lanka Impex product catalogue" },
      { property: "og:description", content: "Ceylon spices, tropical fruits, vegetables and fresh herbs for export." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <MarkOutline className="pointer-events-none absolute -right-16 -top-10 h-[120%] text-primary/10" />
        <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-16">
          <p className="label text-muted-foreground">Catalogue · {totalItems} commodities</p>
          <h1 className="mt-6 max-w-5xl text-6xl leading-[0.95] md:text-8xl">Grown in Sri Lanka. <span className="text-accent">Packed for you.</span></h1>
          <nav className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
            {categories.map((c, i) => (
              <a key={c.id} href={`#${c.id}`} className="link-u font-display text-2xl">
                <span className="mr-2 font-mono text-xs text-muted-foreground">0{i + 1}</span>{c.title}
              </a>
            ))}
          </nav>
        </div>
      </section>
      {categories.map((c, ci) => (
        <section key={c.id} id={c.id} className={`scroll-mt-28 ${ci % 2 ? "bg-secondary" : ""}`}>
          <div className="mx-auto max-w-[1400px] px-6 py-20">
            <header className="grid gap-4 border-b border-ink pb-6 md:grid-cols-[1fr_auto] md:items-end">
              <h2 className="text-5xl md:text-7xl">{c.title}</h2>
              <p className="max-w-sm text-muted-foreground">{c.note}</p>
            </header>
            <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {c.items.map((it, i) => (
                <li key={it.slug} className={`group ${c.id === "spices" && i === 0 ? "col-span-2 row-span-2" : ""}`}>
                  <div className="overflow-hidden bg-muted">
                    <img src={img(it.slug)} alt={it.name} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-2 border-t border-border pt-2">
                    <h3 className={`${c.id === "spices" && i === 0 ? "text-3xl" : "text-xl"}`}>{it.name}</h3>
                    <span className="font-mono text-[0.65rem] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  {it.spec && <p className="mt-1 text-sm text-muted-foreground">{it.spec}</p>}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
      <Ribbons />
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-16 md:grid-cols-[1fr_auto] md:items-center">
          <p className="max-w-2xl text-ink-foreground/80">Grades, sizes and packaging are confirmed per enquiry. Fresh produce availability varies by season. Looking for something not listed? We welcome enquiries where there's a clear market requirement.</p>
          <Link to="/contact" className="group inline-flex items-center gap-2 bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
            Enquire now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
