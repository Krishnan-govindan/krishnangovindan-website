import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../constants/links";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[9999] flex items-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.2 }}
            className="mr-3 font-body text-xs text-white font-medium px-3 py-1.5 rounded-full whitespace-nowrap"
            style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          >
            Chat with us!
          </motion.span>
        )}
      </AnimatePresence>

      {/* Pulse ring */}
      <span className="relative flex">
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{
            backgroundColor: "rgba(37,211,102,0.35)",
            animationDuration: "2s",
          }}
        />

        {/* Button */}
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full"
          style={{
            backgroundColor: "#25D366",
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 6px 24px rgba(0,0,0,0.3)",
          }}
          transition={{ duration: 0.3 }}
        >
          <MessageCircle size={28} color="white" strokeWidth={2} />
        </motion.a>
      </span>
    </motion.div>
  );
};

export default WhatsAppButton;
