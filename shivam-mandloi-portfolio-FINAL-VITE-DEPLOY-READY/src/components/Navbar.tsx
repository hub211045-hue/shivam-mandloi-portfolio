import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { profileData } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'hackathon', label: 'Hackathon' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 px-4 pt-3 sm:px-6">
      <nav
        aria-label="Primary Navigation"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-[#E5DDD0]/90 px-4 py-2.5 backdrop-blur-md transition-all duration-300 sm:px-6 ${
          scrolled ? 'bg-[#FFFDF9]/95 shadow-md' : 'bg-[#FFFDF9]/85 shadow-sm'
        }`}
      >
        <a href="#home" className="group flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest font-display text-sm font-bold text-cream shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-forestSoft">
            {profileData.initials}
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-forest sm:text-lg">
            {profileData.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative rounded-xl px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'bg-[#E6F4EE] text-forest' : 'text-moss hover:text-forest'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-emerald-600"
                  />
                )}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#DFD6C7] bg-ivory text-forest transition-colors hover:border-emerald-600/40 hover:bg-emerald-50 lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-[#E5DDD0] bg-[#FFFDF9]/95 p-3 shadow-lg backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[44px] items-center rounded-xl px-4 text-sm font-medium text-forest hover:bg-emerald-50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
