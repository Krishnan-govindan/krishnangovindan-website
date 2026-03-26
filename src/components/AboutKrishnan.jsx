import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import SectionHeading from "./ui/SectionHeading";
import useScrollAnimation from "../hooks/useScrollAnimation";

const credentials = [
  "1,000+ Clients Worldwide",
  "3+ Years Coaching",
  "India's First Divorce Coach",
  "Holistic Approach",
];

const paragraphs = [
  "I know what it feels like to have your world turned upside down. I've been through the darkness of heartbreak, the crushing weight of self-doubt, and the overwhelming fear that happiness might never return. But I also know what it feels like to come out the other side — stronger, clearer, and more alive than ever.",
  "That journey is exactly why I became India's First Divorce Coach. I realized that millions of people were suffering in silence, trying to 'just move on' without the right tools or support. Traditional therapy wasn't giving them the actionable, future-focused transformation they needed.",
  "Today, through my holistic life transformation approach, I've helped over 1,000 clients across the globe heal from heartbreak, rebuild their confidence, and create lives they're genuinely excited about. My coaching goes beyond just 'getting over it' — it's about fundamentally transforming who you are and how you show up in every area of your life.",
  "Whether you're dealing with divorce, a painful breakup, or simply feeling stuck, I'm here to walk beside you every step of the way.",
];

const AboutKrishnan = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="about" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:items-center">

          {/* LEFT — Photo area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative offset border */}
              <div
                aria-hidden="true"
                className="absolute top-4 left-4 w-full h-full rounded-2xl"
                style={{ border: "1.5px solid rgba(193,154,62,0.35)" }}
              />

              {/* Photo placeholder */}
              <div
                role="img"
                aria-label="Photo placeholder for Krishnan Govindan"
                className="relative rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  width: "320px",
                  aspectRatio: "3 / 4",
                  background: "linear-gradient(160deg, #16213E 0%, #1A1A2E 100%)",
                  border: "1px solid rgba(193,154,62,0.2)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
                }}
              >
                <span
                  aria-hidden="true"
                  className="font-heading font-bold select-none"
                  style={{ fontSize: "96px", color: "#C19A3E", opacity: 0.6 }}
                >
                  KG
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <SectionLabel text="ABOUT YOUR COACH" />
            <SectionHeading>Meet Krishnan Govindan</SectionHeading>

            {/* Sub-heading */}
            <p className="font-body text-base font-medium text-accent mb-6">
              India's First Divorce Coach | Life &amp; Business Strategist | Holistic Life Transformation Expert
            </p>

            {/* Body paragraphs */}
            <div className="flex flex-col gap-4">
              {paragraphs.map((para, i) => (
                <p key={i} className="font-body text-base text-charcoal/80 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Credential badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {credentials.map((badge, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 + i * 0.1 }}
                  className="font-body text-xs font-semibold px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: "#fef9ec",
                    color: "#C19A3E",
                    border: "1px solid rgba(193,154,62,0.3)",
                  }}
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutKrishnan;
