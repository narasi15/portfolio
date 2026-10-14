import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Home.css";      // shared: fonts, buttons
import "./Contact.css";

/* EmailJS settings (the public key is designed to be public) */
const EMAILJS = {
  serviceId: "service_jyet2py",
  templateId: "template_angfsto",
  publicKey: "JlDS7YK-gZwoUOeVS",
};

const LINKS = [
  {
    name: "GitHub",
    handle: "github.com/narasi15",
    href: "https://github.com/narasi15",
    icon: (
      <svg viewBox="0 0 496 512" fill="currentColor" aria-hidden="true">
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "in/priyanka-narasi",
    href: "https://www.linkedin.com/in/priyanka-narasi/",
    icon: (
      <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
        <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.09 107 0 82.91 0 53.56 0 24.21 24.09 0 53.84 0s53.84 24.21 53.84 53.56c0 29.35-24.09 53.44-53.84 53.44zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.7V448h-92.7V148.9h89V184h1.3c12.4-23.5 42.6-48.3 87.7-48.3 93.8 0 111.2 61.8 111.2 142.3V448z" />
      </svg>
    ),
  },
];

const EMPTY = { user_name: "", user_email: "", message: "" };

const Contact = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState(EMPTY);
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "sent" || status === "error") setStatus("idle");
  };

  // Only show "sent" after EmailJS confirms; show an error if it fails.
  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, form.current, {
        publicKey: EMAILJS.publicKey,
      });
      setFormData(EMPTY);
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS failed:", err?.text || err);
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <div className="home bg-[#f6f6f4] text-[#16161a]">
      <section className="mx-auto grid max-w-6xl gap-14 px-5 pt-16 pb-24 md:px-8 md:pt-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* ===== Left: intro + links ===== */}
        <div className="min-w-0">
          <h1 className="home-display m-0 text-[clamp(3rem,7.4vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
            Get in touch
          </h1>
          <p className="mt-6 mb-0 max-w-[28em] text-lg leading-relaxed text-[#5b606c] md:text-[19px]">
            Want to collaborate, talk tech or just say hello? Send me a message
            and I’ll get back to you.
          </p>

          <h2 className="home-display mt-14 mb-0 text-[22px] font-semibold tracking-tight">
            Find me online
          </h2>
          <ul className="m-0 mt-4 list-none border-t border-[#16161a] p-0">
            {LINKS.map((l) => (
              <li key={l.name} className="border-b border-[#dcddda]">
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="ct-link">
                  <span className="ct-icon">{l.icon}</span>
                  <span className="min-w-0">
                    <span className="block font-semibold">{l.name}</span>
                    <span className="block truncate text-[15px] text-[#5b606c]">{l.handle}</span>
                  </span>
                  <svg className="ct-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M6 3h7v7M13 3 4 12" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Right: form ===== */}
        <div className="min-w-0">
          <form ref={form} onSubmit={sendEmail} className="ct-form">
            <div className="ct-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            <div className="ct-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="ct-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>

            <button type="submit" className="btn btn-solid w-full justify-center" disabled={sending}>
              {sending ? "Sending…" : "Send message"}
            </button>

            <p role="status" aria-live="polite" className="m-0 min-h-[1.5em] text-[15px]">
              {status === "sent" && (
                <span className="ct-ok">Message sent. Thanks for reaching out!</span>
              )}
              {status === "error" && (
                <span className="ct-err">
                  Your message didn’t send. Check your connection and try again, or
                  message me on LinkedIn.
                </span>
              )}
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
