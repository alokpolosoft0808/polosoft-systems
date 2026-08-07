import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

const services = [
  "PCB Design",
  "PCB Manufacturing",
  "Healthcare Devices",
  "Embedded Systems",
  "Engineering Services",
  "Product Development",
];

export function Footer() {
  return (
    <footer id="contact" className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-display text-lg font-extrabold text-primary-foreground">
            Polosoft Advanced Systems
          </p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            A specialized engineering company and sister concern of Polosoft Technologies Pvt. Ltd.,
            delivering PCB design, medical electronics, embedded systems and end-to-end product
            development for global OEMs.
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
                className="grid size-11 place-items-center rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 transition-colors hover:bg-primary-foreground/15"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            <li><Link to="/" className="transition-colors hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="transition-colors hover:text-accent">About</Link></li>
            <li><Link to="/services" className="transition-colors hover:text-accent">Services</Link></li>
            <li><Link to="/" hash="contact" className="transition-colors hover:text-accent">Contact</Link></li>
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            {services.map((s) => (
              <li key={s}>
                <Link to="/services" className="transition-colors hover:text-accent">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground">
            Business Enquiries
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href="mailto:info@polosoftadvanced.com" className="hover:text-accent">
                info@polosoftadvanced.com
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href="tel:+910000000000" className="hover:text-accent">+91 00000 00000</a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                <strong className="block font-semibold text-primary-foreground">Hyderabad</strong>
                Delivery Center — Telangana, India
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                <strong className="block font-semibold text-primary-foreground">Bhubaneswar</strong>
                Delivery Center — Odisha, India
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Polosoft Advanced Systems Private Limited. All rights reserved.</p>
          <p>polosoftadvanced.com</p>
        </div>
      </div>
    </footer>
  );
}
