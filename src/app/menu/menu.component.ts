import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  content: string = '';

  constructor(protected router: Router) {}

  navigate(): void {
    this.router.navigate(['', this.content]);
  }
}
