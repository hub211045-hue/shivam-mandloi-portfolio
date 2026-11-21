import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { easeSmooth, repeatViewport } from '../lib/motion';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0.4, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={repeatViewport}
      transition={{ duration: 0.45, ease: easeSmooth }}
      className="border-t border-[#E5DDD0] bg-ivory"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-lg font-bold text-forest">{profileData.name}</p>
          <p className="mt-1 text-sm text-moss">{profileData.headline}</p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-moss">
          <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-emerald-700">
            GitHub
          </a>
          <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-emerald-700">
            LinkedIn
          </a>
          <a href={`mailto:${profileData.email}`} className="transition-colors hover:text-emerald-700">
            Email
          </a>
        </div>
      </div>
      <div className="border-t border-[#EFE9DF] px-4 py-4 text-center text-xs text-moss">
        &copy; {profileData.copyrightYear} {profileData.name}
      </div>
    </motion.footer>
  );
}
