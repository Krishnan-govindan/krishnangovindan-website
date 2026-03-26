import { motion } from "framer-motion";
import { Unlink, Sun, ShieldCheck, Compass } from "lucide-react";
import Card from "./ui/Card";
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
        <div className="flex flex-col items-center text-center mb-12">
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
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              >
                <Card className="h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center">
                    {Icon && <Icon size={40} color="#C19A3E" strokeWidth={1.5} />}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-charcoal mt-5">
                    {pillar.title}
                  </h3>

                  {/* Body */}
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed mt-3">
                    {pillar.body}
                  </p>
                </Card>
              </motion.div>
            );
          })}
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

export default TransformationPillars;
