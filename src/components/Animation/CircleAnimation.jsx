import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function CircleAnimation({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // анімація лише один раз
    threshold: 0.3, // коли 30% видно
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
