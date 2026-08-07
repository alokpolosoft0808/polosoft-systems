import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Compass,
  CircuitBoard,
  Cpu,
  Factory,
  MapPin,
  ShieldCheck,
  Target,
  TestTube2,
} from "lucide-react";

import engineersLab from "@/assets/engineers-lab.jpg";
import medicalDevice from "@/assets/medical-electronics.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

const TITLE = "About Polosoft Advanced Systems | Engineering Company in India";
const DESCRIPTION =
  "Polosoft Advanced Systems is a sister concern of Polosoft Technologies Pvt. Ltd., delivering medical electronics, PCB and embedded engineering from Hyderabad and Bhubaneswar.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const capabilities = [
  { icon: CircuitBoard, title: "PCB Engineering", body: "Multilayer, high-speed and mixed-signal board design with integrity analysis and DFM release packages." },
  { icon: Cpu, title: "Embedded Engineering", body: "Bare-metal and RTOS firmware, driver development, connectivity stacks and low-power architecture." },
  { icon: TestTube2, title: "Verification & Test", body: "Test plan definition, bring-up automation, environmental and pre-compliance validation." },
  { icon: Factory, title: "Manufacturing Enablement", body: "Prototype builds, assembly coordination, sourcing strategy and production transfer." },
];

const trust = [
  "Engineering ownership with named technical leads on every program",
  "Documented design reviews and traceable revision control",
  "Component lifecycle and obsolescence planning built into design decisions",
  "Transparent milestone reporting with no fixed-scope surprises",
];

const philosophy = [
  { year: "Foundation", title: "Built on the Polosoft delivery culture", body: "Established as the advanced engineering arm of Polosoft Technologies Pvt. Ltd., extending a proven software delivery discipline into hardware." },
  { year: "Focus", title: "Specialization over generalization", body: "Deliberate concentration on healthcare devices, medical electronics and high-reliability embedded systems rather than broad IT services." },
  { year: "Practice", title: "Engineering rigour as a default", body: "Structured reviews, verification evidence and manufacturability considerations introduced from the first architecture discussion." },
  { year: "Scale", title: "Two delivery centers, one team", body: "Hyderabad and Bhubaneswar operate as a single engineering organization with shared tooling, process and quality standards." },
  { year: "Ahead", title: "Intelligent, connected products", body: "Investing in sensing, edge intelligence and connected diagnostics to support the next generation of medical and industrial devices." },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-20 lg:py-28">
          <Reveal>
            <p className="eyebrow">About Us</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.1] sm:text-5xl">
              An engineering company built for regulated, high-reliability electronics
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Polosoft Advanced Systems Private Limited designs and industrializes electronic products —
              from healthcare devices and medical electronics to PCB design, PCB manufacturing support,
              embedded systems and complete product development.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW + GROUP */}
      <section className="container-page py-24">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
              <span className="grid size-12 place-items-center rounded-xl bg-secondary/10 text-secondary">
                <Building2 className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-2xl font-bold">Part of the Polosoft group</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                As a sister concern of Polosoft Technologies Pvt. Ltd., we operate with the governance,
                delivery process and client management maturity of an established technology group,
                while remaining a focused hardware engineering organization.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                That relationship gives customers access to combined hardware, firmware, cloud and
                application capability when a product needs more than a board.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={engineersLab}
              alt="Engineers collaborating on electronic hardware design in a laboratory"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-surface py-24">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Target,
              label: "Mission",
              text: "To engineer dependable electronic and medical products that reach production on time, meet their compliance obligations, and perform predictably in the field.",
            },
            {
              icon: Compass,
              label: "Vision",
              text: "To be a preferred engineering partner for intelligent healthcare and industrial electronics, recognised for technical depth rather than scale alone.",
            },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <div className="card-lift h-full rounded-3xl border border-border bg-card p-10 shadow-soft">
                <span className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
                <p className="eyebrow mt-6">{item.label}</p>
                <p className="mt-3 text-lg leading-relaxed text-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="container-page py-24">
        <SectionHeading
          eyebrow="Engineering Capabilities"
          title="Deep capability in the disciplines that decide product success"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="card-lift h-full rounded-2xl border border-border bg-card p-8 shadow-soft">
                <span className="grid size-12 place-items-center rounded-xl bg-secondary/10 text-secondary">
                  <c.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-surface py-24">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={medicalDevice}
              alt="Compact medical monitoring device prototype on a laboratory bench"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Why Customers Trust Us"
              title="Predictable engineering, documented decisions"
            />
            <ul className="mt-8 space-y-4">
              {trust.map((t, i) => (
                <Reveal key={t} delay={i * 0.06}>
                  <li className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{t}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY TIMELINE */}
      <section className="container-page py-24">
        <SectionHeading eyebrow="Our Philosophy" title="How we think about engineering" />
        <ol className="mt-14 space-y-0 border-l border-border pl-8">
          {philosophy.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <li className="relative list-none pb-12 last:pb-0">
                <span
                  className="absolute -left-[41px] top-1 grid size-4 place-items-center rounded-full border-4 border-background bg-secondary"
                  aria-hidden="true"
                />
                <p className="eyebrow">{p.year}</p>
                <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* LOCATIONS */}
      <section className="bg-surface py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Locations" title="Two delivery centers in India" />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              { city: "Hyderabad", region: "Telangana, India", body: "Product engineering, embedded development and manufacturing coordination." },
              { city: "Bhubaneswar", region: "Odisha, India", body: "PCB design, verification engineering and sustaining support." },
            ].map((loc, i) => (
              <Reveal key={loc.city} delay={i * 0.1}>
                <div className="card-lift h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
                  <span className="grid size-12 place-items-center rounded-xl bg-accent/12">
                    <MapPin className="size-5 text-secondary" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold">{loc.city}</h3>
                  <p className="mt-1 text-sm font-medium text-secondary">{loc.region}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{loc.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-primary p-10">
              <p className="max-w-xl font-display text-xl font-bold text-primary-foreground">
                Considering an engineering partner for your next electronic product?
              </p>
              <Link
                to="/"
                hash="contact"
                className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground"
              >
                Talk to Our Experts
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
