import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,  } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(protected auth:AuthService) {}
}
