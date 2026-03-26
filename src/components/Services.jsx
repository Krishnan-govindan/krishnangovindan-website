import { motion } from "framer-motion";
import { HeartHandshake, Brain, Telescope } from "lucide-react";
import Card from "./ui/Card";
import SectionLabel from "./ui/SectionLabel";
import SectionHeading from "./ui/SectionHeading";
import services from "../data/services";
import useScrollAnimation from "../hooks/useScrollAnimation";

const iconMap = { HeartHandshake, Brain, Telescope };

const Services = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section
      id="services"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #FDF8EF 0%, #FAF3E0 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel text="YOUR #1 COACH TO HEAL AFTER HEARTBREAK" />
          <SectionHeading>Community, Courses, and Coaching All in One</SectionHeading>
        </div>

        {/* Cards Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.iconName];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
                className="flex"
              >
                <Card className="h-full flex flex-col items-center text-center w-full">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center">
                    {Icon && <Icon size={36} color="#C19A3E" strokeWidth={1.5} />}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-charcoal mt-6">
                    {service.title}
                  </h3>

                  {/* Body */}
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed mt-3">
                    {service.body}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
