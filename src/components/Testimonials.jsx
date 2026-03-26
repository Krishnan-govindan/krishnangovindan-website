import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionLabel from "./ui/SectionLabel";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import testimonials from "../data/testimonials";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { CALENDLY_URL } from "../constants/links";

const Testimonials = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="testimonials" style={{ backgroundColor: "#1A1A2E" }} className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel text="1,000+ WORLDWIDE HAPPY CLIENTS" />
          <SectionHeading className="text-white">
            Why Others Recommend Krishnan?
          </SectionHeading>
        </div>

        {/* Cards Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
              className="rounded-2xl p-8 flex flex-col"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {/* Decorative quote mark */}
              <Quote
                aria-hidden="true"
                size={32}
                color="#C19A3E"
                style={{ opacity: 0.4 }}
                strokeWidth={2}
              />

              {/* Star rating */}
              <div
                className="flex items-center gap-1 mt-4"
                role="img"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    aria-hidden="true"
                    size={16}
                    color="#C19A3E"
                    fill="#C19A3E"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-body text-base text-white/85 leading-relaxed mt-4 italic flex-1">
                "{t.quote}"
              </p>

              {/* Divider */}
              <div
                aria-hidden="true"
                className="mt-6"
                style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.1)" }}
              />

              {/* Subtitle */}
              <p className="font-body text-sm font-semibold text-accent mt-4">
                {t.subtitle}
              </p>

              {/* Name */}
              <p className="font-body text-sm text-white/70 mt-1">
                — {t.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
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

export default Testimonials;
