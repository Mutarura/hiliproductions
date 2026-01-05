import { HeroSection } from "@/components/landing/HeroSection";
import { WhoWeAreSection } from "@/components/landing/WhoWeAreSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { WhoIsItForSection } from "@/components/landing/WhoIsItForSection";
import { Footer } from "@/components/landing/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <WhoWeAreSection />
      <FeaturesSection />
      <WhoIsItForSection />
      <Footer />
    </div>
  );
}
