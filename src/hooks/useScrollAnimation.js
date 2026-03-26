import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "framer-motion";

const useScrollAnimation = () => {
  const prefersReducedMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  // If user prefers reduced motion, skip animations by reporting everything as visible
  return { ref, inView: prefersReducedMotion ? true : inView };
};

export default useScrollAnimation;
