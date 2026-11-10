export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="logo" aria-label="MaxWorld — Khammam's Security & Tech Store">
      <svg
        className="logo-mark"
        viewBox="0 0 48 48"
        fill="none"
        role="img"
        aria-hidden="true"
      >
        {/* lens housing */}
        <rect
          x="3"
          y="9"
          width="42"
          height="30"
          rx="9"
          fill={dark ? "#faf9f6" : "#16150f"}
        />
        {/* outer lens ring */}
        <circle cx="24" cy="24" r="9.5" fill="none" stroke="#c2410c" strokeWidth="3.4" />
        {/* inner lens */}
        <circle cx="24" cy="24" r="3.6" fill={dark ? "#16150f" : "#faf9f6"} />
        {/* recording dot */}
        <circle cx="37.6" cy="15.8" r="2.1" fill="#e5484d" />
      </svg>
      <span className="logo-word">
        MaxWorld
        <small>Security · Tech · Khammam</small>
      </span>
    </span>
  );
}
