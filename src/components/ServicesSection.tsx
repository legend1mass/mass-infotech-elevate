import { Globe, Smartphone, Brain, Megaphone, Cloud, Code2 } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Responsive, fast, and scalable web applications tailored to your needs." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile apps for iOS and Android." },
  { icon: Brain, title: "AI & Machine Learning", desc: "Intelligent automation and data-driven insights for your business." },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, social media, and paid campaigns that drive real results." },
  { icon: Cloud, title: "Cloud & Hosting", desc: "Reliable cloud infrastructure and managed hosting services." },
  { icon: Code2, title: "Custom Software", desc: "Bespoke software solutions designed for your unique workflows." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Comprehensive digital solutions to take your business to the next level.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass-card p-8 group hover:border-primary/40 transition-all duration-300 cursor-default opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all">
                <s.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
