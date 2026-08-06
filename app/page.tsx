import { DentalHero } from "../components/DentalHero";
import { BeforeAfter } from "../components/BeforeAfter";
import { Gallery } from "@/components/Gallery";
import VideoSection from "@/components/videosection";
import { HowItWorks } from "@/components/HowItWorks";
import { HairSolutions } from "@/components/HairSolutions";
import { AboutExperience } from "@/components/AboutExperience";
import { DentalPromo } from "@/components/DentalPromo";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return <>
    <DentalHero />
    <BeforeAfter />
    <VideoSection />
    <HowItWorks />
    <HairSolutions />
    <AboutExperience />
    <DentalPromo />
    <Gallery />
    <SiteFooter />

  </>;
}
