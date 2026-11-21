import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import { SectionHeader } from '../components/SectionHeader';
import { easeSmooth, repeatViewport } from '../lib/motion';

export function Skills() {
  return (
    <section id="skills" className="border-t border-[#E5DDD0] bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="02 / Capabilities"
          title="Skills & Toolkit"
          subtitle="Languages, web frameworks, developer tools, and core computer science foundations used across projects and coursework."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillsData.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0.4, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={repeatViewport}
              transition={{ duration: 0.48, delay: (groupIdx % 2) * 0.06, ease: easeSmooth }}
              className="editorial-card flex min-h-[172px] flex-col justify-between rounded-3xl p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-forest">{group.category}</h3>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-forest">
                    {group.items.length}
                  </span>
                </div>

                {/* Visible-by-default high-contrast badges with repeatable subtle entrance */}
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0.55, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={repeatViewport}
                      transition={{ duration: 0.3, delay: idx * 0.03, ease: easeSmooth }}
                      className="inline-flex items-center rounded-full border border-emerald-700/25 bg-[#ECFDF5] px-3.5 py-1.5 text-xs font-semibold text-forest transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-600 hover:bg-[#D1FAE5]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
