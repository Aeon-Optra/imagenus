import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Why are your prices higher than other video production companies?",
      answer: "We don't compete with general videographers - we operate at the level of cinematographers who've worked with global brands like Barbie, Woolworths, and Amazon. Luke Tannous brings 20+ years of award-winning experience to every project. When you need work that truly performs and positions your brand as premium, the investment is justified by results."
    },
    {
      question: "How long does production take?",
      answer: "Timelines vary significantly by project type: AI Video Ads (1-2 weeks), Commercial Productions (4-8 weeks), Premium Brand Films (6-12 weeks). Complex projects may extend to 3 months. We never rush quality. Each project timeline is determined during our discovery phase based on your specific needs."
    },
    {
      question: "Can you work with our existing creative agency?",
      answer: "Absolutely. We regularly collaborate with creative agencies, bringing production excellence to their strategic vision."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes. For projects over R200,000, we offer milestone-based payment structures: 40% on signing, 40% at production start, 20% on final delivery."
    },
    {
      question: "What if we need content faster?",
      answer: "Rush projects are possible depending on current workload. Expedited timelines incur a 30-50% premium to reorganize production schedules and dedicate focused resources."
    },
    {
      question: "Can we license your work for international use?",
      answer: "All our packages include full commercial usage rights unless specifically negotiated otherwise. International broadcast rights are standard."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about working with us
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-card px-6 rounded-xl border-2 hover:border-secondary/50 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-secondary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;