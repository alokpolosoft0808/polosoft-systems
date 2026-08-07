import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
  Cog,
  CircuitBoard,
  Cpu,
  Factory,
  Gauge,
  Globe2,
  HeartPulse,
  Layers,
  Microscope,
  Radio,
  Rocket,
  ShieldCheck,
  Smartphone,
  Users,
  Wrench,
} from "lucide-react";

import heroPcb from "@/assets/hero-pcb.jpg";
import engineersLab from "@/assets/engineers-lab.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { SectionHeading } from "@/components/site/SectionHeading";

const TITLE = "Polosoft Advanced Systems | PCB Design & Medical Electronics Engineering";
const DESCRIPTION =
  "Polosoft Advanced Systems engineers intelligent healthcare and electronic products — PCB design, PCB manufacturing, embedded systems and end-to-end product development from Hyderabad and Bhubaneswar.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Polosoft Advanced Systems Private Limited",
          alternateName: "Polosoft Advanced Systems",
          url: "https://polosoftadvanced.com",
          slogan: "Engineering Intelligent Electronics for a Smarter Future",
          description: DESCRIPTION,
          parentOrganization: { "@type": "Organization", name: "Polosoft Technologies Pvt. Ltd." },
          address: [
            { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
            { "@type": "PostalAddress", addressLocality: "Bhubaneswar", addressRegion: "Odisha", addressCountry: "IN" },
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "sales",
              email: "info@polosoftadvanced.com",
              telephone: "+91-00000-00000",
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: CircuitBoard,
    title: "PCB Design",
    body: "Schematic capture, multilayer layout, signal and power integrity, and DFM-ready outputs for high-reliability boards.",
  },
  {
    icon: Factory,
    title: "PCB Manufacturing",
    body: "Prototype through production builds with assembly coordination, sourcing support and controlled quality gates.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Devices",
    body: "Medical electronics engineered for patient safety, low-noise sensing, and regulated documentation practices.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    body: "Hardware architecture, firmware, RTOS integration and microcontroller platforms built for deterministic behaviour.",
  },
  {
    icon: Wrench,
    title: "Engineering Services",
    body: "Design consulting, test engineering, compliance readiness and independent validation of existing designs.",
  },
  {
    icon: Rocket,
    title: "Product Development",
    body: "Concept to launch ownership — industrial design coordination, prototyping and lifecycle engineering.",
  },
];

const advantages = [
  { icon: Users, title: "Experienced Engineering Team", body: "Hardware, firmware and manufacturing specialists working as one delivery unit." },
  { icon: Layers, title: "End-to-End Product Development", body: "One accountable partner from requirement definition to production ramp." },
  { icon: Activity, title: "Medical Electronics Expertise", body: "Safety-critical design practice for diagnostic and monitoring devices." },
  { icon: ShieldCheck, title: "Quality First Approach", body: "Design reviews, traceability and structured verification at every gate." },
  { icon: Gauge, title: "Rapid Prototyping", body: "Fast iteration cycles that de-risk architecture decisions early." },
  { icon: Factory, title: "Scalable Manufacturing Support", body: "Assembly partners and process controls that scale with your volumes." },
  { icon: Globe2, title: "Global Delivery Model", body: "Distributed engineering across Hyderabad and Bhubaneswar delivery centers." },
  { icon: Building2, title: "Trusted Polosoft Group Company", body: "Backed by the delivery track record of Polosoft Technologies Pvt. Ltd." },
];

const industries = [
  { icon: HeartPulse, title: "Healthcare" },
  { icon: Microscope, title: "Medical Devices" },
  { icon: Cog, title: "Industrial Electronics" },
  { icon: Gauge, title: "Automation" },
  { icon: Radio, title: "IoT" },
  { icon: Smartphone, title: "Consumer Electronics" },
  { icon: Boxes, title: "OEM Manufacturing" },
];

const process = [
  { step: "01", title: "Discover", body: "Requirements, constraints, compliance targets and feasibility assessment." },
  { step: "02", title: "Design", body: "Architecture, schematic, layout and firmware design with review gates." },
  { step: "03", title: "Prototype", body: "Rapid boards, bring-up, instrumentation and design iteration." },
  { step: "04", title: "Validate", body: "Functional, environmental and compliance-oriented verification." },
  { step: "05", title: "Manufacture", body: "DFM release, pilot builds, assembly coordination and ramp support." },
  { step: "06", title: "Support", body: "Sustaining engineering, revisions and component lifecycle management." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroPcb}
          alt="Macro view of a high-density printed circuit board with fine copper traces"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, color-mix(in oklab, var(--color-primary) 94%, transparent) 25%, color-mix(in oklab, var(--color-primary) 55%, transparent) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

        <div className="container-page relative py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Polosoft Group Company
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
              Engineering Tomorrow&apos;s Intelligent Healthcare &amp; Electronic Systems
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              Delivering advanced PCB design, embedded engineering, medical electronics, and product
              development solutions that transform innovative ideas into reliable, production-ready
              products.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                to="/"
                hash="contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-primary-foreground/25 px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Talk to Our Experts
              </Link>
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel-dark mt-20 grid gap-8 rounded-2xl p-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              ["Multilayer PCB designs delivered", "150+"],
              ["Embedded platforms supported", "40+"],
              ["Delivery centers in India", "02"],
              ["Concept-to-production ownership", "100%"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-3xl font-extrabold text-primary-foreground">{value}</dd>
                <p className="mt-2 text-sm text-primary-foreground/65">{label}</p>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="container-page py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Company Introduction"
              title="A specialized engineering partner for intelligent electronic products"
              description="Polosoft Advanced Systems Private Limited is the engineering arm of the Polosoft group, focused on healthcare devices, medical electronics, PCB design and manufacturing, embedded systems and full product development."
            />
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                We work with OEMs, medical device companies, industrial electronics organizations and
                funded startups — combining disciplined engineering process with the flexibility to
                move from concept to first article quickly.
              </p>
              <div className="mt-10 grid gap-8 sm:grid-cols-3">
                <Counter value={150} suffix="+" label="Board designs released" />
                <Counter value={12} suffix="+" label="Years of group delivery" />
                <Counter value={98} suffix="%" label="On-time milestone rate" />
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-secondary/8" aria-hidden="true" />
              <img
                src={engineersLab}
                alt="Hardware engineers reviewing a PCB schematic on monitors in an electronics laboratory"
                width={1280}
                height={960}
                loading="lazy"
                className="relative w-full rounded-3xl object-cover shadow-lift"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-surface py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Core Services"
            title="Engineering capability across the full electronics stack"
            description="Six practice areas that can be engaged independently or combined into a single end-to-end program."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <article className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft">
                  <span className="grid size-12 place-items-center rounded-xl bg-secondary/10 text-secondary">
                    <s.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <Link
                    to="/services"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary"
                  >
                    Learn More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-page py-24">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for teams that cannot afford engineering risk"
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <div className="card-lift h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="grid size-11 place-items-center rounded-xl bg-accent/12 text-accent-foreground">
                  <a.icon className="size-5 text-secondary" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-bold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-surface py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Domain context that shortens the path to production"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 0.05}>
                <div className="card-lift group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-secondary">
                    <ind.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="min-w-0 text-base font-bold">{ind.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-page py-24">
        <SectionHeading
          eyebrow="Engineering Process"
          title="A six-stage delivery model with defined exit criteria"
        />
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" aria-hidden="true" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <li className="relative list-none">
                  <span className="relative z-10 grid size-12 place-items-center rounded-full border border-border bg-card font-display text-sm font-extrabold text-secondary shadow-soft">
                    {p.step}
                  </span>
                  <h3 className="mt-5 text-base font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center sm:px-16">
            <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl">
              <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
                Let&apos;s Build the Next Generation of Intelligent Electronic Products
              </h2>
              <p className="mt-5 text-base text-primary-foreground/70">
                Share your product concept, existing design or manufacturing challenge — our engineering
                team will respond with a technical point of view, not a sales pitch.
              </p>
              <Link
                to="/"
                hash="contact"
                className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-8 text-sm font-semibold text-accent-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                <BadgeCheck className="size-4" aria-hidden="true" />
                Contact Our Experts
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
