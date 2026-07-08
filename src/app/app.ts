import { AfterViewInit, Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly mobileNavOpen = signal(false);
  protected readonly copyStatus = signal('');

  protected readonly socials = [
    { label: 'GitHub', href: 'https://github.com/Nicklavi11' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nicholas-laviano/' },
    { label: 'Resume', href: 'assets/docs/Nicholas_Laviano_Resume.pdf' }
  ];

  protected readonly highlights = [
    'B.S. Software Engineering graduate, BGSU - Aug 2026',
    '3.75 GPA and Dean\'s List recognition',
    'Seeking full-time entry-level software, full-stack, IT, QA, or technical roles',
    'Medical Mutual IT internship experience with .NET, C#, debugging, and user stories',
    'Hands-on background in client web work, testing, refactoring, and AI-assisted development'
  ];

  protected readonly featuredProjects = [
    {
      title: 'Medical Mutual IT Internship',
      summary: 'Worked in a corporate technical environment with .NET, C#, user stories, spike investigations, debugging, troubleshooting, prompt engineering, and AI-assisted problem solving.',
      tags: ['.NET', 'C#', 'User Stories', 'Debugging']
    },
    {
      title: 'Website Redesign',
      summary: 'Modernized a live business website with safer updates, SSL support, backups, navigation improvements, content updates, and production-minded testing.',
      tags: ['Web Design', 'Security', 'Client Work']
    },
    {
      title: 'Texas Hold\'em Survival Simulation',
      summary: 'Built a poker survival mode with full game flow, 5-10 blinds, 100 vs. 1000 chip pressure, a poker bot opponent, and probability-assisted decisions.',
      tags: ['Python', 'Simulation', 'Poker Bot', 'Probability']
    }
  ];

  protected readonly projects = [
    {
      title: 'Capstone: Texas Hold\'em Survival Simulation',
      summary: 'A Python poker simulation where the user starts with 100 chips against an opponent with 1000 chips, playing 5-10 blinds in a survival-style game mode.',
      bullets: [
        'Recreated the full poker workflow for the Survival mode, including blinds, chip stacks, game progression, and decision flow.',
        'Built a poker bot opponent so the user could play against automated decisions instead of a static simulation.',
        'Connected the game mode to the probability program so recommendations could help the user make stronger choices.',
        'Worked with unit tests, CI, code reviews, documentation, weekly sprints, and monthly iterations in GitLab.'
      ],
      tags: ['Python', 'Simulation', 'Poker Bot', 'Probability', 'Pytest', 'GitLab'],
      links: [{ label: 'In Progress', href: '' }]
    },
    {
      title: 'Chart Generator - Software Design',
      summary: 'Team software design project focused on requirements analysis, UML modeling, and SOLID-driven design improvements.',
      bullets: [
        'Created use cases, a use case diagram, a class diagram, and four sequence diagrams.',
        'Analyzed cohesion and coupling across input, chart generation, output subsystems, and the overall system.',
        'Applied SOLID principles and design patterns to improve extensibility and maintainability.'
      ],
      tags: ['UML', 'Software Design', 'SOLID', 'Architecture', 'Team Project'],
      links: [{ label: 'Design Repo', href: 'https://github.com/Nicklavi11/chart-generator-design-case-study/blob/main/README.md' }]
    },
    {
      title: 'C++ Refactoring Project',
      summary: 'Team refactoring project focused on improving cohesion, responsibility placement, and maintainability in an existing C++ codebase.',
      bullets: [
        'Applied Extract Method and Move Method to improve responsibility separation.',
        'Introduced inheritance and replaced type codes with subclasses.',
        'Worked through issues, topic branches, pull requests, reviews, and merges.'
      ],
      tags: ['C++', 'Refactoring', 'OOP', 'Clean Code', 'Git'],
      links: [{ label: 'Private Classroom Repo', href: '' }]
    },
    {
      title: 'Autonomous Vehicle Safety Analysis',
      summary: 'Research project analyzing autonomous vehicle safety under adverse weather and complex traffic conditions.',
      bullets: [
        'Analyzed sensor degradation, extreme weather, V2X communication, and network latency risks.',
        'Evaluated real-world case studies from Tesla, Waymo, and Cruise.',
        'Produced a technical report synthesizing academic research and industry findings.'
      ],
      tags: ['Autonomous Vehicles', 'Systems Safety', 'Technical Research'],
      links: [{ label: 'Full Report', href: 'assets/docs/Autonomous_Vehicle_Safety_Report.pdf' }]
    },
    {
      title: 'Website Redesign',
      summary: 'Freelance website redesign for a real business, focused on security, reliability, and modernizing a live production website.',
      bullets: [
        'Worked directly with the client to gather requirements and update content.',
        'Added an SSL certificate and improved site security.',
        'Created backups and tested changes locally before deploying to production.',
        'Fixed broken links, replaced outdated images, and added navigation buttons.'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'SSL', 'Client Work'],
      links: [{ label: 'Live Site', href: 'https://zoneaviation.com' }]
    },
    {
      title: 'Open-Source Unit Testing',
      summary: 'Wrote 10 practical unit tests for real Java open-source libraries using multiple testing techniques and a full PR workflow.',
      bullets: [
        'Created tests across AssertJ and Apache Commons Text and verified behavior with Maven builds.',
        'Applied equivalence partitioning, boundary value testing, Mockito mock testing, black-box testing, and top-down testing.',
        'Used forks, branches, commits, and pull requests to contribute cleanly.'
      ],
      tags: ['Java', 'JUnit', 'Maven', 'Mockito', 'Git'],
      links: [
        { label: 'AssertJ PR', href: 'https://github.com/ST-Spring-25/assertj/pull/1' },
        { label: 'Commons Text PR', href: 'https://github.com/ST-Spring-25/commons-text/pull/3' },
        { label: 'Project Report', href: 'assets/docs/SE4560 Software Testing Project.pdf' }
      ]
    },
    {
      title: 'Yahtzee Game (C++)',
      summary: 'Team-built console Yahtzee game with full scoring logic, rerolls, and automated tests.',
      bullets: [
        'Implemented core gameplay flow and turn handling in the Game class.',
        'Built scoring support for full house, straights, Yahtzee, and other categories.',
        'Wrote and ran Catch2 tests and used CMake for builds and CI checks.'
      ],
      tags: ['C++', 'OOP', 'CMake', 'CI'],
      links: [{ label: 'GitHub Repo', href: 'https://github.com/Nicklavi11/yahtzee' }]
    }
  ];

  protected readonly experience = [
    {
      role: 'IT Intern',
      org: 'Medical Mutual',
      date: 'May 2026 - Aug 2026',
      bullets: [
        'Learned and applied .NET framework concepts, C#, debugging, troubleshooting, and corporate development workflows.',
        'Worked with user stories, spike investigations, and technical research to understand and support team delivery.',
        'Practiced prompt engineering and an AI-first approach to speed up investigation, learning, and problem solving.',
        'Gained experience communicating in a professional technical environment with real business processes.'
      ]
    },
    {
      role: 'Website Designer',
      org: 'Zone Aviation',
      date: '2025 - May 2026',
      bullets: [
        'Coordinated directly with the client to gather requirements and update website content.',
        'Added SSL and managed backend updates.',
        'Created backups and tested changes locally before deploying to the live site.',
        'Fixed broken links, replaced outdated images, and improved site navigation.'
      ]
    },
    {
      role: 'Certified Trainer',
      org: 'Chipotle',
      date: '2022 - Jul 2026',
      bullets: [
        'Train new employees on procedures and quality standards in a fast-paced environment.',
        'Practice communication, teamwork, and reliability while balancing college coursework.'
      ]
    }
  ];

  protected readonly skillGroups = [
    { title: 'Languages', skills: ['C#', 'C++', 'Java', 'JavaScript', 'HTML/CSS', 'SQL', 'Python'] },
    { title: 'Full-Stack + IT', skills: ['.NET Framework', 'User Stories', 'Spike Investigations', 'Troubleshooting', 'Corporate Workflow'] },
    { title: 'Testing + Quality', skills: ['JUnit', 'Pytest', 'Refactoring', 'CI', 'Debugging'] },
    { title: 'Tools + Concepts', skills: ['Git', 'GitHub', 'GitLab', 'Maven', 'CMake', 'OOP', 'SOLID', 'Prompt Engineering', 'AI-First Development'] }
  ];

  protected toggleMobileNav(): void {
    this.mobileNavOpen.update((open) => !open);
  }

  protected closeMobileNav(): void {
    this.mobileNavOpen.set(false);
  }

  ngAfterViewInit(): void {
    const revealItems = document.querySelectorAll<HTMLElement>(
      '.section-head, .stat, .feature-card, .timeline-item, .skill-card, .contact-band'
    );

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('reveal-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          } else {
            entry.target.classList.remove('reveal-visible');
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  protected async copyEmail(): Promise<void> {
    await navigator.clipboard.writeText('nlavian@bgsu.edu');
    this.copyStatus.set('Email copied: nlavian@bgsu.edu');
    window.setTimeout(() => this.copyStatus.set(''), 2500);
  }
}
