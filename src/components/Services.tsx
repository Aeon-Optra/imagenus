import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Film, Calendar, Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "AI-Generated Video Ads",
      tagline: "Scroll-stopping content in seconds",
      price: "R50,000 per video",
      description: "5-10 second AI-generated video ads optimized for maximum impact on social platforms. Perfect for rapid testing, seasonal campaigns, and high-volume content needs where speed and cost-efficiency matter.",
      features: [
        "Creative concept development",
        "AI generation and refinement",
        "2 revision rounds",
        "Multiple format exports (9:16, 16:9, 1:1)",
        "Usage rights for digital advertising"
      ],
      ideal: ["Social media advertising", "A/B testing multiple concepts", "Seasonal campaigns", "Product launches with multiple variations"],
      badge: "Fast Turnaround"
    },
    {
      icon: Film,
      title: "Premium Brand Films",
      tagline: "Your story, cinematically told",
      price: "Starting at R250,000",
      description: "Cinematic brand narratives shot by Luke Tannous with 20+ years of experience. These are not videos - they're visual experiences that establish authority, build emotional connection, and position your brand as industry-leading.",
      features: [
        "Strategic creative consultation",
        "Full pre-production (storyboarding, location scouting, casting)",
        "Multi-day shoot with professional crew",
        "Master cinematographer direction (Luke Tannous)",
        "Professional color grading and post-production",
        "Original music composition",
        "Unlimited revisions until perfect",
        "Full commercial usage rights"
      ],
      ideal: ["Brand launches and repositioning", "Corporate brand films", "High-stakes investor presentations", "Executive thought leadership"],
      badge: "Premium Quality",
      timeline: "6-12 weeks"
    },
    {
      icon: Calendar,
      title: "Ongoing Content Partnership",
      tagline: "Consistency builds brands",
      price: "R30,000/month",
      description: "Monthly retainer partnership delivering one premium 5-10 second video per week. Maintain constant social presence with high-quality content that keeps your brand top-of-mind.",
      features: [
        "4 videos per month (5-10 seconds each)",
        "Dedicated account management",
        "Content calendar planning and strategy",
        "Mix of AI-generated and traditional footage",
        "Priority scheduling and production slots",
        "48-hour turnaround per video",
        "Monthly performance review calls"
      ],
      ideal: ["Established brands requiring consistent content", "E-commerce with regular product drops", "Agencies managing multiple clients"],
      badge: "Best Value",
      commitment: "12-month minimum"
    },
    {
      icon: Briefcase,
      title: "Commercial & Explainer Productions",
      tagline: "Complex stories, simply told",
      price: "Starting at R180,000",
      description: "Premium commercial spots and explainer videos combining Luke's cinematography expertise with sophisticated post-production. Whether you need a 30-second TV commercial or a 2-minute product explainer, we deliver broadcast-quality work.",
      features: [
        "Strategic scriptwriting and storyboarding",
        "Full production crew and equipment",
        "Luke Tannous as Director of Photography",
        "Professional talent casting (if required)",
        "Advanced motion graphics and VFX",
        "AI enhancement where beneficial",
        "Multiple deliverable formats",
        "3 revision rounds",
        "Full broadcast rights"
      ],
      ideal: ["TV and cinema commercials", "Product demonstrations", "SaaS and tech explainers", "Corporate communications"],
      badge: "Broadcast Ready",
      timeline: "4-8 weeks"
    }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored solutions for every stage of your brand's journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-2 hover:border-secondary/50 transition-all duration-300 group flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <p className="text-primary font-semibold mb-2">{service.tagline}</p>
                <CardDescription className="text-base">{service.description}</CardDescription>
                <p className="text-2xl font-bold text-primary mt-4">{service.price}</p>
                {service.commitment && (
                  <p className="text-sm text-muted-foreground">{service.commitment}</p>
                )}
                {service.timeline && (
                  <p className="text-sm text-muted-foreground">Timeline: {service.timeline}</p>
                )}
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Ideal For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.ideal.map((item, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full" variant="default" size="lg">
                    Request Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;