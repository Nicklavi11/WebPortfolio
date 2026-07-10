import { Component, Input } from '@angular/core';
import { Project } from '../../data/projects';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}
