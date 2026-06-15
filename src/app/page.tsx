import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { AboutSection } from "@/components/about-section";
import { ContactCta } from "@/components/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutSection />
      <ContactCta />
    </>
  );
}
