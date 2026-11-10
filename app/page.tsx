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
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><circle cx="12" cy="13.5" r="1.6"/><path d="M12 15.1V18"/>',
  wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><path d="M12 20h.01"/>',
  laptop:
    '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/><path d="M9 20l1-2h4l1 2"/>',
  phone:
    '<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18.5h2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  phoneCall:
    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 11.91a16 16 0 0 0 6 6l3.27-1.27a2 2 0 0 1 2.11.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  mapPin:
    '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  clock:
    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  shield:
    '<path d="M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/>',
};

const PRODUCTS = [
  {
    icon: ICONS.camera,
    title: "CCTV Cameras",
    desc: "Dome, bullet, PTZ and wireless indoor/outdoor cameras — 2MP to 4K night vision, mobile viewing apps included.",
  },
  {
    icon: ICONS.dvr,
    title: "DVR · NVR & Storage",
    desc: "Complete kits with surveillance hard drives, pre-configured channels and remote viewing on your phone.",
  },
  {
    icon: ICONS.home,
    title: "Smart Home",
    desc: "Video doorbells, smart locks, Wi-Fi switches, motion sensors and complete home automation setups.",
  },
  {
    icon: ICONS.wifi,
    title: "Networking & Wi-Fi",
    desc: "Routers, mesh Wi-Fi, switches, structured cabling and full shop/office network wiring.",
  },
  {
    icon: ICONS.laptop,
    title: "Laptops & Computing",
    desc: "HP, Dell, Lenovo and more — laptops, desktops, printers, cartridges and genuine accessories.",
  },
  {
    icon: ICONS.phone,
    title: "Mobile & Everyday Tech",
    desc: "Smartphones, power banks, earphones, smartwatches and the small tech that keeps you running.",
  },
];

const SERVICES = [
  {
    num: "01",
    title: "Free site survey & quote",
    desc: "We visit your home, shop or office in Khammam, map the right camera spots and hand you a clear, written quote. No advance, no obligation.",
  },
  {
    num: "02",
    title: "Professional installation",
    desc: "Clean cabling, proper mounting, DVR/NVR configuration and the viewing app set up on your phone — done in a day, backed by warranty.",
  },
  {
    num: "03",
    title: "AMC & maintenance",
    desc: "Annual maintenance contracts — camera cleaning, focus & firmware checks, storage health and priority service visits.",
  },
  {
    num: "04",
    title: "Repairs & upgrades",
    desc: "Dead cameras, DVR faults, power issues, HDD failures — diagnosed and fixed honestly, or upgraded when repair doesn't make sense.",
  },
];

const FAQS = [
  {
    q: "Which CCTV brands do you stock?",
    a: "Hikvision, CP Plus, Dahua, EZVIZ and more — every unit sold at MaxWorld is genuine, billed with GST invoice and covered by manufacturer warranty.",
  },
  {
    q: "Do you provide installation with the cameras?",
    a: "Yes. Installation by our own technicians is included in every CCTV purchase — neat cabling, DVR/NVR setup and the mobile app configured before we leave.",
  },
  {
    q: "Can I watch my shop cameras from my phone?",
    a: "Absolutely. We configure remote viewing on Android and iPhone during installation, and we'll happily help you set it up again anytime.",
  },
  {
    q: "Do you visit for a site survey before I buy?",
    a: "Yes — free of charge anywhere in Khammam town and nearby areas. You get an honest recommendation on how many cameras you actually need, not the maximum.",
  },
  {
    q: "What if a camera stops working after the warranty?",
    a: "Bring it in or call us. We diagnose it for a transparent fee and repair what's repairable. MaxWorld customers always get service priority.",
  },
];

const WA_DEFAULT = whatsappLink(
  "Hello MaxWorld! I'd like to know more about your CCTV and tech products."
);

export default function Home() {
  return (
    <>
      {/* ======= TOP BAR ======= */}
      <div className="topbar">
        <div className="container">
          <span>
            <span className="dot">●</span>&nbsp; Serving Khammam, Telangana
          </span>
          <span className="hide-sm">
            {site.hours[0].days}: {site.hours[0].time}
          </span>
          <a href={telLink}>{site.phoneDisplay}</a>
        </div>
      </div>

      {/* ======= NAV ======= */}
      <header className="nav">
        <div className="container">
          <a href="#" aria-label="MaxWorld — home">
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
                CCTV · Smart Home · Tech — Khammam
              </span>
              <h1>
                See everything.
                <br />
                <em>Miss nothing.</em>
              </h1>
              <p className="hero-sub">
                <strong>MaxWorld</strong> is Khammam's security &amp; tech store —
                genuine <strong>CCTV cameras, DVR/NVR kits, smart-home and
                everyday tech</strong>, professionally installed and honestly
                serviced by owner <strong>Shaik Eliyas</strong> and team.
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
                  "GST bill & warranty",
                  "Service after sale",
                ].map((t) => (
                  <span key={t}>
                    <Icon d={ICONS.check} size={15} />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-visual" aria-hidden="false">
              <div className="hero-card">
                <div className="frame">
                  <span className="rec-tag">
                    <span className="rec-dot" />
                    LIVE
                  </span>
                  <Image
                    src="/images/hero-camera.png"
                    alt="Dome CCTV security camera — one of MaxWorld's bestselling indoor/outdoor cameras"
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 440px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="caption">
                  <div>
                    <p className="caption-title">4MP Dome Camera · Night Vision</p>
                    <p className="caption-sub">Bestseller — in stock</p>
                  </div>
                  <span className="in-stock">
                    <Icon d={ICONS.check} size={12} />
                    In stock
                  </span>
                </div>
              </div>

              <div className="float-chip one" aria-hidden="true">
                <div className="fc-big">2,400+</div>
                <div className="fc-small">cameras installed across Khammam</div>
              </div>
              <div className="float-chip two" aria-hidden="true">
                <div className="fc-big">Free</div>
                <div className="fc-small">survey &amp; quote at your shop or home</div>
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
        <section className="stats" aria-label="MaxWorld in numbers">
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
                <p className="eyebrow">What we sell</p>
                <h2>Security first.<br />Tech for everything else.</h2>
              </div>
              <p>
                From one dome camera for your shop to a 32-channel office setup —
                plus the everyday tech Khammam runs on.
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
                  alt="MaxWorld technician installing a dome CCTV camera at a storefront in Khammam"
                  width={760}
                  height={874}
                  style={{ objectFit: "cover" }}
                />
                <figcaption className="tech-caption">
                  <strong>Our own technicians.</strong> Never outsourced — every
                  installation is done and guaranteed by MaxWorld.
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
                <p className="eyebrow">Why MaxWorld</p>
                <p className="why-quote" style={{ marginTop: "1rem" }}>
                  “Buy the camera you need, not the one with the biggest margin.{" "}
                  <em>That's the only way a local shop survives.</em>”
                </p>
                <div className="why-attr">
                  <span className="why-avatar" aria-hidden="true">SE</span>
                  <span>
                    <span className="why-attr-name">{site.owner}</span>
                    <br />
                    <span className="why-attr-role">Owner, MaxWorld — Khammam</span>
                  </span>
                </div>
              </div>
              <div className="value-list">
                {[
                  {
                    t: "Honest, need-based advice",
                    d: "We recommend what actually covers your space — most shops need 4 cameras, not 12.",
                  },
                  {
                    t: "Genuine products, GST invoice",
                    d: "Every sale is a proper bill with manufacturer warranty — never grey-market stock.",
                  },
                  {
                    t: "Local, reachable, accountable",
                    d: "One phone call and we're at your doorstep — no call centres, no ticket numbers.",
                  },
                  {
                    t: "Fair pricing for Khammam",
                    d: "City pricing without city overheads — and we match any genuine local quote.",
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
                Walk in for a demo, call for a quote, or WhatsApp us your
                requirement — we reply fast.
              </p>
            </div>

            <div className="contact-wrap">
              {/* Contact panel */}
              <aside className="contact-panel" aria-label="Contact details">
                <div>
                  <h3>MaxWorld</h3>
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
                    title="MaxWorld store location — Khammam, Telangana"
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
                Khammam's home for CCTV security, smart home and everyday tech —
                owned and run by Shaik Eliyas. Genuine products, honest advice,
                real after-sales support.
              </p>
            </div>
            <nav aria-label="Footer">
              <h4>Explore</h4>
              <ul>
                <li><a href="#products">Products</a></li>
                <li><a href="#services">Services &amp; AMC</a></li>
                <li><a href="#about">About MaxWorld</a></li>
                <li><a href="#quote">Get a quote</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </nav>
            <div>
              <h4>Reach the shop</h4>
              <ul>
                <li><a href={telLink}>{site.phoneDisplay}</a></li>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li>{site.addressLines[0]}, Khammam, Telangana 507001</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 MaxWorld · Khammam, Telangana</span>
            <span>Genuine brands · GST invoice · Local service</span>
          </div>
        </div>
      </footer>

      {/* ======= FLOATING WHATSAPP ======= */}
      <a
        className="wa-fab"
        href={WA_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MaxWorld on WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  );
}
