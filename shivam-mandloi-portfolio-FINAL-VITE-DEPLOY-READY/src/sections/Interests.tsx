import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';
import { easeSmooth, repeatViewport } from '../lib/motion';

export function Interests() {
  return (
    <section id="interests" className="border-t border-[#E5DDD0] bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="06 / Beyond Code" title="Interests" />

        <div className="grid gap-6 md:grid-cols-2">
          {profileData.interests.map((interest, idx) => (
            <motion.article
              key={interest.name}
              initial={{ opacity: 0.35, x: idx === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={repeatViewport}
              transition={{ duration: 0.56, ease: easeSmooth }}
              className="editorial-card group relative overflow-hidden rounded-3xl p-7"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/[0.08] transition-transform duration-500 group-hover:scale-150" />
              <div className="relative flex items-center gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-3xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {interest.emoji}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-forest">{interest.name}</h3>
                  <p className="font-mono text-xs text-emerald-700">{interest.tagline}</p>
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-moss">{interest.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
