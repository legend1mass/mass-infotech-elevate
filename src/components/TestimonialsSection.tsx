import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechVentures",
    text: "Mass Infotech delivered an outstanding web platform that exceeded all our expectations. Their team was professional, responsive, and incredibly talented.",
  },
  {
    name: "Rahul Mehta",
    role: "Founder, StartupGrid",
    text: "The mobile app they built for us was flawless. From concept to launch, the entire experience was seamless. Highly recommend their services!",
  },
  {
    name: "Emily Chen",
    role: "CTO, DataFlow Inc.",
    text: "Their AI solutions transformed our data pipeline. We saw a 40% improvement in processing efficiency within the first month.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center relative">
            <Quote size={40} className="text-primary/20 mx-auto mb-6" />
            <p className="text-lg text-foreground leading-relaxed mb-8 italic">
              "{t.text}"
            </p>
            <div>
              <div className="font-semibold text-foreground">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="p-2 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="p-2 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
