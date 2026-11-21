import { useState, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../data/profile';
import { easeSmooth } from '../lib/motion';

interface HeroProps {
  onResumeClick: () => void;
}

export function Hero({ onResumeClick }: HeroProps) {
  const [rot, setRot] = useState({ rx: 0, ry: 0 });
  const chars = Array.from(profileData.name);

  const handleStageMove = (e: MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setRot({ rx: -ny * 14, ry: nx * 14 });
  };

  return (
    <section id="home" className="relative mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-32 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: easeSmooth }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-700/20 bg-emerald-50/90 px-4 py-1.5 text-xs font-semibold text-forest"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            <span>
              {profileData.year} {profileData.shortDegree} &middot; Section {profileData.section} &middot; {profileData.duration}
            </span>
          </motion.div>

          <h1 aria-label={profileData.name} className="font-display text-5xl font-bold tracking-tight text-forest sm:text-6xl lg:text-[4.25rem] lg:leading-[1.06]">
            {chars.map((ch, idx) =>
              ch === ' ' ? (
                <span key={idx} className="inline-block w-3 sm:w-4">&nbsp;</span>
              ) : (
                <span key={idx} className="inline-block overflow-hidden align-bottom leading-[1.08]">
                  <motion.span
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.58, delay: 0.08 + idx * 0.025, ease: easeSmooth }}
                    className="inline-block"
                  >
                    {ch}
                  </motion.span>
                </span>
              )
            )}
          </h1>

          <div className="mt-4 overflow-hidden">
            <motion.p
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 0.52, delay: 0.36, ease: easeSmooth }}
              className="inline-block text-xl font-semibold text-emerald-800 sm:text-2xl"
            >
              {profileData.headline}
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.46, ease: easeSmooth }}
              className="mt-2 h-[3px] w-28 origin-left rounded-full bg-gradient-to-r from-forest to-emerald-500"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.52, ease: easeSmooth }}
            className="mt-6 max-w-xl text-base leading-relaxed text-moss sm:text-lg"
          >
            Third-year Computer Science Engineering student at <strong className="font-semibold text-forest">{profileData.college}</strong>. Building practical web platforms and AI-assisted tools—including <strong className="font-semibold text-forest">Kapda Bazaar</strong> and <strong className="font-semibold text-forest">BIS360</strong>—while working toward becoming a Software Engineer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.62, ease: easeSmooth }}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#projects"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-forest px-6 py-3 text-sm font-semibold text-cream shadow-md shadow-forest/15 transition-all hover:-translate-y-0.5 hover:bg-forestSoft"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-forest/25 bg-ivory px-6 py-3 text-sm font-semibold text-forest transition-all hover:-translate-y-0.5 hover:border-emerald-600 hover:bg-emerald-50/70"
            >
              Get In Touch
            </a>

            <button
              type="button"
              onClick={onResumeClick}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#DFD6C7] bg-sand/70 px-5 py-3 text-sm font-medium text-forest transition-all hover:-translate-y-0.5 hover:border-emerald-600/40 hover:bg-ivory"
            >
              <Download className="h-4 w-4 text-emerald-700" />
              <span>Resume</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.44, delay: 0.72, ease: easeSmooth }}
            className="mt-8 flex flex-wrap items-center gap-3 border-t border-[#E5DDD0] pt-6"
          >
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#E5DDD0] bg-ivory px-4 py-2 text-sm font-medium text-forest transition-all hover:-translate-y-0.5 hover:border-emerald-600/40 hover:shadow-sm"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#E5DDD0] bg-ivory px-4 py-2 text-sm font-medium text-forest transition-all hover:-translate-y-0.5 hover:border-emerald-600/40 hover:shadow-sm"
            >
              <Linkedin className="h-4 w-4 text-emerald-700" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#E5DDD0] bg-ivory px-4 py-2 text-sm font-medium text-forest transition-all hover:-translate-y-0.5 hover:border-emerald-600/40 hover:shadow-sm"
            >
              <Mail className="h-4 w-4 text-emerald-700" />
              <span>Email</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeSmooth }}
          onMouseMove={handleStageMove}
          onMouseLeave={() => setRot({ rx: 0, ry: 0 })}
          style={{ perspective: 1100 }}
          className="lg:col-span-5"
        >
          <div
            style={{
              transform: `rotateX(${rot.rx}deg) rotateY(${rot.ry}deg)`,
              transition: 'transform 0.25s ease-out',
            }}
            className="relative mx-auto flex min-h-[380px] max-w-md items-center justify-center rounded-[2rem] border border-[#E5DDD0] bg-gradient-to-br from-ivory via-cream to-emerald-50/60 p-6 shadow-xl shadow-forest/10 sm:min-h-[420px]"
          >
            <div aria-hidden="true" className="orbit-ring pointer-events-none absolute h-72 w-72 rounded-full border border-dashed border-emerald-700/25">
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-600" />
              <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-forest" />
            </div>

            <div aria-hidden="true" className="orbit-ring-rev pointer-events-none absolute h-52 w-52 rounded-full border border-forest/15">
              <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-emerald-600 bg-cream" />
            </div>

            <div className="absolute left-5 top-5 rounded-2xl border border-[#E5DDD0] bg-ivory/95 px-3.5 py-2.5 shadow-md backdrop-blur-md">
              <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-700">Project 01</p>
              <p className="font-display text-sm font-bold text-forest">Kapda Bazaar</p>
            </div>

            <div className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-3xl border border-emerald-400/25 bg-forest text-cream shadow-2xl shadow-forest/30">
              <span className="font-display text-4xl font-bold tracking-tight">{profileData.initials}</span>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300">B.Tech CSE</span>
            </div>

            <div className="absolute bottom-5 right-5 rounded-2xl border border-[#E5DDD0] bg-ivory/95 px-3.5 py-2.5 shadow-md backdrop-blur-md">
              <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-700">Project 02</p>
              <p className="font-display text-sm font-bold text-forest">BIS360</p>
            </div>

            <div className="absolute bottom-6 left-5 rounded-xl border border-emerald-700/20 bg-emerald-50/95 px-3 py-1.5 text-xs font-medium text-forest shadow-sm">
              🏏 Cricket &middot; 🏐 Volleyball
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
