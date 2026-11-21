export interface InterestItem {
  name: string;
  emoji: string;
  tagline: string;
  description: string;
}

export interface ProfileData {
  name: string;
  initials: string;
  headline: string;
  degree: string;
  shortDegree: string;
  year: string;
  section: string;
  college: string;
  duration: string;
  careerGoal: string;
  careerGoalStatement: string;
  email: string;
  github: string;
  githubLabel: string;
  linkedin: string;
  linkedinLabel: string;
  interests: InterestItem[];
  resume: {
    path: string;
    isUploaded: boolean;
  };
  copyrightYear: number;
}

export const profileData: ProfileData = {
  name: 'Shivam Mandloi',
  initials: 'SM',
  headline: 'B.Tech CSE Student | Aspiring Software Engineer',
  degree: 'B.Tech — Computer Science Engineering',
  shortDegree: 'B.Tech CSE',
  year: '3rd Year',
  section: 'A4',
  college: 'INDORE INSTITUTE OF SCIENCE OF TECHNOLOGY',
  duration: '2024 - 2028',
  careerGoal: 'Software Engineer',
  careerGoalStatement:
    'To become a Software Engineer and build practical, scalable, and user-focused software solutions.',
  email: 'shivam.mandloicse2024@indoreinstitute.com',
  github: 'https://github.com/shivammandloi7',
  githubLabel: 'github.com/shivammandloi7',
  linkedin: 'https://www.linkedin.com/in/shivam-mandloi-563172337',
  linkedinLabel: 'linkedin.com/in/shivam-mandloi-563172337',
  interests: [
    {
      name: 'Cricket',
      emoji: '🏏',
      tagline: 'Teamwork · Strategy · Focus',
      description:
        'Builds collaborative execution, tactical awareness, and calm decision-making under pressure.',
    },
    {
      name: 'Volleyball',
      emoji: '🏐',
      tagline: 'Coordination · Agility · Communication',
      description:
        'Sharpens fast team coordination, trust in roles, and adaptive momentum during high-tempo play.',
    },
  ],
  resume: {
    path: '/resume.pdf',
    isUploaded: false,
  },
  copyrightYear: 2026,
};
