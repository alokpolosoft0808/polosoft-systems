import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

import { contactEmail, offices } from "@/lib/site-data";

const services = [
  "PCB Design",
  "PCB Manufacturing",
  "Embedded Systems",
  "Healthcare Devices",
  "Engineering Services",
  "Product Development",
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="container-page grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-extrabold text-primary">
            Polosoft Advanced Systems
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            The dedicated engineering and healthcare electronics company within the Polosoft Group —
            delivering medical device design, PCB design and manufacturing, embedded systems and
            end-to-end product development for global OEMs.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Twitter, label: "X" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-11 place-items-center rounded-xl border border-border text-primary transition-colors hover:border-secondary hover:text-secondary"
              >
                <Icon className="size-4" strokeWidth={1.5} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-primary">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><Link to="/" className="transition-colors hover:text-secondary">Home</Link></li>
            <li><Link to="/about" className="transition-colors hover:text-secondary">About</Link></li>
            <li><Link to="/services" className="transition-colors hover:text-secondary">Services</Link></li>
            <li><Link to="/" hash="offices" className="transition-colors hover:text-secondary">Offices</Link></li>
            <li><Link to="/" hash="contact" className="transition-colors hover:text-secondary">Contact</Link></li>
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-primary">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s}>
                <Link to="/services" className="transition-colors hover:text-secondary">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-primary">
            Locations
          </h3>
          <ul className="mt-5 space-y-5 text-sm text-muted-foreground">
            {offices.map((o) => (
              <li key={o.city} className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  <strong className="block font-semibold text-primary">{o.city}</strong>
                  {o.type}
                  <span className="mt-1 block">{o.address[o.address.length - 1]}</span>
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 font-display text-sm font-bold uppercase tracking-[0.16em] text-primary">
            Business Enquiries
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${contactEmail}`} className="hover:text-secondary">
                {contactEmail}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href="tel:+919938037974" className="hover:text-secondary">+91 9938037974</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Polosoft Advanced Systems Private Limited. All rights reserved.</p>
          <p>polosoftadvanced.com</p>
        </div>
      </div>
    </footer>
  );
}
