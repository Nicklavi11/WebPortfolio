import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectArchiveTableComponent } from '../../components/project-archive-table/project-archive-table.component';
import { SiteFooterComponent } from '../../components/site-footer/site-footer.component';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-projects-page',
  imports: [RouterLink, ProjectArchiveTableComponent, SiteFooterComponent],
  templateUrl: './projects-page.component.html'
})
export class ProjectsPageComponent implements AfterViewInit {
  protected readonly projects = projects;

  ngAfterViewInit(): void {
    const revealItems = document.querySelectorAll<HTMLElement>('.reveal');
    revealItems.forEach((item) => item.classList.add('reveal-visible'));
  }
}
