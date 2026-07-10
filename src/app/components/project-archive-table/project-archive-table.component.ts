import { Component, Input } from '@angular/core';
import { Project } from '../../data/projects';

@Component({
  selector: 'app-project-archive-table',
  templateUrl: './project-archive-table.component.html'
})
export class ProjectArchiveTableComponent {
  @Input({ required: true }) projects: Project[] = [];
}
