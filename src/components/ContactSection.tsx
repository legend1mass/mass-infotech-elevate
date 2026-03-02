import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just reset
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Let's <span className="text-gradient">Talk</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind? Reach out and let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your project..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                required
              />
            </div>
            <Button variant="hero" size="lg" type="submit" className="w-full text-base">
              Send Message <Send size={18} />
            </Button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-8">
            {[
              { icon: Mail, label: "Email", value: "hello@massinfotech.com" },
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: MapPin, label: "Location", value: "Bangalore, India" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <c.icon size={22} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{c.label}</div>
                  <div className="text-foreground font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
