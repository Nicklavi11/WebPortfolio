export interface ExperienceItem {
  role: string;
  organization: string;
  location?: string;
  date: string;
  description: string;
  highlights: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    role: 'IT Summer Intern',
    organization: 'Medical Mutual',
    location: 'Brooklyn, OH',
    date: 'May 2026 - Aug. 2026',
    description:
      'Worked on an enterprise Agile/Scrum team using C#, .NET MVC, RESTful APIs, Sitecore CMS, Docker, Azure DevOps, troubleshooting, and AI-assisted development tools.',
    highlights: [
      'Integrated an updated RESTful API into an existing .NET MVC application by updating configuration values, modifying controller logic, testing connectivity, and preserving existing behavior.',
      'Read and traced unfamiliar C# code to understand application flow, troubleshoot issues, validate endpoint behavior, and document findings through spike-style research.',
      'Configured Sitecore CMS items and connected new product entries to backend logic, including custom effective dates, enrollment flow behavior, and job-control flags.',
      'Used Docker containers to run application services locally and Azure DevOps to access repositories, coordinate code changes, and support deployments.',
      'Contributed to Agile/Scrum stories through code research, demos, walkthroughs, testing, and AI-assisted development with GitHub Copilot.'
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
  }
];
