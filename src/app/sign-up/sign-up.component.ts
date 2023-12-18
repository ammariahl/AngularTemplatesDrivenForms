import { Component } from '@angular/core';
import { Form } from '../models/form.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  model: Form = new Form('', '', '', '');

  constructor() {}

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.model);
  }
}
