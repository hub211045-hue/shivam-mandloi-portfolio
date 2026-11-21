import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profileData } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';
import { easeSmooth, repeatViewport } from '../lib/motion';

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 60%'],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.15, 1]);

  return (
    <section id="education" className="border-t border-[#E5DDD0] bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="04 / Academic Journey" title="Education" />

        <div ref={containerRef} className="relative space-y-8 pl-8 sm:pl-10">
          <div className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-[#DFD6C7]" />
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-2 left-[7px] top-2 w-0.5 origin-top bg-emerald-600"
          />

          <motion.div
            initial={{ opacity: 0.35, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={repeatViewport}
            transition={{ duration: 0.56, ease: easeSmooth }}
            className="relative"
          >
            <span className="absolute -left-[33px] top-7 flex h-4 w-4 items-center justify-center rounded-full border-2 border-emerald-600 bg-cream sm:-left-[41px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            </span>
            <div className="editorial-card rounded-3xl p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-xs font-medium text-emerald-800">
                    {profileData.duration}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-forest">{profileData.degree}</h3>
                  <p className="mt-1.5 text-sm font-semibold tracking-wide text-forestSoft">{profileData.college}</p>
                </div>
                <span className="inline-flex items-center rounded-xl border border-[#DFD6C7] bg-cream px-3.5 py-1.5 text-xs font-semibold text-forest">
                  {profileData.year} &bull; Section {profileData.section}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
