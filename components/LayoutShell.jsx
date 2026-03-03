"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AppointmentWidget from "@/components/AppointmentWidget";
import FloatingRegistrationButton from "@/components/FloatingRegistrationButton";

function isQueueDisplayPath(pathname = "") {
  return pathname.endsWith("/queue/display") || pathname.endsWith("/queue/display/");
}

export default function LayoutShell({ children }) {
  const pathname = usePathname() || "";
  const hideSiteChrome = isQueueDisplayPath(pathname);

  if (hideSiteChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <SiteHeader />
      <AppointmentWidget />
      <FloatingRegistrationButton />
      {children}
      <SiteFooter />
    </>
  );
}
