import { headers } from "next/headers";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/lib/locale";

export function getServerLocale() {
  const localeHeader = headers().get("x-locale");
  return SUPPORTED_LOCALES.includes(localeHeader) ? localeHeader : DEFAULT_LOCALE;
}
