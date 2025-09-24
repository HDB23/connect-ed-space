import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Languages, 
  Volume2, 
  Subtitles, 
  Users,
  Mic,
  Settings,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const TranslationFeature = () => {
  const [activeLanguage, setActiveLanguage] = useState("spanish");
  
  const languages = [
    { code: "spanish", name: "Spanish", flag: "🇪🇸", speakers: "2.1M" },
    { code: "mandarin", name: "Mandarin", flag: "🇨🇳", speakers: "1.8M" },
    { code: "french", name: "French", flag: "🇫🇷", speakers: "856K" },
    { code: "arabic", name: "Arabic", flag: "🇸🇦", speakers: "743K" },
    { code: "hindi", name: "Hindi", flag: "🇮🇳", speakers: "692K" },
    { code: "portuguese", name: "Portuguese", flag: "🇧🇷", speakers: "445K" }
  ];

  const translationDemo = {
    original: "Today we'll explore the fascinating world of quantum computing and its applications in modern technology.",
    translations: {
      spanish: "Hoy exploraremos el fascinante mundo de la computación cuántica y sus aplicaciones en la tecnología moderna.",
      mandarin: "今天我们将探索量子计算的迷人世界及其在现代技术中的应用。",
      french: "Aujourd'hui, nous explorerons le monde fascinant de l'informatique quantique et ses applications dans la technologie moderne.",
      arabic: "اليوم سنستكشف العالم الرائع للحوسبة الكمية وتطبيقاتها في التكنولوجيا الحديثة.",
      hindi: "आज हम क्वांटम कंप्यूटिंग की आकर्षक दुनिया और आधुनिक तकनीक में इसके अनुप्रयोगों का पता लगाएंगे।",
      portuguese: "Hoje exploraremos o fascinante mundo da computação quântica e suas aplicações na tecnologia moderna."
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Globe className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Breaking Language Barriers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Live Translation
            </span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Real-time, AI-powered translation enabling seamless global collaboration. 
            Learn from anyone, anywhere, in your preferred language.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Translation Demo */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className="p-6 gradient-card border-0 shadow-medium">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-success">Live Translation</span>
                </div>
                <Button variant="outline" size="sm" className="hover-scale transition-smooth">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Original text */}
              <div className="mb-6 p-4 bg-background-subtle rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🇺🇸</span>
                  <span className="text-sm font-medium text-foreground-muted">English (Original)</span>
                  <Volume2 className="w-4 h-4 text-foreground-subtle ml-auto cursor-pointer hover:text-primary transition-smooth" />
                </div>
                <p className="text-foreground leading-relaxed">
                  {translationDemo.original}
                </p>
              </div>

              {/* Translated text */}
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">
                    {languages.find(l => l.code === activeLanguage)?.flag}
                  </span>
                  <span className="text-sm font-medium text-primary">
                    {languages.find(l => l.code === activeLanguage)?.name} (Live Translation)
                  </span>
                  <Volume2 className="w-4 h-4 text-primary ml-auto cursor-pointer hover:text-primary-glow transition-smooth" />
                </div>
                <p className="text-foreground leading-relaxed">
                  {translationDemo.translations[activeLanguage as keyof typeof translationDemo.translations]}
                </p>
              </div>

              {/* Translation controls */}
              <div className="flex items-center gap-3 mt-4">
                <Button size="sm" variant="outline" className="hover-scale transition-smooth">
                  <Mic className="w-4 h-4 mr-1" />
                  Voice Mode
                </Button>
                <Button size="sm" variant="outline" className="hover-scale transition-smooth">
                  <Subtitles className="w-4 h-4 mr-1" />
                  Subtitles
                </Button>
              </div>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Languages, title: "100+ Languages", desc: "Comprehensive coverage" },
                { icon: Globe, title: "Real-time", desc: "Instant translation" },
                { icon: Volume2, title: "Voice Support", desc: "Audio translation" },
                { icon: Users, title: "Group Chat", desc: "Multilingual discussions" }
              ].map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="p-4 gradient-card border-0 shadow-soft hover:shadow-medium hover-lift transition-smooth"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <feature.icon className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-medium text-foreground text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-foreground-muted">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Language Selection */}
          <div className="space-y-6">
            <Card className="p-6 gradient-card border-0 shadow-medium">
              <h3 className="text-xl font-bold text-foreground mb-4">Global Learning Community</h3>
              <p className="text-foreground-muted mb-6">
                Connect with learners and educators worldwide. Select a language to see live translation in action.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => setActiveLanguage(language.code)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left hover-lift ${
                      activeLanguage === language.code
                        ? "border-primary bg-primary/10 shadow-medium"
                        : "border-border hover:border-primary/50 bg-background-subtle"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{language.flag}</span>
                      <span className="font-medium text-foreground text-sm">{language.name}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground-subtle">{language.speakers} learners</span>
                      {activeLanguage === language.code && (
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Global stats */}
            <Card className="p-6 gradient-card border-0 shadow-medium">
              <h4 className="font-bold text-foreground mb-4">Translation Impact</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground-muted">Languages Supported</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">100+</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground-muted">Real-time Translations</span>
                  <Badge variant="secondary" className="bg-success/10 text-success">2.4M/day</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground-muted">Cross-cultural Sessions</span>
                  <Badge variant="secondary" className="bg-warning/10 text-warning">15K/week</Badge>
                </div>
              </div>
              
              <Button className="w-full mt-4 gradient-primary text-primary-foreground hover-scale transition-smooth">
                Try Live Translation
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TranslationFeature;