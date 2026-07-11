export interface ExperienceItem {
  role: string;
  organization: string;
  date: string;
  description: string;
  highlights: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    role: 'IT Summer Intern',
    organization: 'Medical Mutual',
    date: 'Summer 2026',
    description:
      'Worked on a corporate Scrum team while learning enterprise development practices, .NET MVC, C#, API work, troubleshooting, and responsible use of AI-enabled developer tools.',
    highlights: [
      'Contributed to Agile/Scrum stories while learning corporate development workflow and team collaboration.',
      'Researched code behavior, traced issues, and documented findings through spike-style investigation work.',
      'Practiced code walkthroughs, demos, and technical communication with team members.',
      'Used GitHub Copilot and AI tools to support code research, debugging, implementation, and faster learning while keeping the work grounded in understanding the code.'
    ]
  },
  {
    role: 'Website Designer',
    organization: 'Zone Aviation',
    date: '2025',
    description:
      'Maintained and updated a live business website while working directly with a client on reliability, security, content updates, and production-safe changes.',
    highlights: [
      'Updated site content, pricing, navigation, and visual elements based on client requirements.',
      'Managed backups, local testing, WordPress updates, SSL/security concerns, and production changes.',
      'Improved reliability by testing changes before applying them to the live site.'
    ]
  },
  {
    role: 'Certified Trainer',
    organization: 'Chipotle',
    date: '2022 to 2026',
    description:
      'Trained new employees while balancing college coursework and software projects, strengthening communication, leadership, and reliability.',
    highlights: [
      'Trained employees on procedures, standards, and workflows in a fast-paced environment.',
      'Built communication, accountability, and team coordination skills.'
    ]
  }
];
