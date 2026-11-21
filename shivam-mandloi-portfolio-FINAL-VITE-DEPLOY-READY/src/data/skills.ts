export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillsData: SkillGroup[] = [
  {
    category: 'Programming Languages',
    items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    category: 'Web & UI Engineering',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'FastAPI', 'Streamlit', 'Tailwind CSS'],
  },
  {
    category: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'Vercel', 'Render', 'Linux', 'VS Code', 'IntelliJ IDEA'],
  },
  {
    category: 'Core Foundations',
    items: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'DBMS',
      'Object-Oriented Programming',
      'Numerical Methods',
    ],
  },
];
