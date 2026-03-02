import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      <div className="section-container relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium animate-fade-in">
            🚀 Transforming Ideas Into Digital Reality
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Innovating The Future{" "}
            <span className="text-gradient">With Technology</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Mass Infotech delivers smart digital solutions for businesses worldwide. We build, design, and scale your digital presence.
          </p>

          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="text-base">
              Get Started <ArrowRight size={18} />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {[
              { num: "150+", label: "Projects" },
              { num: "50+", label: "Clients" },
              { num: "5+", label: "Years" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-bold text-gradient">{s.num}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
