import { projectsData, type ProjectItem } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
  return (
    <section id="projects" className="border-t border-[#E5DDD0] bg-sand/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="03 / Selected Work"
          title="Featured Projects"
          subtitle="Original project visuals with distinct motion choreography, pointer-reactive parallax, 3D hover tilt, and animated case-study modals."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projectsData.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} onSelect={onSelectProject} />
          ))}
        </div>
      </div>
    </section>
  );
}
