import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionLabel from "./ui/SectionLabel";
import SectionHeading from "./ui/SectionHeading";
import faqItems from "../data/faqItems";
import useScrollAnimation from "../hooks/useScrollAnimation";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, inView } = useScrollAnimation();

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-3xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel text="STILL NOT SURE?" />
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <p className="font-body text-base text-charcoal/70 max-w-[700px] leading-relaxed">
            We understand that you might have questions or concerns—it's natural! Taking the
            leap into personal growth and transformation can feel overwhelming, especially when
            you're unsure of what to expect. But here's the thing: clarity leads to action,
            and action leads to success.
          </p>
        </div>

        {/* Accordion */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {faqItems.map((item, i) => (
            <div
              key={i}
              className={`${i === 0 ? "border-t" : ""} border-b`}
              style={{ borderColor: "#E5E5E5" }}
            >
              {/* Question row */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 py-6 px-3 text-left cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-sm"
              >
                <span className="font-body text-lg font-semibold text-charcoal flex-1">
                  {item.question}
                </span>
                <span className="flex-shrink-0" style={{ color: "#C19A3E" }}>
                  {openIndex === i ? (
                    <Minus size={20} strokeWidth={2} />
                  ) : (
                    <Plus size={20} strokeWidth={2} />
                  )}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="font-body text-base text-charcoal/75 leading-relaxed pt-4 pb-6 px-3 pr-10">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
