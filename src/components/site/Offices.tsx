import { Link } from "@tanstack/react-router";
import { ExternalLink, MapPin, Phone } from "lucide-react";

import { offices } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Offices() {
  return (
    <section id="offices" className="bg-tint py-24 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Offices"
          title="Two engineering locations in India"
          description="A registered office in Bhubaneswar and an engineering and business office in Hyderabad, operating as one delivery organization."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {offices.map((o, i) => (
            <Reveal key={o.city} delay={i * 0.08}>
              <article className="card-lift flex h-full flex-col rounded-2xl bg-card p-8 shadow-soft sm:p-10">
                <span className="grid size-12 place-items-center rounded-xl bg-secondary/10 text-secondary">
                  <MapPin className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-bold">{o.city}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-secondary">
                  {o.type}
                </p>
                <address className="mt-5 not-italic text-sm leading-relaxed text-muted-foreground">
                  {o.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>

                {o.phone ? (
                  <p className="mt-5 flex items-center gap-3 text-sm">
                    <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-muted-foreground">
                      {o.phoneLabel ? `${o.phoneLabel} — ` : null}
                      <a
                        href={`tel:${o.phone.replace(/\s/g, "")}`}
                        className="font-semibold text-primary hover:text-secondary"
                      >
                        {o.phone}
                      </a>
                    </span>
                  </p>
                ) : null}

                <div className="mt-8 flex flex-wrap gap-3 pt-2">
                  <a
                    href={o.mapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-ripple inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all hover:bg-secondary"
                  >
                    View on Google Maps
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                  <Link
                    to="/"
                    hash="contact"
                    className="inline-flex min-h-11 items-center rounded-xl border border-border px-5 text-sm font-semibold text-primary transition-colors hover:border-secondary hover:text-secondary"
                  >
                    Contact Office
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {offices.map((o) => (
              <div key={o.city} className="overflow-hidden rounded-2xl bg-card shadow-soft">
                <iframe
                  title={`Map of Polosoft Advanced Systems ${o.city} office`}
                  src={o.embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
