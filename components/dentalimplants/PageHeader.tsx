import Image from "next/image";
import Link from "next/link";

export function PageHeader() {
  return (
    <header className="border-b border-[#dceaf3] bg-white px-4 py-3 sm:px-7 sm:py-4">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-3">
        <Link href="/dental-implant" aria-label="32Care Dental Clinic home" className="shrink-0">
          <Image
            src="/logo-32.png"
            alt="32Care Dental Clinic and Implant Centre"
            width={658}
            height={279}
            priority
            className="h-auto w-[142px] rounded-md object-contain sm:w-[190px]"
          />
        </Link>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <a
            href="tel:+919975611589"
            className="hidden h-10 items-center justify-center gap-2 rounded-full bg-[#073576] px-3 text-[12px] font-bold text-white transition hover:bg-[#0067ac] min-[621px]:inline-flex sm:h-11 sm:px-5 sm:text-sm"
          >
            <PhoneIcon />
            <span className="hidden min-[390px]:inline">+91 9975611589</span>
            <span className="min-[390px]:hidden">Call</span>
          </a>
          <Link
            href="/dental-implant"
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border-2 border-[#0067ac] px-3 text-[12px] font-bold text-[#0067ac] transition hover:bg-[#0067ac] hover:text-white sm:h-11 sm:px-5 sm:text-sm"
          >
            <span aria-hidden="true">←</span> Back to Home
          </Link>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2a12 12 0 0 0 3.8.6c.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17.3 17.3 0 0 1 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1l-2.3 2.2Z" /></svg>;
}
