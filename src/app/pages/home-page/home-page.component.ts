import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactCtaComponent } from '../../components/contact-cta/contact-cta.component';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';
import { IntroPanelComponent } from '../../components/intro-panel/intro-panel.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { SiteFooterComponent } from '../../components/site-footer/site-footer.component';
import { experienceItems } from '../../data/experience';
import { featuredProjects } from '../../data/projects';
import { socialLinks } from '../../data/social-links';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink,
    ContactCtaComponent,
    ExperienceCardComponent,
    IntroPanelComponent,
    ProjectCardComponent,
    SiteFooterComponent
  ],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements AfterViewInit {
  protected readonly experienceItems = experienceItems.filter((experience) => experience.organization !== 'Chipotle');
  protected readonly featuredProjects = featuredProjects;
  protected readonly socialLinks = socialLinks;
  protected readonly navSections = [
    { id: 'experience', label: 'Experience' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  ngAfterViewInit(): void {
    const revealItems = document.querySelectorAll<HTMLElement>('.reveal');

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('reveal-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );

    revealItems.forEach((item) => observer.observe(item));
  }
}
