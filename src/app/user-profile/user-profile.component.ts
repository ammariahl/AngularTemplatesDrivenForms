import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
// export class UserProfileComponent implements OnInit puis on fait une fonction ngOnInit(): void
export class UserProfileComponent {
  public user: User;
  public isDivVisible: boolean = false;

  constructor() {
    this.user = new User(
      'Doe',
      'John',
      25,
      '',
      'https://randomuser.me/api/portraits/lego/2.jpg'
    );
  }

  ageVisibility(): void {
    if (this.isDivVisible) {
      this.isDivVisible = false;
    } else {
      this.isDivVisible = true;
    }
  }
}
