import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-[3px] bg-forest/5">
      <motion.div
        style={{ scaleX }}
        className="h-full w-full origin-left bg-gradient-to-r from-forest via-emerald-600 to-emerald-400"
      />
    </div>
  );
}
