import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  Award,
  Boxes,
  Building2,
  Cog,
  CircuitBoard,
  Cpu,
  Factory,
  FlaskConical,
  Gauge,
  Globe2,
  HeartPulse,
  Layers,
  Lightbulb,
  MemoryStick,
  Microscope,
  PenTool,
  Radio,
  Rocket,
  Ruler,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Timer,
  Users,
  Wrench,
} from "lucide-react";

import heroLight from "@/assets/hero-light.jpg";
import engineersLab from "@/assets/engineers-lab.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Offices } from "@/components/site/Offices";

const TITLE =
  "Polosoft Advanced Systems | Healthcare Devices | PCB Design | Embedded Engineering";
const DESCRIPTION =
  "Polosoft Advanced Systems delivers healthcare device engineering, PCB design, PCB manufacturing, embedded systems and product engineering services from Hyderabad and Bhubaneswar.";

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
          slogan: "Engineering Intelligent Healthcare & Advanced Electronic Systems",
          description: DESCRIPTION,
          parentOrganization: { "@type": "Organization", name: "Polosoft Group" },
          address: [
            {
              "@type": "PostalAddress",
              streetAddress:
                "Plot No. 321, 2nd Floor, Grand Lumbini Convention, Neeladri Vihar, Chandrasekharpur",
              addressLocality: "Bhubaneswar",
              addressRegion: "Odisha",
              postalCode: "751021",
              addressCountry: "IN",
            },
            {
              "@type": "PostalAddress",
              streetAddress:
                "Dwaraka One, Plot No. 6 & 7, 1st Floor, Near Raheja Mindspace, Vittal Rao Nagar, Madhapur",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              postalCode: "500081",
              addressCountry: "IN",
            },
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "sales",
              email: "info@polosoftadvanced.com",
              telephone: "+91-9938037974",
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
    icon: Cpu,
    title: "Embedded Systems",
    body: "Hardware architecture, firmware, RTOS integration and microcontroller platforms built for deterministic behaviour.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Devices",
    body: "Medical electronics engineered for patient safety, low-noise sensing and regulated documentation practices.",
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
  { icon: Activity, title: "Healthcare Electronics Expertise", body: "Safety-critical design practice for diagnostic, monitoring and therapy devices." },
  { icon: Gauge, title: "Rapid Prototyping", body: "Fast iteration cycles that de-risk architecture decisions early." },
  { icon: Factory, title: "Manufacturing Support", body: "Assembly partners and process controls that scale with your volumes." },
  { icon: ShieldCheck, title: "Quality Driven Processes", body: "Design reviews, traceability and structured verification at every gate." },
  { icon: Globe2, title: "Global Delivery", body: "Distributed engineering across Hyderabad and Bhubaneswar delivery centers." },
  { icon: Lightbulb, title: "Innovation Focus", body: "Sensing, edge intelligence and connectivity applied to real product problems." },
  { icon: Building2, title: "Part of the Polosoft Group", body: "Backed by the governance and delivery track record of the Polosoft Group." },
];

const industries = [
  { icon: HeartPulse, title: "Medical Devices" },
  { icon: Microscope, title: "Healthcare Technology" },
  { icon: Cog, title: "Industrial Electronics" },
  { icon: Gauge, title: "Automation" },
  { icon: Radio, title: "IoT" },
  { icon: Smartphone, title: "Consumer Electronics" },
  { icon: Boxes, title: "OEM Manufacturing" },
];

const capabilities = [
  { icon: PenTool, title: "Hardware Design", body: "System architecture, analog and digital design, power and sensor subsystems." },
  { icon: Layers, title: "PCB Layout", body: "Multilayer, high-speed and mixed-signal layout with controlled stack-ups." },
  { icon: MemoryStick, title: "Embedded Firmware", body: "Bare-metal and RTOS firmware, drivers, connectivity and secure updates." },
  { icon: Ruler, title: "Mechanical Integration", body: "Enclosure fit, thermal strategy and assembly-aware mechanical coordination." },
  { icon: Rocket, title: "Prototype Development", body: "Quick-turn boards, bring-up, instrumentation and design iteration." },
  { icon: FlaskConical, title: "Testing & Validation", body: "Verification plans, fixtures, environmental and pre-compliance testing." },
  { icon: Factory, title: "Production Engineering", body: "DFM release, pilot builds, yield review and production transfer." },
  { icon: Timer, title: "Lifecycle Support", body: "Revisions, obsolescence management and sustaining engineering." },
];

const trust = [
  { icon: Award, title: "Engineering Excellence", body: "Deep hardware and firmware specialisation applied with disciplined review practice." },
  { icon: Timer, title: "Reliable Delivery", body: "Milestone-based execution with transparent reporting and no scope surprises." },
  { icon: ShieldCheck, title: "Industry Best Practices", body: "IPC, IEC 60601-aligned and ISO 13485-informed engineering workflows." },
  { icon: Users, title: "Scalable Teams", body: "Ramp engineering capacity up or down without losing programme context." },
  { icon: Sparkles, title: "Innovation", body: "Applied research in sensing, edge intelligence and connected diagnostics." },
  { icon: ShieldCheck, title: "Quality Assurance", body: "Traceable requirements, documented verification evidence and audit readiness." },
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
      <section className="relative overflow-hidden bg-tint">
        <img
          src={heroLight}
          alt="Medical monitoring device and printed circuit board on a laboratory bench with engineers collaborating"
          width={1920}
          height={1200}
          className="absolute inset-y-0 right-0 hidden h-full w-[52%] object-cover lg:block"
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, var(--color-tint) 46%, color-mix(in oklab, var(--color-tint) 60%, transparent) 58%, transparent 74%)",
          }}
          aria-hidden="true"
        />
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

        <div className="container-page relative py-24 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-secondary shadow-soft">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              A Polosoft Group Company
            </span>
            <h1 className="mt-7 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              Engineering Intelligent Healthcare &amp; Advanced Electronic Systems
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We partner with OEMs, healthcare innovators and technology companies to design, develop
              and manufacture high-quality electronic products, embedded systems and medical devices
              from concept to production.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="btn-ripple group inline-flex min-h-12 items-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                Explore Services
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                to="/"
                hash="contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-border bg-card px-7 text-sm font-semibold text-primary transition-colors hover:border-secondary hover:text-secondary"
              >
                Talk to Our Engineers
              </Link>
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 grid max-w-2xl gap-8 rounded-2xl bg-card p-8 shadow-soft sm:grid-cols-2"
          >
            {[
              ["Multilayer PCB designs delivered", "150+"],
              ["Embedded platforms supported", "40+"],
              ["Delivery centers in India", "02"],
              ["Concept-to-production ownership", "100%"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-3xl font-extrabold text-primary">{value}</dd>
                <p className="mt-2 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="container-page py-24 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Company Introduction"
              title="The engineering and healthcare electronics company of the Polosoft Group"
              description="Polosoft Advanced Systems Private Limited designs and industrialises electronic products — medical devices, healthcare electronics, PCB design and manufacturing, embedded systems and complete product development."
            />
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                We work with OEMs, medical device companies and industrial electronics organisations —
                combining disciplined engineering process with the flexibility to move from concept to
                first article quickly.
              </p>
              <div className="mt-10 grid gap-8 sm:grid-cols-3">
                <Counter value={150} suffix="+" label="Board designs released" />
                <Counter value={12} suffix="+" label="Years of group delivery" />
                <Counter value={98} suffix="%" label="On-time milestone rate" />
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="img-zoom relative rounded-2xl shadow-lift">
              <img
                src={engineersLab}
                alt="Hardware engineers reviewing a PCB schematic on monitors in an electronics laboratory"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container-page"><div className="section-divider" /></div>

      {/* SERVICES */}
      <section className="bg-surface py-24 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Core Services"
            title="Engineering capability across the full electronics stack"
            description="Six practice areas that can be engaged independently or combined into a single end-to-end programme."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <article className="card-lift flex h-full flex-col rounded-2xl bg-card p-8 shadow-soft">
                  <span className="grid size-12 place-items-center rounded-xl bg-primary/6 text-primary">
                    <s.icon className="size-6" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <Link
                    to="/services"
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-secondary"
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

      {/* CAPABILITIES */}
      <section className="container-page py-24 lg:py-28">
        <SectionHeading
          eyebrow="Capabilities"
          title="End-to-end engineering capability under one roof"
          description="From first architecture sketch to production transfer and lifecycle support."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.04}>
              <div className="h-full bg-card p-8 transition-colors hover:bg-tint">
                <c.icon className="size-6 text-secondary" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-5 text-base font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-surface py-24 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built for teams that cannot afford engineering risk"
            align="center"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="card-lift h-full rounded-2xl bg-card p-7 shadow-soft">
                  <span className="grid size-11 place-items-center rounded-xl bg-secondary/8 text-secondary">
                    <a.icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-bold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="container-page py-24 lg:py-28">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Domain context that shortens the path to production"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 0.05}>
              <div className="card-lift group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-tint text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ind.icon className="size-5" strokeWidth={1.4} aria-hidden="true" />
                </span>
                <h3 className="min-w-0 text-base font-bold">{ind.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-tint py-24 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Global Trust"
            title="Why global clients choose us"
            align="center"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {trust.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <div className="card-lift h-full rounded-2xl bg-card p-8 shadow-soft">
                  <span className="grid size-12 place-items-center rounded-xl bg-accent/10 text-accent">
                    <t.icon className="size-6" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-page py-24 lg:py-28">
        <SectionHeading
          eyebrow="Engineering Process"
          title="A six-stage delivery model with defined exit criteria"
        />
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" aria-hidden="true" />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
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

      {/* OFFICES */}
      <Offices />

      {/* CTA */}
      <section className="container-page py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 text-center sm:px-16">
            <div className="grid-lines pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl">
              <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
                Let&apos;s build the next generation of intelligent electronic products
              </h2>
              <p className="mt-5 text-base leading-relaxed text-primary-foreground/75">
                Share your product concept, existing design or manufacturing challenge — our engineering
                team will respond with a technical point of view, not a sales pitch.
              </p>
              <Link
                to="/"
                hash="contact"
                className="btn-ripple mt-9 inline-flex min-h-12 items-center gap-2 rounded-xl bg-accent px-8 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Talk to Our Engineers
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
