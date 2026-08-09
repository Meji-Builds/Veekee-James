import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { Programs } from "@/components/Programs";
import { MasterclassFeature } from "@/components/MasterclassFeature";
import { About } from "@/components/About";
import { Lookbook } from "@/components/Lookbook";
import { Testimonial } from "@/components/Testimonial";
import { Admissions } from "@/components/Admissions";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <Hero />
      <CredibilityStrip />
      <Programs />
      <MasterclassFeature />
      <About />
      <Lookbook />
      <Testimonial />
      <Admissions />
      <Footer />
    </>
  );
}
