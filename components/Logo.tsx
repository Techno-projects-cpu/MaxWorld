import Image from "next/image";

/**
 * Max World logo lockup — the shop's real "MW" symbol (red + black/white)
 * paired with the two-tone wordmark. Uses the white-letter variant on dark.
 */
export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className="logo"
      aria-label="Max World — CC cameras, systems and laptop sales & service, Khammam"
    >
      <Image
        className="logo-mark"
        src={dark ? "/images/symbol-dark.png" : "/images/symbol.png"}
        alt=""
        width={250}
        height={250}
        priority
      />
      <span className="logo-word">
        <span className="wm-max">Max</span> <span className="wm-world">World</span>
        <small>CC Cameras · Systems · Laptops</small>
      </span>
    </span>
  );
}
