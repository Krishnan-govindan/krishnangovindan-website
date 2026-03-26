import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { CALENDLY_URL } from "../constants/links";

const FinalCTA = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, rgba(193,154,62,0.08) 0%, transparent 65%), linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center"
      >
        <SectionLabel text="FEELING A BIT LOST OR HESITANT?" />

        <SectionHeading className="text-white max-w-[700px]">
          Ask Us Anything You Want on a 1-on-1 Call
        </SectionHeading>

        <p className="font-body text-lg text-white/80 max-w-[550px] leading-relaxed mt-4">
          Not sure where to start? We're here to help! Book a 1-on-1 call with us and get all
          your questions answered with personalized guidance.
        </p>

        <div className="mt-8">
          <Button
            text="BOOK FREE DISCOVERY CALL"
            href={CALENDLY_URL}
            variant="primary"
            className="!py-[18px] !px-10 !text-base"
            style={{ boxShadow: "0 0 30px rgba(193,154,62,0.3)" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
