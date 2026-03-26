import { Camera, PlayCircle, Briefcase, Users } from "lucide-react";
import { EMAIL, WHATSAPP_LINK } from "../constants/links";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const socialLinks = [
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: PlayCircle, href: "#", label: "YouTube" },
  { icon: Briefcase, href: "#", label: "LinkedIn" },
  { icon: Users, href: "#", label: "Facebook" },
];

const handleNavClick = (href) => {
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#111122" }} className="pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1 — Brand */}
          <div>
            <p className="font-heading text-lg font-bold text-white tracking-wide">
              NEO HAPPY LYF
            </p>
            <p className="font-body text-xs text-white/50 mt-1">
              with Krishnan Govindan
            </p>
            <p className="font-body text-sm text-white/40 mt-3 max-w-[250px] leading-relaxed">
              India's First Divorce Coach helping you heal, grow, and thrive.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <p className="font-body text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="font-body text-sm text-white/50 hover:text-accent hover:opacity-100 transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <p className="font-body text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Get In Touch
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-body text-sm text-white/50 hover:text-accent transition-colors duration-200 break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/50 hover:text-accent transition-colors duration-200"
                >
                  +1 (425) 442-4167
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/40 hover:text-accent transition-colors duration-200"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="font-body text-xs text-white/30 text-center">
            © 2025 Krishnan Govindan™ | All Rights Reserved | Terms &amp; Conditions
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
