import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';
import { easeSmooth, repeatViewport } from '../lib/motion';

export function About() {
  const rows = [
    ['Name', profileData.name],
    ['Degree', profileData.shortDegree],
    ['Year & Section', `${profileData.year} · Section ${profileData.section}`],
    ['Duration', profileData.duration],
    ['Career Goal', profileData.careerGoal],
    ['Interests', 'Cricket · Volleyball'],
  ];

  return (
    <section id="about" className="border-t border-[#E5DDD0] bg-sand/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="01 / Profile" title="About Shivam Mandloi" />

        <div className="grid gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0.3, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={repeatViewport}
            transition={{ duration: 0.55, ease: easeSmooth }}
            className="space-y-4 text-base leading-relaxed text-moss lg:col-span-7"
          >
            <p>
              I am <strong className="font-semibold text-forest">{profileData.name}</strong>, a third-year B.Tech Computer Science Engineering student (Section {profileData.section}) at <strong className="font-semibold text-forest">{profileData.college}</strong> ({profileData.duration}).
            </p>
            <p>
              My career goal is to become a <strong className="font-semibold text-forest">{profileData.careerGoal}</strong>. I enjoy combining clean engineering with thoughtful interfaces—building projects like <strong className="font-semibold text-forest">Kapda Bazaar</strong> and <strong className="font-semibold text-forest">BIS360</strong> while strengthening core computer science fundamentals.
            </p>
            <p>
              Outside academics and software development, I enjoy playing <strong className="font-semibold text-forest">Cricket</strong> and <strong className="font-semibold text-forest">Volleyball</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.3, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={repeatViewport}
            transition={{ duration: 0.55, ease: easeSmooth }}
            className="lg:col-span-5"
          >
            <div className="editorial-card rounded-3xl p-6">
              <div className="mb-4 flex items-center justify-between border-b border-[#ECE5D9] pb-3">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-emerald-700">Profile Snapshot</span>
                <span className="font-mono text-xs text-moss">profile.ts</span>
              </div>
              <dl className="divide-y divide-[#EFE9DF] text-sm">
                {rows.map(([label, val]) => (
                  <div key={label} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
                    <dt className="text-moss">{label}</dt>
                    <dd className={label === 'Career Goal' ? 'font-semibold text-emerald-800' : 'font-medium text-forest'}>
                      {val}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
