import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  
})
export class LogoutComponent {



  constructor(private router: Router) {}

  logout() {
    // Perform any logout logic here (e.g. clearing session storage)
    sessionStorage.clear();
    // Navigate back to the login page
    this.router.navigate(['/login']);
  }

}
