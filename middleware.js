import { NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "hi"];
const DEFAULT_LOCALE = "en";
const PUBLIC_FILE = /\.[^/]+$/;

function getLocaleFromPath(pathname) {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return SUPPORTED_LOCALES.includes(firstSegment) ? firstSegment : null;
}

export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const localeInPath = getLocaleFromPath(pathname);

  if (localeInPath) {
    const strippedPath = pathname.replace(`/${localeInPath}`, "") || "/";
    const rewriteUrl = new URL(`${strippedPath}${search}`, request.url);
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", localeInPath);

    const response = NextResponse.rewrite(rewriteUrl, {
      request: { headers: requestHeaders }
    });

    response.cookies.set("NEXT_LOCALE", localeInPath, {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365
    });

    return response;
  }

  const savedLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const locale = SUPPORTED_LOCALES.includes(savedLocale)
    ? savedLocale
    : DEFAULT_LOCALE;
  const localizedPath = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  const redirectUrl = new URL(`${localizedPath}${search}`, request.url);

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
