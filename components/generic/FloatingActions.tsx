"use client";

import { useEffect, useState, type ReactNode } from "react";
import { site } from "@/lib/site";
import { PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

const button =
  "inline-flex h-12 items-center rounded-full px-3 text-white shadow-md transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2";

// Loop: icons blink (3 × 1.2s — keep in sync with .fab-blink in globals.css, staggered 0.15s, after a 0.5s collapse)
// → pills expand with labels → collapse → repeat.
const BLINK_STAGGER = 0.15;
const BLINK_START = 0.5;
const BLINK_MS = (BLINK_START + 1.2 * 3 + BLINK_STAGGER * 3) * 1000;
const EXPAND_MS = 3000;

function Content({
  index,
  cycle,
  expanded,
  icon,
  label,
}: {
  index: number;
  cycle: number;
  expanded: boolean;
  icon: ReactNode;
  label: string;
}) {
  return (
    <>
      <span
        key={cycle}
        className={`grid h-6 w-6 shrink-0 place-items-center ${expanded ? "" : "fab-blink"}`}
        style={{ animationDelay: `${BLINK_START + index * BLINK_STAGGER}s` }}
      >
        {icon}
      </span>
      <span
        className={`overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 ${
          expanded ? "max-w-40 pl-2 pr-1 opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        {label}
      </span>
    </>
  );
}

export default function FloatingActions() {
  const [expanded, setExpanded] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (expanded) setCycle((c) => c + 1);
      setExpanded(!expanded);
    }, expanded ? EXPAND_MS : BLINK_MS);
    return () => clearTimeout(timer);
  }, [expanded]);

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-end gap-3 max-sm:right-3 max-sm:bottom-3">
      <a
        href={site.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get directions to 32Care Dental Clinic"
        className={`${button} bg-[#073576] hover:bg-[#0876b5] focus-visible:outline-[#073576]`}
      >
        <Content index={0} cycle={cycle} expanded={expanded} icon={<PinIcon className="h-6 w-6" />} label="Get Directions" />
      </a>
      <a
        href={site.phones[0].href}
        aria-label="Call 32Care Dental Clinic"
        className={`${button} bg-[#0876b5] hover:bg-[#54b6ec] focus-visible:outline-[#0876b5]`}
      >
        <Content index={1} cycle={cycle} expanded={expanded} icon={<PhoneIcon className="h-5 w-5" />} label="Call Now" />
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with 32Care Dental Clinic on WhatsApp"
        className={`${button} whatsapp-pulse bg-[#25d366] hover:bg-[#1eb957] focus-visible:outline-[#25d366]`}
      >
        <Content index={2} cycle={cycle} expanded={expanded} icon={<WhatsAppIcon className="h-6 w-6" />} label="WhatsApp" />
      </a>
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${button} cursor-pointer bg-[#0067ac] hover:bg-[#54b6ec] focus-visible:outline-[#073576]`}
      >
        <Content index={3} cycle={cycle} expanded={expanded} icon={<span className="text-[24px] leading-none">↑</span>} label="Scroll to Top" />
      </button>
    </div>
  );
}
