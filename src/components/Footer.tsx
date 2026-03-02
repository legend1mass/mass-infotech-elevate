import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logoIcon} alt="Mass Infotech" className="w-8 h-8" />
            <span className="font-display font-bold text-lg text-foreground">
              Mass <span className="text-gradient">Infotech</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            Copyright © 2026 Mass Infotech. All rights reserved.
          </div>

          {/* Social */}
          <div className="flex justify-end gap-4">
            {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
