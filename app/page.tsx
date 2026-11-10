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
  navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  mapPin:
    '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  clock:
    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  arrowUpRight: '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
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
    title: "Complete CCTV Systems",
    desc: "DVR/NVR kits with surveillance storage, cabling and configuration — pick your camera count, we handle the rest.",
  },
  {
    icon: ICONS.laptop,
    title: "Laptop Sales",
    desc: "Genuine laptops at honest Khammam prices — properly billed, with manufacturer warranty, from a shop that outlasts the sale.",
  },
  {
    icon: ICONS.wrench,
    title: "Laptop Service & Repair",
    desc: "Screen, keyboard, battery and charging-port replacement, RAM/SSD upgrades, OS installation and software fixes.",
  },
  {
    icon: ICONS.harddrive,
    title: "Surveillance Storage",
    desc: "Surveillance-grade hard drives and backup configuration — so the footage is there when you actually need it.",
  },
  {
    icon: ICONS.plug,
    title: "Camera Accessories",
    desc: "Cables, adapters, mounts, connectors — everything installation day needs, genuine parts at fair prices.",
  },
];

const SERVICES = [
  {
    num: "01",
    title: "Free site survey & quote",
    desc: "We visit your home, shop or office anywhere in Khammam, map the right camera positions and hand you a clear, written quote. No advance, no obligation.",
  },
  {
    num: "02",
    title: "Installation & setup",
    desc: "Cameras mounted, DVR/NVR configured, remote viewing running on your phone before we leave — installed by our own men, bundled into your quote.",
  },
  {
    num: "03",
    title: "Laptop sales & service",
    desc: "New laptops with proper bills, plus repair and upgrade work — diagnosed transparently, quoted before we touch anything.",
  },
  {
    num: "04",
    title: "After-sales support",
    desc: "Bought your CCTV or laptop from us? Call the same number for help — we service what we sell, and we stand by it.",
  },
];

const VALUES = [
  {
    num: "01",
    t: "Honest, need-based advice",
    d: "We recommend what actually covers your space — most shops are fine with 4 cameras, not 12.",
  },
  {
    num: "02",
    t: "Genuine products, proper bill",
    d: "CP Plus, Hikvision, Dahua and Prama — every sale billed, with manufacturer warranty. Never grey stock.",
  },
  {
    num: "03",
    t: "Sales & service under one roof",
    d: "Cameras and laptops — buy it here, and the same number rings for support after it.",
  },
  {
    num: "04",
    t: "Local, reachable, accountable",
    d: "One phone call and we're at your doorstep — no call centres, no ticket numbers.",
  },
];

const FAQS = [
  {
    q: "Which camera brands do you stock?",
    a: "CP Plus, Hikvision, Dahua and Prama — genuine stock, billed properly and covered by manufacturer warranty.",
  },
  {
    q: "Do you install the cameras you sell?",
    a: "Yes — our own technicians install everything we sell: mounting, DVR/NVR setup, cabling and the phone-viewing app configured before we leave. Ask for a bundled camera + installation quote.",
  },
  {
    q: "Can I watch my cameras from my phone?",
    a: "Absolutely. We configure remote viewing on Android and iPhone during setup — and if you ever get stuck, one call to the shop and we'll walk you through it.",
  },
  {
    q: "Do you repair laptops too?",
    a: "Yes. Screen, keyboard, battery and charging-port replacement, RAM and SSD upgrades, OS installation, formatting and software fixes — quick, honest work for Khammam customers.",
  },
  {
    q: "Will you visit for a survey before I buy?",
    a: "Yes — free of charge anywhere in Khammam. You'll get an honest recommendation on how many cameras you actually need, not the maximum.",
  },
];

const STATS = [
  { index: "01", value: "4", label: "CCTV brands in stock — CP Plus, Hikvision, Dahua, Prama" },
  { index: "02", value: "10–8", label: "Open every single day, weekends included" },
  { index: "03", value: "Free", label: "Site survey & quote anywhere in Khammam" },
  { index: "04", value: "1-Stop", label: "Cameras, complete systems & laptop service" },
];


const CATALOG = [
  {
    name: "CP Plus dome camera — 2MP, night vision",
    note: "Indoor · phone viewing",
    ask: "the CP Plus 2MP dome camera",
  },
  {
    name: "Hikvision 4MP full-color camera",
    note: "Outdoor · colour night vision",
    ask: "the Hikvision 4MP full-color camera",
  },
  {
    name: "4-channel DVR setup bundle",
    note: "Cameras + DVR + HDD · installed & configured",
    ask: "the 4-channel DVR bundle",
  },
  {
    name: "Surveillance hard drive — 24/7 rated",
    note: "1TB & 2TB · backup configuration included",
    ask: "a surveillance hard drive",
  },
  {
    name: "Laptops — student & office range",
    note: "This month's deals live at the counter",
    ask: "this month's laptop deals",
  },
  {
    name: "Laptop service — screen, keyboard, SSD",
    note: "Repairs & upgrades · honest diagnosis first",
    ask: "laptop service / repair",
  },
];

const MARQUEE = [...site.brands, ...site.brands, ...site.brands];

const WA_DEFAULT = whatsappLink(
  "Hello Max World! I'd like to know more about your CC cameras, systems and laptop service."
);

export default function Home() {
  return (
    <>
      {/* ======= TOP BAR ======= */}
      <div className="topbar">
        <div className="container">
          <span className="live">
            <span className="live-dot" aria-hidden="true" />
            Indera Nagar, Khammam
          </span>
          <span className="hide-sm">Open daily · 10 AM – 8 PM</span>
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
              <li><a href="#catalog">Catalog</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>
          <a href="#quote" className="btn btn-brand btn-sm">
            Get a quote
            <Icon d={ICONS.arrowUpRight} size={14} />
          </a>
        </div>
      </header>

      <main id="main">
        {/* ======= HERO ======= */}
        <section className="hero" aria-label="Max World — Khammam's security and tech store">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="hero-badge">
                <span className="live-dot" aria-hidden="true" />
                CC Cameras · Systems · Laptops
              </span>
              <h1>
                See
                <br />
                everything.
                <span className="accent">Miss nothing.</span>
              </h1>
              <p className="hero-sub">
                Indera Nagar's security &amp; laptop store — genuine{" "}
                <strong>CP Plus, Hikvision, Dahua &amp; Prama</strong> cameras,
                complete systems, and laptop sales &amp; service. Installed and
                stood behind by <strong>Shaik Eliyas</strong> himself.
              </p>
              <div className="hero-ctas">
                <a href="#quote" className="btn btn-brand btn-lg">
                  Get a free quote
                  <Icon d={ICONS.arrowRight} size={17} />
                </a>
                <a
                  className="btn btn-outline-light btn-lg"
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={18} />
                  Chat on WhatsApp
                </a>
              </div>
              <p className="hero-strip">
                <span><i>✦</i> Free site survey</span>
                <span><i>✦</i> Bill &amp; warranty</span>
                <span><i>✦</i> After-sales service</span>
              </p>
            </div>

            <div className="hero-media">
              <Image
                src="/images/hero-dark.jpg"
                alt="White dome CCTV camera with a red recording light — the kind of camera Max World installs across Khammam"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div className="viewfinder" aria-hidden="true">
                <span className="vf-corner tl" />
                <span className="vf-corner tr" />
                <span className="vf-corner bl" />
                <span className="vf-corner br" />
                <span className="vf-rec"><span className="live-dot" /> REC · LIVE</span>
                <span className="vf-foot">CAM 01 — KHAMMAM</span>
              </div>
            </div>
          </div>
        </section>

        {/* ======= BRAND MARQUEE ======= */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {MARQUEE.map((b, i) => (
              <span className="marquee-item" key={`${b}-${i}`}>{b}</span>
            ))}
          </div>
        </div>

        {/* ======= STATS ======= */}
        <section className="stats" aria-label="Max World in brief">
          <div className="container">
            {STATS.map((s) => (
              <div className="stat" key={s.index}>
                <div className="stat-index">/ {s.index}</div>
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
                <h2>Security first.<br />Everything wired in.</h2>
              </div>
              <p>
                From a single dome camera for your shop to a full office
                surveillance grid — and the laptops Khammam runs on.
              </p>
            </div>
            <div className="product-grid">
              {PRODUCTS.map((p, i) => (
                <a
                  key={p.title}
                  href="#quote"
                  className="product-card"
                  data-index={String(i + 1).padStart(2, "0")}
                >
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


        {/* ======= CATALOG ======= */}
        <section id="catalog" className="section catalog-section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">On the rack this week</p>
                <h2>Ask for<br />today's price.</h2>
              </div>
              <p>
                Prices move with brand offers — WhatsApp Shaik Eliyas for
                today's real quote, held for you at the counter.
              </p>
            </div>
            <div className="catalog-list">
              {CATALOG.map((item, i) => (
                <a
                  key={item.name}
                  className="catalog-row"
                  href={whatsappLink(`Hello Max World! I'm interested in ${item.ask}. What's today's best price?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ask on WhatsApp about ${item.name}`}
                >
                  <span className="catalog-index">/ {String(i + 1).padStart(2, "0")}</span>
                  <span className="catalog-name">
                    {item.name}
                    <small>{item.note}</small>
                  </span>
                  <span className="catalog-arrow">
                    <Icon d={ICONS.arrowUpRight} size={18} />
                  </span>
                </a>
              ))}
            </div>
            <p className="catalog-foot">
              Prices &amp; stock change daily — the shop quotes the real number, not a website estimate.
            </p>
          </div>
        </section>

        {/* ======= SERVICES (dark) ======= */}
        <section id="services" className="section dark">
          <div className="container">
            <div className="services-grid">
              <div className="services-sticky">
                <p className="eyebrow">What we do</p>
                <h2 className="dark-h2">
                  Sold it.<br />Installed it.<br />
                  <span className="accent">Still here.</span>
                </h2>
                <figure className="tech-figure">
                  <Image
                    src="/images/technician.jpg"
                    alt="Max World technician installing a dome CCTV camera at a shop in Khammam"
                    width={768}
                    height={914}
                  />
                  <figcaption className="tech-caption">
                    <strong>Our own technicians.</strong> Ek Minar Masjid, Indera
                    Nagar — walk in, 10 AM to 8 PM.
                  </figcaption>
                </figure>
              </div>
              <div>
                {SERVICES.map((s) => (
                  <div className="service-row" key={s.num}>
                    <span className="service-num">/ {s.num}</span>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
                <a href="#quote" className="btn btn-brand btn-lg" style={{ marginTop: "1.6rem" }}>
                  Book a free site survey
                  <Icon d={ICONS.arrowRight} size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======= WHY / ABOUT ======= */}
        <section id="about" className="section">
          <div className="container">
            <div className="why-wrap">
              <div>
                <p className="eyebrow">Why Max World</p>
                <p className="why-quote">
                  “Buy the camera you need, not the one with the biggest margin.{" "}
                  <em>That's the only way a local shop survives.</em>”
                </p>
                <div className="why-attr">
                  <span className="why-avatar" aria-hidden="true">SE</span>
                  <span>
                    <span className="why-attr-name">{site.owner}</span>
                    <br />
                    <span className="why-attr-role">Owner, Max World — Ek Minar Masjid, Indera Nagar</span>
                  </span>
                </div>
              </div>
              <div className="value-list">
                {VALUES.map((v) => (
                  <div className="value-item" key={v.num}>
                    <span className="value-num">/ {v.num}</span>
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


        {/* ======= GOOGLE REVIEWS ======= */}
        <section className="reviews" aria-label="Max World on Google">
          <div className="container reviews-inner">
            <div>
              <div className="reviews-stars" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} width="26" height="26" viewBox="0 0 24 24" fill="#E30613" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="reviews-big">
                Read what <em>Khammam</em><br />says about us.
              </p>
              <p className="reviews-sub">
                Reviews from our real customers live on our Google listing —
                read them before you visit, or leave yours after your first service.
              </p>
            </div>
            <a
              className="btn btn-dark btn-lg reviews-cta"
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              See our Google reviews
              <Icon d={ICONS.arrowUpRight} size={18} />
            </a>
          </div>
        </section>

        {/* ======= CONTACT / QUOTE ======= */}
        <section id="quote" className="section contact-section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Get in touch</p>
                <h2>Visit the shop.<br />Or ping us.</h2>
              </div>
              <p>
                Walk in to Ek Minar Masjid, Indera Nagar for a demo — or call,
                or WhatsApp your requirement and we'll call back.
              </p>
            </div>

            <div className="contact-wrap">
              {/* Contact panel */}
              <aside className="contact-panel" aria-label="Contact details">
                <div>
                  <h3>Max World</h3>
                  <p className="cp-tag">{site.tagline}</p>
                </div>

                <div className="contact-item">
                  <Icon d={ICONS.mapPin} size={20} />
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
                  <Icon d={ICONS.phoneCall} size={20} />
                  <span>
                    <span className="ci-label">Call / WhatsApp</span>
                    <a href={telLink}>{site.phoneDisplay}</a>
                  </span>
                </div>

                <div className="contact-item">
                  <Icon d={ICONS.mail} size={20} />
                  <span>
                    <span className="ci-label">Email</span>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </span>
                </div>

                <div className="contact-item">
                  <Icon d={ICONS.instagram} size={20} />
                  <span>
                    <span className="ci-label">Instagram</span>
                    <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer">
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
            <h2
              style={{
                margin: "0.75rem 0 1.6rem",
                fontSize: "clamp(2rem,8vw,3.4rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.98,
                textTransform: "uppercase",
                fontWeight: 650,
              }}
            >
              Questions,<br />answered.
            </h2>
            <div className="faq-list">
              {FAQS.map((f) => (
                <details className="faq-item" key={f.q}>
                  <summary>
                    {f.q}
                    <span className="faq-plus">
                      <Icon d={ICONS.plus} size={16} />
                    </span>
                  </summary>
                  <div className="faq-answer">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ======= CTA BAND ======= */}
        <section className="cta-band" aria-label="Call Max World now">
          <div className="container">
            <p className="eyebrow" style={{ justifyContent: "center" }}>One call away</p>
            <h2>
              Need <span className="accent">eyes</span><br />
              on your shop?
            </h2>
            <p>
              Call now — or WhatsApp the address of your place and we'll send a
              quote the same day, no advance needed for the survey.
            </p>
            <div className="cta-actions">
              <a className="btn btn-brand btn-lg" href={telLink}>
                <Icon d={ICONS.phoneCall} size={18} />
                Call {site.phoneDisplay}
              </a>
              <a
                className="btn btn-outline-light btn-lg"
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} />
                WhatsApp us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ======= FOOTER ======= */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <Logo />
              <p style={{ marginTop: "0.9rem", maxWidth: "23rem", fontSize: "0.87rem" }}>
                Khammam's home for CC cameras and laptop service — owned and run
                by Shaik Eliyas. Genuine products, honest advice, real
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
                <a
                  className="social-btn"
                  href={telLink}
                  aria-label="Call the shop"
                >
                  <Icon d={ICONS.phoneCall} size={17} />
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
          <div className="footer-big" aria-hidden="true">MAX WORLD</div>
          <div className="footer-bottom">
            <span>© 2026 Max World · Khammam, Telangana</span>
            <span>CP Plus · Hikvision · Dahua · Prama</span>
          </div>
        </div>
      </footer>

      {/* ======= MOBILE ACTION BAR ======= */}
      <div className="mobile-cta" aria-label="Quick actions">
        <a href={telLink} aria-label="Call Max World">
          <Icon d={ICONS.phoneCall} size={18} />
          Call
        </a>
        <a className="wa" href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Max World">
          <WhatsAppIcon size={19} />
          WhatsApp
        </a>
        <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" aria-label="Get directions to the shop">
          <Icon d={ICONS.navigation} size={17} />
          Directions
        </a>
      </div>

      {/* ======= FLOATING WHATSAPP (desktop) ======= */}
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
