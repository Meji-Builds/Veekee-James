import { createClient } from "redis";

type RedisClient = ReturnType<typeof createClient>;

export type ProgramOverride = {
  level: string;
  duration: string;
};

export type SiteSettings = {
  whatsappNumber: string;
  establishedYear: string;
  studentsTrained: string;
  programs: Record<string, ProgramOverride>;
  testimonial: {
    quote: string;
    who: string;
    detail: string;
  };
  social: {
    instagram: string;
    tiktok: string;
    email: string;
  };
};

export const defaultSettings: SiteSettings = {
  whatsappNumber: "2348012345678",
  establishedYear: "2018",
  studentsTrained: "1,000+",
  programs: {
    "Foundations of Sewing": { level: "Beginner", duration: "6 weeks" },
    "Ready-to-Wear & Tailoring": { level: "Intermediate", duration: "8 weeks" },
    "Couture & Corsetry": { level: "Advanced", duration: "10 weeks" },
    "The Luxury Masterclass": { level: "Signature", duration: "Cohort" },
  },
  testimonial: {
    quote:
      "I came in only able to thread a machine. I left with a finished bridal collection, and my first paying clients.",
    who: "Amara O.",
    detail: "Couture & Corsetry, Class of 2025",
  },
  social: {
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    email: "hello@veekeejamesacademy.com",
  },
};

const SETTINGS_KEY = "veekee-james:site-settings";

let clientPromise: Promise<RedisClient> | null = null;

function getClient(): Promise<RedisClient> | null {
  const url = process.env.REDIS_URL;
  if (!url) return null;

  if (!clientPromise) {
    const client: RedisClient = createClient({ url });
    client.on("error", (err) => console.error("Redis client error:", err));
    clientPromise = client
      .connect()
      .then(() => client)
      .catch((err) => {
        clientPromise = null;
        throw err;
      });
  }

  return clientPromise;
}

export function isSettingsStoreConfigured(): boolean {
  return Boolean(process.env.REDIS_URL);
}

export async function getSettings(): Promise<SiteSettings> {
  const pending = getClient();
  if (!pending) return defaultSettings;

  const client = await pending;
  const raw = await client.get(SETTINGS_KEY);
  if (!raw) return defaultSettings;

  const stored = JSON.parse(raw) as Partial<SiteSettings>;

  return {
    ...defaultSettings,
    ...stored,
    programs: { ...defaultSettings.programs, ...stored.programs },
    testimonial: { ...defaultSettings.testimonial, ...stored.testimonial },
    social: { ...defaultSettings.social, ...stored.social },
  };
}

class SettingsValidationError extends Error {}

function str(value: unknown, field: string, { max = 300 }: { max?: number } = {}): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new SettingsValidationError(`${field} is required.`);
  }
  const trimmed = value.trim();
  if (trimmed.length > max) {
    throw new SettingsValidationError(`${field} must be ${max} characters or fewer.`);
  }
  return trimmed;
}

function url(value: unknown, field: string): string {
  const trimmed = str(value, field, { max: 300 });
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") throw new Error();
  } catch {
    throw new SettingsValidationError(`${field} must be a valid URL.`);
  }
  return trimmed;
}

function email(value: unknown, field: string): string {
  const trimmed = str(value, field, { max: 200 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    throw new SettingsValidationError(`${field} must be a valid email address.`);
  }
  return trimmed;
}

export { SettingsValidationError };

export function sanitizeSettings(input: unknown): SiteSettings {
  if (typeof input !== "object" || input === null) {
    throw new SettingsValidationError("Invalid settings payload.");
  }
  const data = input as Record<string, unknown>;

  const whatsappDigits = str(data.whatsappNumber, "WhatsApp number", { max: 20 }).replace(
    /\D/g,
    "",
  );
  if (whatsappDigits.length < 10 || whatsappDigits.length > 15) {
    throw new SettingsValidationError(
      "WhatsApp number must be 10-15 digits, in international format (e.g. 2348012345678).",
    );
  }

  const establishedYear = str(data.establishedYear, "Established year", { max: 4 });
  if (!/^\d{4}$/.test(establishedYear)) {
    throw new SettingsValidationError("Established year must be a four-digit year.");
  }

  const studentsTrained = str(data.studentsTrained, "Students trained", { max: 20 });

  const inputPrograms =
    typeof data.programs === "object" && data.programs !== null
      ? (data.programs as Record<string, unknown>)
      : {};
  const programs: Record<string, ProgramOverride> = {};
  for (const title of Object.keys(defaultSettings.programs)) {
    const raw = inputPrograms[title];
    const entry = typeof raw === "object" && raw !== null ? (raw as Record<string, unknown>) : {};
    programs[title] = {
      level: str(entry.level, `${title} level`, { max: 40 }),
      duration: str(entry.duration, `${title} duration`, { max: 40 }),
    };
  }

  const inputTestimonial =
    typeof data.testimonial === "object" && data.testimonial !== null
      ? (data.testimonial as Record<string, unknown>)
      : {};
  const testimonial = {
    quote: str(inputTestimonial.quote, "Testimonial quote", { max: 600 }),
    who: str(inputTestimonial.who, "Testimonial name", { max: 80 }),
    detail: str(inputTestimonial.detail, "Testimonial detail", { max: 120 }),
  };

  const inputSocial =
    typeof data.social === "object" && data.social !== null
      ? (data.social as Record<string, unknown>)
      : {};
  const social = {
    instagram: url(inputSocial.instagram, "Instagram URL"),
    tiktok: url(inputSocial.tiktok, "TikTok URL"),
    email: email(inputSocial.email, "Contact email"),
  };

  return {
    whatsappNumber: whatsappDigits,
    establishedYear,
    studentsTrained,
    programs,
    testimonial,
    social,
  };
}

export async function saveSettings(settings: SiteSettings): Promise<void> {
  const pending = getClient();
  if (!pending) {
    throw new Error("Settings store is not configured (missing REDIS_URL).");
  }
  const client = await pending;
  await client.set(SETTINGS_KEY, JSON.stringify(settings));
}
