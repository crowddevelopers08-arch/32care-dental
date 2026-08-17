"use client";

import { useEffect, useState } from "react";

const POPUP_DELAY_MS = 60_000;

export function VideoPopup() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!visible || closed) return null;

  return (
    <div className="video-popup-in fixed right-3 bottom-[72px] z-40 w-[170px] overflow-hidden rounded-[16px] border-2 border-white bg-[#073576] shadow-[0_18px_45px_rgba(7,53,118,.4)] lg:right-6 lg:bottom-6 lg:w-[260px]">
      <button
        type="button"
        onClick={() => setClosed(true)}
        aria-label="Close video"
        className="absolute top-1.5 right-1.5 z-10 grid h-6 w-6 place-items-center rounded-full bg-white/90 text-[#073576] shadow transition hover:bg-white lg:h-7 lg:w-7"
      >
        <svg viewBox="0 0 20 20" className="h-3 w-3 lg:h-3.5 lg:w-3.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="m5 5 10 10M15 5 5 15" /></svg>
      </button>
      <video
        src="/1001442866.mp4"
        aria-label="Patient success story at 32Care Dental Clinic"
        className="aspect-[9/16] w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="none"
      />
    </div>
  );
}
