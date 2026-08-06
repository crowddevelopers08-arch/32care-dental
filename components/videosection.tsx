"use client";

import { useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { Underline } from "./Underline";

const directions = ["left", "up", "right"] as const;

const videos = [
  { id: 1, title: "Doctor Explaining Treatment Evaluation", videoUrl: "https://res.cloudinary.com/jfmvvhot/video/upload/v1785926865/DSC_3965_squished_y5kjb4.mp4" },
  { id: 2, title: "Advanced Treatment Overview", videoUrl: "https://res.cloudinary.com/jfmvvhot/video/upload/v1785926808/DSC_3963_squished_lxi3jb.mp4" },
  { id: 3, title: "In-Clinic Treatment Process", videoUrl: "https://res.cloudinary.com/jfmvvhot/video/upload/v1785926829/DSC_3962_squished_xkb6mt.mp4" },
];

export default function VideoSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const changeSlide = (next:number) => {
    videoRefs.current.forEach(video => video?.pause());
    setCurrentSlide((next + videos.length) % videos.length);
  };

  const handlePlay = (playingIndex:number) => {
    videoRefs.current.forEach((video, index) => {
      if (index !== playingIndex) video?.pause();
    });
  };

  return <section className="relative overflow-hidden bg-[linear-gradient(118deg,#2d78bb_0%,#086cae_54%,#083a75_100%)] px-4 py-8 font-['Onest',sans-serif] text-white sm:px-6 lg:px-12 lg:py-10">
    <div className="absolute inset-0 opacity-20 [background:linear-gradient(45deg,transparent_0_24%,rgba(220,234,255,.7)_24%_30%,transparent_30%_48%,rgba(84,182,236,.55)_48%_54%,transparent_54%)]" />
    <div className="relative mx-auto max-w-[1500px]">
      <Reveal as="header" direction="left" className="mx-auto mb-7 max-w-3xl text-center sm:mb-4">
        <div className="mx-auto flex items-center justify-center gap-5 text-[14px] font-bold tracking-[.12em] text-[#8fe0ff] uppercase max-[620px]:gap-2.5">
          <PulseDivider reverse />
          <span className="whitespace-nowrap">Patient Stories</span>
          <PulseDivider />
        </div>
        <h2 className="mt-1 text-[30px] font-medium tracking-[.2px] text-white max-[620px]:text-[23px]">Real Stories. <Underline color="#8fe0ff" className="font-bold text-[#8fe0ff]">Real Results.</Underline></h2>
        <p className="mx-auto mt-2 max-w-[640px] text-[16px] leading-[1.55] text-[#dceaff]">Watch real treatment experiences and discover the care behind every confident smile.</p>
      </Reveal>

      <Reveal className="relative mx-auto max-w-md lg:hidden">
        <div className="relative h-[560px] overflow-hidden rounded-[24px] bg-black  max-[620px]:h-[500px]">
          {videos.map((video,index) => <video key={video.id} ref={element => { videoRefs.current[index] = element; }} src={video.videoUrl} aria-label={video.title} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${index === currentSlide ? "z-[1] opacity-100" : "pointer-events-none opacity-0"}`} controls preload="metadata" playsInline onPlay={() => handlePlay(index)} />)}
        </div>
        <button type="button" onClick={() => changeSlide(currentSlide - 1)} aria-label="Previous video" className="absolute top-1/2 -left-3 z-[2] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#073576]/90 text-2xl text-white  transition hover:scale-110">‹</button>
        <button type="button" onClick={() => changeSlide(currentSlide + 1)} aria-label="Next video" className="absolute top-1/2 -right-3 z-[2] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#073576]/90 text-2xl text-white  transition hover:scale-110">›</button>
        <div className="mt-5 flex justify-center gap-2">{videos.map((video,index) => <button type="button" key={video.id} onClick={() => changeSlide(index)} aria-label={`Show video ${index + 1}`} className={`h-2.5 rounded-full bg-white transition-all ${index === currentSlide ? "w-9" : "w-2.5 opacity-35"}`} />)}</div>
      </Reveal>

      <div className="hidden grid-cols-3 gap-7 lg:grid">
        {videos.map((video,index) => <Reveal as="article" key={video.id} delay={index * 130} direction={directions[index % directions.length]} className="group overflow-hidden rounded-[24px] bg-black  transition duration-500 hover:-translate-y-2 ">
          <video ref={element => { videoRefs.current[index + videos.length] = element; }} src={video.videoUrl} aria-label={video.title} className="h-[580px] w-full object-cover" controls preload="metadata" playsInline onPlay={() => handlePlay(index + videos.length)} />
        </Reveal>)}
      </div>

      <Reveal delay={200} className="mt-10 max-sm:mt-5 flex justify-center">
        <a href="#consultation-form" className="group relative inline-flex min-h-[58px] items-center justify-center overflow-hidden rounded-full border-2 border-white px-9 text-base font-extrabold text-white transition-all duration-300 hover:-translate-y-1 max-[620px]:min-h-[54px] max-[620px]:w-full max-[620px]:px-3 max-[620px]:text-[12px]">
          <span aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
          <span className="relative z-10 transition-colors duration-500 group-hover:text-[#073576]">Book Your Consultation</span>
        </a>
      </Reveal>
    </div>
  </section>;
}

function PulseDivider({reverse=false}:{reverse?:boolean}) {
  return <span className={`flex w-14 items-center gap-2 max-[620px]:w-10 max-[620px]:gap-1.5 ${reverse ? "flex-row-reverse" : ""}`} aria-hidden="true">
    <i className="h-px flex-1 bg-gradient-to-r from-[#8fe0ff]/20 to-[#8fe0ff]" />
    <i className="relative grid h-4 w-4 shrink-0 place-items-center rounded-full border border-[#8fe0ff]/50">
      <i className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-[#8fe0ff]/45 motion-reduce:animate-none" />
      <i className="relative h-1.5 w-1.5 rounded-full bg-[#8fe0ff]" />
    </i>
  </span>;
}
