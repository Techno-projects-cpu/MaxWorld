"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";

const REQUIREMENTS = [
  "CC camera / security setup",
  "Complete CCTV system (DVR/NVR)",
  "Laptop sales enquiry",
  "Laptop repair & service",
  "Surveillance storage / HDD",
  "Something else",
] as const;

export default function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState<string>(REQUIREMENTS[0]);
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");

  const buildMessage = () =>
    `Hello Max World! \n\nName: ${name.trim()}\nPhone: ${phone.trim()}\nRequirement: ${requirement}${
      details.trim() ? `\nDetails: ${details.trim()}` : ""
    }`;

  const validate = () => {
    if (name.trim().length < 2) {
      setError("Please enter your name.");
      return false;
    }
    if (!/^[+\d][\d\s()-]{8,16}$/.test(phone.trim())) {
      setError("Please enter a valid phone number (e.g. +91 98765 43210).");
      return false;
    }
    setError("");
    return true;
  };

  const onWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    window.open(whatsappLink(buildMessage()), "_blank", "noopener,noreferrer");
  };

  const onEmail = () => {
    if (!validate()) return;
    const subject = encodeURIComponent(`Enquiry — ${requirement}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="form-panel" onSubmit={onWhatsApp} noValidate>
      <h3>Get a free quote</h3>
      <p>
        Tell us what you need — Shaik Eliyas &amp; team will call back the same
        day with an honest, no-pressure quote.
      </p>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="lead-name">Your name</label>
          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Ramesh Yadav"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="lead-phone">Phone / WhatsApp</label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="field full">
          <label htmlFor="lead-requirement">What do you need?</label>
          <select
            id="lead-requirement"
            name="requirement"
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
          >
            {REQUIREMENTS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div className="field full">
          <label htmlFor="lead-details">Details (optional)</label>
          <textarea
            id="lead-details"
            name="details"
            placeholder="e.g. 4 cameras for my shop near Ek Minar Masjid, night vision + phone viewing…"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
      </div>

      <p className="form-error" style={{ display: error ? "block" : "none" }} role="alert">
        {error}
      </p>

      <div className="form-actions">
        <button type="submit" className="btn btn-wa">
          <WhatsAppIcon />
          Send enquiry on WhatsApp
        </button>
        <button type="button" className="btn btn-outline" onClick={onEmail}>
          Or send via email
        </button>
      </div>
      <p className="form-note">
        No spam, ever. Your details go straight to the shop — we never share or
        sell them.
      </p>
    </form>
  );
}

export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.02 2.67C8.6 2.67 2.6 8.66 2.6 16.07c0 2.36.62 4.66 1.8 6.7L2.5 29.5l6.98-1.83a13.36 13.36 0 0 0 6.53 1.66h.01c7.42 0 13.42-5.99 13.42-13.4 0-3.58-1.4-6.94-3.92-9.48a13.34 13.34 0 0 0-9.5-3.78Zm0 24.5h-.01a11.1 11.1 0 0 1-5.65-1.55l-.4-.24-4.15 1.09 1.11-4.05-.26-.42a11.05 11.05 0 0 1-1.7-5.9c0-6.14 5-11.13 11.15-11.13a11.08 11.08 0 0 1 7.88 3.27 11.07 11.07 0 0 1 3.26 7.88c0 6.14-5 11.05-11.19 11.05Zm6.1-8.35c-.33-.17-1.97-.97-2.28-1.08-.31-.11-.53-.17-.76.17-.22.33-.86 1.08-1.06 1.3-.19.22-.39.25-.72.08-.33-.17-1.4-.51-2.66-1.64a10 10 0 0 1-1.85-2.3c-.19-.33 0-.51.15-.68.14-.15.33-.39.5-.58.17-.2.22-.33.33-.56.11-.22.06-.42-.03-.58-.08-.17-.76-1.82-1.04-2.5-.27-.65-.55-.56-.76-.57h-.64c-.22 0-.58.08-.89.42-.31.33-1.17 1.14-1.17 2.8 0 1.64 1.2 3.23 1.37 3.46.17.22 2.36 3.6 5.72 5.05.8.35 1.42.56 1.9.71.8.26 1.53.22 2.1.13.64-.1 1.97-.8 2.25-1.58.28-.78.28-1.45.2-1.58-.08-.14-.31-.22-.64-.39Z" />
    </svg>
  );
}
