import { CheckCircle2 } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Strategic Discovery",
      description: "In-depth consultation to understand your brand, objectives, and vision. We align on creative direction, success metrics, and project scope."
    },
    {
      number: "02",
      title: "Concept Development & Proposal",
      description: "Receive a comprehensive proposal including creative treatment, production approach, detailed timeline, and transparent pricing."
    },
    {
      number: "03",
      title: "Pre-Production Planning",
      description: "Storyboarding, location scouting, talent casting, and meticulous planning ensure nothing is left to chance."
    },
    {
      number: "04",
      title: "Production & Creation",
      description: "Whether traditional shoot or AI generation, Luke oversees every aspect to maintain our quality standards."
    },
    {
      number: "05",
      title: "Post-Production Excellence",
      description: "Editing, color grading, sound design, motion graphics, and AI enhancement where it elevates the work."
    },
    {
      number: "06",
      title: "Review & Refinement",
      description: "Collaborative review process with revision rounds included. We perfect it together."
    },
    {
      number: "07",
      title: "Delivery & Support",
      description: "Final files delivered in all required formats, plus guidance on distribution and performance optimization."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            From <span className="text-gradient-gold">Vision</span> to Reality
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our proven 7-step process ensures exceptional results every time
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="glass-card p-6 md:p-8 rounded-2xl hover:border-secondary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground flex items-center gap-3">
                    {step.title}
                    <CheckCircle2 className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-card p-6 rounded-xl text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Timeline:</span> Projects typically range from 1 week (AI ads) to 3 months (complex commercial productions), depending on scope and production requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;