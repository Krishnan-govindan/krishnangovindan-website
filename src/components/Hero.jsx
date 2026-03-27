import { motion } from "framer-motion";
import Button from "./ui/Button";
import { CALENDLY_URL } from "../constants/links";

const COACH_PHOTO = "https://assets.cdn.filesafe.space/m9jCzEyKqM4xlMWTjcgS/media/685aa9b8f1a848bc1fe8873d.jpeg";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const fadeIn = (delay) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        background:
          "radial-gradient(ellipse at 60% 50%, rgba(193,154,62,0.09) 0%, transparent 55%), linear-gradient(135deg, #1A1A2E 0%, #16213E 60%, #1a1a2e 100%)",
      }}
    >
      {/* Decorative blurred circles */}
      <div
        aria-hidden="true"
        className="absolute top-[-120px] right-[-100px] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(193,154,62,0.14) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-80px] left-[-120px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(193,154,62,0.08) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <div>
            {/* Tagline */}
            <motion.p
              {...fadeUp(0.1)}
              style={{ color: "#C19A3E" }}
              className="font-body text-sm font-semibold uppercase tracking-widest mb-5"
            >
              India's First Divorce Coach | Life &amp; Business Strategist
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              {...fadeUp(0.3)}
              className="font-heading font-bold text-3xl lg:text-5xl text-white leading-tight mb-5"
            >
              Heal, Grow, and Thrive After a Breakup or Divorce
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              {...fadeUp(0.5)}
              className="font-heading font-medium text-xl lg:text-2xl leading-snug mb-6"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              Break Free from the Past and Create a Future Filled with Love and Confidence!
            </motion.p>

            {/* Body paragraph */}
            <motion.p
              {...fadeIn(0.7)}
              className="font-body text-sm lg:text-base leading-relaxed mb-10 max-w-[560px]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Are you feeling lost after a breakup or divorce? Do you find yourself stuck in a
              cycle of emotional pain, constantly revisiting the past, and struggling to see a
              way forward? Perhaps you've tried group programs, self-help books, or even therapy,
              but nothing seems to provide the deep, personalized transformation you're seeking.
              You're not alone, and the answer might be closer than you think.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
            >
              <Button text="BOOK FREE DISCOVERY CALL" href={CALENDLY_URL} variant="primary" />
            </motion.div>

            {/* Trust Stats */}
            <motion.div {...fadeUp(1.1)} className="mt-12 flex items-center gap-0">
              <div className="flex flex-col">
                <span
                  className="font-heading font-bold text-4xl leading-none"
                  style={{ color: "#E8B84B" }}
                >
                  1,000+
                </span>
                <span className="font-body text-sm mt-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Happy Clients
                </span>
              </div>
              <div className="w-px h-14 bg-white/20 mx-8" />
              <div className="flex flex-col">
                <span
                  className="font-heading font-bold text-4xl leading-none"
                  style={{ color: "#E8B84B" }}
                >
                  3+
                </span>
                <span className="font-body text-sm mt-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Years of Experience
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Coach Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Decorative offset border */}
              <div
                aria-hidden="true"
                className="absolute top-5 left-5 w-full h-full rounded-2xl pointer-events-none"
                style={{ border: "2px solid rgba(193,154,62,0.4)" }}
              />
              {/* Soft glow behind photo */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: "0 0 80px rgba(193,154,62,0.18)",
                  transform: "scale(1.04)",
                }}
              />
              {/* Photo */}
              <img
                src={COACH_PHOTO}
                alt="Krishnan Govindan — India's First Divorce Coach"
                className="relative rounded-2xl object-cover"
                style={{
                  width: "340px",
                  height: "440px",
                  objectFit: "cover",
                  objectPosition: "top center",
                  border: "2px solid rgba(193,154,62,0.55)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
