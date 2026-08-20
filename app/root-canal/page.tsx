
import { Gallery } from "@/components/Gallery";
import VideoSection from "@/components/videosection";
import { HowItWorks } from "@/components/HowItWorks";
import { HairSolutions } from "@/components/HairSolutions";
import { AboutExperience } from "@/components/AboutExperience";
import { DentalPromo } from "@/components/DentalPromo";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileActionBar } from "@/components/MobileActionBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { DentalHero } from "@/components/DentalHero";
import { BeforeAfter } from "@/components/BeforeAfter";

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
    <MobileActionBar />
    <ScrollToTop />
  </>;
}
