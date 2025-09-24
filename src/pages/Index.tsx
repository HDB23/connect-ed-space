import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Dashboard from "@/components/Dashboard";
import TranslationFeature from "@/components/TranslationFeature";
import AINotesFeature from "@/components/AINotesFeature";
import AnalyticsFeature from "@/components/AnalyticsFeature";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Dashboard />
      <TranslationFeature />
      <AINotesFeature />
      <AnalyticsFeature />
      <Footer />
    </div>
  );
};

export default Index;