import { Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Nicholas Laviano | Software Developer' },
  { path: 'projects', component: ProjectsPageComponent, title: 'Projects | Nicholas Laviano' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact | Nicholas Laviano' },
  { path: 'projects/:slug', redirectTo: 'projects' },
  { path: '**', redirectTo: '' }
];
