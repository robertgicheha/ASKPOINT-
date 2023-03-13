import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule,RouterModule,AdminComponent],
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {

}
