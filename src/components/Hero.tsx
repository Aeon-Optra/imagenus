"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Menu, X } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-cinema.jpg";

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'process' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-secondary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Company Name */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Imagenus"
                className="h-8 md:h-10 object-contain"
              />
              <span className="text-xl md:text-2xl font-bold text-foreground">Imagenus</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-secondary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-secondary/30 hover:border-secondary hover:bg-secondary/10"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-secondary/20">
              <div className="flex flex-col gap-4 mt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-muted-foreground hover:text-secondary transition-colors duration-300 font-medium py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-secondary/30 hover:border-secondary hover:bg-secondary/10 mt-2"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage.src})`,
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gradient-gold">South Africa's</span>
            <br />
            <span className="text-foreground">AI-Enhanced Video</span>
            <br />
            <span className="text-foreground">Production House</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Where award-winning cinematography meets cutting-edge AI innovation. We create premium video content that captivates audiences and drives results - from concept to delivery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              variant="default"
              size="lg"
              className="group"
              onClick={() => scrollToSection('services')}
            >
              View Our Services
              <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() => scrollToSection('contact')}
            >
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
                        className="h-8 relative bottom-1 md:h-12 object-contain hover:scale-105 transition-transform duration-300 cursor-default"
                      />
                        <img
                          src="/Amazon_logo.svg"
                          alt="Amazon"
                          className="h-8 top-2 relative md:h-12 object-contain hover:scale-105 transition-transform duration-300 cursor-default"
                        />
                      <img
                        src="/Woolworths-Logo.png"
                        alt="Woolworths"
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
        <div className="w-6 h-10 border-2 border-secondary/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-secondary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;