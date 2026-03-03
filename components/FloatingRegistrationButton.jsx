"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getClientLocaleFromPath } from "@/lib/locale";
import Link from "next/link";

const LOCAL_KEY = "sr_registration_widget_minimized";

export default function FloatingRegistrationButton() {
  const pathname = usePathname() || "/";
  const hi = getClientLocaleFromPath(pathname) === "hi";
  const t = hi
    ? {
        aside: "रोगी पंजीकरण त्वरित कार्रवाई",
        expand: "रोगी पंजीकरण पॉपअप फैलाएं",
        minimize: "रोगी पंजीकरण पॉपअप छोटा करें",
        quickHelp: "त्वरित पंजीकरण",
        title: "रोगी पंजीकरण करें",
        registerNow: "अभी पंजीकरण करें"
      }
    : {
        aside: "Patient registration quick actions",
        expand: "Expand registration popup",
        minimize: "Minimize registration popup",
        quickHelp: "Quick Registration",
        title: "Patient Registration",
        registerNow: "Register Now"
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
      className={`registration-float${minimized ? " is-minimized" : ""}`}
      aria-label={t.aside}
    >
      <button
        className="registration-min"
        type="button"
        onClick={toggleMinimized}
        aria-label={minimized ? t.expand : t.minimize}
      >
        {minimized ? "+" : "-"}
      </button>
      <p className="registration-kicker">{t.quickHelp}</p>
      <p className="registration-title">{t.title}</p>
      <div className="registration-links">
        <Link 
          className="registration-register" 
          href="/queue/register"
        >
          {t.registerNow}
        </Link>
      </div>
    </aside>
  );
}
