import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Film, Calendar, Briefcase, Settings, Crown, Video, Clapperboard } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "AI-Generated Video Ads",
      tagline: "Scroll-stopping content in seconds",
      price: "R50,000 per video ex. VAT",
      description: "AI-generated 5-10 second video ads optimized for social platforms. Perfect for rapid testing and high-volume campaigns.",
      features: [
        "Creative concept & AI generation",
        "2 revision rounds",
        "Multiple formats (9:16, 16:9, 1:1)",
        "Digital advertising rights"
      ],
      ideal: ["Social media ads", "A/B testing", "Seasonal campaigns"],
      badge: "Fast Turnaround",
      serviceType: "oneoff"
    },
    {
      icon: Film,
      title: "Premium Brand Films, Commercial or Explainer Videos",
      tagline: "Your story, cinematically told",
      price: "Starting at R250,000 ex. VAT",
      description: "Cinematic 30-second campaigns shot by Luke Tannous (20+ years experience). Visual experiences that establish authority and build emotional connection.",
      features: {
        production: [
          "Creative consultation & campaign development",
          "Fixed production budget",
          "Full pre-production (storyboarding, location scouting)",
          "Multi-day shoot with production crew",
          "Master cinematography (Luke Tannous)",
          "Professional post-production & AI-composed music"
        ],
        delivery: [
          "3 revision rounds",
          "Full commercial usage rights"
        ],
        exclusions: [
          "Does not include talent, makeup artists, stylists, or location costs"
        ]
      },
      ideal: ["Brand launches", "Corporate films", "Investor presentations"],
      badge: "Premium Quality",
      serviceType: "oneoff",
      timeline: "6-12 weeks"
    },
    {
      icon: Calendar,
      title: "Ongoing Content Partnership",
      tagline: "Consistency builds brands",
      price: "R50,000/month ex. VAT",
      description: "Monthly retainer delivering weekly premium 5-10 second videos. Maintain constant social presence with high-quality content.",
      features: [
        "4 videos per month (5-10 seconds)",
        "Dedicated account management",
        "Content calendar & strategy",
        "AI-generated + traditional footage",
        "Priority scheduling"
      ],
      ideal: ["Established brands", "E-commerce", "Content agencies"],
      badge: "Best Value",
      serviceType: "retainer",
      commitment: "12-month minimum"
    },
    {
      icon: Crown,
      title: "Premium Ongoing Partnership",
      tagline: "Complete video solution",
      price: "R100,000/month ex. VAT",
      description: "Ultimate video partnership combining monthly content + quarterly premium campaigns. Perfect for brands needing consistent presence and high-impact campaigns.",
      features: [
        "4 videos per month (5-10 seconds)",
        "3x premium 30-second campaigns/year",
        "Dedicated account management",
        "Strategic content & campaign planning",
        "AI-generated + traditional footage",
        "Priority scheduling",
        "Master cinematographer on campaigns"
      ],
      ideal: ["Enterprise brands", "Diverse content needs", "Volume + premium"],
      badge: "Complete Solution",
      serviceType: "retainer",
      commitment: "12-month minimum"
    },
    {
      icon: Settings,
      title: "Build a Custom Quote",
      tagline: "Tailored to your unique needs",
      price: "Custom Pricing",
      description: "Need something different? We'll create a personalized video package that fits your specific requirements, timeline, and budget.",
      features: [
        "One-on-one consultation",
        "Tailored package design",
        "Flexible pricing based on scope",
        "Custom timeline & deliverables",
        "Mix of any services",
        "Volume discounts available"
      ],
      ideal: ["Unique requirements", "Multiple video types", "Custom timelines"],
      badge: "Fully Customizable",
      serviceType: "custom",
      isCustom: true
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
          {services.map((service, index) => {
            const getCardStyling = (serviceType) => {
              switch (serviceType) {
                case 'oneoff':
                  return 'glass-card border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 group flex flex-col h-full';
                case 'retainer':
                  return 'glass-card border-2 border-secondary/40 bg-gradient-to-br from-secondary/5 to-secondary/10 hover:border-secondary/70 transition-all duration-300 group flex flex-col h-full';
                case 'custom':
                  return 'glass-card border-2 border-accent/40 bg-gradient-to-br from-accent/5 to-accent/10 hover:border-accent/70 transition-all duration-300 group flex flex-col h-full';
                default:
                  return 'glass-card border-2 hover:border-secondary/50 transition-all duration-300 group flex flex-col h-full';
              }
            };

            return (
            <Card key={index} className={getCardStyling(service.serviceType)}>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {service.serviceType === 'retainer' && '🔄 '}
                    {service.serviceType === 'oneoff' && '📽️ '}
                    {service.serviceType === 'custom' && '🛠️ '}
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <p className="text-primary font-semibold mb-2">{service.tagline}</p>
                <CardDescription className="text-base">{service.description}</CardDescription>
                <p className="text-2xl font-bold text-primary mt-4">{service.price}</p>
                {service.commitment && (
                  <p className="text-sm text-secondary font-medium bg-secondary/10 px-2 py-1 rounded-md inline-block">
                    📅 {service.commitment}
                  </p>
                )}
                {service.timeline && (
                  <p className="text-sm text-muted-foreground">Timeline: {service.timeline}</p>
                )}
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div>
                    {Array.isArray(service.features) ? (
                      // Regular features array
                      <>
                        <h4 className="font-semibold mb-3 text-foreground">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      // Categorized features object
                      <div className="space-y-4">
                        {service.features.production && (
                          <div>
                            <h4 className="font-semibold mb-2 text-foreground flex items-center gap-2">
                              <Video className="w-4 h-4 text-secondary" />
                              Production Includes:
                            </h4>
                            <ul className="space-y-1.5">
                              {service.features.production.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <Check className="w-3.5 h-3.5 text-secondary mt-0.5 shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.features.delivery && (
                          <div>
                            <h4 className="font-semibold mb-2 text-foreground flex items-center gap-2">
                              <Zap className="w-4 h-4 text-accent" />
                              Delivery & Timeline:
                            </h4>
                            <ul className="space-y-1.5">
                              {service.features.delivery.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <Check className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.features.exclusions && (
                          <div>
                            <h4 className="font-semibold mb-2 text-foreground flex items-center gap-2">
                              <span className="w-4 h-4 text-red-400">❌</span>
                              Exclusions:
                            </h4>
                            <ul className="space-y-1.5">
                              {service.features.exclusions.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-red-400">
                                  <span className="w-3.5 h-3.5 mt-0.5 shrink-0">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
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
                    {service.isCustom ? "Get Custom Quote" : "Request Quote"}
                  </Button>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;