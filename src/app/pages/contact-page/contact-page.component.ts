import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { socialLinks } from '../../data/social-links';

@Component({
  selector: 'app-contact-page',
  imports: [RouterLink],
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent implements OnInit {
  protected readonly email = signal('');
  protected readonly socialLinks = socialLinks;
  protected readonly myEmail = 'nlavian@bgsu.edu';

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.email.set(this.route.snapshot.queryParamMap.get('email') ?? '');
  }

  protected updateEmail(value: string): void {
    this.email.set(value);
  }

  protected mailtoHref(): string {
    const from = this.email().trim();
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(
      from ? `Hi Nicholas,\n\nI found your portfolio and wanted to connect.\n\nMy email: ${from}` : 'Hi Nicholas,\n\nI found your portfolio and wanted to connect.'
    );

    return `mailto:${this.myEmail}?subject=${subject}&body=${body}`;
  }
}
