import { Component, Input } from '@angular/core';
import { ExperienceItem } from '../../data/experience';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html'
})
export class ExperienceCardComponent {
  @Input({ required: true }) experience!: ExperienceItem;
}
