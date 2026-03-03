import { NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "hi"];
const DEFAULT_LOCALE = "en";
const PUBLIC_FILE = /\.[^/]+$/;

function getLocaleFromPath(pathname) {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return SUPPORTED_LOCALES.includes(firstSegment) ? firstSegment : null;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip next internals, api, and public files
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // If user visits /en/... or /hi/... we serve the non-locale URL
  // and store their locale preference in cookie.
  const localeInPath = getLocaleFromPath(pathname);

  if (localeInPath) {
    const strippedPath = pathname.replace(`/${localeInPath}`, "") || "/";
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = strippedPath;

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", localeInPath);

    const response = NextResponse.rewrite(rewriteUrl, {
      request: { headers: requestHeaders },
    });

    response.cookies.set("NEXT_LOCALE", localeInPath, {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });

    return response;
  }

  // IMPORTANT CHANGE:
  // Do NOT redirect / -> /en or any path -> /en/path
  // Just continue normally and use default locale internally.
  const requestHeaders = new Headers(request.headers);
  const savedLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const locale = SUPPORTED_LOCALES.includes(savedLocale)
    ? savedLocale
    : DEFAULT_LOCALE;

  requestHeaders.set("x-locale", locale);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};