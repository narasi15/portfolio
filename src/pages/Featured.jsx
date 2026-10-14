import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import "./Home.css";      // shared: fonts, buttons
import "./Featured.css";

/* ---------- Edit your projects here ----------
   status: "delivered"  -> shows under "Built & delivered"
           "experiment" -> shows under "Experiments & explorations"
   demo:   optional live URL; adds a "Live demo" button when present
   highlights: optional short bullet points
------------------------------------------------ */

const PROJECTS = [
  {
    title: "EasyBites",
    subtitle: "Restaurant management & food ordering app",
    image: assets.project1,
    code: "https://github.com/narasi15/EasyBites",
    status: "experiment",
    description:
      "An Uber Eats-style full-stack web application for restaurant discovery, food ordering and restaurant queue management.",
    tags: ["Full stack", "Node.js", "MongoDB", "jQuery", "AJAX"],
  },
  {
    title: "Prescripto",
    subtitle: "Doctor appointment booking app",
    image: assets.project2,
    code: "https://github.com/narasi15/prescripto",
    status: "experiment",
    description:
      "A frontend-focused website for booking appointments and managing prescriptions, with a user-friendly interface and responsive design.",
    tags: ["Frontend", "React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Image Processing Script",
    subtitle: "Image filters in C",
    image: assets.project3,
    code: "https://github.com/narasi15/ImageProcessing",
    status: "experiment",
    description:
      "A C program that applies functions and filters to any image: copy and scale, plus greyscale, edge detection and Gaussian blur.",
    tags: ["C", "VSCode"],
  },
];

const SECTIONS = [
  {
    key: "delivered",
    title: "Built & delivered",
    sub: "Production work and client projects, blending design, code and problem-solving.",
  },
  {
    key: "experiment",
    title: "Experiments & explorations",
    sub: "Side projects for exploring new technologies and building for the fun of learning.",
  },
];

/* ---------- Pieces ---------- */

function ExternalIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 3h7v7M13 3 4 12" />
    </svg>
  );
}

function ProjectFeature({ p, flip }) {
  return (
    <article className={`pf${flip ? " pf-flip" : ""}`}>
      <a
        href={p.demo || p.code}
        target="_blank"
        rel="noopener noreferrer"
        className="pf-media"
        aria-label={`Open ${p.title}`}
      >
        <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" />
      </a>

      <div className="pf-body">
        <h3 className="home-display m-0 text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-none tracking-[-0.03em]">
          {p.title}
        </h3>
        <p className="mt-2 mb-0 text-[17px] text-[#5b606c]">{p.subtitle}</p>

        <p className="mt-5 mb-0 max-w-[34em] leading-relaxed">{p.description}</p>

        {p.highlights?.length > 0 && (
          <ul className="pf-highlights">
            {p.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span key={t} className="rounded-md bg-[#ecedea] px-2 py-0.5 font-mono text-xs">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
              Live demo <ExternalIcon />
            </a>
          )}
          <a
            href={p.code}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${p.demo ? "btn-ghost" : "btn-solid"}`}
          >
            View code on GitHub <ExternalIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

/* ---------- Page ---------- */

const Featured = () => {
  let index = 0;

  return (
    <div className="home bg-[#f6f6f4] text-[#16161a]">
      {/* ===== Intro ===== */}
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-6 md:px-8 md:pt-20">
        <h1 className="home-display m-0 text-[clamp(3rem,7.4vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
          Featured work
        </h1>
        <p className="mt-5 mb-0 max-w-[36em] text-lg leading-relaxed text-[#5b606c] md:text-[19px]">
          Full-stack apps, front ends and lower-level experiments. Each one links
          to its code on GitHub.
        </p>
      </section>

      {/* ===== Project sections (empty ones are hidden) ===== */}
      {SECTIONS.map((s) => {
        const items = PROJECTS.filter((p) => p.status === s.key);
        if (items.length === 0) return null;
        return (
          <section
            key={s.key}
            aria-labelledby={`${s.key}-h`}
            className="mx-auto max-w-6xl px-5 pt-14 md:px-8 md:pt-16"
          >
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-[#16161a] pb-4">
              <h2 id={`${s.key}-h`} className="home-display m-0 text-[28px] font-semibold tracking-tight">
                {s.title}
              </h2>
              <p className="m-0 max-w-[38em] text-[15px] text-[#5b606c]">{s.sub}</p>
            </div>

            <div className="grid">
              {items.map((p) => (
                <ProjectFeature key={p.title} p={p} flip={index++ % 2 === 1} />
              ))}
            </div>
          </section>
        );
      })}

      {/* ===== More on GitHub + CTA ===== */}
      <section className="mt-24 bg-black text-[#f4f5f3]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-5 py-16 md:px-8">
          <div>
            <h2 className="home-display m-0 max-w-[16em] text-[clamp(2rem,4.4vw,3.25rem)] font-extrabold leading-none tracking-[-0.03em] [text-wrap:balance]">
              Want to build something together?
            </h2>
            <p className="mt-4 mb-0 text-[#a6a9b0]">
              More experiments live on{" "}
              <a href="https://github.com/narasi15" target="_blank" rel="noopener noreferrer" className="text-[#f4f5f3] underline underline-offset-4">
                GitHub
              </a>.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-solid feat-cta-solid">Get in touch</Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost feat-cta-ghost">
              Résumé (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
