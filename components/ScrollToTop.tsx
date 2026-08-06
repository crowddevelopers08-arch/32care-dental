"use client";

export function ScrollToTop() {
  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-center gap-3 max-[1023px]:right-2 max-[1023px]:bottom-[64px]">
      <a
        href="https://wa.me/919975611589"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with 32Care Dental Clinic on WhatsApp"
        className="whatsapp-pulse grid h-12 w-12 place-items-center rounded-full bg-[#25d366] text-white shadow-md transition hover:-translate-y-1 hover:bg-[#1eb957] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25d366]"
      >
        <WhatsAppIcon />
      </a>
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-[#0067ac] text-[24px] text-white shadow-md transition hover:-translate-y-1 hover:bg-[#54b6ec] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#073576]"
      >
        ↑
      </button>
    </div>
  );
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M16 3.1a12.8 12.8 0 0 0-10.9 19.5L3.6 28.9l6.5-1.7A12.9 12.9 0 1 0 16 3.1Zm0 23.4a10.5 10.5 0 0 1-5.3-1.4l-.4-.2-3.9 1 1-3.8-.3-.4A10.5 10.5 0 1 1 16 26.5Zm5.8-7.9c-.3-.1-1.8-.9-2.1-1s-.5-.1-.7.1-.8 1-.9 1.2-.4.2-.7.1a8.5 8.5 0 0 1-2.5-1.5 9.3 9.3 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.6l-1-2.3c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.5s-1.2 1.2-1.2 2.9 1.2 3.4 1.3 3.6c.2.2 2.3 3.6 5.6 5 3.3 1.4 3.3.9 3.9.9.6-.1 1.8-.7 2.1-1.4s.3-1.3.2-1.4-.2-.2-.5-.3Z" /></svg>;
}
