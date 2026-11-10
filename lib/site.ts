/**
 * MAXWORLD — Business details
 * ---------------------------
 * SINGLE SOURCE OF TRUTH for every phone number, address, hour and claim
 * shown on the site. Anything marked PLACEHOLDER is a stand-in until the
 * real details arrive from Shaik Eliyas — edit here and the whole site updates.
 */

export const site = {
  name: "MaxWorld",
  tagline: "Khammam's Security & Tech Store",
  owner: "Shaik Eliyas",
  city: "Khammam",
  region: "Telangana",
  country: "India",

  // PLACEHOLDER — replace with the real shop number
  phoneDisplay: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  // PLACEHOLDER — WhatsApp number in international format, no + or spaces
  whatsappNumber: "919876543210",
  // PLACEHOLDER — replace with the real business Gmail
  email: "maxworld.kmm@gmail.com",

  // PLACEHOLDER — replace with the exact shop address
  addressLines: ["MG Road Main Market", "Khammam, Telangana 507001"],
  // Google Maps embed for the shop area (no API key needed)
  mapsEmbed: "https://www.google.com/maps?q=Khammam%2C%20Telangana%2C%20India&output=embed",
  mapsLink: "https://www.google.com/maps/search/Khammam+Telangana+India",

  hours: [
    { days: "Monday – Saturday", time: "9:30 AM – 8:30 PM" },
    { days: "Sunday", time: "10:30 AM – 6:30 PM" },
  ],

  socials: {
    // PLACEHOLDER — add real URLs when available, they show up in the footer
    instagram: "",
    facebook: "",
    youtube: "",
  },

  // PLACEHOLDER — store-performance numbers, replace with real ones
  stats: [
    { value: "12+", label: "Years in Khammam" },
    { value: "2,400+", label: "Cameras installed" },
    { value: "900+", label: "Happy customers" },
    { value: "24 hr", label: "Quote turnaround" },
  ],

  brands: [
    "Hikvision",
    "CP Plus",
    "Dahua",
    "EZVIZ",
    "TP-Link",
    "Samsung",
    "HP",
    "Dell",
    "Lenovo",
    "Mi",
  ],
} as const;

export const telLink = site.phoneHref;
export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
