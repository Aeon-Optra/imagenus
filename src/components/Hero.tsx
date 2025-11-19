import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-cinema.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-gradient-gold">South Africa's</span>
            <br />
            <span className="text-foreground">AI-Enhanced Video</span>
            <br />
            <span className="text-foreground">Production House</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Where award-winning cinematography meets cutting-edge AI innovation. We create premium video content that captivates audiences and drives results - from concept to delivery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="hero" size="xl" className="group">
              View Our Portfolio
              <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="group">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="pt-20">
            <div className="glass-card mx-auto max-w-6xl px-8 py-10 rounded-2xl border-2 border-primary/20">
              <div className="flex flex-col gap-8">
                {/* Trusted By Brands */}
                <div className="text-center">
                  <p className="text-sm md:text-base text-primary/80 mb-8 uppercase tracking-[0.2em] font-medium">Trusted By</p>
                  <div className="bg-amber-50/90 backdrop-blur-sm rounded-xl border border-primary/30 shadow-lg shadow-primary/10 px-8 py-6">
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
                      <img
                        src="/Barbie_Logo.svg"
                        alt="Barbie"
                        className="h-8 md:h-12 object-contain hover:scale-105 transition-transform duration-300 cursor-default"
                      />
                      <img
                        src="/Woolworths-Logo.png"
                        alt="Woolworths"
                        className="h-8 md:h-12 object-contain hover:scale-105 transition-transform duration-300 cursor-default"
                      />
                      <img
                        src="/Amazon_logo.svg"
                        alt="Amazon"
                        className="h-8 md:h-12 object-contain hover:scale-105 transition-transform duration-300 cursor-default"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Credentials */}
                <div className="border-t border-primary/20 pt-8">
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-xl md:text-2xl">
                    <span className="text-gradient-gold font-bold">Award-Winning Cinematographer</span>
                    <span className="text-primary/40 hidden sm:inline">|</span>
                    <span className="text-gradient-gold font-bold">20+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;