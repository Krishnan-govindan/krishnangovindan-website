import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import painPoints from "../data/painPoints";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { CALENDLY_URL } from "../constants/links";

const PainPoints = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section style={{ backgroundColor: "#1A1A2E" }} className="py-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel text="MAYBE THIS SOUNDS FAMILIAR" />
          <SectionHeading className="text-white">TO YOU AS WELL?</SectionHeading>
        </div>

        {/* Pain Points List */}
        <div ref={ref} className="flex flex-col gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
              className="flex items-start gap-5"
            >
              {/* Numbered indicator */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                style={{ border: "1px solid #C19A3E", color: "#C19A3E" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Pain point text */}
              <p className="font-body text-base lg:text-lg text-white/85 leading-relaxed pt-1.5">
                {point}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: painPoints.length * 0.2 }}
          className="font-heading text-xl font-semibold text-accent text-center mt-12"
        >
          If this sounds like you, don't worry — we can help!
        </motion.p>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <Button
            text="BOOK FREE DISCOVERY CALL"
            href={CALENDLY_URL}
            variant="primary"
          />
        </div>

      </div>
    </section>
  );
};

export default PainPoints;
