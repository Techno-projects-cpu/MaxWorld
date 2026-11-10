import type { Metadata, Viewport } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/inter";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default:
      "Max World — CC Cameras, Systems & Laptop Sales & Service in Khammam",
    template: "%s | Max World Khammam",
  },
  description:
    "Max World, Indera Nagar (near Ek Minar Masjid), Khammam — genuine CP Plus, Hikvision, Dahua and Prama CCTV cameras, complete DVR/NVR systems and laptop sales & service. Owned by Shaik Eliyas. Open daily 10 AM – 8 PM.",
  keywords: [
    "CC camera Khammam",
    "CCTV camera Khammam",
    "CCTV installation Khammam",
    "CP Plus dealer Khammam",
    "Hikvision Khammam",
    "Dahua Khammam",
    "Prama Khammam",
    "laptop service Khammam",
    "laptop sales Khammam",
    "Indera Nagar Khammam",
    "Max World Khammam",
  ],
  openGraph: {
    title: "Max World — CC Cameras, Systems & Laptop Sales & Service, Khammam",
    description:
      "Genuine CP Plus, Hikvision, Dahua and Prama CCTV — sales, complete systems and laptop service. Indera Nagar, near Ek Minar Masjid, Khammam. Open daily 10 AM – 8 PM.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0d0a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectronicsStore",
  name: "Max World",
  description:
    "CC cameras, complete CCTV systems and laptop sales & service in Khammam, Telangana.",
  founder: site.owner,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Indera Nagar, near Ek Minar Masjid",
    addressLocality: "Khammam",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  telephone: "+91 76619 72758",
  email: site.email,
  openingHours: "Mo-Su 10:00-20:00",
  sameAs: ["https://www.instagram.com/_max_world_mw/"],
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
