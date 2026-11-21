import { useState, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import type { ProjectItem } from '../data/projects';
import { easeSmooth, repeatViewport } from '../lib/motion';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onSelect: (project: ProjectItem) => void;
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, fgx: 0, fgy: 0, mx: 50, my: 50, hover: false });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      rx: (0.5 - y) * 6,
      ry: (x - 0.5) * 6,
      fgx: (x - 0.5) * -14,
      fgy: (y - 0.5) * -10,
      mx: x * 100,
      my: y * 100,
      hover: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, fgx: 0, fgy: 0, mx: 50, my: 50, hover: false });
  };

  const clipInitial =
    project.motionStyle === 'compliance' ? 'inset(0% 100% 0% 0%)' : 'inset(100% 0% 0% 0%)';

  return (
    <motion.article
      initial={{ opacity: 0.35, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={repeatViewport}
      transition={{ duration: 0.58, delay: index * 0.08, ease: easeSmooth }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(950px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(${tilt.hover ? -4 : 0}px)`,
        transition: tilt.hover ? 'transform 0.14s ease-out' : 'transform 0.4s ease-out',
      }}
      className="editorial-card group relative flex flex-col overflow-hidden rounded-3xl"
    >
      <div
        aria-hidden="true"
        style={{
          opacity: tilt.hover ? 1 : 0,
          background: `radial-gradient(circle at ${tilt.mx}% ${tilt.my}%, rgba(16,185,129,0.14), transparent 58%)`,
        }}
        className="pointer-events-none absolute inset-0 z-[3] transition-opacity duration-300"
      />

      <motion.div
        initial={{ clipPath: clipInitial }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={repeatViewport}
        transition={{ duration: 0.78, delay: 0.08, ease: easeSmooth }}
        className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#E5DDD0] bg-forest/5"
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {project.motionStyle === 'textile' ? (
          <svg
            aria-hidden="true"
            style={{ transform: `translate3d(${tilt.fgx}px, ${tilt.fgy}px, 0)` }}
            className="pointer-events-none absolute inset-0 z-[2] h-full w-full opacity-75 transition-transform duration-200"
            viewBox="0 0 640 360"
            fill="none"
            preserveAspectRatio="none"
          >
            <path d="M-20 290 C 140 210, 280 330, 440 230 S 600 180, 660 220" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.65" className="textile-dash" />
            <path d="M-10 110 C 160 170, 320 60, 480 140 S 610 100, 660 80" stroke="#0f3428" strokeWidth="1.2" strokeOpacity="0.35" className="textile-dash" />
            <circle cx="150" cy="248" r="5" fill="#059669" className="textile-node-float" />
            <circle cx="465" cy="134" r="4.5" fill="#10b981" className="textile-node-float" />
          </svg>
        ) : (
          <div
            aria-hidden="true"
            style={{ transform: `translate3d(${tilt.fgx}px, ${tilt.fgy}px, 0)` }}
            className="pointer-events-none absolute inset-0 z-[2] overflow-hidden transition-transform duration-200"
          >
            <div className="bis-scan-beam absolute inset-x-0 top-0 h-14 border-b border-emerald-300/60 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent" />
            <div className="bis-pulse absolute right-6 top-6 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
            <div className="bis-pulse absolute bottom-7 left-7 h-2 w-2 rounded-full bg-emerald-300" />
          </div>
        )}

        <span className="pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-white/80 bg-ivory/95 px-3.5 py-1 font-mono text-[11px] font-semibold text-forest shadow-sm backdrop-blur-md">
          {project.category}
        </span>
      </motion.div>

      <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-2xl font-bold text-forest">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-moss">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-emerald-700/20 bg-emerald-50 px-2.5 py-1 font-mono text-[11px] font-semibold text-forest"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-5 space-y-2 border-t border-[#EFE9DF] pt-4 text-xs text-moss">
          {project.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="group/btn inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-forest px-4 py-2 text-xs font-semibold text-cream transition-colors hover:bg-forestSoft"
          >
            <span>View Details</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl border border-emerald-700/25 bg-emerald-50/80 px-4 py-2 text-xs font-semibold text-forest transition-colors hover:border-emerald-600 hover:bg-emerald-100"
            >
              <span>Live Demo</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center rounded-xl border border-[#DFD6C7] bg-ivory px-4 py-2 text-xs font-medium text-moss transition-colors hover:border-emerald-600/50 hover:text-forest"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
