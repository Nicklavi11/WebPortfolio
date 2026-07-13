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
    date: 'May 2026 - Aug. 2026',
    description:
      'Worked on an enterprise Scrum team using C#, .NET MVC, RESTful APIs, Sitecore CMS, troubleshooting, and AI-assisted development tools.',
    highlights: [
      'Integrated an updated RESTful API by updating configuration and controller logic in an existing .NET MVC application, testing connectivity while preserving existing behavior.',
      'Read and traced unfamiliar C# code to troubleshoot issues, validate endpoint behavior, and document technical findings.',
      'Configured Sitecore items and connected new products to backend logic for product-specific effective dates, enrollment flow behavior, and Sitecore-controlled job flags.',
      'Contributed through Agile/Scrum stories, testing, demos, code walkthroughs, and GitHub Copilot-assisted research.'
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
