import { Download, Eye } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

interface ResumeProps {
  onResumeAction: (mode: 'view' | 'download') => void;
}

export function Resume({ onResumeAction }: ResumeProps) {
  return (
    <section id="resume" className="border-t border-[#E5DDD0] bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="08 / Curriculum Vitae" title="Resume" />

        <div className="editorial-card flex flex-col items-start justify-between gap-6 rounded-3xl p-7 sm:flex-row sm:items-center sm:p-8">
          <div className="max-w-xl">
            <h3 className="font-display text-xl font-bold text-forest">Download or View Resume</h3>
            <p className="mt-2 text-sm leading-relaxed text-moss">
              Configured for <code className="rounded bg-sand px-1.5 py-0.5 font-mono text-xs text-forest">/public/resume.pdf</code>. Place Shivam's original PDF there and toggle <code className="font-mono text-xs text-forest">resume.isUploaded</code> in <code className="font-mono text-xs text-forest">src/data/profile.ts</code>.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onResumeAction('view')}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-forestSoft"
            >
              <Eye className="h-4 w-4" />
              <span>View Resume</span>
            </button>
            <button
              type="button"
              onClick={() => onResumeAction('download')}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#DFD6C7] bg-ivory px-5 py-2.5 text-sm font-semibold text-forest transition-colors hover:border-emerald-600/50 hover:bg-emerald-50"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
