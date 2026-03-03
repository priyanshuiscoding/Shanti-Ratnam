import { NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "hi"];
const DEFAULT_LOCALE = "en";
const PUBLIC_FILE = /\.(.*)$/;

function getLocaleFromPath(pathname) {
  const first = pathname.split("/").filter(Boolean)[0];
  return SUPPORTED_LOCALES.includes(first) ? first : null;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip internal files and public assets
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const localeInPath = getLocaleFromPath(pathname);

  // If someone visits /en/... or /hi/... redirect them to the NON-locale URL (canonical)
  if (localeInPath) {
    const stripped = pathname.replace(`/${localeInPath}`, "") || "/";
    const url = request.nextUrl.clone();
    url.pathname = stripped;

    const res = NextResponse.redirect(url, 308);
    res.cookies.set("NEXT_LOCALE", localeInPath, {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365
    });
    return res;
  }

  // No redirects for normal URLs (Option A)
  const res = NextResponse.next();

  // still set x-locale for internal rendering preference
  const savedLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const locale = SUPPORTED_LOCALES.includes(savedLocale)
    ? savedLocale
    : DEFAULT_LOCALE;

  res.headers.set("x-locale", locale);
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
