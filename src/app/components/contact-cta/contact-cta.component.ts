import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-cta',
  templateUrl: './contact-cta.component.html'
})
export class ContactCtaComponent {
  protected readonly email = signal('');

  constructor(private readonly router: Router) {}

  protected updateEmail(value: string): void {
    this.email.set(value);
  }

  protected goToContact(): void {
    const email = this.email().trim();
    this.router.navigate(['/contact'], {
      queryParams: email ? { email } : undefined
    });
  }
}
