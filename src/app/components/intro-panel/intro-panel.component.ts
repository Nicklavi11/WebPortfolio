import { Component, Input } from '@angular/core';
import { NavSection, SectionNavComponent } from '../section-nav/section-nav.component';
import { SocialLink } from '../../data/social-links';

@Component({
  selector: 'app-intro-panel',
  imports: [SectionNavComponent],
  templateUrl: './intro-panel.component.html'
})
export class IntroPanelComponent {
  @Input({ required: true }) sections: NavSection[] = [];
  @Input({ required: true }) socialLinks: SocialLink[] = [];
}
