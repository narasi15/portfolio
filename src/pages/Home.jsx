import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import "./Home.css";

/* ---------- Content (edit here) ---------- */

const ROLES = ["Data Engineer", "Software Developer"];

const NOW_BUILDING = [
  { title: "AI-Powered Finance Tracker", note: "Personal project" },
  { title: "Dance Academy Website Revamp", note: "Website redesign" },
];

const PROJECTS = [
  {
    title: "EasyBites",
    kind: "Restaurant discovery & food ordering",
    blurb:
      "An Uber Eats-style full-stack app for restaurant discovery, food ordering and restaurant queue management.",
    tags: ["Node.js", "MongoDB", "jQuery", "AJAX"],
  },
  {
    title: "Prescripto",
    kind: "Doctor appointment booking",
    blurb:
      "A responsive front end for booking appointments and managing prescriptions.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Image Processing Script",
    kind: "Image filters in C",
    blurb:
      "Copy and scale functions plus greyscale, edge-detection and Gaussian-blur filters.",
    tags: ["C"],
  },
];

const EXPERIENCE = [
  { years: "2024 – now", role: "Data Engineer", org: "Ontario Dig Authority" },
  { years: "2023 – 2024", role: "Full Stack Developer", org: "Ontario Dig Authority" },
  { years: "2022 – 2023", role: "Software Developer (Full Stack)", org: "Freelance" },
  { years: "2018 – 2019", role: "Software Development Co-op", org: "BlueCat Networks" },
  { years: "2018", role: "Software and IT Assistant", org: "Ministry of the Environment, Conservation and Parks" },
];

/* ---------- Small pieces ---------- */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* Role text with a brush-stroke highlight that repaints on each change.
   Replaces the typewriter, which visibly cut words off mid-type. */
function RoleBrush() {
  const [i, setI] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setI((n) => (n + 1) % ROLES.length), 2800);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <span className="block mt-4 home-display font-semibold text-[clamp(1.6rem,3.4vw,2.5rem)] leading-tight tracking-tight min-h-[1.2em]">
      <span key={i} className="brush paint text-[#800000]" aria-live="polite">
        <span className="brush-word">{ROLES[i]}</span>
      </span>
    </span>
  );
}

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      <svg viewBox="0 0 16 16" fill="none" strokeWidth="1.8">
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </span>
  );
}

/* ---------- Page ---------- */

const Home = () => {
  const videoRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  // Don't autoplay the signature animation for visitors who turned motion off.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduced) {
      v.pause();
      v.currentTime = v.duration || 0; // show the finished signature
    } else {
      v.play().catch(() => {});
    }
  }, [reduced]);

  return (
    <div className="home bg-[#f6f6f4] text-[#16161a]">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        {/* Signature video: faint, behind the text */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 w-[170%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-30 mix-blend-multiply sm:w-[130%] md:w-[110%]"
        >
          <source src={assets.signature} type="video/mp4" />
        </video>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-[1.25fr_0.9fr] md:gap-14 md:px-8 md:py-20">
          <div className="min-w-0">
            <p className="mb-1 text-lg text-[#5b606c]">
              Hi, I'm <span className="wave inline-block">👋</span>
            </p>
            <h1 className="home-display m-0 text-[clamp(3rem,7.4vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.035em] [text-wrap:balance]">
              Priyanka 
            </h1>

            <RoleBrush />

            <p className="mt-6 mb-8 max-w-[34em] text-lg leading-relaxed text-[#5b606c] md:text-[19px]">
              I design and build scalable, data-driven applications, using code
              and data as my canvas. With an eye for detail, I create intuitive
              solutions powered by AI.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/featured" className="btn btn-solid">
                See my work
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Résumé (PDF)
              </a>
            </div>
          </div>

          {/* Portrait: greyscale, colour wipes in on hover/focus */}
          <figure
            tabIndex={0}
            className="portrait group relative m-0 w-full max-w-[320px] justify-self-start md:max-w-[380px] md:justify-self-end"
          >
            <div className="relative aspect-[756/868] max-w-full overflow-hidden rounded-[28px_28px_120px_28px] bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
              <img
                src={assets.priyanka3}
                alt="Priyanka holding a paintbrush"
                className="absolute inset-0 h-full w-full object-cover grayscale"
              />
              <img
                src={assets.priyanka3}
                alt=""
                aria-hidden="true"
                className="portrait-color absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* ===== Now building ===== */}
      <section className="border-y border-[#dcddda] bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-7 md:grid-cols-[200px_1fr] md:gap-8 md:px-8">
          <h2 className="home-display m-0 text-xl font-semibold">Now building</h2>
          <ul className="m-0 grid list-none gap-3.5 p-0">
            {NOW_BUILDING.map((item) => (
              <li key={item.title} className="grid min-w-0 grid-cols-[1fr_auto] items-center gap-4">
                <div className="min-w-0">
                  <span className="font-semibold">{item.title}</span>
                  <span className="block text-[15px] text-[#5b606c]">{item.note}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#dcddda] px-2.5 py-1 text-[13px] font-medium">
                  <i className="pulse-dot" />
                  In progress
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* ===== Experience ===== */}
      <section className="mx-auto max-w-6xl px-5 pt-20 pb-24 md:px-8 md:pt-24">
        <div className="mb-7 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="home-display m-0 text-[clamp(2.1rem,4.6vw,3.4rem)] font-extrabold leading-none tracking-[-0.03em]">
            Experience
          </h2>
          <Link to="/about" className="font-medium text-[#5b606c] underline decoration-[#dcddda] underline-offset-4 hover:text-[#800000]">
            More about me
          </Link>
        </div>

        <ol className="m-0 list-none border-t border-[#16161a] p-0">
          {EXPERIENCE.map((e) => (
            <li
              key={e.years + e.role}
              className="grid gap-1 border-b border-[#dcddda] py-5 sm:grid-cols-[150px_1fr] sm:gap-6"
            >
              <span className="pt-1 font-mono text-sm tabular-nums text-[#5b606c]">{e.years}</span>
              <div>
                <h3 className="home-display m-0 text-[22px] font-semibold tracking-tight">{e.role}</h3>
                <p className="m-0 text-[#5b606c]">{e.org}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ===== Contact CTA ===== */}
      <section className="bg-black text-[#f4f5f3]">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-20 md:grid-cols-[1.4fr_1fr] md:px-8">
          <div>
            <h2 className="home-display m-0 text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-none tracking-[-0.035em] [text-wrap:balance]">
              Have a data problem or a project in mind?
            </h2>
            <p className="mt-4 mb-0 max-w-[32em] text-[#a6a9b0]">
              I'm open to data engineering and full-stack work.
            </p>
          </div>
          <div className="grid justify-items-start gap-2.5">
            <Link to="/contact" className="cta-link">Send a message</Link>
            <a href="https://www.linkedin.com/in/priyanka-narasi/" target="_blank" rel="noopener noreferrer" className="cta-link">
              LinkedIn
            </a>
            <a href="https://github.com/narasi15" target="_blank" rel="noopener noreferrer" className="cta-link">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
