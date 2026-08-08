import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CircuitBoard,
  Cpu,
  Factory,
  HeartPulse,
  Rocket,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import heroPcb from "@/assets/hero-pcb.jpg";
import medicalDevice from "@/assets/medical-electronics.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import engineersLab from "@/assets/engineers-lab.jpg";
import { Reveal } from "@/components/site/Reveal";

const TITLE =
  "Services | Healthcare Devices, PCB Design, Manufacturing & Embedded Engineering";
const DESCRIPTION =
  "PCB design and manufacturing, healthcare devices, embedded systems, engineering services and product development — applications, technologies, deliverables and benefits.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  intro: string;
  image: string;
  alt: string;
  features: { name: string; body: string }[];
  applications: string[];
  deliverables: string[];
  benefits: string[];
  stack: string[];
  related: { id: string; title: string }[];
};

const services: Service[] = [
  {
    id: "pcb-design",
    icon: CircuitBoard,
    title: "PCB Design",
    intro:
      "High-reliability board design from schematic capture to manufacturing release, with integrity analysis engineered in rather than reviewed afterwards.",
    image: heroPcb,
    alt: "Close-up of a dense multilayer printed circuit board",
    features: [
      { name: "Schematic Design", body: "Architecture definition, part selection and reviewable, hierarchical schematics." },
      { name: "PCB Layout", body: "Multilayer, mixed-signal and high-density layout with controlled stack-ups." },
      { name: "Signal Integrity", body: "Impedance control, return-path planning, crosstalk and power integrity analysis." },
      { name: "DFM", body: "Fabrication and assembly rule checks with a complete manufacturing data package." },
    ],
    applications: ["Patient monitoring boards", "Industrial controllers", "Sensor and data-acquisition modules", "Wireless IoT edge nodes"],
    deliverables: ["Reviewed schematics", "Layout & stack-up documentation", "Gerber / ODB++ & IPC-2581 package", "BOM and assembly drawings"],
    benefits: ["Fewer board spins", "Predictable EMC behaviour", "Clean manufacturing handoff"],
    stack: ["Altium Designer", "KiCad", "OrCAD", "HyperLynx", "IPC-2221 / IPC-7351"],
    related: [
      { id: "pcb-manufacturing", title: "PCB Manufacturing" },
      { id: "healthcare-devices", title: "Healthcare Devices" },
    ],
  },
  {
    id: "pcb-manufacturing",
    icon: Factory,
    title: "PCB Manufacturing",
    intro:
      "Manufacturing support that keeps design intent intact — from first prototypes through supervised production builds.",
    image: manufacturing,
    alt: "Automated surface-mount assembly line producing circuit boards",
    features: [
      { name: "Prototype Manufacturing", body: "Quick-turn fabrication and assembly for early functional validation." },
      { name: "Production Support", body: "Pilot builds, yield review and process controls during ramp." },
      { name: "Assembly Coordination", body: "Vendor management, BOM sourcing and incoming quality alignment." },
    ],
    applications: ["Medical device production builds", "OEM electronics manufacturing", "Low-to-mid volume industrial runs", "Field-replacement board supply"],
    deliverables: ["Approved first article report", "Build travellers & test records", "Yield and defect analysis", "Sourcing and lead-time plan"],
    benefits: ["Shorter build cycles", "Traceable build records", "Supply-chain visibility"],
    stack: ["SMT & THT assembly", "AOI / X-ray inspection", "IPC-A-610 workmanship", "ESD-controlled handling"],
    related: [
      { id: "pcb-design", title: "PCB Design" },
      { id: "product-development", title: "Product Development" },
    ],
  },
  {
    id: "embedded-systems",
    icon: Cpu,
    title: "Embedded Systems",
    intro:
      "Hardware and firmware engineered together so timing, power and reliability targets are met at the system level.",
    image: engineersLab,
    alt: "Engineers debugging embedded hardware with an oscilloscope",
    features: [
      { name: "Hardware Design", body: "Microcontroller platforms, power architecture, sensors and connectivity subsystems." },
      { name: "Firmware Development", body: "Drivers, bootloaders, secure update paths and diagnostics." },
      { name: "RTOS", body: "Deterministic scheduling, task partitioning and resource-constrained optimisation." },
      { name: "Microcontrollers", body: "ARM Cortex-M, low-power wireless SoCs and application-specific platforms." },
    ],
    applications: ["Connected medical devices", "Industrial automation controllers", "Battery-powered IoT products", "Instrumentation and gateways"],
    deliverables: ["System architecture document", "Firmware source & build pipeline", "Bring-up and diagnostics tools", "Interface control documentation"],
    benefits: ["Deterministic behaviour", "Lower power budgets", "Maintainable codebase"],
    stack: ["STM32 / NXP / TI", "FreeRTOS / Zephyr", "C / C++ / Rust", "BLE, Wi-Fi, CAN, Modbus"],
    related: [
      { id: "healthcare-devices", title: "Healthcare Devices" },
      { id: "engineering-services", title: "Engineering Services" },
    ],
  },
  {
    id: "healthcare-devices",
    icon: HeartPulse,
    title: "Healthcare Devices",
    intro:
      "Medical electronics engineered around patient safety, measurement accuracy and the documentation regulated products demand.",
    image: medicalDevice,
    alt: "Medical monitoring device prototype with a blue display in a clinical setting",
    features: [
      { name: "Embedded Medical Electronics", body: "Low-noise sensing chains, isolation strategy and safe-state firmware behaviour." },
      { name: "Medical PCB Design", body: "Creepage and clearance discipline, leakage-current control and reliability-driven layout." },
      { name: "Regulatory Readiness", body: "Design records, risk traceability and verification evidence aligned to audit expectations." },
    ],
    applications: ["Patient monitoring", "Diagnostic instruments", "Point-of-care devices", "Therapy and rehabilitation equipment"],
    deliverables: ["Design history documentation", "Risk and traceability matrices", "Verification test reports", "Pre-compliance assessment"],
    benefits: ["Safety-oriented architecture", "Audit-ready design records", "Reduced compliance rework"],
    stack: ["IEC 60601 aligned design", "ISO 13485 practices", "Analog front-ends", "Isolated power topologies"],
    related: [
      { id: "embedded-systems", title: "Embedded Systems" },
      { id: "pcb-design", title: "PCB Design" },
    ],
  },
  {
    id: "engineering-services",
    icon: Wrench,
    title: "Engineering Services",
    intro:
      "Independent engineering support for teams that need review depth, test capability or additional bandwidth.",
    image: engineersLab,
    alt: "Test and validation engineering workstation with measurement instruments",
    features: [
      { name: "Consulting", body: "Architecture review, technology selection and design risk assessment." },
      { name: "Testing", body: "Test strategy, fixture design and automated functional test development." },
      { name: "Validation", body: "Design verification, environmental testing and pre-compliance evaluation." },
    ],
    applications: ["Design audits before tape-out", "Capacity augmentation for OEM teams", "Legacy product re-engineering", "Test automation programmes"],
    deliverables: ["Review findings & risk register", "Test plans and fixtures", "Validation reports", "Remediation roadmap"],
    benefits: ["Objective design assurance", "Faster issue isolation", "Compliance readiness"],
    stack: ["Python test automation", "LabVIEW", "EMC pre-compliance", "HALT / HASS planning"],
    related: [
      { id: "embedded-systems", title: "Embedded Systems" },
      { id: "product-development", title: "Product Development" },
    ],
  },
  {
    id: "product-development",
    icon: Rocket,
    title: "Product Development",
    intro:
      "Full product ownership from concept through lifecycle management, with one accountable engineering team.",
    image: manufacturing,
    alt: "Electronic product assemblies moving through an advanced manufacturing line",
    features: [
      { name: "Concept Design", body: "Requirement definition, feasibility studies and system architecture." },
      { name: "Rapid Prototyping", body: "Fast iteration loops that validate assumptions before tooling commitments." },
      { name: "Lifecycle Engineering", body: "Revisions, obsolescence management and sustaining engineering." },
    ],
    applications: ["New product introduction", "OEM white-label products", "Connected device platforms", "Product refresh programmes"],
    deliverables: ["Product requirement specification", "Working prototypes", "Production data package", "Sustaining engineering plan"],
    benefits: ["Single point of accountability", "Reduced time to first article", "Lower total lifecycle cost"],
    stack: ["Requirements traceability", "Design FMEA", "PLM / revision control", "Cost & BOM optimisation"],
    related: [
      { id: "pcb-manufacturing", title: "PCB Manufacturing" },
      { id: "engineering-services", title: "Engineering Services" },
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-tint">
        <div className="container-page py-20 lg:py-28">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.1] sm:text-5xl">
              Engineering services across design, validation and manufacturing
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Engage a single discipline or an end-to-end programme. Every service is delivered with
              defined exit criteria, documented reviews and a manufacturing-aware point of view.
            </p>
            <nav aria-label="Services" className="mt-10 flex flex-wrap gap-3">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex min-h-11 items-center rounded-xl bg-card px-5 text-sm font-semibold text-primary shadow-soft transition-colors hover:text-secondary"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {services.map((s, index) => (
        <section
          key={s.id}
          id={s.id}
          className={index % 2 === 1 ? "bg-surface py-24 lg:py-28" : "py-24 lg:py-28"}
        >
          <div className="container-page">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <Reveal className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <div className="img-zoom rounded-2xl shadow-lift">
                  <img
                    src={s.image}
                    alt={s.alt}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="w-full rounded-2xl object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1} className={index % 2 === 1 ? "lg:order-1" : undefined}>
                <span className="grid size-12 place-items-center rounded-xl bg-primary/6 text-primary">
                  <s.icon className="size-6" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">{s.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.intro}</p>

                <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <div key={f.name} className="card-lift rounded-2xl bg-card p-5 shadow-soft">
                      <dt className="text-sm font-bold text-primary">{f.name}</dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.body}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-10 rounded-2xl bg-card p-8 shadow-soft sm:p-10 lg:grid-cols-4">
              <div>
                <h3 className="eyebrow">Applications</h3>
                <ul className="mt-4 space-y-2">
                  {s.applications.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="eyebrow">Technologies</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg bg-tint px-3 py-1.5 text-xs font-medium text-primary"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="eyebrow">Deliverables</h3>
                <ul className="mt-4 space-y-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="eyebrow">Benefits</h3>
                <ul className="mt-4 space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">Related Services</span>
                {s.related.map((r) => (
                  <a
                    key={r.id}
                    href={`#${r.id}`}
                    className="inline-flex min-h-10 items-center rounded-xl border border-border px-4 text-sm font-semibold text-primary transition-colors hover:border-secondary hover:text-secondary"
                  >
                    {r.title}
                  </a>
                ))}
              </div>
              <Link
                to="/"
                hash="contact"
                className="btn-ripple group inline-flex min-h-12 items-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-secondary hover:shadow-lift"
              >
                Discuss {s.title}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
