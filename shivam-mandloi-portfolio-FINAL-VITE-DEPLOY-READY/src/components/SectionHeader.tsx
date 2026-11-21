import { motion } from 'framer-motion';
import { easeSmooth, repeatViewport } from '../lib/motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0.3, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={repeatViewport}
      transition={{ duration: 0.5, ease: easeSmooth }}
      className="mb-12"
    >
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-emerald-700">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-forest sm:text-4xl">{title}</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={repeatViewport}
        transition={{ duration: 0.55, ease: easeSmooth }}
        className="mt-3 h-[3px] w-16 origin-left rounded-full bg-emerald-600"
      />
      {subtitle && <p className="mt-3 max-w-2xl text-sm text-moss">{subtitle}</p>}
    </motion.div>
  );
}
