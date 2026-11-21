import kapdaBazaarImg from '../assets/shivam-kapda-bazaar.webp';
import bis360Img from '../assets/shivam-bis360.webp';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  motionStyle: 'textile' | 'compliance';
  description: string;
  technologies: string[];
  highlights: string[];
  liveUrl: string;
  githubUrl: string;
  details: {
    overview: string;
    architecture: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: 'kapda-bazaar',
    title: 'Kapda Bazaar',
    category: 'B2B Textile Supply Chain OS',
    image: kapdaBazaarImg,
    imageAlt:
      '3D editorial illustration of Kapda Bazaar B2B textile supply chain with cotton yarn spools, woven fabrics, and emerald procurement network lines',
    motionStyle: 'textile',
    description:
      'A B2B textile sourcing and procurement platform designed for mills, suppliers, and industrial buyers with textile-specific product discovery, AI-oriented supplier matching, product comparison, supplier verification concepts, and structured RFQ-to-order workflows.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    highlights: [
      'Textile-specific product discovery (Material, Composition, GSM, Finish, Quantity, Price)',
      'AI-oriented supplier matching & product comparison',
      'Supplier verification concepts & multi-role dashboards',
      'Structured procurement flow: Requirement → Matching → Compare → RFQ → Quotes → Sample → Order',
    ],
    liveUrl: 'https://kapda-bazaar-six.vercel.app/',
    githubUrl: 'https://github.com/hub211045-hue/KAPDA-BAZAAR.git',
    details: {
      overview:
        'Kapda Bazaar simplifies B2B textile sourcing by structuring material discovery, supplier evaluation, quotation comparison, and RFQ-to-order workflows for mills, suppliers, and industrial buyers.',
      architecture:
        'Modular web application architecture with Next.js, TypeScript, Tailwind CSS, role-based workflows (Buyer, Seller, Admin, Logistics, Quality), and Vercel deployment.',
    },
  },
  {
    id: 'bis360',
    title: 'BIS360',
    category: 'AI & ML / Full-Stack',
    image: bis360Img,
    imageAlt:
      '3D editorial illustration of BIS360 AI compliance and Indian Standards assistant with floating digital standards documents and emerald scanning beam',
    motionStyle: 'compliance',
    description:
      'AI-powered conversational assistant for Indian Standards supporting compliance verification against IS 12269, IS 13252, and IS 16046, a guided lab-testing roadmap, and structured document retrieval.',
    technologies: ['Python', 'FastAPI', 'Gemini API', 'Render'],
    highlights: [
      'AI-powered conversational assistant for Indian Standards',
      'Compliance verification against IS 12269, IS 13252, and IS 16046',
      'Guided lab-testing roadmap for compliance workflows',
      'Structured document retrieval support',
    ],
    liveUrl: '',
    githubUrl: '',
    details: {
      overview:
        'BIS360 is an AI-powered conversational assistant built for navigating Indian Standards, enabling compliance verification against IS 12269, IS 13252, and IS 16046 alongside a guided lab-testing roadmap and document retrieval support.',
      architecture:
        'Python and FastAPI backend integrated with the Gemini API for standards retrieval and conversational guidance, deployed on Render.',
    },
  },
];
