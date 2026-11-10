import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxworldkmm.in"), // PLACEHOLDER — real domain when live
  title: {
    default: "MaxWorld — CCTV Cameras & Tech Store in Khammam | Shaik Eliyas",
    template: "%s | MaxWorld Khammam",
  },
  description:
    "MaxWorld is Khammam's trusted security & tech store. CCTV cameras, DVR/NVR kits, smart-home gadgets, networking, laptops and mobile accessories — genuine brands, professional installation and honest after-sales service. Owned by Shaik Eliyas.",
  keywords: [
    "CCTV camera Khammam",
    "security camera Khammam",
    "CCTV installation Khammam",
    "DVR NVR kit Khammam",
    "smart home Khammam",
    "electronics store Khammam",
    "MaxWorld",
  ],
  openGraph: {
    title: "MaxWorld — Khammam's Security & Tech Store",
    description:
      "CCTV cameras, smart home and everyday tech in Khammam — sold, installed and serviced by Shaik Eliyas & team.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#16150f",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectronicsStore",
  name: "MaxWorld",
  description:
    "CCTV cameras, DVR/NVR kits, smart home and everyday tech — sales, installation and service in Khammam, Telangana.",
  founder: site.owner,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.addressLines[0],
    addressLocality: "Khammam",
    addressRegion: "Telangana",
    postalCode: "507001",
    addressCountry: "IN",
  },
  telephone: site.phoneDisplay,
  email: site.email,
  openingHours: ["Mo-Sa 09:30-20:30", "Su 10:30-18:30"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
