import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "SD Beauty",
  tagline: "Acrylic nails and acrylic toes in Markham, including stiletto and XL freestyle sets.",
  category: "Acrylic nails",
  schemaType: "BeautySalon",
  area: "Markham, ON",
  siteUrl: "https://sd-beauty-ca.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#f5a1a6" },
    wordmark: "script",
  },

  hero: {
    eyebrow: "Acrylic nails in Markham",
    headline: "Stiletto, freestyle acrylic sets and acrylic toes",
    subhead: "SD Beauty is a Markham nail tech offering acrylic nail sets, including stiletto and XL freestyle, plus acrylic toes. Book through the booking page. Send an Instagram message for a squeeze-in, posted at an extra $30, or if you have questions.",
    images: [
      { src: "/images/post-1.jpg", alt: "A pink stiletto set with polka-dot French tips from SD Beauty", width: 1080, height: 1920 },
      { src: "/images/post-2.jpg", alt: "Pink acrylic nails with a white French tip from SD Beauty", width: 640, height: 1136 },
      { src: "/images/post-5.jpg", alt: "A red acrylic set from SD Beauty", width: 1080, height: 1440 },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Acrylic nails in Markham",
    "Stiletto and XL freestyle sets",
    "Acrylic toes",
    "Squeeze-ins posted at an extra $30",
  ],

  about: {
    title: "Welcome to SD Beauty",
    body: [
      "SD Beauty is a Markham nail tech offering acrylic nail sets, including stiletto and XL freestyle, plus acrylic toes. Recent work has included a pink stiletto set with polka-dot French tips, fall short duckies, a red set, and a Monster High inspired XL freestyle set.",
      "Book through the booking page. A November 17 post said December bookings would open in three days, with pre-bookings available by Instagram DM, and that December availability would be limited. Send a message for a squeeze-in, posted at an extra $30, or if you have questions. A past $10 off offer through October 31 is not listed as current.",
    ],
    image: { src: "/images/post-1.jpg", alt: "A pink stiletto set with polka-dot French tips from SD Beauty", width: 1080, height: 1920 },
  },

  menu: {
    label: "Services",
    title: "Nails and extras",
    variant: "list",
    showPrices: false,
    priceNote: "Book through the booking page, or send an Instagram message. Squeeze-ins are posted at an extra $30.",
    groups: [
      {
        title: "Nails",
        items: [
          { name: "Acrylic nail sets", description: "Including stiletto and XL freestyle sets, as posted." },
          { name: "Acrylic toes" },
        ],
      },
      {
        title: "Booking notes",
        items: [
          { name: "Squeeze-in appointments", description: "Available by Instagram DM, posted at an extra $30." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent sets",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1920, alt: "A pink stiletto set with polka-dot French tips from SD Beauty", caption: "A pink stiletto set", href: "https://www.instagram.com/reel/Df21LxRMNmp/" },
      { src: "/images/post-2.jpg", width: 640, height: 1136, alt: "Pink acrylic nails with a white French tip from SD Beauty", caption: "A pink French tip set", href: "https://www.instagram.com/reel/Dfkw8CGMtQt/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1920, alt: "Fall short ducky nails from SD Beauty", caption: "Fall short duckies", href: "https://www.instagram.com/reel/DfSupGlMhw4/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1440, alt: "A red acrylic set from SD Beauty", caption: "A red set", href: "https://www.instagram.com/p/De-YRNKHR_Q/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1920, alt: "A Monster High inspired XL freestyle set from SD Beauty", caption: "An XL freestyle set", href: "https://www.instagram.com/reel/Dec8uc7sGwW/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "sd.beautyy_",
    embeds: ["https://www.instagram.com/reel/Df21LxRMNmp/", "https://www.instagram.com/reel/Dfkw8CGMtQt/", "https://www.instagram.com/reel/DfSupGlMhw4/"],
  },

  order: {
    label: "How to book",
    title: "Book an appointment",
    intro: "Book through the booking page. Send an Instagram message for a squeeze-in, posted at an extra $30, or if you have questions. SD Beauty is in Markham.",
    headerCtaLabel: "Book now",
    dmMessage: "Hi SD Beauty! I would like to book.\nPreferred day:\nSet or acrylic toes:\nSqueeze-in:",
    links: [
      { label: "Book now", href: "https://sdbeauty.as.me/" },
      { label: "Message on Instagram", href: "https://ig.me/m/sd.beautyy_" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Use the booking page. Send an Instagram message for a squeeze-in, posted at an extra $30, or if you have questions." },
    { q: "Where are you based?", a: "SD Beauty is in Markham." },
    { q: "What services do you offer?", a: "Acrylic nail sets, including stiletto and XL freestyle, plus acrylic toes." },
  ],

  contact: {
    title: "Contact",
    area: "Markham, ON",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/sd.beautyy_/" },
    ],
  },

  seo: {
    title: "SD Beauty | Acrylic nails and toes in Markham",
    description: "Markham nail tech offering stiletto and XL freestyle acrylic sets and acrylic toes. Book online, or DM for a squeeze-in.",
    keywords: ["SD Beauty", "Markham nails", "acrylic nails Markham", "stiletto nails Markham"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
