import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/dental-implant#home" },
  { label: "Results", href: "/dental-implant#before-after" },
  { label: "Procedure", href: "/dental-implant#procedure" },
  { label: "Services", href: "/dental-implant#services" },
  { label: "Our Doctor", href: "/dental-implant#doctor" },
  { label: "FAQs", href: "/dental-implant#faqs" },
];

export function DentalNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dceaf3] bg-white/95 px-4 font-['Onest',sans-serif] shadow-[0_5px_24px_rgba(7,53,118,.06)] backdrop-blur-md sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[78px] max-w-[1540px] items-center justify-between gap-6">
        <Link href="/dental-implant" aria-label="32Care Dental Clinic dental implant home" className="shrink-0">
          <Image src="/logo-32.png" alt="32Care Dental Clinic and Implant Centre" width={658} height={279} preload className="h-auto w-[145px] object-contain sm:w-[175px]" />
        </Link>

        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="relative py-7 text-[14px] font-semibold text-[#38536b] transition hover:text-[#0876b5] after:absolute after:bottom-5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#54b6ec] after:transition-transform hover:after:scale-x-100">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#consultation-form" data-open-consultation-modal className="group inline-flex min-h-[48px] items-center rounded-full bg-[#073576] py-1 pl-6 pr-1 text-[13px] font-bold text-white transition hover:bg-[#0067ac]">
            Book Consultation
            <span className="ml-3 grid h-10 w-10 place-items-center rounded-full bg-[#54b6ec]" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-5-5 5 5-5 5" /></svg>
            </span>
          </a>
        </div>

        <details className="group relative lg:hidden">
          <summary aria-label="Open navigation menu" className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full bg-[#073576] text-white [&::-webkit-details-marker]:hidden">
            <svg viewBox="0 0 24 24" className="h-6 w-6 group-open:hidden" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            <svg viewBox="0 0 24 24" className="hidden h-6 w-6 group-open:block" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </summary>
          <div className="absolute right-0 top-[58px] w-[min(86vw,330px)] overflow-hidden rounded-2xl border border-[#dceaf3] bg-white p-3 shadow-[0_18px_45px_rgba(7,53,118,.16)]">
            <nav aria-label="Mobile navigation">
              <ul className="grid">
                {navLinks.map((link) => (
                  <li key={link.href}><a href={link.href} className="block rounded-xl px-4 py-3 text-[14px] font-semibold text-[#38536b] transition hover:bg-[#e8f5fc] hover:text-[#0876b5]">{link.label}</a></li>
                ))}
              </ul>
            </nav>
            <a href="#consultation-form" data-open-consultation-modal className="mt-2 flex min-h-12 items-center justify-center rounded-full bg-[#073576] px-5 text-[13px] font-bold text-white">Book Consultation</a>
          </div>
        </details>
      </div>
    </header>
  );
}
