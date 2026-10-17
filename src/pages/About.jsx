import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import SkillsChart from "../components/SkillsChart";
import AnimatedPieChart from "../components/AnimatedPieChart";
import AnimatedCards from "../components/AnimatedCards";
import "./Home.css";  // shared: fonts, buttons, brush highlight
import "./About.css";

/* ---------- Content (edit here) ---------- */

const CAREER = [
  {
    org: "Ontario Dig Authority",
    logo: assets.ooclogo,
    roles: [
      { title: "Data Engineer", years: "2024 – now" },
      { title: "Full Stack Developer", years: "2023 – 2024" },
    ],
  },
  {
    org: "Freelance",
    logo: assets.freelancer,
    roles: [{ title: "Software Developer (Full Stack)", years: "2022 – 2023" }],
  },
  {
    org: "BlueCat Networks",
    logo: assets.bluecatlogo,
    roles: [{ title: "Software Development Co-op", years: "2018 – 2019" }],
  },
  {
    org: "Ministry of the Environment, Conservation and Parks",
    logo: assets.ministrylogo,
    roles: [{ title: "Software and IT Assistant", years: "2018" }],
  },
];

const TEACHING = [
  {
    org: "TutorBright",
    logo: assets.tblogo,
    roles: [{ title: "Tutor", years: "2016 – now" }],
  },
  {
    org: "The Journey Neighbourhood Centre",
    logo: assets.journeylogo,
    roles: [{ title: "Summer Camp Leader", years: "2015 – 2016" }],
  },
];

/* ---------- Pieces ---------- */

function SectionHead({ id, title, sub }) {
  return (
    <div className="mb-8">
      <h2
        id={id}
        className="home-display m-0 text-[clamp(2.1rem,4.6vw,3.4rem)] font-extrabold leading-none tracking-[-0.03em]"
      >
        {title}
      </h2>
      {sub && <p className="mt-3 mb-0 max-w-[40em] text-lg text-[#5b606c]">{sub}</p>}
    </div>
  );
}

function Timeline({ items }) {
  return (
    <ol className="m-0 list-none border-t border-[#16161a] p-0">
      {items.map((job) => (
        <li key={job.org} className="tl-row">
          <div className="tl-logo">
            <img src={job.logo} alt="" aria-hidden="true" className="h-full w-full object-contain" />
          </div>
          <div className="min-w-0">
            <h3 className="home-display m-0 text-[22px] font-semibold leading-snug tracking-tight">
              {job.org}
            </h3>
            <ul className="m-0 mt-1 list-none p-0">
              {job.roles.map((r) => (
                <li key={r.title} className="flex flex-wrap items-baseline justify-between gap-x-4 text-[#5b606c]">
                  <span>{r.title}</span>
                  <span className="font-mono text-sm tabular-nums">{r.years}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Page ---------- */

const About = () => {
  return (
    <div className="home bg-[#f6f6f4] text-[#16161a]">
      {/* ===== Intro ===== */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr] md:gap-14 md:px-8 md:py-20">
        <div className="min-w-0">
          <h1 className="home-display m-0 text-[clamp(2.75rem,6.5vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.035em] [text-wrap:balance]">
            Here’s the{" "}
            <span className="brush paint text-[#800000]">
              <span className="brush-word">real me</span>
            </span>
          </h1>
          <p className="mt-6 mb-0 max-w-[32em] text-lg leading-relaxed text-[#5b606c] md:text-[19px]">
            A mix of code, coffee and creativity: everything that shapes how I
            build, think and create meaningful solutions.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={assets.AboutPic}
            alt="Priyanka"
            className="h-auto w-full max-w-[300px] object-contain sm:max-w-[400px] md:max-w-[460px]"
          />
        </div>
      </section>

      {/* ===== Professional journey ===== */}
      <section aria-labelledby="journey-h" className="border-t border-[#dcddda] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <SectionHead id="journey-h" title="Professional journey" />
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
            <div className="flex min-w-0 justify-center">
              <div className="w-full max-w-[400px]">
                <AnimatedPieChart />
              </div>
            </div>
            <p className="m-0 max-w-[34em] text-lg leading-relaxed text-[#5b606c]">
              I started my career in full-stack development and later expanded
              into data engineering and analytics. My experience spans frontend,
              backend, data pipelines, reporting and analytics, giving me an
              end-to-end view of how software and data work together.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Experience ===== */}
      <section aria-labelledby="exp-h" className="mx-auto max-w-6xl px-5 pt-20 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="min-w-0">
            <SectionHead id="exp-h" title="Experience" />
            <Timeline items={CAREER} />
          </div>
          <div className="min-w-0">
            <div className="mb-8 lg:pt-4">
              <h2 className="home-display m-0 text-[28px] font-semibold tracking-tight">
                Teaching &amp; community
              </h2>
            </div>
            <Timeline items={TEACHING} />
            
            <p className="mt-5 mb-0 text-[15px] text-[#5b606c]">
              Featured on TutorBright’s{" "}
              <a
                href="https://www.tutorbright.com/meet-our-tutors"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#dcddda] underline-offset-4 hover:text-[#800000]"
              >
                Meet Our Tutors
              </a>{" "}
              page as one of the top tutors in the GTA.
            </p>

            <Link
              to="/services"
              className="text-[#16161a] underline decoration-[#dcddda] underline-offset-4 hover:text-[#800000]"
            >
              Tutoring services
            </Link>
            
          </div>
        </div>
      </section>

      {/* ===== Skills ===== */}
      <section aria-labelledby="skills-h" className="mx-auto max-w-6xl px-5 pt-24 md:px-8">
        <SectionHead id="skills-h" title="Skills" sub="My skills run on caffeine and curiosity." />
        <div className="w-full overflow-x-auto">
          <div className="mx-auto w-full max-w-5xl">
            <SkillsChart />
          </div>
        </div>
      </section>

      {/* ===== Hobbies ===== */}
      <section aria-labelledby="hobbies-h" className="mx-auto max-w-7xl px-5 pt-24 pb-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            id="hobbies-h"
            title="Beyond the code"
            sub="Dance, music, mentoring, sunsets and the Raptors. Hover or tap a card."
          />
        </div>
        <AnimatedCards />
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-black text-[#f4f5f3]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-5 py-16 md:px-8">
          <h2 className="home-display m-0 max-w-[16em] text-[clamp(2rem,4.4vw,3.25rem)] font-extrabold leading-none tracking-[-0.03em] [text-wrap:balance]">
            Want to see what I’ve built?
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/featured" className="btn btn-solid about-cta-solid">See my work</Link>
            <Link to="/contact" className="btn btn-ghost about-cta-ghost">Get in touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;