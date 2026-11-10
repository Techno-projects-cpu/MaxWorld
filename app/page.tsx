import Image from "next/image";
import Logo from "@/components/Logo";
import LeadForm, { WhatsAppIcon } from "@/components/LeadForm";
import { site, telLink, whatsappLink } from "@/lib/site";

/* ---------------- inline SVG icon set ---------------- */
const Icon = ({ d, size = 22 }: { d: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    dangerouslySetInnerHTML={{ __html: d }}
  />
);

const ICONS = {
  camera:
    '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  dvr: '<rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 12h.01M10 12h.01M14 12h6"/>',
  laptop:
    '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/><path d="M9 20l1-2h4l1 2"/>',
  wrench:
    '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  harddrive:
    '<path d="M22 12H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><path d="M6 16h.01M10 16h.01"/>',
  plug:
    '<path d="M9 2v6M15 2v6"/><path d="M7 8h10v4a5 5 0 0 1-10 0V8z"/><path d="M12 17v5"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  phoneCall:
    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 11.91a16 16 0 0 0 6 6l3.27-1.27a2 2 0 0 1 2.11.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  mapPin:
    '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  clock:
    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  instagram:
    '<rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.2"/><path d="M17.8 6.2h.01"/>',
};

const PRODUCTS = [
  {
    icon: ICONS.camera,
    title: "CC Cameras",
    desc: "Dome, bullet and PTZ cameras for homes, shops and offices — CP Plus, Hikvision, Dahua and Prama, with night vision and phone viewing.",
  },
  {
    icon: ICONS.dvr,
    title: "CCTV Systems",
    desc: "Complete DVR/NVR kits with surveillance storage, cabling and configuration — pick your camera count, we handle the rest.",
  },
  {
    icon: ICONS.laptop,
    title: "Laptop Sales",
    desc: "Genuine laptops at honest Khammam prices — billed properly, with manufacturer warranty, from a shop that will be here after the sale.",
  },
  {
    icon: ICONS.wrench,
    title: "Laptop Service & Repair",
    desc: "Screen, keyboard, battery and charging-port replacement, RAM/SSD upgrades, OS installation and software fixes.",
  },
  {
    icon: ICONS.harddrive,
    title: "Surveillance Storage",
    desc: "Surveillance-grade hard drives and backup configuration — so your footage is there when you actually need it.",
  },
  {
    icon: ICONS.plug,
    title: "Camera Accessories",
    desc: "Cables, adapters, mounts, connectors and everything installation day needs — genuine parts, fair prices.",
  },
];

const SERVICES = [
  {
    num: "01",
    title: "Free site survey & quote",
    desc: "We visit your home, shop or office in Khammam, map the right camera positions and hand you a clear, written quote. No advance, no obligation.",
  },
  {
    num: "02",
    title: "Installation & setup",
    desc: "Cameras mounted, DVR/NVR configured, remote viewing set up on your phone — installed by our own technicians, bundled into your quote.",
  },
  {
    num: "03",
    title: "Laptop sales & service",
    desc: "New laptops with proper billing, plus honest repair and upgrade work — diagnosed transparently, fixed right the first time.",
  },
  {
    num: "04",
    title: "After-sales support",
    desc: "Bought your CCTV or laptop from us? Call the same number for help — we service what we sell and we stand by it.",
  },
];

const FAQS = [
  {
    q: "Which camera brands do you stock?",
    a: "CP Plus, Hikvision, Dahua and Prama — genuine stock, billed properly and covered by manufacturer warranty.",
  },
  {
    q: "Do you install the cameras you sell?",
    a: "Yes — our own technicians install everything we sell: mounting, DVR/NVR setup, cabling and the phone-viewing app. Ask for a bundled camera + installation quote.",
  },
  {
    q: "Can I watch my cameras from my phone?",
    a: "Absolutely. We configure remote viewing on Android and iPhone during setup — and if you ever get stuck, one call to the shop and we'll walk you through it.",
  },
  {
    q: "Do you repair laptops too?",
    a: "Yes. Screen, keyboard, battery and charging-port replacement, RAM and SSD upgrades, OS installation, formatting and software fixes — quick and honest work for Khammam customers.",
  },
  {
    q: "Will you visit for a survey before I buy?",
    a: "Yes — free of charge anywhere in Khammam. You'll get an honest recommendation on how many cameras you actually need, not the maximum.",
  },
];

const WA_DEFAULT = whatsappLink(
  "Hello Max World! I'd like to know more about your CC cameras, systems and laptop service."
);

export default function Home() {
  return (
    <>
      {/* ======= TOP BAR ======= */}
      <div className="topbar">
        <div className="container">
          <span>
            <span className="dot">●</span>&nbsp; Indera Nagar, Khammam
          </span>
          <span className="hide-sm">Open daily · 10:00 AM – 8:00 PM</span>
          <a href={telLink}>{site.phoneDisplay}</a>
        </div>
      </div>

      {/* ======= NAV ======= */}
      <header className="nav">
        <div className="container">
          <a href="#" aria-label="Max World — home">
            <Logo />
          </a>
          <nav aria-label="Primary">
            <ul className="nav-links">
              <li><a href="#products">Products</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>
          <a href="#quote" className="btn btn-dark btn-sm">
            Get a quote
            <Icon d={ICONS.arrowRight} size={15} />
          </a>
        </div>
      </header>

      <main>
        {/* ======= HERO ======= */}
        <section className="hero">
          <div className="container">
            <div>
              <span className="hero-badge">
                <span className="rec-dot" aria-hidden="true" />
                CC Cameras · Systems · Laptops
              </span>
              <h1>
                See everything.
                <br />
                <em>Miss nothing.</em>
              </h1>
              <p className="hero-sub">
                <strong>Max World</strong> is Khammam's CCTV &amp; laptop service
                store — genuine <strong>CP Plus, Hikvision, Dahua and Prama</strong>{" "}
                cameras, complete systems, and laptop sales &amp; service, owned
                and run by <strong>Shaik Eliyas</strong> in Indera Nagar.
              </p>
              <div className="hero-ctas">
                <a href="#quote" className="btn btn-primary">
                  Get a free quote
                  <Icon d={ICONS.arrowRight} size={16} />
                </a>
                <a className="btn btn-wa" href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={17} />
                  Chat on WhatsApp
                </a>
              </div>
              <div className="hero-trust">
                {[
                  "Free site survey",
                  "Bill & manufacturer warranty",
                  "After-sales service",
                ].map((t) => (
                  <span key={t}>
                    <Icon d={ICONS.check} size={15} />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card">
                <div className="frame">
                  <span className="rec-tag">
                    <span className="rec-dot" />
                    LIVE
                  </span>
                  <Image
                    src="/images/hero-camera.png"
                    alt="Dome CCTV security camera — a bestseller at the Max World shop"
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 440px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="caption">
                  <div>
                    <p className="caption-title">4MP Dome Camera · Night Vision</p>
                    <p className="caption-sub">CP Plus · Hikvision · Dahua · Prama</p>
                  </div>
                  <span className="in-stock">
                    <Icon d={ICONS.check} size={12} />
                    In stock
                  </span>
                </div>
              </div>

              <div className="float-chip one" aria-hidden="true">
                <div className="fc-big">4</div>
                <div className="fc-small">
                  trusted brands — CP Plus, Hikvision, Dahua, Prama
                </div>
              </div>
              <div className="float-chip two" aria-hidden="true">
                <div className="fc-big">Free</div>
                <div className="fc-small">survey &amp; quote at your home, shop or office</div>
              </div>
            </div>
          </div>
        </section>

        {/* ======= BRAND STRIP ======= */}
        <section className="brands" aria-label="Brands we stock">
          <div className="container">
            <p className="brands-label">Genuine brands we stock</p>
            <div className="brands-row">
              {site.brands.map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ======= STATS ======= */}
        <section className="stats" aria-label="About Max World">
          <div className="container">
            {site.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ======= PRODUCTS ======= */}
        <section id="products" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">What we sell &amp; service</p>
                <h2>Security first.<br />Laptops covered too.</h2>
              </div>
              <p>
                From one dome camera for your shop to a full office system —
                and the laptops Khammam works on.
              </p>
            </div>
            <div className="product-grid">
              {PRODUCTS.map((p) => (
                <a key={p.title} href="#quote" className="product-card">
                  <span className="product-icon">
                    <Icon d={p.icon} />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <span className="card-link">
                    Enquire now
                    <Icon d={ICONS.arrowRight} size={13} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ======= SERVICES (dark) ======= */}
        <section id="services" className="section dark">
          <div className="container">
            <div className="services-wrap">
              <div>
                <p className="eyebrow">What we do</p>
                <h2 style={{ margin: "0.8rem 0 0.4rem", fontSize: "clamp(1.9rem,3.6vw,2.9rem)", letterSpacing: "-0.04em", lineHeight: 1.02 }}>
                  Sold it. Installed it.<br />Still here when you need us.
                </h2>
                <div style={{ marginTop: "1.6rem" }}>
                  {SERVICES.map((s) => (
                    <div className="service-row" key={s.num}>
                      <span className="service-num">{s.num}</span>
                      <div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="#quote" className="btn btn-light" style={{ marginTop: "1.6rem" }}>
                  Book a free site survey
                  <Icon d={ICONS.arrowRight} size={16} />
                </a>
              </div>
              <figure className="tech-figure">
                <Image
                  src="/images/technician.png"
                  alt="Max World technician installing a dome CCTV camera at a shop in Khammam"
                  width={760}
                  height={874}
                  style={{ objectFit: "cover" }}
                />
                <figcaption className="tech-caption">
                  <strong>Indera Nagar, near Ek Minar Masjid.</strong> Walk in
                  any day, 10 AM to 8 PM — or call and we'll come to you.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ======= WHY / ABOUT ======= */}
        <section id="about" className="section">
          <div className="container">
            <div className="why-wrap">
              <div>
                <p className="eyebrow">Why Max World</p>
                <p className="why-quote" style={{ marginTop: "1rem" }}>
                  “Buy the camera you need, not the one with the biggest margin.{" "}
                  <em>That's the only way a local shop survives.</em>”
                </p>
                <div className="why-attr">
                  <span className="why-avatar" aria-hidden="true">SE</span>
                  <span>
                    <span className="why-attr-name">{site.owner}</span>
                    <br />
                    <span className="why-attr-role">Owner, Max World — Indera Nagar, Khammam</span>
                  </span>
                </div>
              </div>
              <div className="value-list">
                {[
                  {
                    t: "Honest, need-based advice",
                    d: "We recommend what actually covers your space — most shops are fine with 4 cameras, not 12.",
                  },
                  {
                    t: "Genuine products, proper bill",
                    d: "CP Plus, Hikvision, Dahua and Prama — every sale billed with manufacturer warranty, never grey-market stock.",
                  },
                  {
                    t: "Sales & service under one roof",
                    d: "Cameras and laptops — buy it here, and we're the same number you call for support after it.",
                  },
                  {
                    t: "Local, reachable, accountable",
                    d: "One phone call and we're at your doorstep — no call centres, no ticket numbers.",
                  },
                ].map((v) => (
                  <div className="value-item" key={v.t}>
                    <span className="value-check">
                      <Icon d={ICONS.check} size={16} />
                    </span>
                    <span>
                      <h3>{v.t}</h3>
                      <p>{v.d}</p>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======= CONTACT / QUOTE ======= */}
        <section id="quote" className="section contact-section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Get in touch</p>
                <h2>Visit the shop,<br />or just ping us.</h2>
              </div>
              <p>
                Walk in to Ek Minar Masjid, Indera Nagar for a demo, call for a
                quote, or WhatsApp your requirement.
              </p>
            </div>

            <div className="contact-wrap">
              {/* Contact panel */}
              <aside className="contact-panel" aria-label="Contact details">
                <div>
                  <h3>Max World</h3>
                  <p style={{ fontSize: "0.82rem", color: "#a8a698", marginTop: "0.3rem" }}>
                    {site.tagline}
                  </p>
                </div>

                <div className="contact-item">
                  <Icon d={ICONS.mapPin} size={19} />
                  <span>
                    <span className="ci-label">Visit us</span>
                    <a href={site.mapsLink} target="_blank" rel="noopener noreferrer">
                      {site.addressLines.map((l) => (
                        <span key={l} style={{ display: "block" }}>{l}</span>
                      ))}
                    </a>
                  </span>
                </div>

                <div className="contact-item">
                  <Icon d={ICONS.phoneCall} size={19} />
                  <span>
                    <span className="ci-label">Call / WhatsApp</span>
                    <a href={telLink}>{site.phoneDisplay}</a>
                  </span>
                </div>

                <div className="contact-item">
                  <Icon d={ICONS.mail} size={19} />
                  <span>
                    <span className="ci-label">Email</span>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </span>
                </div>

                <div className="contact-item">
                  <Icon d={ICONS.instagram} size={19} />
                  <span>
                    <span className="ci-label">Instagram</span>
                    <a className="ig-link" href={site.socials.instagram} target="_blank" rel="noopener noreferrer">
                      {site.socials.instagramHandle}
                    </a>
                  </span>
                </div>

                <div className="hours-table" aria-label="Business hours">
                  {site.hours.map((h) => (
                    <div className="hours-row" key={h.days}>
                      <span>{h.days}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>

                <div className="map-frame">
                  <iframe
                    src={site.mapsEmbed}
                    title="Max World shop location — near Ek Minar Masjid, Indera Nagar, Khammam"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </aside>

              {/* Lead form */}
              <LeadForm />
            </div>
          </div>
        </section>

        {/* ======= FAQ ======= */}
        <section id="faq" className="section">
          <div className="container">
            <p className="eyebrow">Good to know</p>
            <h2 style={{ margin: "0.8rem 0 1.6rem", fontSize: "clamp(1.9rem,3.6vw,2.6rem)", letterSpacing: "-0.04em" }}>
              Questions, answered.
            </h2>
            <div className="faq-list">
              {FAQS.map((f) => (
                <details className="faq-item" key={f.q}>
                  <summary>
                    {f.q}
                    <span className="faq-plus">
                      <Icon d={ICONS.plus} size={18} />
                    </span>
                  </summary>
                  <div className="faq-answer">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ======= FOOTER ======= */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <Logo dark />
              <p style={{ marginTop: "0.9rem", maxWidth: "24rem" }}>
                Khammam's home for CC cameras and laptop service — owned and
                run by Shaik Eliyas. Genuine products, honest advice, real
                after-sales support.
              </p>
              <div className="social-row">
                <a
                  className="social-btn"
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Max World on Instagram"
                >
                  <Icon d={ICONS.instagram} size={18} />
                </a>
                <a
                  className="social-btn"
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  <WhatsAppIcon size={17} />
                </a>
              </div>
            </div>
            <nav aria-label="Footer">
              <h4>Explore</h4>
              <ul>
                <li><a href="#products">Products &amp; brands</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Max World</a></li>
                <li><a href="#quote">Get a quote</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </nav>
            <div>
              <h4>Reach the shop</h4>
              <ul>
                <li><a href={telLink}>{site.phoneDisplay}</a></li>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li>
                  Indera Nagar, near Ek Minar Masjid,<br />
                  Khammam, Telangana
                </li>
                <li>Open daily · 10 AM – 8 PM</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Max World · Khammam, Telangana</span>
            <span>CP Plus · Hikvision · Dahua · Prama</span>
          </div>
        </div>
      </footer>

      {/* ======= FLOATING WHATSAPP ======= */}
      <a
        className="wa-fab"
        href={WA_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Max World on WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  );
}
