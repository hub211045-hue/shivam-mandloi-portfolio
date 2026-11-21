import { useCallback, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { ScrollProgress } from './components/ScrollProgress';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { BackToTop } from './components/BackToTop';
import { Toast } from './components/Toast';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { Hackathon } from './sections/Hackathon';
import { Interests } from './sections/Interests';
import { CareerGoal } from './sections/CareerGoal';
import { Resume } from './sections/Resume';
import { Contact } from './sections/Contact';
import { profileData } from './data/profile';
import type { ProjectItem } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const notify = useCallback((msg: string) => {
    setToastMsg(msg);
    window.setTimeout(() => {
      setToastMsg((curr) => (curr === msg ? null : curr));
    }, 3800);
  }, []);

  const handleResumeAction = useCallback(
    (mode: 'view' | 'download') => {
      if (profileData.resume.isUploaded && profileData.resume.path) {
        if (mode === 'download') {
          const link = document.createElement('a');
          link.href = profileData.resume.path;
          link.download = 'Shivam_Mandloi_Resume.pdf';
          link.click();
        } else {
          window.open(profileData.resume.path, '_blank', 'noopener,noreferrer');
        }
      } else {
        notify('Place Shivam Mandloi’s PDF at public/resume.pdf and set resume.isUploaded = true in src/data/profile.ts.');
      }
    },
    [notify]
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-cream text-ink">
        <ScrollProgress />
        <AnimatedBackground />
        <Navbar />
        <main>
          <Hero onResumeClick={() => handleResumeAction('download')} />
          <About />
          <Skills />
          <Projects onSelectProject={setSelectedProject} />
          <Education />
          <Hackathon />
          <Interests />
          <CareerGoal />
          <Resume onResumeAction={handleResumeAction} />
          <Contact onNotify={notify} />
        </main>
        <Footer />
        <BackToTop />
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        <Toast message={toastMsg} />
      </div>
    </MotionConfig>
  );
}
