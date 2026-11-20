/** Twin-ribbon motif taken from the Sterling mark: two stacked curved bands (export above, import below). */
export function Ribbons({ className = "", flip = false, flipY = false }: { className?: string; flip?: boolean; flipY?: boolean }) {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden className={`block h-16 w-full md:h-24 ${flip ? "-scale-x-100" : ""} ${flipY ? "-scale-y-100" : ""} ${className}`}>
      <path d="M0 70 C 380 70 520 8 900 8 L1440 8 L1440 44 L900 44 C 560 44 420 106 0 106 Z" className="fill-primary" />
      <path d="M0 0 L380 0 C 220 0 120 52 0 58 Z" className="fill-accent" />
    </svg>
  );
}

/** Path data for the Sterling mark's actual silhouette (folded ribbon + flag), extracted from the logo's vector artwork. */
const MARK_VIEWBOX = "-18.97 0 345.08 482.53";
const MARK_PATH = "M39.17,312.66 L22.69,291.70 C-18.97,238.71 -1.21,160.80 59.29,131.08 L326.11,0.00 L326.11,53.96 C326.11,95.23 302.54,132.89 265.44,150.97 L88.06,237.41 C75.15,243.70 63.84,252.92 55.30,264.47 C46.73,276.07 39.36,291.98 39.93,312.05 C45.78,307.41 52.25,303.30 59.28,299.85 L326.10,168.77 L326.10,222.73 C326.10,264.00 302.53,301.66 265.43,319.74 L88.06,406.17 C75.15,412.46 63.84,421.68 55.30,433.23 C46.49,445.16 38.95,461.62 40.00,482.48 L22.69,460.47 C-13.92,413.90 -4.66,348.10 39.17,312.66 Z M212.48,423.37 L326.02,482.53 L325.98,334.75 L212.70,391.78 C199.78,398.29 199.66,416.69 212.48,423.37 Z";

/** Outline of the Sterling mark, used as a watermark. */
export function MarkOutline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={MARK_VIEWBOX} aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d={MARK_PATH} />
    </svg>
  );
}

/** Tiny filled Sterling mark, used as a bullet beside section labels or as a list/marquee separator. Inherits color from text-* on the caller. */
export function MarkTick({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={MARK_VIEWBOX} aria-hidden className={`inline-block h-3.5 w-auto shrink-0 fill-current ${className}`}>
      <path d={MARK_PATH} />
    </svg>
  );
}

/** The WhatsApp glyph, for linking to a WhatsApp chat. Inherits color from text-* on the caller. */
export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`fill-current ${className}`}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}
