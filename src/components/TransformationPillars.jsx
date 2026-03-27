import { motion } from "framer-motion";
import { Unlink, Sun, ShieldCheck, Compass } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import transformationPillars from "../data/transformationPillars";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { CALENDLY_URL } from "../constants/links";

const iconMap = { Unlink, Sun, ShieldCheck, Compass };

const TransformationPillars = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <p className="font-body text-base text-charcoal/70 max-w-[600px] mb-4">
            It's time to level up your day to day happiness, energy, mood and overall performance.
          </p>
          <SectionHeading>Transform Heartbreak Into Happiness</SectionHeading>
        </div>

        {/* Cards Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {transformationPillars.map((pillar, i) => {
            const Icon = iconMap[pillar.iconName];
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
                className="group"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.13)] h-full flex flex-col">

                  {/* Image */}
                  <div className="relative w-full h-52 overflow-hidden">
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Subtle gradient overlay at bottom of image for smooth transition */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />

                    {/* Icon badge — floats at the bottom edge of the image */}
                    <div className="absolute -bottom-5 left-6 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border border-amber-100">
                      {Icon && <Icon size={22} color="#C19A3E" strokeWidth={1.8} aria-hidden="true" />}
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="pt-9 px-6 pb-7 flex flex-col flex-1">
                    <h3 className="font-heading text-lg font-bold text-charcoal leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-sm text-charcoal/65 leading-relaxed mt-3 flex-1">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
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

export default TransformationPillars;
