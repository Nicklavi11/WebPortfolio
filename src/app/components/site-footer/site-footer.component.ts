import { Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html'
})
export class SiteFooterComponent {
  protected readonly currentYear = new Date().getFullYear();
}
