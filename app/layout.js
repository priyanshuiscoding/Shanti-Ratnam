import { Cormorant_Garamond, Manrope } from "next/font/google";
import { headers } from "next/headers";
import LayoutShell from "@/components/LayoutShell";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["600", "700"],
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://shantiratnam.com"),
  title: {
    default: "Shanti-Ratnam | Healing With Happiness",
    template: "%s | Shanti-Ratnam"
  },
  description:
    "Shanti-Ratnam clinic website redesign with modern responsive UI and SEO-ready structure.",
  openGraph: {
    title: "Shanti-Ratnam | Healing With Happiness",
    description:
      "Ayurvedic care, personalized treatment plans, and wellness programs in a modern digital experience.",
    url: "https://shantiratnam.com",
    siteName: "Shanti-Ratnam",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  const localeHeader = headers().get("x-locale");
  const locale = localeHeader === "hi" ? "hi" : "en";
  const adobeFontKitId = process.env.NEXT_PUBLIC_ADOBE_FONT_KIT_ID;

  return (
    <html lang={locale}>
      {adobeFontKitId ? (
        <head>
          <link rel="stylesheet" href={`https://use.typekit.net/${adobeFontKitId}.css`} />
        </head>
      ) : null}
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
