/**
 * Max World logo lockup — the shop's real "MW" mark, drawn as pure vector
 * (red M behind, paper-white W in front for the dark chrome) + two-tone
 * wordmark. Standalone SVG files for print/signage live in /public/logo/.
 */
export default function Logo() {
  return (
    <span
      className="logo"
      aria-label="Max World — CC cameras, systems and laptop sales & service, Khammam"
    >
      <svg
        className="logo-mark"
        viewBox="0 0 96 86"
        role="img"
        aria-hidden="true"
        fill="none"
      >
        <path
          d="M10 74 V12 L25 74 L40 12 V74"
          stroke="#E30613"
          strokeWidth="12"
          strokeLinejoin="bevel"
          strokeLinecap="square"
        />
        <path
          d="M36 12 L50 74 L61 26 L72 74 L86 12"
          stroke="#FAF9F6"
          strokeWidth="12"
          strokeLinejoin="bevel"
          strokeLinecap="square"
        />
      </svg>
      <span className="logo-word">
        <span className="wm-max">Max</span> <span className="wm-world">World</span>
        <small>CC Cameras · Systems · Laptops</small>
      </span>
    </span>
  );
}
