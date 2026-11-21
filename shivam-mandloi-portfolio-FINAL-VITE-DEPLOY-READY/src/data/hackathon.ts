export interface HackathonEntry {
  id: string;
  event: string;
  subtitle: string;
  participant: string;
  organizer: string;
  date: string;
  type: 'Participation';
  description: string;
}

export const hackathonData: HackathonEntry[] = [
  {
    id: 'internal-hackathon-2026',
    event: 'Internal Hackathon-2026',
    subtitle: 'Prelims for Smart India Hackathon-2026',
    participant: 'Shivam Mandloi',
    organizer: 'Indore Institute of Science & Technology, Indore (M.P.)',
    date: '12 September 2026',
    type: 'Participation',
    description:
      'Participated in Internal Hackathon-2026, the preliminary hackathon event for Smart India Hackathon-2026.',
  },
];
