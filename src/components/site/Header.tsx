import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel shadow-soft" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Polosoft Advanced Systems home">
          {/* Replaced Icon Container with Shield/PAS Monogram SVG */}
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <svg
              viewBox="0 0 32 32"
              className="size-7"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Outer Shield Outline */}
              <path
                d="M16 3L6 7v8c0 6.5 4.3 12.3 10 14 5.7-1.7 10-7.5 10-14V7L16 3z"
                strokeWidth="1.8"
                className="opacity-40"
              />
              {/* Central Integrated A / Arrow */}
              <path
                d="M16 7l6 12h-4l-2-4h-0.2L16 7z"
                fill="currentColor"
                className="opacity-90"
              />
              {/* Dynamic Circuit S-Curve Line */}
              <path
                d="M10 21c2 0 4-2 6-2s4 2 6 2"
                strokeWidth="2"
              />
              {/* Left P Anchor Line */}
              <path
                d="M10 11h3a2.5 2.5 0 0 1 0 5h-3v5"
                strokeWidth="2"
              />
              {/* Circuit Nodes */}
              <circle cx="22" cy="21" r="1.2" fill="currentColor" />
              <circle cx="16" cy="7" r="1.2" fill="currentColor" />
            </svg>
          </span>

          <span className="min-w-0">
            <span className="block truncate font-display text-[15px] font-extrabold leading-tight text-primary">
              Polosoft Advanced Systems
            </span>
            {/* Updated Tagline echoing Sister Concern relationship */}
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.15em] text-secondary sm:block">
              A Division of Polosoft Technologies
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
              activeProps={{ className: "bg-muted text-primary font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="contact"
            className="ml-3 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-secondary hover:shadow-lift"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid size-11 place-items-center rounded-xl border border-border bg-card text-primary md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="container-page flex flex-col py-3" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-foreground/90"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/"
              hash="contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}