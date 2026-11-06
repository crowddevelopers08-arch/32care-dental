import { getImageProps } from "next/image";

export function OfferBanner() {
  const common = {
    alt: "Planning to get dental implants? Free dental implant consultation and 20% off on premium dental implants at 32Care Dental Clinic, Pune",
    sizes: "(min-width: 1620px) 1540px, 100vw",
    quality: 90,
    priority: true,
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: "/dental-implant-offer-banner.jpg", width: 2119, height: 876 });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, src: "/dental-implant-offer-mbl-ban.png", width: 1024, height: 1536 });

  return (
    <section aria-label="Dental implant offer" className="bg-[#f5fbff] px-4 py-4 max-sm:p-0 sm:px-8 sm:py-3 lg:px-12">
      <a
        href="#consultation-form"
        data-open-consultation-modal
        aria-label="Free dental implant consultation and 20% off premium dental implants — talk to our dental experts"
        className="mx-auto block max-w-[1540px] overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(7,53,118,.12)] ring-1 ring-[#dceaf3] transition hover:shadow-[0_14px_48px_rgba(7,53,118,.18)] max-sm:rounded-none max-sm:shadow-none max-sm:ring-0 sm:rounded-3xl"
      >
        {/* Mobile (< 640px) gets the portrait banner; larger screens get the wide one. */}
        <picture>
          <source media="(min-width: 640px)" srcSet={desktop} />
          <source srcSet={mobile} />
          <img {...rest} alt={common.alt} className="h-auto w-full" />
        </picture>
      </a>
    </section>
  );
}
