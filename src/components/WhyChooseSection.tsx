import { Users, DollarSign, Headphones, Cpu } from "lucide-react";

const reasons = [
  { icon: Users, title: "Experienced Team", desc: "A dedicated team of skilled developers, designers, and strategists." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Competitive rates without compromising on quality." },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock support to keep your business running." },
  { icon: Cpu, title: "Latest Technologies", desc: "We stay ahead with modern tools and frameworks." },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Built On <span className="text-gradient">Trust & Excellence</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="text-center p-8 glass-card hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 text-primary">
                <r.icon size={28} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
