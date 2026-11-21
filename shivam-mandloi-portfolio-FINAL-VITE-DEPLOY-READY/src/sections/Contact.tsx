import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Copy, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';
import { easeSmooth, repeatViewport } from '../lib/motion';

interface ContactProps {
  onNotify: (msg: string) => void;
}

export function Contact({ onNotify }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(profileData.email).catch(() => {});
    }
    setCopied(true);
    onNotify(`Email copied: ${profileData.email}`);
    window.setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      onNotify('Please fill in your name, email, and message.');
      return;
    }
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name.trim()}`);
    const body = encodeURIComponent(`Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}`);
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    onNotify('Opening your email client pre-addressed to Shivam Mandloi.');
  };

  return (
    <section id="contact" className="border-t border-[#E5DDD0] bg-sand/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="09 / Connect"
          title="Get In Touch"
          subtitle="Reach out directly to Shivam Mandloi via email, GitHub, LinkedIn, or the pre-filled email form below."
        />

        <div className="grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0.35, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={repeatViewport}
            transition={{ duration: 0.52, ease: easeSmooth }}
            className="space-y-4 lg:col-span-5"
          >
            {/* Card 1: Email */}
            <div className="editorial-card rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-emerald-700">Email</p>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="mt-1 block break-all text-sm font-semibold text-forest hover:text-emerald-700 hover:underline"
                  >
                    {profileData.email}
                  </a>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <a
                      href={`mailto:${profileData.email}`}
                      className="inline-flex min-h-[34px] items-center rounded-lg bg-forest px-3 py-1 text-xs font-semibold text-cream hover:bg-forestSoft"
                    >
                      Email Me
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex min-h-[34px] items-center gap-1.5 rounded-lg border border-[#DFD6C7] bg-cream px-3 py-1 text-xs font-medium text-forest hover:border-emerald-600/50 hover:bg-emerald-50"
                    >
                      {copied ? <Check className="h-3.5 w-3.5 text-emerald-700" /> : <Copy className="h-3.5 w-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: GitHub */}
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-card group flex items-center justify-between gap-4 rounded-2xl p-5"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-forest/15 bg-sand text-forest">
                  <Github className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-emerald-700">GitHub Profile</p>
                  <p className="mt-0.5 truncate text-sm font-semibold text-forest">{profileData.githubLabel}</p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-moss group-hover:text-emerald-700" />
            </a>

            {/* Card 3: LinkedIn */}
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-card group flex items-center justify-between gap-4 rounded-2xl p-5"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-emerald-700">LinkedIn Profile</p>
                  <p className="mt-0.5 truncate text-sm font-semibold text-forest">{profileData.linkedinLabel}</p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-moss group-hover:text-emerald-700" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.35, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={repeatViewport}
            transition={{ duration: 0.52, ease: easeSmooth }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="editorial-card space-y-5 rounded-3xl p-6 sm:p-8" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-forest">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="mt-2 block w-full rounded-xl border border-[#DFD6C7] bg-cream px-4 py-3 text-sm text-ink placeholder-moss/60 focus:border-emerald-600 focus:bg-ivory focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-forest">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 block w-full rounded-xl border border-[#DFD6C7] bg-cream px-4 py-3 text-sm text-ink placeholder-moss/60 focus:border-emerald-600 focus:bg-ivory focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-forest">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your project or opportunity..."
                  className="mt-2 block w-full rounded-xl border border-[#DFD6C7] bg-cream px-4 py-3 text-sm text-ink placeholder-moss/60 focus:border-emerald-600 focus:bg-ivory focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <button
                  type="submit"
                  className="group inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-forest px-6 py-2.5 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-forestSoft"
                >
                  <span>Open in Email App</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <span className="text-xs text-moss">Opens your email client pre-addressed to Shivam.</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
