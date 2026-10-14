import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../components/services";
import "./Home.css";      // shared: fonts, buttons
import "./Services.css";

/* ---------- Edit content here ---------- */

const REGISTER_URL =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__pnb_ytUNzNOSzk1SlU1ODg0WTgyM0FQMVdWV0ZXUS4u";

const WHY = [
  "Personalized lessons tailored to each student’s needs",
  "A blend of traditional and modern teaching methods",
  "Focus on building confidence and problem-solving skills",
  "A supportive and engaging learning environment",
];

const OPTIONS = [
  "One-on-one tutoring",
  "Group sessions",
  "Online or in-person lessons",
];

/* Student names are replaced with [my daughter] / [her] to protect their
   privacy. Restore them only if the families are happy to be named. */
const FEATURED_TESTIMONIAL = {
  from: "Parent",
  excerpt:
    "You’ve found a way to give my daughter the confidence back she once had, and she has come a long way since you came into her life.",
  full: [
    "Priyanka… you are absolutely amazing! Both to my daughter and myself.",
    "You do an excellent job making sure [my daughter] knows and understands her stuff! Not only that, but I’ve noticed you go above and beyond what’s expected of you. [She] speaks very highly of you, which I don’t hear much of from her about anyone.",
    "You’re always very thorough when it comes to working with [her] and giving me updates, which is greatly appreciated. You’ve found a way to give my daughter the confidence back she once had, and she has come a long way since you came into her life.",
    "[She] looks forward to her sessions with you, which speaks volumes to me. You are, without a doubt, an amazing person, and completely outstanding in what you’ve accomplished with [her]. I am and forever will always be grateful for what you’ve instilled in [her], and I truly hope you always remain a part of our lives.",
  ],
};

const TESTIMONIALS = [
  {
    quote:
      "Hi Priyanka, I thought you might like to see this email from [my daughter]’s maths teacher after today’s test. Your wonderful teaching is having great results for her! Thank you :)",
    from: "Parent",
  },
  {
    quote:
      "Hey, I just finished my exam! I think it went well. I just wanted to say thank you, because you’ve helped me understand math a lot better!",
    from: "Student",
  },
  {
    quote:
      "Thank you for all your help. I really appreciate it. You really helped me pass the class lol. Have a great summer!",
    from: "Student",
  },
];

/* ---------- Pieces ---------- */

function TickList({ items }) {
  return (
    <ul className="svc-ticks">
      {items.map((t) => (
        <li key={t}>
          <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 8.5 6.5 12 13 4.5" />
          </svg>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function RegisterButton({ className = "" }) {
  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-solid ${className}`}
    >
      Register for lessons
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

/* ---------- Page ---------- */

const Services = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="home bg-[#f6f6f4] text-[#16161a]">
      {/* ===== Intro ===== */}
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-12 md:px-8 md:pt-20">
        <h1 className="home-display m-0 max-w-[12em] text-[clamp(2.75rem,6.5vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.035em] [text-wrap:balance]">
          Explore my tutoring services
        </h1>
        <p className="mt-6 mb-8 max-w-[36em] text-lg leading-relaxed text-[#5b606c] md:text-[19px]">
          Tech meets tradition in my learning space, where programming, math,
          music and more are taught with heart and creativity. For students in
          Grades 1 to 12.
        </p>
        <RegisterButton />
      </section>

      {/* ===== Why + options ===== */}
      <section className="border-y border-[#dcddda] bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-2 md:gap-16 md:px-8">
          <div className="min-w-0">
            <h2 className="home-display m-0 mb-4 text-[26px] font-semibold tracking-tight">Why learn with me</h2>
            <TickList items={WHY} />
          </div>
          <div className="min-w-0">
            <h2 className="home-display m-0 mb-4 text-[26px] font-semibold tracking-tight">
              Flexible options for your schedule
            </h2>
            <TickList items={OPTIONS} />
          </div>
        </div>
      </section>

      {/* ===== Courses ===== */}
      <section aria-labelledby="courses-h" className="mx-auto max-w-6xl px-5 pt-20 md:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="courses-h" className="home-display m-0 text-[clamp(2.1rem,4.6vw,3.4rem)] font-extrabold leading-none tracking-[-0.03em]">
              Courses I teach
            </h2>
            <p className="mt-3 mb-0 text-lg text-[#5b606c]">Tailored for students from Grades 1 through 12.</p>
          </div>
        </div>
        <div className="svc-courses grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title ?? i} service={service} />
          ))}
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section aria-labelledby="kind-h" className="mx-auto max-w-6xl px-5 pt-24 pb-24 md:px-8">
        <h2 id="kind-h" className="home-display m-0 mb-10 text-[clamp(2.1rem,4.6vw,3.4rem)] font-extrabold leading-none tracking-[-0.03em]">
          Testimonials
        </h2>

        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          {/* Featured parent note */}
          <figure className="svc-feature m-0">
            <blockquote id="full-note" className="m-0">
              {!open ? (
                <p className="home-display svc-pull">{FEATURED_TESTIMONIAL.excerpt}</p>
              ) : (
                <div className="grid gap-4 text-lg leading-relaxed">
                  {FEATURED_TESTIMONIAL.full.map((para) => <p key={para} className="m-0">{para}</p>)}
                </div>
              )}
            </blockquote>
            <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[#5b606c]">{FEATURED_TESTIMONIAL.from}</span>
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls="full-note"
                className="svc-more"
              >
                {open ? "Show less" : "Read the full note"}
              </button>
            </figcaption>
          </figure>

          {/* Shorter quotes */}
          <div className="grid content-start gap-0">
            {TESTIMONIALS.map((t) => (
              <figure key={t.quote} className="m-0 border-b border-[#dcddda] py-6 first:pt-0">
                <blockquote className="m-0 text-[17px] leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-2 text-[15px] text-[#5b606c]">{t.from}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-black text-[#f4f5f3]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-5 py-16 md:px-8">
          <h2 className="home-display m-0 max-w-[14em] text-[clamp(2rem,4.4vw,3.25rem)] font-extrabold leading-none tracking-[-0.03em] [text-wrap:balance]">
            Ready to start lessons?
          </h2>
          <RegisterButton className="svc-cta" />
        </div>
      </section>
    </div>
  );
};

export default Services;
