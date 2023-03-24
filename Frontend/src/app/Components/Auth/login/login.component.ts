import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { LoginUser, User } from 'src/app/Interfaces';
import { AuthService } from '../../../Services/auth.service';
import { UserService } from '../../../Services/user.service';
import { FooterComponent } from '../../footer/footer.component';
import { Observable}  from 'rxjs'

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
  ],
})
export class LoginComponent implements OnInit {
  // user: LoginUser= { email: '' , password: '' };
  // error = '';
  constructor(
    private router: Router,
    private userService: UserService,
    private auth: AuthService
  ) {  this.loginform = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });}

  loginform!: FormGroup;

  ngOnInit(): void {
    // this.loginform = new FormGroup({
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required]),
    // });
  }

  SubmitData() {
    console.log(this.loginform);
    this.userService.loginUser(this.loginform.value).subscribe((response) => {
      console.log(response);
      this.auth.setRole(response.role)
      this.auth.setName(response.name)
      this.auth.login();
      localStorage.setItem('token', response.token);
      // if(response.token){
      //   this.router.navigate(['questions'])
      // }
      if (response.role == 'user' && response.token) {
        this.router.navigate(['questions'])  
      } else if(response.role == 'admin' && response.token){
        this.router.navigate(['admin'])  
      }
    });
    // (error)=>{
    //   this.error=error.error
    //   });
  }
}

