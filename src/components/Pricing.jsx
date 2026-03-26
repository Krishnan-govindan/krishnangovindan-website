import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Card from "./ui/Card";
import SectionLabel from "./ui/SectionLabel";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import pricingTiers from "../data/pricingTiers";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { CALENDLY_URL } from "../constants/links";

const Pricing = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="pricing" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <SectionLabel text="SIMPLE PRICING" />
          <SectionHeading>Choose Your Success Path</SectionHeading>
        </div>

        {/* Cards Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30, scale: tier.popular ? 0.95 : 1 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: tier.popular ? 0.75 : 0.6,
                ease: "easeOut",
                delay: i * 0.15,
              }}
              className="flex flex-col"
            >
              {/* Popular badge — sits above card */}
              {tier.popular && (
                <div className="flex justify-center mb-[-14px] relative z-10">
                  <span
                    className="font-body text-xs font-bold uppercase tracking-wide text-white px-5 py-1.5 rounded-full"
                    style={{ backgroundColor: "#C19A3E" }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <Card
                hoverEffect={!tier.popular}
                className={`flex flex-col h-full ${
                  tier.popular
                    ? "pt-10"
                    : ""
                }`}
                style={
                  tier.popular
                    ? {
                        border: "2px solid #C19A3E",
                        boxShadow: "0 8px 40px rgba(193,154,62,0.2)",
                      }
                    : {}
                }
              >
                {/* Plan name */}
                <h3 className="font-heading text-xl font-bold text-charcoal text-center">
                  {tier.name}
                </h3>

                {/* Gold divider */}
                <div
                  className="mx-auto mt-5 mb-6"
                  style={{ width: "40px", height: "2px", backgroundColor: "#C19A3E" }}
                />

                {/* Features list */}
                <ul className="flex flex-col gap-3 flex-1">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check
                        size={16}
                        color="#C19A3E"
                        strokeWidth={2.5}
                        className="flex-shrink-0 mt-0.5"
                      />
                      <span className="font-body text-sm text-charcoal/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <div className="mt-8">
                  <Button
                    text="BOOK NOW"
                    href={CALENDLY_URL}
                    variant="primary"
                    className="w-full text-center justify-center block"
                  />
                </div>

                {/* Fine print */}
                <p className="font-body text-xs text-charcoal/50 text-center mt-3">
                  No contracts — cancel anytime
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
