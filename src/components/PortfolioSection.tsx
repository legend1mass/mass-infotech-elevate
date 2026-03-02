import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";

const projects = [
  { img: portfolio1, title: "FinDash Analytics", category: "Web Application", desc: "A real-time financial analytics dashboard for enterprise clients." },
  { img: portfolio2, title: "HealthPulse App", category: "Mobile Application", desc: "Cross-platform health tracking app with AI-powered insights." },
  { img: portfolio3, title: "DataVision AI", category: "AI & Machine Learning", desc: "Intelligent data visualization platform with predictive analytics." },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A showcase of our latest work across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{p.category}</span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
