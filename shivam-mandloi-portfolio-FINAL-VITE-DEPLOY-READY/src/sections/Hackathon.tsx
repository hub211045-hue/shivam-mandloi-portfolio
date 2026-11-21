import { motion } from 'framer-motion';
import { hackathonData } from '../data/hackathon';
import { SectionHeader } from '../components/SectionHeader';
import { easeSmooth, repeatViewport } from '../lib/motion';

export function Hackathon() {
  return (
    <section id="hackathon" className="border-t border-[#E5DDD0] bg-sand/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="05 / Hackathons" title="Hackathon Participation" />

        <div className="relative space-y-6 pl-8 sm:pl-10">
          <div className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-[#DFD6C7]" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={repeatViewport}
            transition={{ duration: 0.7, ease: easeSmooth }}
            className="absolute bottom-2 left-[7px] top-2 w-0.5 origin-top bg-forest"
          />

          {hackathonData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0.35, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={repeatViewport}
              transition={{ duration: 0.52, ease: easeSmooth }}
              className="relative"
            >
              <span className="absolute -left-[33px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-forest bg-cream sm:-left-[41px]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              </span>
              <div className="editorial-card rounded-3xl p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-0.5 font-mono text-[11px] font-semibold text-emerald-800">
                    {item.type}
                  </span>
                  <span className="font-mono text-xs text-moss">{item.date}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-forest">{item.event}</h3>
                <p className="text-xs font-semibold text-emerald-800">{item.subtitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-moss">{item.description}</p>
                <p className="mt-2 text-xs text-moss">
                  Organizer: <span className="font-semibold text-forest">{item.organizer}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
