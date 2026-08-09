export const nav = [
  { label: "Programs", href: "#programs" },
  { label: "The Masterclass", href: "#masterclass" },
  { label: "About", href: "#about" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Contact", href: "#admissions" },
];

export const credibility = [
  { value: "AMVCA", label: "Best Designer of the Year" },
  { value: "1,000+", label: "students trained" },
  { value: "In-person", label: "and online" },
  { value: "Lagos", label: "Nigeria" },
];

export type Program = {
  numeral: string;
  title: string;
  description: string;
  level: string;
  duration: string;
};

export const programs: Program[] = [
  {
    numeral: "I",
    title: "Foundations of Sewing",
    description:
      "Machines, measurements and the fundamentals every designer is built on.",
    level: "Beginner",
    duration: "6 weeks",
  },
  {
    numeral: "II",
    title: "Ready-to-Wear & Tailoring",
    description:
      "Cut, construct and finish garments people actually want to wear.",
    level: "Intermediate",
    duration: "8 weeks",
  },
  {
    numeral: "III",
    title: "Couture & Corsetry",
    description:
      "Structure, boning and hand-finishing: the craft behind statement pieces.",
    level: "Advanced",
    duration: "10 weeks",
  },
  {
    numeral: "IV",
    title: "The Luxury Masterclass",
    description:
      "An intensive with Veekee James and the house team, start to runway.",
    level: "Signature",
    duration: "Cohort",
  },
];

export const masterclassIncludes = [
  "Draping & pattern-making from scratch",
  "Corsetry & internal structure",
  "Bridal & statement pieces",
  "The business of a fashion house",
];

export type LookbookItem = {
  title: string;
  program: string;
  motif: "corset" | "tailoring" | "drape" | "asoebi" | "rtw" | "beading";
};

export const lookbook: LookbookItem[] = [
  { title: "Bridal corset gown", program: "Couture & Corsetry", motif: "corset" },
  { title: "Tailored two-piece", program: "Ready-to-Wear", motif: "tailoring" },
  { title: "Evening drape", program: "Masterclass", motif: "drape" },
  { title: "Aso-ebi statement", program: "Couture", motif: "asoebi" },
  { title: "Ready-to-wear set", program: "Tailoring", motif: "rtw" },
  { title: "Hand-beaded bodice", program: "Couture & Corsetry", motif: "beading" },
];

export const testimonial = {
  quote:
    "I came in only able to thread a machine. I left with a finished bridal collection, and my first paying clients.",
  who: "Amara O.",
  detail: "Couture & Corsetry, Class of 2025",
};

export const footerLinks = {
  programs: [
    { label: "Foundations of Sewing", href: "#programs" },
    { label: "Ready-to-Wear", href: "#programs" },
    { label: "Couture & Corsetry", href: "#programs" },
    { label: "The Masterclass", href: "#masterclass" },
  ],
  academy: [
    { label: "About the house", href: "#about" },
    { label: "Lookbook", href: "#lookbook" },
    { label: "Admissions", href: "#admissions" },
    { label: "Fees & dates", href: "#admissions" },
  ],
  contact: [
    { label: "WhatsApp", href: "#admissions" },
    { label: "Email", href: "mailto:hello@veekeejamesacademy.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
};

export const site = {
  name: "Veekee James Fashion Academy",
  whatsappNumber: process.env.NEXT_PUBLIC_ACADEMY_WHATSAPP || "2348012345678",
};
