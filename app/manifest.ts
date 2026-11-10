import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Max World — CC Cameras, Systems & Laptop Service, Khammam",
    short_name: "Max World",
    description:
      "Genuine CP Plus, Hikvision, Dahua and Prama CCTV, complete systems and laptop sales & service — Indera Nagar, near Ek Minar Masjid, Khammam.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e0d0a",
    theme_color: "#e30613",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
