import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Download, Plus } from "lucide-react";

import heroAbstract from "@/assets/hero-abstract.jpg";
import workPetliva from "@/assets/work-petliva.jpg";
import workSalon from "@/assets/work-salon.jpg";
import workPortal from "@/assets/work-portal.jpg";
import workAiHealth from "@/assets/work-aihealth.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mayur Joshi — Full-Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Mayur Pravin Joshi — full-stack software developer building scalable React, React Native and Supabase applications end-to-end.",
      },
      { property: "og:title", content: "Mayur Joshi — Full-Stack Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Full-stack software developer shipping production apps with React, React Native, Firebase and Supabase.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: Index,
});

const works = [
  {
    title: "PETLIVA",
    tag: "Mobile App",
    desc: "Pet-care app — feeding tracker, vet visits, medication & food inventory, synced via Supabase",
    img: workPetliva,
    tags: ["Expo Router", "TypeScript", "Supabase"],
    href: "https://github.com/Myurr11/Petliva",
  },
  {
    title: "SALON OS",
    tag: "Client Product",
    desc: "Salon management system live across branches — billing, staff, inventory, appointments & reports",
    img: workSalon,
    tags: ["React Native", "TypeScript", "Supabase"],
    href: "https://github.com/Myurr11/salon-management-application",
  },
  {
    title: "COMPLAINT PORTAL",
    tag: "Web App",
    desc: "College grievance portal with role-based student/admin dashboards and real-time status tracking",
    img: workPortal,
    tags: ["React", "Firebase", "Chart.js"],
    href: "https://github.com/Myurr11/College-complaint-portal-w-firebase",
  },
  {
    title: "AI HEALTH CONSULTANT",
    tag: "Mobile App",
    desc: "Healthcare assistant app — medicine scanner, drug analysis, doctor consultation, AI-powered triage",
    img: workAiHealth,
    tags: ["React Native", "Firebase", "Generative AI"],
    href: "https://github.com/Myurr11/Al_HealthConsultant",
  },
];

const experience = [
  {
    stage: "01",
    title: "COMETCHAT",
    role: "ReactJS Development Intern — Remote",
    period: "09/2025 — 03/2026",
    points: [
      "Translated complex Figma / Adobe XD mockups into pixel-perfect, responsive pages in React.js and SCSS.",
      "Ensured cross-browser compatibility and optimized performance across mobile and desktop.",
      "Collaborated with UI/UX designers to keep design consistency through the full cycle.",
      "Authored clean, reusable, documented code inside rigorous team code reviews.",
    ],
  },
  {
    stage: "02",
    title: "BHARATI VIDYAPEETH",
    role: "Full Stack Developer Intern & Team Lead — Navi Mumbai",
    period: "11/2024 — 01/2025",
    points: [
      "Led a team building a full-stack College Complaint & Suggestion Portal (React, Firebase Auth, Firestore).",
      "Architected real-time submissions with Firestore listeners for live status tracking.",
      "Built Chart.js analytics into the Admin Dashboard with React Toastify feedback.",
      "Implemented protected role-based routing and fully responsive Tailwind layouts.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Bharati Vidyapeeth Deemed University, Department of Management Studies",
    period: "2022 — 2025",
    result: "CGPA 8.31",
  },
];

const skillGroups = [
  {
    label: "FRONTEND",
    items: ["JavaScript (ES6+)", "React.js", "TypeScript", "Redux", "HTML5 / CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    label: "BACKEND & DATA",
    items: ["Node.js", "JWT / OAuth", "MySQL", "Firebase", "Supabase", "PostgreSQL"],
  },
  {
    label: "LANGUAGES",
    items: ["Python", "Java", "C", "C#"],
  },
  {
    label: "TOOLS",
    items: ["Git / GitHub", "Figma", "Framer", "Webflow", "Advanced Excel"],
  },
];

function SectionHeading({ filled, outlined }: { filled: string; outlined: string }) {
  return (
    <h2 className="font-display uppercase leading-[0.9] tracking-tight">
      <span className="block text-[clamp(2.5rem,8vw,6rem)]">{filled}</span>
      <span className="block text-[clamp(2.5rem,8vw,6rem)] text-outline">{outlined}</span>
    </h2>
  );
}

function Index() {
  const [open, setOpen] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Outer frame */}
      <div className="mx-auto max-w-[1200px] border-x border-foreground/40 px-5 sm:px-10">
        {/* Nav */}
        <header className="flex items-center justify-between border-b border-foreground/40 py-5">
          <a href="#top" className="font-display text-sm uppercase tracking-wide">
            Mayur Joshi
          </a>
          <a
            href="mailto:joshimayur1110@gmail.com?subject=CV%20Request"
            className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-widest transition-colors hover:text-[var(--accent)] sm:flex"
          >
            Request CV <Download className="h-3.5 w-3.5" />
          </a>
          <nav className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-widest">
            <a href="#work" className="transition-colors hover:text-[var(--accent)]">Work</a>
            <a href="#about" className="transition-colors hover:text-[var(--accent)]">About</a>
            <a href="#contact" className="transition-colors hover:text-[var(--accent)]">Contact</a>
          </nav>
        </header>

        {/* Hero */}
        <section id="top" className="border-b border-foreground/40 pt-10 pb-16">
          <h1 className="font-display uppercase leading-[0.85]">
            <span className="block text-[clamp(3rem,11vw,8.5rem)]">
              <span className="text-outline">Full-Stack</span>{" "}
              <span>Developer</span>
            </span>
            <span className="block text-[clamp(3rem,11vw,8.5rem)] text-outline">
              Portfolio
            </span>
          </h1>

          <div className="mt-12 grid gap-8 sm:grid-cols-[1fr_1.2fr] sm:items-start">
            <div className="relative max-w-[280px]">
              <img
                src={heroAbstract}
                alt="Black and white abstract architectural composition"
                width={768}
                height={1024}
                fetchPriority="high"
                className="w-full grayscale"
              />
              <div className="absolute -bottom-8 -left-8 flex h-20 w-20 items-center justify-center">
                <svg viewBox="0 0 100 100" className="spin-slow h-full w-full">
                  <defs>
                    <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                  </defs>
                  <text className="fill-[var(--accent)] font-mono text-[9.5px] uppercase tracking-[2.5px]">
                    <textPath href="#circlePath">
                      Open to work • Open to work •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed sm:justify-self-end sm:pt-4">
              Hi, my name is Mayur and I am a full-stack software developer. My
              main goal is to build scalable, quality products that users rely
              on every day — from design translation all the way to deployment.
              Meanwhile, every shipped feature sharpens my craft.
            </p>
          </div>
        </section>
      </div>

      {/* Marquee — contained within the page frame */}
      <div className="mx-auto max-w-[1200px] border-x border-foreground/40">
        <div className="overflow-hidden border-b border-foreground/40 py-4" aria-hidden="true">
          <div className="marquee-track flex w-max items-center gap-8">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex items-center gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="flex items-center gap-8">
                    <span
                      className={`font-display text-4xl uppercase sm:text-5xl ${
                        i % 2 === 0 ? "" : "text-outline"
                      }`}
                    >
                      My Works
                    </span>
                    <Plus className="h-5 w-5" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] border-x border-foreground/40 px-5 sm:px-10">
        {/* Projects */}
        <section id="work" className="border-b border-foreground/40 py-20">
          <div className="text-center">
            <SectionHeading filled="Selected" outlined="Projects" />
          </div>
          <div className="mt-14 grid sm:grid-cols-2">
          {works.map((w, i) => (
            <article
              key={w.title}
              className={`group border-foreground/40 p-6 sm:p-8 ${
                i % 2 === 0 ? "sm:border-r" : ""
              } ${i < 2 ? "border-b" : ""} ${i === 0 ? "max-sm:border-b" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl uppercase sm:text-3xl">{w.title}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {w.desc}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1.5">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-foreground/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={w.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 block overflow-hidden"
                aria-label={`View ${w.title} source code on GitHub`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={w.img}
                    alt={`${w.title} project visual`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-[4/3] w-full object-cover grayscale transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-end justify-end bg-foreground/0 p-4 opacity-0 transition-opacity duration-300 group-hover:bg-foreground/10 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 border border-foreground bg-background px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest">
                      View Code <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
          </div>
        </section>

        {/* Experience */}
        <section id="about" className="border-b border-foreground/40 py-20">
          <div className="text-center">
            <SectionHeading filled="Work" outlined="Experience" />
          </div>

          <div className="mx-auto mt-14 max-w-3xl border-t border-foreground/40">
            {experience.map((e, i) => (
              <div key={e.stage} className="border-b border-foreground/40">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center gap-6 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Stage {e.stage}
                  </span>
                  <span className="flex-1 text-center font-display text-xl uppercase sm:text-2xl">
                    {e.title}
                  </span>
                  <Plus
                    className={`h-4 w-4 transition-transform duration-300 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="grid gap-6 pb-8 sm:grid-cols-[1fr_2fr]">
                    <div>
                      <p className="text-sm font-medium">{e.role}</p>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {e.period}
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {e.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-[7px] h-1 w-1 shrink-0 bg-foreground" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="border-b border-foreground/40 py-20">
          <div className="text-center">
            <SectionHeading filled="My" outlined="Education" />
          </div>

          <div className="mx-auto mt-14 max-w-3xl border-t border-foreground/40">
            {education.map((ed) => (
              <div
                key={ed.degree}
                className="grid gap-6 border-b border-foreground/40 py-8 sm:grid-cols-[1fr_2fr]"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {ed.period}
                  </p>
                  <p className="mt-2 inline-block rounded-full border border-foreground/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider">
                    {ed.result}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl uppercase sm:text-2xl">{ed.degree}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {ed.school}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How can I help */}
        <section className="border-b border-foreground/40 py-20">
          <h2 className="text-center font-display text-[clamp(2.5rem,7vw,5rem)] uppercase leading-none">
            How <span className="text-outline">can I</span> help?
          </h2>

          <div className="mx-auto mt-12 grid max-w-4xl gap-10 sm:grid-cols-2">
            <p className="text-sm leading-relaxed text-muted-foreground">
              I am a full-stack developer specialising in product shipping. I
              own features end-to-end — from translating design mockups into
              responsive, pixel-perfect interfaces to architecting the database,
              auth and real-time sync behind them. I have shipped a
              client-facing production app and thrive in fast-paced teams.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I believe good software is equal parts engineering and empathy —
              for the user and for the next developer reading the code. I write
              clean, documented, review-ready code and bring strategic,
              detail-driven thinking to every build.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-x-10 gap-y-10 sm:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <h3 className="border-b border-foreground pb-2 font-display text-lg uppercase tracking-wide">
                  {g.label}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {g.items.map((s) => (
                    <li key={s} className="text-sm text-muted-foreground">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-b border-foreground/40 py-20">
          <h2 className="font-display uppercase leading-[0.85]">
            <span className="block text-[clamp(4rem,14vw,11rem)]">Contact</span>
            <span className="block text-[clamp(4rem,14vw,11rem)] text-outline">Me</span>
          </h2>

          <div className="mt-12 grid gap-10 border-t border-foreground/40 pt-8 sm:grid-cols-2">
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Socials
              </h3>
              <ul className="mt-3 space-y-2">
                {[
                  { label: "GitHub", href: "https://github.com/Myurr11" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/mayur-joshi-myu11/" },
                  { label: "Portfolio", href: "#top" },
                ].map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("#") ? undefined : "_blank"}
                      rel={s.href.startsWith("#") ? undefined : "noreferrer"}
                      className="group inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--accent)]"
                    >
                      {s.label}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Contacts
              </h3>
              <ul className="mt-3 space-y-2 text-sm font-medium">
                <li>
                  <a href="tel:+917420918545" className="hover:opacity-50">
                    +91 74209 18545
                  </a>
                </li>
                <li>
                  <a href="mailto:joshimayur1110@gmail.com" className="hover:opacity-50">
                    joshimayur1110@gmail.com
                  </a>
                </li>
              </ul>
              <a
                href="mailto:joshimayur1110@gmail.com"
                className="mt-6 inline-flex items-center gap-2 border border-foreground px-5 py-2.5 font-display text-sm uppercase tracking-wide transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-foreground"
              >
                Get in touch <ArrowDown className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex items-center justify-between py-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>Mayur Joshi</span>
          <span>© 2026</span>
        </footer>
      </div>
    </div>
  );
}
