import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PlatformsSection from "@/components/PlatformsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isVisible={loading} />
      <main
        className="bg-background text-foreground"
        style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s ease 0.3s" }}
      >
        <HeroSection />
        <AboutSection />
        <PlatformsSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
