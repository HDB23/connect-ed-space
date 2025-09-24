import HeroSection from "@/components/HeroSection";
import Dashboard from "@/components/Dashboard";
import TranslationFeature from "@/components/TranslationFeature";
import AINotesFeature from "@/components/AINotesFeature";
import AnalyticsFeature from "@/components/AnalyticsFeature";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Dashboard />
      <TranslationFeature />
      <AINotesFeature />
      <AnalyticsFeature />
    </div>
  );
};

export default Index;