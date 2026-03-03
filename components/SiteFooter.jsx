"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getClientLocaleFromPath } from "@/lib/locale";

const SAGAR_COORDS = {
  latitude: 23.8388,
  longitude: 78.7378
};

function weatherCodeToText(code) {
  const codeMap = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail"
  };

  return codeMap[code] || "Weather unavailable";
}

export default function SiteFooter() {
  const pathname = usePathname() || "/";
  const locale = getClientLocaleFromPath(pathname);
  const t =
    locale === "hi"
      ? {
          links: "\u0932\u093f\u0902\u0915\u094d\u0938",
          home: "\u0939\u094b\u092e",
          treatments: "\u091a\u093f\u0915\u093f\u0924\u094d\u0938\u093e",
          about: "\u0939\u092e\u093e\u0930\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902",
          blog: "\u092c\u094d\u0932\u0949\u0917",
          contact: "\u0938\u0902\u092a\u0930\u094d\u0915",
          consultation: "\u092a\u0930\u093e\u092e\u0930\u094d\u0936",
          staffQueueLogin: "\u0938\u094d\u091f\u093e\u092b \u0915\u094d\u092f\u0942 \u0932\u0949\u0917\u093f\u0928",
          queueDisplay: "\u0915\u094d\u092f\u0942 \u0921\u093f\u0938\u094d\u092a\u094d\u0932\u0947 \u0938\u094d\u0915\u094d\u0930\u0940\u0928",
          terms: "\u0928\u093f\u092f\u092e \u090f\u0935\u0902 \u0936\u0930\u094d\u0924\u0947\u0902",
          weather: "\u0906\u091c \u0915\u093e \u092e\u094c\u0938\u092e",
          follow: "\u0939\u092e\u093e\u0930\u0947 \u0938\u093e\u0925 \u091c\u0941\u0921\u093c\u0947\u0902",
          securePayment: "100% \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u092d\u0941\u0917\u0924\u093e\u0928",
          contactUs: "\u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902",
          openMap: "\u0917\u0942\u0917\u0932 \u092e\u0948\u092a \u092e\u0947\u0902 \u0916\u094b\u0932\u0947\u0902",
          developedBy: "\u0921\u093f\u091c\u093c\u093e\u0907\u0928 \u0914\u0930 \u0921\u0947\u0935\u0932\u092a\u092e\u0947\u0902\u091f: Priyanshu"
        }
      : {
          links: "Links",
          home: "Home",
          treatments: "Treatments",
          about: "About",
          blog: "Blog",
          contact: "Contact",
          consultation: "Consultation",
          staffQueueLogin: "Staff Queue Login",
          queueDisplay: "Queue Display Screen",
          terms: "Terms & Conditions",
          weather: "Today Weather",
          follow: "Follow Us",
          securePayment: "100% Secure Payment",
          contactUs: "Contact Us",
          openMap: "Open In Google Maps",
          developedBy: "Designed and developed by Priyanshu"
        };

  const year = new Date().getFullYear();
  const [now, setNow] = useState(null);
  const [weather, setWeather] = useState({
    temperature: null,
    description: "Loading weather..."
  });

  useEffect(() => {
    const tickId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(tickId);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadWeather = async () => {
      try {
        const params = new URLSearchParams({
          latitude: String(SAGAR_COORDS.latitude),
          longitude: String(SAGAR_COORDS.longitude),
          current: "temperature_2m,weather_code"
        });

        const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`, {
          cache: "no-store"
        });

        if (!res.ok) {
          throw new Error("Weather request failed");
        }

        const data = await res.json();
        const current = data?.current || {};

        if (!isMounted) return;

        setWeather({
          temperature: typeof current.temperature_2m === "number" ? Math.round(current.temperature_2m) : null,
          description: weatherCodeToText(current.weather_code)
        });
      } catch (_error) {
        if (!isMounted) return;
        setWeather({
          temperature: null,
          description: "Weather unavailable"
        });
      }
    };

    loadWeather();
    const refreshId = setInterval(loadWeather, 10 * 60 * 1000);

    return () => {
      isMounted = false;
      clearInterval(refreshId);
    };
  }, []);

  const liveTime = useMemo(() => {
    if (!now) {
      return "--:--:--";
    }

    return new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata"
    }).format(now);
  }, [now]);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h3>{t.links}</h3>
          <div className="footer-links">
            <Link href="/">{t.home}</Link>
            <Link href="/treatment">{t.treatments}</Link>
            <Link href="/about-us">{t.about}</Link>
            <Link href="/blog">{t.blog}</Link>
            <Link href="/contact-us">{t.contact}</Link>
            <Link href="/consultation">{t.consultation}</Link>
            <Link href="/queue/login">{t.staffQueueLogin}</Link>
            <Link href="/queue/display">{t.queueDisplay}</Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a>
            <Link href="/terms-and-conditions">{t.terms}</Link>
          </div>
        </section>

        <section>
          <h3>{t.weather}</h3>
          <p className="weather-temp">
            {weather.temperature !== null ? `${weather.temperature}C` : "--"}
          </p>
          <p>{weather.description}</p>
          <p>{liveTime}</p>
        </section>

        <section>
          <h3>{t.follow}</h3>
          <div className="social-list" aria-label="Social links">
            <a
              href="https://www.facebook.com/people/Shanti-Ratnam/100039183655785/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://x.com/SR_AIIMS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              x
            </a>
            <a
              href="https://www.youtube.com/@saurabhbharill"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              yt
            </a>
            <a
              href="https://www.instagram.com/shantiratnamayushinstitute/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              ig
            </a>
          </div>
          <p>{t.securePayment}</p>
          <p>Razorpay</p>
        </section>

        <section>
          <h3>{t.contactUs}</h3>
          <p>Shanti-Ratnam Wellness Centre</p>
          <p>Lane No.3 Neha Nagar</p>
          <p>Makronia, Sagar-470004, Madhya Pradesh</p>
          <p>+91 70070 77353</p>
          <p>
            <a href="https://www.google.com/maps/place/Shanti+Ratnam/@23.8575549,78.7958644,17z/data=!3m1!4b1!4m6!3m5!1s0x3978d15d0b823b3f:0xfbbae15f9ad773d6!8m2!3d23.85755!4d78.7984393!16s%2Fg%2F11pzx4mwvs?entry=tts" target="_blank" rel="noopener noreferrer">
              {t.openMap}
            </a>
          </p>
        </section>
      </div>
      <div className="container footer-bottom">
        <p>{t.developedBy}</p>
        <p>Copyright {year} Shanti-Ratnam</p>
      </div>
    </footer>
  );
}

