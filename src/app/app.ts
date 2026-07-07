import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly mobileNavOpen = signal(false);
  protected readonly lightMode = signal(false);
  protected readonly copyStatus = signal('');

  protected readonly socials = [
    { label: 'GitHub', href: 'https://github.com/Nicklavi11' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nicholas-laviano/' },
    { label: 'Resume', href: 'assets/docs/Nicholas_Laviano_Resume.pdf' }
  ];

  protected readonly highlights = [
    'B.S. Software Engineering, BGSU (Expected 2026)',
    'GPA 3.72, Dean\'s List',
    'Client website redesign and security updates',
    'Strong background in software testing and debugging',
    'Experience with software design, refactoring, and code quality'
  ];

  protected readonly featuredProjects = [
    {
      title: 'Capstone: Texas Hold\'em Probability Program',
      summary: 'Python training tool that simulates preflop poker decisions and teaches when to push or fold using probability, game theory, and backwards induction concepts.',
      tags: ['Python', 'Pytest', 'Algorithms', 'Team Project']
    },
    {
      title: 'Website Redesign',
      summary: 'Modernized a live business website with safer updates, SSL support, backups, broken-link fixes, navigation improvements, and refreshed content.',
      tags: ['Web Design', 'Security', 'Client Work']
    },
    {
      title: 'Open-Source Software Testing',
      summary: 'Contributed practical Java unit tests to real libraries with JUnit, Maven, Mockito, forks, branches, and pull-request workflows.',
      tags: ['JUnit', 'Maven', 'Mockito', 'Git']
    }
  ];

  protected readonly projects = [
    {
      title: 'Capstone: Texas Hold\'em Probability Program',
      summary: 'A Python program that simulates a Texas Hold\'em game and trains users when to push or fold based on preflop card probability.',
      bullets: [
        'Built a hand evaluation and decision recommendation engine for all-in decisions.',
        'Used algorithms, math, game theory, and backwards induction concepts.',
        'Worked with unit tests, CI, code reviews, documentation, weekly sprints, and monthly iterations in GitLab.'
      ],
      tags: ['Python', 'Refactoring', 'Pytest', 'Sprints', 'GitLab', 'Team Project'],
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
      summary: 'Ongoing freelance website redesign for a real business, focused on security, reliability, and modernizing a live production website.',
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
      role: 'Website Designer',
      org: 'Zone Aviation',
      date: '2025 - Present',
      bullets: [
        'Coordinate directly with the client to gather requirements and update website content.',
        'Added SSL and managed backend updates.',
        'Created backups and tested changes locally before deploying to the live site.',
        'Fixed broken links, replaced outdated images, and improved site navigation.'
      ]
    },
    {
      role: 'Certified Trainer',
      org: 'Chipotle',
      date: '2022 - Present',
      bullets: [
        'Train new employees on procedures and quality standards in a fast-paced environment.',
        'Practice communication, teamwork, and reliability while balancing college coursework.'
      ]
    }
  ];

  protected readonly skillGroups = [
    { title: 'Languages', skills: ['C++', 'C', 'Java', 'JavaScript', 'HTML/CSS', 'SQL', 'Python'] },
    { title: 'Testing + Quality', skills: ['JUnit', 'Pytest', 'Refactoring', 'CI', 'Debugging'] },
    { title: 'Tools', skills: ['Git', 'GitHub', 'GitLab', 'Maven', 'CMake', 'OMNeT++'] },
    { title: 'Concepts', skills: ['OOP', 'SOLID', 'UML', 'Cohesion/Coupling', 'Security-minded Engineering'] }
  ];

  protected toggleMobileNav(): void {
    this.mobileNavOpen.update((open) => !open);
  }

  protected closeMobileNav(): void {
    this.mobileNavOpen.set(false);
  }

  protected toggleTheme(): void {
    this.lightMode.update((enabled) => !enabled);
  }

  protected async copyEmail(): Promise<void> {
    await navigator.clipboard.writeText('nlavian@bgsu.edu');
    this.copyStatus.set('Email copied: nlavian@bgsu.edu');
    window.setTimeout(() => this.copyStatus.set(''), 2500);
  }
}
