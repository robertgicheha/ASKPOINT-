import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AdminService } from 'src/app/admin.service';
import { User } from '../../../Interfaces/index';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule,RouterModule,AdminComponent],
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users:User[]=[];
  constructor( private adminservice:AdminService){}

  ngOnInit(): void {
    this.adminservice.getAllUSers().subscribe((userss)=>{
      this.users = userss
      // console.log(userss);
    })
  }
  deleteUser(questionid:string){
    this.adminservice.deleteQuestion(questionid).subscribe()
    console.log(questionid);

  }
  }


