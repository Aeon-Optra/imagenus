import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Discuss Your <span className="text-gradient-gold">Vision</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to create something exceptional? Share your vision with us and receive a comprehensive proposal within 48 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="glass-card p-8 rounded-2xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company/Brand Name *</Label>
                  <Input id="company" placeholder="Your company" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="you@company.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" type="tel" placeholder="+27 XX XXX XXXX" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="project-type">Project Type *</Label>
                  <Select>
                    <SelectTrigger id="project-type">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="ai-ads">AI Video Ads</SelectItem>
                      <SelectItem value="brand-film">Brand Film</SelectItem>
                      <SelectItem value="commercial">Commercial/Explainer</SelectItem>
                      <SelectItem value="partnership">Monthly Content Partnership</SelectItem>
                      <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget Range *</Label>
                  <Select>
                    <SelectTrigger id="budget">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="50-100">R50k-100k</SelectItem>
                      <SelectItem value="100-250">R100k-250k</SelectItem>
                      <SelectItem value="250-500">R250k-500k</SelectItem>
                      <SelectItem value="500+">R500k+</SelectItem>
                      <SelectItem value="discuss">Let's Discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline *</Label>
                <Select>
                  <SelectTrigger id="timeline">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="1-2">1-2 months</SelectItem>
                    <SelectItem value="3-4">3-4 months</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                    <SelectItem value="asap">ASAP</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your project and objectives *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Share your vision, goals, and any specific requirements..." 
                  rows={6}
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="referral">How did you hear about us? (optional)</Label>
                <Input id="referral" placeholder="Google, referral, social media, etc." />
              </div>

              <Button type="submit" size="lg" variant="hero" className="w-full">
                Send Inquiry
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We respond to all inquiries within 24 business hours. For urgent projects, WhatsApp us directly.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl space-y-6">
              <h3 className="text-xl font-bold">Alternative Contact Methods</h3>
              
              <div className="space-y-4">
                <a href="mailto:hello@imagenus.co.za" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Mail className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm">hello@imagenus.co.za</p>
                  </div>
                </a>

                <a href="https://wa.me/27XXXXXXXXX" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Phone className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <p className="text-sm">+27 XX XXX XXXX</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-sm">Cape Town, South Africa</p>
                    <p className="text-xs mt-1">Serving South Africa & internationally</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Response Commitment</h3>
              <p className="text-sm text-muted-foreground">
                We respond to all inquiries within 24 business hours. For urgent projects, WhatsApp us directly for the fastest response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;