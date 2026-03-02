import { Target, Lightbulb, Users } from "lucide-react";

const highlights = [
  { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge solutions that push boundaries." },
  { icon: Target, title: "Quality", desc: "Pixel-perfect execution on every project." },
  { icon: Users, title: "Client Satisfaction", desc: "Your success is our top priority." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Empowering Businesses Through{" "}
              <span className="text-gradient">Digital Innovation</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Mass Infotech, we are a passionate team of developers, designers, and strategists committed to transforming your ideas into powerful digital experiences. Our mission is to bridge the gap between technology and business growth.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With years of experience across diverse industries, we deliver scalable, secure, and innovative solutions that help businesses thrive in the digital age.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="glass-card p-6 flex items-start gap-4 hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <h.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{h.title}</h3>
                  <p className="text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
