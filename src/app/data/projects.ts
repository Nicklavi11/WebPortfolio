export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  year: string;
  title: string;
  slug: string;
  type: string;
  shortDescription: string;
  highlights: string[];
  tags: string[];
  links: ProjectLink[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    year: '2026',
    title: 'Texas Hold\'em Trainer',
    slug: 'texas-holdem-trainer',
    type: 'Capstone',
    shortDescription:
      'A Python-based poker trainer that simulates heads-up Texas Hold\'em hands and helps users practice push/fold decisions using probability, stack management, and game-state logic.',
    highlights: [
      'Built and debugged core poker logic for blinds, betting flow, community cards, stack updates, and showdown results.',
      'Used equity calculations and game-state information to support push/fold recommendations.',
      'Contributed through GitLab workflow, sprint reviews, testing, debugging, and team collaboration.',
      'Helped make the trainer more interactive through sandbox/random training flow and survival mode logic.'
    ],
    tags: ['Python', 'Pytest', 'GitLab', 'Probability', 'Game Logic', 'Capstone'],
    links: [{ label: 'Private', href: '' }],
    featured: true
  },
  {
    year: '2025',
    title: 'Zone Aviation Website Redesign',
    slug: 'zone-aviation-redesign',
    type: 'Client Website Work',
    shortDescription:
      'Maintained and improved a live WordPress website for a real business, focusing on content updates, security, backups, SSL, and production-safe changes.',
    highlights: [
      'Worked directly with the client to gather updates and apply requested changes.',
      'Managed backups and tested updates locally before making production changes.',
      'Improved site reliability, security awareness, navigation, and outdated content.'
    ],
    tags: ['WordPress', 'HTML', 'CSS', 'Client Work', 'SSL', 'Web Maintenance'],
    links: [{ label: 'Live Site', href: 'https://zoneaviation.com' }],
    featured: true
  },
  {
    year: '2025',
    title: 'Open-Source Unit Testing',
    slug: 'open-source-unit-testing',
    type: 'Software Testing Project',
    shortDescription:
      'Wrote practical unit tests for real Java open-source libraries using JUnit, Maven, Mockito, and a pull-request workflow.',
    highlights: [
      'Created tests across AssertJ and Apache Commons Text.',
      'Applied testing techniques such as equivalence partitioning, boundary value testing, and mock testing.',
      'Used Git branches, forks, Maven builds, and pull requests to contribute cleanly.'
    ],
    tags: ['Java', 'JUnit', 'Maven', 'Mockito', 'Git', 'Testing'],
    links: [
      { label: 'AssertJ PR', href: 'https://github.com/ST-Spring-25/assertj/pull/1' },
      { label: 'Commons Text PR', href: 'https://github.com/ST-Spring-25/commons-text/pull/3' }
    ],
    featured: true
  },
  {
    year: '2026',
    title: 'Angular Portfolio Redesign',
    slug: 'angular-portfolio-redesign',
    type: 'Frontend Portfolio',
    shortDescription:
      'Rebuilt a static portfolio as a routed Angular application with reusable data files, responsive pages, and maintainable component structure.',
    highlights: ['Built with Angular routing, reusable components, CSS variables, and responsive layouts.'],
    tags: ['Angular', 'TypeScript', 'CSS', 'Responsive Design'],
    links: [{ label: 'GitHub', href: 'https://github.com/Nicklavi11/WebPortfolio' }]
  },
  {
    year: '2025',
    title: 'Chart Generator Design Case Study',
    slug: 'chart-generator-design-case-study',
    type: 'Software Design',
    shortDescription:
      'Team design project focused on requirements analysis, UML modeling, SOLID principles, and maintainable architecture.',
    highlights: ['Created use cases, diagrams, cohesion/coupling analysis, and design improvements.'],
    tags: ['UML', 'SOLID', 'Architecture', 'Team Project'],
    links: [{ label: 'Design Repo', href: 'https://github.com/Nicklavi11/chart-generator-design-case-study/blob/main/README.md' }]
  },
  {
    year: '2025',
    title: 'C++ Refactoring Project',
    slug: 'cpp-refactoring-project',
    type: 'Refactoring',
    shortDescription:
      'Improved maintainability in an existing C++ codebase using responsibility-focused refactoring and pull-request workflow.',
    highlights: ['Applied Extract Method, Move Method, inheritance, and branch-based team review.'],
    tags: ['C++', 'Refactoring', 'OOP', 'Git'],
    links: []
  },
  {
    year: '2025',
    title: 'Autonomous Vehicle Safety Analysis',
    slug: 'autonomous-vehicle-safety-analysis',
    type: 'Technical Research',
    shortDescription:
      'Research report analyzing autonomous vehicle safety in adverse weather, sensor degradation, and complex traffic conditions.',
    highlights: ['Evaluated industry case studies and synthesized research into a technical report.'],
    tags: ['Research', 'Systems Safety', 'Technical Writing'],
    links: [{ label: 'Report', href: 'assets/docs/Autonomous_Vehicle_Safety_Report.pdf' }]
  },
  {
    year: '2024',
    title: 'Yahtzee Game',
    slug: 'yahtzee-game',
    type: 'C++ Game Project',
    shortDescription:
      'Team-built console Yahtzee game with scoring logic, rerolls, automated tests, and CMake-based builds.',
    highlights: ['Implemented gameplay flow, scoring support, Catch2 tests, and CI checks.'],
    tags: ['C++', 'CMake', 'Catch2', 'CI'],
    links: [{ label: 'GitHub', href: 'https://github.com/Nicklavi11/yahtzee' }]
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
