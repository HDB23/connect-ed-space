import { Button } from "@/components/ui/button";
import { Globe, Users, Brain, BarChart3, Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-edtech.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95"></div>
      
      {/* Hero image overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Global EdTech Collaboration Platform" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-glow-pulse"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm shadow-soft mb-8 border border-primary/20">
            <Globe className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-foreground">Global Education Innovation</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Global EdTech
            </span>
            <br />
            <span className="text-background">Collaboration</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-background/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing education through AI-powered learning, real-time translation, 
            and seamless global collaboration for students and educators worldwide.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-card hover:bg-card-hover text-foreground shadow-medium hover:shadow-large hover-lift transition-smooth px-8 py-4 text-lg font-semibold rounded-xl"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Learning
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-background/30 text-background hover:bg-background/10 hover:border-background/50 backdrop-blur-sm px-8 py-4 text-lg font-medium rounded-xl transition-smooth"
            >
              Watch Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-slide-in-right">
            {[
              { icon: Users, title: "Virtual Learning", desc: "Interactive classrooms" },
              { icon: Globe, title: "Live Translation", desc: "Real-time language support" },
              { icon: Brain, title: "AI Note Taking", desc: "Smart summarization" },
              { icon: BarChart3, title: "Performance Analytics", desc: "Data-driven insights" }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="flex flex-col items-center p-6 rounded-2xl bg-card/20 backdrop-blur-sm border border-primary/20 hover:bg-card/30 hover-lift transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-background mb-1">{feature.title}</h3>
                <p className="text-sm text-background/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-background/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;