import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';
import { easeSmooth, repeatViewport } from '../lib/motion';

const STEPS = [
  { step: '01', title: 'Learn', desc: 'Deepen computer science fundamentals, algorithms, and backend architecture.' },
  { step: '02', title: 'Build', desc: 'Deliver practical web platforms and AI-assisted systems.' },
  { step: '03', title: 'Refine', desc: 'Improve reliability, responsiveness, and code quality.' },
  { step: 'Goal', title: 'Software Engineer', desc: 'Contribute to scalable, user-focused production software.', highlight: true },
];

export function CareerGoal() {
  return (
    <section id="career-goal" className="border-t border-[#E5DDD0] bg-sand/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="07 / Direction" title="Career Goal" />

        <motion.div
          initial={{ opacity: 0.35, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={repeatViewport}
          transition={{ duration: 0.54, ease: easeSmooth }}
          className="editorial-card rounded-3xl p-7 sm:p-9"
        >
          <p className="max-w-3xl font-display text-xl font-semibold leading-relaxed text-forest sm:text-2xl">
            &ldquo;{profileData.careerGoalStatement}&rdquo;
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div
                key={s.title}
                className={`rounded-2xl border p-4 ${
                  s.highlight ? 'border-emerald-600/35 bg-emerald-50/80' : 'border-[#E5DDD0] bg-cream'
                }`}
              >
                <span className="font-mono text-xs font-semibold text-emerald-700">{s.step}</span>
                <h3 className="mt-2 font-display text-base font-bold text-forest">{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-moss">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
