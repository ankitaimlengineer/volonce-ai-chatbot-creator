export const BUSINESS_TYPES = [
  "Shop or retail store",
  "Restaurant or cafe",
  "Hotel",
  "Coaching institute",
  "School or education business",
  "Jewellery store",
  "Hospital or clinic",
  "IT company or agency",
  "E-commerce business",
  "Other business",
] as const;

export const LANGUAGES = [
  "English",
  "Gujarati",
  "Hindi",
  "Marathi",
  "Tamil",
  "Telugu",
  "Bengali",
  "Other",
] as const;

export type OnboardingValues = {
  businessName: string;
  businessType: string;
  websiteUrl: string;
  language: string;
};

export type OnboardingErrors = Partial<Record<keyof OnboardingValues, string>>;

/** Removes control characters and trims whitespace. */
export function cleanText(input: string): string {
  // eslint-disable-next-line no-control-regex
  return input.replace(/[\u0000-\u001F\u007F]/g, "").trim();
}

/**
 * Checks a website address. Accepts "example.com" or "https://example.com".
 * Only http and https are allowed. Returns the normalised URL or an error.
 */
export function parseWebsiteUrl(
  raw: string,
): { ok: true; url: string } | { ok: false; error: string } {
  const value = cleanText(raw);
  if (!value) return { ok: false, error: "Enter your website address." };
  if (/\s/.test(value)) {
    return { ok: false, error: "The website address cannot contain spaces." };
  }

  const hasScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(value);
  const candidate = hasScheme ? value : `https://${value}`;

  let parsed: URL;
  try {
    parsed = new URL(candidate);
  } catch {
    return {
      ok: false,
      error: "Enter a valid website address, for example https://www.example.com.",
    };
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    return { ok: false, error: "Only http:// and https:// addresses are supported." };
  }
  if (parsed.username || parsed.password) {
    return { ok: false, error: "Remove any username or password from the address." };
  }

  const host = parsed.hostname;
  const looksLikeDomain = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i.test(host);
  if (!looksLikeDomain) {
    return {
      ok: false,
      error: "Enter a public website domain such as www.example.com.",
    };
  }
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) {
    return { ok: false, error: "Use your website domain name, not an IP address." };
  }

  return { ok: true, url: parsed.toString() };
}

export function validateOnboarding(values: OnboardingValues): {
  errors: OnboardingErrors;
  normalizedUrl: string | null;
} {
  const errors: OnboardingErrors = {};

  const name = cleanText(values.businessName);
  if (!name) errors.businessName = "Enter your business name.";
  else if (name.length < 2) errors.businessName = "Business name must be at least 2 characters.";
  else if (name.length > 80) errors.businessName = "Business name must be 80 characters or fewer.";

  if (!(BUSINESS_TYPES as readonly string[]).includes(values.businessType)) {
    errors.businessType = "Select your business type.";
  }

  if (!(LANGUAGES as readonly string[]).includes(values.language)) {
    errors.language = "Select the primary language.";
  }

  const url = parseWebsiteUrl(values.websiteUrl);
  if (!url.ok) errors.websiteUrl = url.error;

  return { errors, normalizedUrl: url.ok ? url.url : null };
}
