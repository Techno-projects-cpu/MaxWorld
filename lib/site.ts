/**
 * MAX WORLD — Business details (REAL, provided by Shaik Eliyas on 10 Nov 2026)
 * Everything shown on the site reads from this file — edit here, site updates.
 */

export const site = {
  name: "Max World",
  tagline: "CC Cameras · Systems · Laptops — Sales & Service",
  owner: "Shaik Eliyas",
  city: "Khammam",
  region: "Telangana",
  country: "India",

  phoneDisplay: "+91 76619 72758",
  phoneHref: "tel:+917661972758",
  whatsappNumber: "917661972758",
  email: "maxworld873@gmail.com",

  addressLines: [
    "Indera Nagar, near Ek Minar Masjid",
    "Khammam, Telangana",
  ],
  // Click-through: the owner's own Google Maps shortlink
  mapsLink: "https://maps.app.goo.gl/pogo7yg48c9ZkG4e7",
  // Embed centered on Ek Minar Masjid, Indera Nagar
  mapsEmbed:
    "https://www.google.com/maps?q=Ek%20Minar%20Masjid%2C%20Indera%20Nagar%2C%20Khammam%2C%20Telangana&output=embed",

  hours: [{ days: "Open daily", time: "10:00 AM – 8:00 PM" }],

  socials: {
    instagram: "https://www.instagram.com/_max_world_mw/",
    instagramHandle: "@_max_world_mw",
    facebook: "",
    youtube: "",
  },

  stats: [
    { value: "4", label: "CCTV brands stocked — CP Plus, Hikvision, Dahua, Prama" },
    { value: "10–8", label: "Open every single day, weekends included" },
    { value: "Free", label: "Site survey & quote across Khammam" },
    { value: "1-Stop", label: "Cameras, complete systems & laptop service" },
  ],

  brands: ["CP Plus", "Hikvision", "Dahua", "Prama"],
} as const;

export const telLink = site.phoneHref;
export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
