import React, { useEffect, useRef, useState } from "react";
import "./SkillsChart.css";

/* ---------- Edit your skills here (level 1–5) ---------- */

const LEVELS = {
  1: "Just brewing",
  2: "Warming up",
  3: "Getting good",
  4: "Crushing it",
  5: "Mastermind",
};

const GROUPS = [
  {
    name: "Languages",
    skills: [
      { name: "Python", level: 5 },
      { name: "Java", level: 5 },
      { name: "JavaScript", level: 4 },
    ],
  },
  {
    name: "Web",
    skills: [
      { name: "React", level: 4 },
      { name: "Node.js", level: 4 },
    ],
  },
  {
    name: "Data & ML",
    skills: [
      { name: "Postgres", level: 5 },
      { name: "Power BI", level: 5 },
      { name: "TensorFlow", level: 5 },
    ],
  },
  {
    name: "Cloud & infra",
    skills: [
      { name: "Azure", level: 5 },
      { name: "AWS", level: 4 },
      { name: "Kubernetes", level: 4 },
    ],
  },
];

/* Fills the meters once, when the section scrolls into view. */
function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}

function Meter({ level, delay }) {
  return (
    <span className="sk-meter" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`sk-seg${n <= level ? " is-on" : ""}`}
          style={{ transitionDelay: `${delay + n * 60}ms` }}
        />
      ))}
    </span>
  );
}

const SkillsChart = () => {
  const [ref, inView] = useInView();
  let row = 0;

  return (
    <div ref={ref} className={`sk${inView ? " is-in" : ""}`}>
      <div className="sk-grid">
        {GROUPS.map((g) => (
          <section key={g.name} className="sk-group" aria-label={g.name}>
            <h3 className="sk-group-title home-display">{g.name}</h3>
            <ul className="sk-list">
              {g.skills.map((s) => {
                const delay = row++ * 70;
                return (
                  <li key={s.name} className="sk-row">
                    <span className="sk-name">{s.name}</span>
                    <Meter level={s.level} delay={delay} />
                    <span className="sk-level">
                      {LEVELS[s.level]}
                      <span className="sr-only"> ({s.level} out of 5)</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <p className="sk-key">
        Scale: {Object.values(LEVELS).join(" → ")}
      </p>
    </div>
  );
};

export default SkillsChart;
