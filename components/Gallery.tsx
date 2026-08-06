import Image from "next/image";
import { SectionLabel } from "./SectionLabel";

const photos = [
  { src: "/Pics for website1/DSC_2591.JPG", alt: "Kosmo Dental Clinic reception area", cell: "col-span-3 row-span-6 col-start-1 row-start-1" },
  { src: "/Pics for website1/DSC01914.JPG", alt: "Modern dental treatment chair and equipment", cell: "col-span-2 row-span-3 col-start-4 row-start-1" },
  { src: "/Pics for website1/DSC_2638.JPG", alt: "Dentist examining a patient at Kosmo Dental Clinic", cell: "col-span-2 row-span-3 col-start-4 row-start-4" },
  { src: "/Pics for website1/DSC_3910.JPG", alt: "Sterile dental instruments and equipment", cell: "col-span-3 row-span-6 col-start-6 row-start-1" },
  { src: "/Pics for website1/DSC_2652.JPG", alt: "Patient consultation at Kosmo Dental Clinic", cell: "col-span-4 row-span-3 col-start-9 row-start-1" },
  { src: "/Pics for website1/DSC_3795.JPG", alt: "Kosmo Dental Clinic interior", cell: "col-span-2 row-span-3 col-start-9 row-start-4" },
  { src: "/Pics for website1/DSC_2643.JPG", alt: "Kosmo Dental Clinic waiting area", cell: "col-span-2 row-span-3 col-start-11 row-start-4" },
];

export function Gallery() {
  return <section className="bg-[#f3f9fd] px-5 py-12 font-['Onest',sans-serif] text-[#092b4c] max-[620px]:hidden sm:px-8 sm:py-16 lg:px-12">
    <div className="mx-auto max-w-[1350px]">
      <div className="text-center">
        <SectionLabel>Our Clinic</SectionLabel>
        <h2 className="mt-1 text-[26px] font-medium tracking-[.2px] max-[620px]:text-[23px]">A Look Inside Kosmo Dental Clinic</h2>
      </div>

      <div className="mt-8 grid h-[560px] grid-cols-12 grid-rows-6 gap-[7px] max-[900px]:h-auto max-[900px]:grid-cols-2 max-[900px]:grid-rows-none max-[900px]:gap-3">
        {photos.map((photo) => <div key={photo.src} className={`group relative overflow-hidden rounded-[16px] bg-[#e8f5fc]  ${photo.cell} max-[900px]:col-span-1 max-[900px]:row-span-1 max-[900px]:col-start-auto max-[900px]:row-start-auto max-[900px]:aspect-square`}>
          <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 46vw, 33vw" className="object-cover transition duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#073576]/55 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        </div>)}
      </div>
    </div>
  </section>;
}
