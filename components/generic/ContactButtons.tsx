import { site } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

const sizes = {
  md: "px-7 py-3.5 text-sm",
  lg: "px-7 py-4 text-base",
};

export default function ContactButtons({
  tone = "light",
  size = "md",
  className = "",
}: {
  tone?: "light" | "dark";
  size?: keyof typeof sizes;
  className?: string;
}) {
  const call =
    tone === "dark"
      ? "bg-[#54b6ec] text-[#052b50] shadow-[#0067ac]/30 hover:bg-[#8fe0ff]"
      : "bg-[#0876b5] text-white shadow-[#0876b5]/25 hover:bg-[#073576]";

  return (
    <div className={`flex flex-col items-stretch gap-3 sm:flex-row sm:items-center ${className}`}>
      <a
        href={site.phones[0].href}
        className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold shadow-xl transition hover:-translate-y-0.5 ${sizes[size]} ${call}`}
      >
        <PhoneIcon className="h-5 w-5" />
        Call Now for Appointment
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] font-semibold text-white shadow-xl shadow-[#25d366]/25 transition hover:-translate-y-0.5 hover:bg-[#1eb957] ${sizes[size]}`}
      >
        <WhatsAppIcon className="h-5 w-5" />
        WhatsApp Us
      </a>
    </div>
  );
}
