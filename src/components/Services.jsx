import { motion } from "framer-motion";
import { HeartHandshake, Brain, Telescope } from "lucide-react";
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
        <div className="flex flex-col items-center text-center mb-14">
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
                className="group"
              >
                {/* Card with full background image */}
                <div
                  className="relative rounded-2xl overflow-hidden h-full min-h-[420px] flex flex-col justify-end transition-all duration-300 hover:-translate-y-2"
                  style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
                >
                  {/* Background image */}
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient overlay — dark at bottom for readability, subtle at top */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(26,26,46,0.2) 0%, rgba(26,26,46,0.55) 45%, rgba(22,33,62,0.95) 100%)",
                    }}
                  />

                  {/* Content over overlay */}
                  <div className="relative z-10 p-7 flex flex-col">
                    {/* Icon badge */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                      style={{
                        backgroundColor: "rgba(193,154,62,0.18)",
                        border: "1.5px solid rgba(193,154,62,0.6)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {Icon && (
                        <Icon size={28} color="#E8B84B" strokeWidth={1.8} aria-hidden="true" />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl font-bold text-white leading-snug mb-3">
                      {service.title}
                    </h3>

                    {/* Body */}
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.82)" }}
                    >
                      {service.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
