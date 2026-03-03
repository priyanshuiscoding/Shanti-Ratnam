"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  getClientLocaleFromPath,
  stripLocaleFromPath
} from "@/lib/locale";

const mainMenu = [
  { href: "/", labelKey: "home" },
  { href: "/about-us", labelKey: "about" },
  { href: "/facilities", labelKey: "facilities" },
  {
    labelKey: "specialties",
    children: [
      {
        href: "/diseases-treated#neuro-pain-management",
        label: "Neuro-Pain Management",
        labelHi: "\u0928\u094d\u092f\u0942\u0930\u094b-\u0926\u0930\u094d\u0926 \u092a\u094d\u0930\u092c\u0902\u0927\u0928"
      },
      {
        href: "/diseases-treated#diabetic-reversal-program",
        label: "Diabetic Reversal Program",
        labelHi: "\u0921\u093e\u092f\u092c\u093f\u091f\u0940\u091c \u0930\u093f\u0935\u0930\u094d\u0938\u0932 \u092a\u094d\u0930\u094b\u0917\u094d\u0930\u093e\u092e"
      },
      {
        href: "/diseases-treated#panchakarma-therapies",
        label: "Panchakarma Therapies",
        labelHi: "\u092a\u0902\u091a\u0915\u0930\u094d\u092e \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u093e"
      },
      {
        href: "/diseases-treated#yoga-wellness",
        label: "Yoga & Wellness",
        labelHi: "\u092f\u094b\u0917 \u0914\u0930 \u0935\u0947\u0932\u0928\u0947\u0938"
      }
    ]
  },
  { href: "/packages", labelKey: "package" },
  { href: "/team", labelKey: "team" },
  { href: "/blog", labelKey: "blog" },
  { href: "/gallery", labelKey: "gallery" },
  { href: "/contact-us", labelKey: "contact" }
];

const FONT_SCALE_KEY = "sr_font_scale";

const headerText = {
  en: {
    tagline: "HEALING WITH HAPPINESS",
    english: "English",
    hindi: "Hindi",
    consultation: "Book Consultation",
    patientRegistration: "Patient Registration",
    menu: {
      home: "Home",
      about: "About Us",
      facilities: "Facilities",
      specialties: "Specialties",
      package: "Package",
      team: "Team",
      blog: "Blog",
      gallery: "Media/Gallery",
      contact: "Contact Us"
    }
  },
  hi: {
    tagline: "\u0906\u0928\u0902\u0926 \u0915\u0947 \u0938\u093e\u0925 \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u093e",
    english: "\u0905\u0902\u0917\u094d\u0930\u0947\u091c\u0940",
    hindi: "\u0939\u093f\u0902\u0926\u0940",
    consultation: "\u092a\u0930\u093e\u092e\u0930\u094d\u0936 \u092c\u0941\u0915 \u0915\u0930\u0947\u0902",
    patientRegistration: "\u092e\u0930\u0940\u091c \u0930\u091c\u093f\u0938\u094d\u091f\u094d\u0930\u0947\u0936\u0928",
    menu: {
      home: "\u0939\u094b\u092e",
      about: "\u0939\u092e\u093e\u0930\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902",
      facilities: "\u0938\u0941\u0935\u093f\u0927\u093e\u090f\u0902",
      specialties: "\u0935\u093f\u0936\u0947\u0937 \u091a\u093f\u0915\u093f\u0924\u094d\u0938\u093e",
      package: "\u092a\u0948\u0915\u0947\u091c",
      team: "\u091f\u0940\u092e",
      blog: "\u092c\u094d\u0932\u0949\u0917",
      gallery: "\u092e\u0940\u0921\u093f\u092f\u093e/\u0917\u0948\u0932\u0930\u0940",
      contact: "\u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902"
    }
  }
};

export default function SiteHeader() {
  const pathname = usePathname();
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [fontScale, setFontScale] = useState(100);
  const closeTimerRef = useRef(null);
  const currentLocale = getClientLocaleFromPath(pathname || "/");
  const currentPathWithoutLocale = stripLocaleFromPath(pathname || "/");
  const t = headerText[currentLocale] || headerText.en;

  const toLocaleHref = (href) => {
    const [path, hash] = href.split("#");
    const normalizedPath = path && path.startsWith("/") ? path : "/";
    return hash ? `${normalizedPath}#${hash}` : normalizedPath;
  };

  const handleLocaleSwitch = (locale) => (event) => {
    event.preventDefault();
    const target = toLocaleHref(currentPathWithoutLocale, locale);
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    window.location.assign(target);
  };

  useEffect(() => {
    const saved = window.localStorage.getItem(FONT_SCALE_KEY);
    const initial = saved ? Number(saved) : 100;
    const next = Number.isFinite(initial) ? Math.min(120, Math.max(90, initial)) : 100;
    setFontScale(next);
    document.documentElement.style.fontSize = `${next}%`;
  }, []);

  const updateFontScale = (delta) => {
    const next = Math.min(120, Math.max(90, fontScale + delta));
    setFontScale(next);
    document.documentElement.style.fontSize = `${next}%`;
    window.localStorage.setItem(FONT_SCALE_KEY, String(next));
  };

  const openSpecialties = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setSpecialtiesOpen(true);
  };

  const closeSpecialtiesWithDelay = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setSpecialtiesOpen(false);
      closeTimerRef.current = null;
    }, 140);
  };

  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-wrap">
          <Link className="brand" href={toLocaleHref("/")}>
            <Image
              src="/images/branding/shanti-ratnam-logo.jpeg"
              alt="Shanti-Ratnam logo"
              width={72}
              height={72}
              className="brand-icon"
              priority
            />
            <span className="brand-copy">
              <span className="brand-name">SHANTI-RATNAM</span>
              <small className="brand-tagline">{t.tagline}</small>
            </span>
          </Link>
          <div className="top-actions">
            <div className="lang-toggle" aria-label="Language toggle">
              <Link
                href={toLocaleHref(currentPathWithoutLocale, "en")}
                className={`lang-btn${currentLocale === "en" ? " is-active" : ""}`}
                prefetch={false}
                onClick={handleLocaleSwitch("en")}
              >
                {t.english}
              </Link>
              <Link
                href={toLocaleHref(currentPathWithoutLocale, "hi")}
                className={`lang-btn${currentLocale === "hi" ? " is-active" : ""}`}
                prefetch={false}
                onClick={handleLocaleSwitch("hi")}
              >
                {t.hindi}
              </Link>
            </div>
            <div className="font-toggle" aria-label="Font size controls">
              <button
                type="button"
                className="font-btn"
                onClick={() => updateFontScale(-5)}
                aria-label="Decrease font size"
                title="Decrease text size"
              >
                A-
              </button>
              <button
                type="button"
                className="font-btn"
                onClick={() => updateFontScale(5)}
                aria-label="Increase font size"
                title="Increase text size"
              >
                A+
              </button>
            </div>
            <Link className="chip top-cta" href={toLocaleHref("/consultation")}>
              {t.consultation}
            </Link>
          </div>
        </div>
      </div>
      <div className="menu-strip">
        <nav className="container site-nav" aria-label="Main navigation">
          {mainMenu.map((item) => {
            if (item.children) {
              const isSpecialtiesActive =
                currentPathWithoutLocale === "/diseases-treated" ||
                currentPathWithoutLocale === "/treatment";

              return (
                <div
                  key={item.label}
                  className={`nav-dropdown${specialtiesOpen ? " is-open" : ""}`}
                  onMouseEnter={openSpecialties}
                  onMouseLeave={closeSpecialtiesWithDelay}
                >
                  <Link
                    href={toLocaleHref("/diseases-treated")}
                    className={`nav-link-btn${isSpecialtiesActive ? " is-active" : ""}`}
                  >
                    {t.menu[item.labelKey]}
                  </Link>
                  <div
                    className="dropdown-menu"
                    role="menu"
                    onMouseEnter={openSpecialties}
                    onMouseLeave={closeSpecialtiesWithDelay}
                  >
                    {item.children.map((child) => (
                      <Link key={child.href} href={toLocaleHref(child.href)} role="menuitem">
                        {currentLocale === "hi" ? child.labelHi : child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const isActive = currentPathWithoutLocale === item.href;
            return (
              <Link
                key={item.href}
                href={toLocaleHref(item.href)}
                className={isActive ? "is-active" : ""}
              >
                {t.menu[item.labelKey]}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
