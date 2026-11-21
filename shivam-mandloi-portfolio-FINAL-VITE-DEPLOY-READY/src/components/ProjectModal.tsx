import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { ProjectItem } from '../data/projects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest/45 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-[#E5DDD0] bg-ivory shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-[#ECE5D9] bg-cream px-6 py-4">
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-wider text-emerald-700">{project.category}</p>
                <h3 id="project-modal-title" className="mt-0.5 font-display text-2xl font-bold text-forest">
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#DFD6C7] bg-ivory text-forest transition-colors hover:border-emerald-600/40 hover:bg-emerald-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-5 overflow-y-auto px-6 py-6 text-sm text-moss">
              <div className="overflow-hidden rounded-2xl border border-[#E5DDD0]">
                <img src={project.image} alt={project.imageAlt} className="aspect-[16/9] w-full object-cover" />
              </div>

              <div>
                <h4 className="font-display text-base font-bold text-forest">Overview</h4>
                <p className="mt-1.5 leading-relaxed">{project.details.overview}</p>
              </div>

              <div>
                <h4 className="font-display text-base font-bold text-forest">Key Highlights</h4>
                <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 rounded-xl border border-[#ECE5D9] bg-cream px-3.5 py-2.5 text-xs text-forest"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-display text-base font-bold text-forest">Architecture &amp; Technology</h4>
                <p className="mt-1.5 leading-relaxed">{project.details.architecture}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
