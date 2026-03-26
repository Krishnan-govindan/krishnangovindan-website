import { motion } from "framer-motion";
import Button from "./ui/Button";
import { CALENDLY_URL } from "../constants/links";

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
          "radial-gradient(ellipse at 50% 60%, rgba(193,154,62,0.07) 0%, transparent 60%), linear-gradient(135deg, #1A1A2E 0%, #16213E 60%, #1a1a2e 100%)",
      }}
    >
      {/* Decorative blurred circles */}
      <div
        aria-hidden="true"
        className="absolute top-[-120px] right-[-100px] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(193,154,62,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-80px] left-[-120px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(193,154,62,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(22,33,62,0.6) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="lg:max-w-[60%]">

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.1)}
            className="font-body text-sm font-semibold uppercase tracking-widest text-accent mb-5"
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
          <motion.h2
            {...fadeUp(0.5)}
            className="font-heading font-medium text-xl lg:text-2xl text-white/90 leading-snug mb-6"
          >
            Break Free from the Past and Create a Future Filled with Love and Confidence!
          </motion.h2>

          {/* Body paragraph */}
          <motion.p
            {...fadeIn(0.7)}
            className="font-body text-sm lg:text-base text-white/80 leading-relaxed mb-10 max-w-[600px]"
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
            <Button
              text="BOOK FREE DISCOVERY CALL"
              href={CALENDLY_URL}
              variant="primary"
            />
          </motion.div>

          {/* Trust Stats */}
          <motion.div
            {...fadeUp(1.1)}
            className="mt-12 flex items-center gap-0"
          >
            {/* Stat 1 */}
            <div className="flex flex-col">
              <span className="font-heading font-bold text-4xl text-accent leading-none">
                1,000+
              </span>
              <span className="font-body text-sm text-white/70 mt-1">Happy Clients</span>
            </div>

            {/* Divider */}
            <div className="w-px h-14 bg-white/20 mx-8" />

            {/* Stat 2 */}
            <div className="flex flex-col">
              <span className="font-heading font-bold text-4xl text-accent leading-none">
                3+
              </span>
              <span className="font-body text-sm text-white/70 mt-1">Years of Experience</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
