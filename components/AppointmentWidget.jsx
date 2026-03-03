"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getClientLocaleFromPath } from "@/lib/locale";

const LOCAL_KEY = "sr_appointment_widget_minimized";

export default function AppointmentWidget() {
  const pathname = usePathname() || "/";
  const hi = getClientLocaleFromPath(pathname) === "hi";
  const t = hi
    ? {
        aside: "अपॉइंटमेंट क्विक एक्शन",
        expand: "अपॉइंटमेंट पॉपअप फैलाएं",
        minimize: "अपॉइंटमेंट पॉपअप छोटा करें",
        quickHelp: "त्वरित सहायता",
        title: "अपॉइंटमेंट बुक करें",
        callNow: "अभी कॉल करें",
        whatsapp: "व्हाट्सएप"
      }
    : {
        aside: "Book appointment quick actions",
        expand: "Expand appointment popup",
        minimize: "Minimize appointment popup",
        quickHelp: "Quick Help",
        title: "Book Appointment",
        callNow: "Call Now",
        whatsapp: "WhatsApp"
      };
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(LOCAL_KEY);
    setMinimized(saved === "1");
  }, []);

  function toggleMinimized() {
    const next = !minimized;
    setMinimized(next);
    window.localStorage.setItem(LOCAL_KEY, next ? "1" : "0");
  }

  return (
    <aside
      className={`appointment-float${minimized ? " is-minimized" : ""}`}
      aria-label={t.aside}
    >
      <button
        className="appointment-min"
        type="button"
        onClick={toggleMinimized}
        aria-label={minimized ? t.expand : t.minimize}
      >
        {minimized ? "+" : "-"}
      </button>
      <p className="appointment-kicker">{t.quickHelp}</p>
      <p className="appointment-title">{t.title}</p>
      <div className="appointment-links">
        <a className="appointment-call" href="tel:+917007077353">
          {t.callNow}
        </a>
        <a
          className="appointment-chat"
          href="https://wa.me/917007077353"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.whatsapp}
        </a>
      </div>
    </aside>
  );
}
