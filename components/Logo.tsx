import Image from "next/image";

/**
 * Max World logo lockup — the shop's real "MW" symbol (white + red, for the
 * dark chrome) paired with the two-tone wordmark: red "Max", white "World".
 */
export default function Logo() {
  return (
    <span
      className="logo"
      aria-label="Max World — CC cameras, systems and laptop sales & service, Khammam"
    >
      <Image
        className="logo-mark"
        src="/images/symbol-dark.png"
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
