export const SUPPORTED_LOCALES = ["en", "hi"];
export const DEFAULT_LOCALE = "en";

export function withLocalePath(path, locale = DEFAULT_LOCALE) {
  const [basePath, hash] = path.split("#");
  const normalized = basePath?.startsWith("/") ? basePath : "/";
  const localePath = normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
  return hash ? `${localePath}#${hash}` : localePath;
}

export function getClientLocaleFromPath(pathname = "/") {
  const segments = pathname.split("/").filter(Boolean);
  return SUPPORTED_LOCALES.includes(segments[0]) ? segments[0] : DEFAULT_LOCALE;
}

export function stripLocaleFromPath(pathname = "/") {
  const segments = pathname.split("/").filter(Boolean);
  if (!SUPPORTED_LOCALES.includes(segments[0])) return pathname || "/";
  return `/${segments.slice(1).join("/")}` || "/";
}
