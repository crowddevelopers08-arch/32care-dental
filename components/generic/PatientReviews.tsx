"use client";

import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const reviews = [
  {
    name: "Abhirag Pratap",
    initials: "AP",
    text: "There is a very warm and friendly vibe at Sunshine Dental Clinic. As soon as I walked in, I felt at ease because the atmosphere was calm and the staff was friendly. The office is very clean, well-organised, and has the latest dentistry technology, which made my visit even more pleasant. It's the best place for people who are scared of going to the dentist.",
  },
  {
    name: "Sawani Deshpande",
    initials: "SD",
    text: "Very professional and gentle dental experience.The treatment was painless and handled with precision.The staff was very attentive and made me feel completely comfortable throughout the treatment.\nWould highly recommend.",
  },
  {
    name: "Sakshi Sonkamble",
    initials: "SS",
    treatment: "Dental Implants",
    text: "Got my dental implant done at 32Care and the whole process was surprisingly smooth. Dr. Shital explained everything clearly and I had almost no pain. Feels just like my natural tooth!",
  },
  {
    name: "Ashwani Ajwani",
    initials: "AA",
    text: "32 Care Dental Clinic in Kharadi delivers top-notch filling services. The staff is professional, and the atmosphere is welcoming. My experience was excellent, with efficient procedures and a pain-free process. I highly recommend this clinic for anyone seeking quality dental care in the Kharadi area.",
  },
  {
    name: "Mangesh Kople",
    initials: "MK",
    text: "I had visitied today to this new clinic it has been an wonderful experience i had seviour toothache In lower right side area dr suggested me tooth extraction and i have gone thrugh that treatment i didnt feel any pain throughout the procedure than you sir for this wonderful experience",
  },
];

function GoogleIcon() {
  return (
    <svg role="img" aria-label="Google" viewBox="0 0 48 48" className="h-6 w-6">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6C44.4 38.03 46.98 31.86 46.98 24.55Z" />
      <path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.87 23.87 0 0 0 0 24c0 3.87.93 7.53 2.56 10.78l7.97-6.19Z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
    </svg>
  );
}

export default function PatientReviews() {
  const trackRef = useRef<HTMLDivElement>(null);

  function step(direction: number) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const end = track.scrollWidth - track.clientWidth;
    const next = direction > 0 && track.scrollLeft >= end - 2
      ? 0
      : direction < 0 && track.scrollLeft <= 2
        ? end
        : track.scrollLeft + direction * (card.offsetWidth + gap);
    track.scrollTo({
      left: next,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <section id="patient-reviews" aria-label="Patient reviews" className="bg-[#f3f9fd] py-9 sm:py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c9e6f5] bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-[#0876b5]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0876b5]" />
            Google Reviews
          </span>
          <SectionHeading title="What Our Patients Say" />
          <p className="mt-3 text-[15px] leading-relaxed text-[#38536b] sm:text-base">
            Read our patients&apos; reviews about their dental care, comfort, and treatment experiences.
          </p>
        </div>

        <div
          id="patient-reviews-track"
          ref={trackRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Patient review cards"
          tabIndex={0}
          className="mt-6 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto rounded-3xl pb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0876b5] sm:mt-10 lg:gap-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((review) => (
            <figure key={review.name} className="flex w-full shrink-0 snap-start flex-col rounded-3xl border border-[#052b50]/[0.07] bg-white p-6 shadow-sm shadow-[#052b50]/5 transition-shadow hover:shadow-lg hover:shadow-[#052b50]/[0.07] sm:w-[calc((100%-1rem)/2)] sm:p-7 lg:w-[calc((100%-2.5rem)/3)]">
              <figcaption className="flex items-center gap-3">
                <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e8f5fc] text-sm font-bold text-[#073576]">
                  {review.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-bold leading-snug text-[#092b4c]">{review.name}</p>
                  <p className="mt-1 text-xs text-[#38536b]">Google Review</p>
                </div>
                <span className="shrink-0"><GoogleIcon /></span>
              </figcaption>

              <div role="img" aria-label="5 out of 5 stars" className="mb-4 mt-5 flex gap-0.5 text-[#fbbc05]">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg key={index} aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.75 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="whitespace-pre-line text-[15px] leading-relaxed text-[#38536b]">
                <p>{review.text}</p>
              </blockquote>
              {review.treatment && (
                <div className="mt-auto pt-5">
                  <span className="inline-block rounded-full bg-[#e8f5fc] px-3 py-1 text-xs font-semibold text-[#0876b5]">
                    {review.treatment}
                  </span>
                </div>
              )}
            </figure>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-center gap-4">
          {([-1, 1] as const).map((direction) => (
            <button
              key={direction}
              type="button"
              onClick={() => step(direction)}
              aria-label={direction === -1 ? "Previous patient review" : "Next patient review"}
              aria-controls="patient-reviews-track"
              className="grid h-11 w-11 place-items-center rounded-full border border-[#c9e6f5] bg-white text-[#052b50] transition hover:border-[#0876b5] hover:bg-[#0876b5] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0876b5]"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 ${direction === -1 ? "rotate-180" : ""}`}>
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
