import { Camera, Cpu, TrendingUp } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Camera,
      title: "Master Cinematography",
      description: "Led by Luke Tannous, award-winning photographer and cinematographer with over 20 years of experience creating content for global brands. Every frame is crafted with precision and artistry."
    },
    {
      icon: Cpu,
      title: "AI Innovation",
      description: "Enhanced with Runway, Luma AI, and cutting-edge generative tools. We leverage AI where it amplifies creativity - impossible camera movements, rapid concept iterations, and visual effects that were once out of reach."
    },
    {
      icon: TrendingUp,
      title: "Premium Results",
      description: "We don't compete on price - we compete on value. Work with a team that's delivered for Barbie, Woolworths, and Amazon. Get world-class video content that performs."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-gold">The Best</span> of Both Worlds
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combining decades of cinematic mastery with tomorrow's technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300 group"
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;