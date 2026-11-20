import { createFileRoute, redirect } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MarkOutline, MarkTick, Ribbons } from "@/components/site/swoosh";
import { useState, type FormEvent } from "react";
import { categories, contact } from "@/lib/catalogue";
import { HOME_ONLY_MODE } from "@/lib/site-flags";

export const Route = createFileRoute("/contact")({
  beforeLoad: () => {
    if (HOME_ONLY_MODE) throw redirect({ to: "/" });
  },
  head: () => ({
    meta: [
      { title: "Request a quote | Sterling Lanka Impex" },
      { name: "description", content: "Send your product, quantity and destination port. Sterling Lanka Impex will reply with availability, pricing and shipment terms." },
      { property: "og:title", content: "Request a quote · Sterling Lanka Impex" },
      { property: "og:description", content: "Enquire about Sri Lankan spices, fruits, vegetables and herbs, or import sourcing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const field = "w-full border-0 border-b border-input bg-transparent py-3 text-lg outline-hidden transition-colors focus:border-primary";

function Contact() {
  const [mode, setMode] = useState<"Export" | "Import">("Export");
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) ?? "").trim();
    const text = [`${mode} enquiry · Sterling Lanka Impex`, `Name: ${g("name")}`, `Company: ${g("company")}`, `Country: ${g("country")}`, `Product: ${g("product")}`, `Quantity: ${g("qty")}`, `Destination port: ${g("port")}`, `Notes: ${g("notes")}`].join("\n");
    const via = (e.nativeEvent as SubmitEvent).submitter?.getAttribute("value");
    const url = via === "email"
      ? `mailto:${contact.email}?subject=${encodeURIComponent(`${mode} enquiry · ${g("product")}`)}&body=${encodeURIComponent(text)}`
      : `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  return (
    <section className="relative overflow-hidden mx-auto grid max-w-[1400px] gap-16 px-6 py-20 lg:grid-cols-12">
        <MarkOutline className="pointer-events-none absolute -right-16 -top-10 h-[120%] text-primary/10" />
      <div className="lg:col-span-5">
        <p className="label text-muted-foreground">Enquiries</p>
        <h1 className="mt-6 text-6xl leading-[0.95] md:text-7xl">Let's build trade that <span className="text-accent">lasts.</span></h1>
        <dl className="mt-12 divide-y divide-border border-y border-border">
          {[["Address", contact.address], ["Email", contact.email], ["Phone / WhatsApp", contact.phone], ["Instagram · TikTok", "@sterlinglankaimpex"]].map(([k, v]) => (
            <div key={k} className="grid grid-cols-[9rem_1fr] gap-4 py-4">
              <dt className="label pt-1 text-muted-foreground">{k}</dt><dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <form onSubmit={submit} className="lg:col-span-6 lg:col-start-7">
        <div className="flex border border-ink" role="radiogroup" aria-label="Enquiry type">
          {(["Export", "Import"] as const).map((m) => (
            <button key={m} type="button" role="radio" aria-checked={mode === m} onClick={() => setMode(m)} className={`flex-1 py-3 text-sm transition-colors ${mode === m ? "bg-ink text-ink-foreground" : "hover:bg-secondary"}`}>
              {m === "Export" ? "I want to buy from Sri Lanka" : "I want to supply into Sri Lanka"}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <label className="label text-muted-foreground">Your name<input required name="name" className={field} /></label>
          <label className="label text-muted-foreground">Company<input name="company" className={field} /></label>
          <label className="label text-muted-foreground">Country<input name="country" className={field} /></label>
          <label className="label text-muted-foreground">Product
            <input required name="product" list="products" className={field} />
            <datalist id="products">{categories.flatMap((c) => c.items).map((i) => <option key={i.slug} value={i.name} />)}</datalist>
          </label>
          <label className="label text-muted-foreground">Quantity<input name="qty" placeholder="e.g. 1 × 20ft container" className={field} /></label>
          <label className="label text-muted-foreground">Destination port<input name="port" className={field} /></label>
          <label className="label text-muted-foreground sm:col-span-2">Grade, packaging, timing<textarea name="notes" rows={3} className={field} /></label>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button type="submit" value="whatsapp" className="group flex-1 inline-flex items-center justify-center gap-2 bg-primary px-6 py-4 text-primary-foreground transition-colors hover:bg-forest">
            Send via WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button type="submit" value="email" className="group flex-1 inline-flex items-center justify-center gap-2 border border-ink px-6 py-4 transition-colors hover:bg-ink hover:text-ink-foreground">
            Send via email
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </form>
    </section>
  );
}
