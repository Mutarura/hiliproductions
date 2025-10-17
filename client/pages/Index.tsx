import { HeroSection } from "@/components/landing/HeroSection";
import { VisionSection } from "@/components/landing/VisionSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { SignUpSection } from "@/components/landing/SignUpSection";
import { Footer } from "@/components/landing/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <VisionSection />
      <FeaturesSection />
      <SignUpSection />
      <Footer />
    </div>
  );
}
