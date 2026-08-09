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
import { getSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export default async function Home() {
  const settings = await getSettings();

  return (
    <>
      <AnnouncementBar />
      <Nav />
      <Hero establishedYear={settings.establishedYear} />
      <CredibilityStrip studentsTrained={settings.studentsTrained} />
      <Programs programOverrides={settings.programs} />
      <MasterclassFeature />
      <About />
      <Lookbook />
      <Testimonial testimonial={settings.testimonial} />
      <Admissions whatsappNumber={settings.whatsappNumber} />
      <Footer social={settings.social} />
    </>
  );
}
