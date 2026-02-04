import { HeroSection } from "@/components/landing/HeroSection";
import { WhoWeAreSection } from "@/components/landing/WhoWeAreSection";
import { CreatorSeriesSection } from "@/components/landing/CreatorSeriesSection";
import { WhoIsItForSection } from "@/components/landing/WhoIsItForSection";
import { Footer } from "@/components/landing/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <WhoWeAreSection />
      <CreatorSeriesSection />
      <WhoIsItForSection />
      <Footer />
    </div>
  );
}
