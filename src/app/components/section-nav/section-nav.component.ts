import { AfterViewInit, Component, Input, signal } from '@angular/core';

export interface NavSection {
  id: string;
  label: string;
}

@Component({
  selector: 'app-section-nav',
  templateUrl: './section-nav.component.html'
})
export class SectionNavComponent implements AfterViewInit {
  @Input({ required: true }) sections: NavSection[] = [];
  protected readonly activeSection = signal('');

  ngAfterViewInit(): void {
    this.activeSection.set(this.sections[0]?.id ?? '');

    if (!('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          this.activeSection.set(visible.target.id);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.15, 0.35, 0.6] }
    );

    this.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });
  }
}
