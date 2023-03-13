import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminUsersComponent } from '../admin-users/admin-users.component';
import { AdminQuestionsComponent } from '../admin-questions/admin-questions.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

}
