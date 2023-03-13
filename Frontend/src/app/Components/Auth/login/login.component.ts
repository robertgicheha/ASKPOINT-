import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms'
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../../header/header.component";
import { UserLogin } from 'src/app/Interfaces';
import { AuthService } from '../../Services/auth.service';
import { UserService } from '../../Services/user.service'
import { FooterComponent } from "../../footer/footer.component";


@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [CommonModule, ReactiveFormsModule, RouterModule, HeaderComponent, FooterComponent]
})
export class LoginComponent  implements OnInit{
  user: UserLogin = { email: '', password: '' };
  error = '';
  constructor( private router: Router, private userService: UserService, private auth: AuthService) {}

  loginform!: FormGroup 


ngOnInit(): void {
  this.loginform = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])

  })
}


send(){
  console.log(this.loginform);
  this.userService.login(this.loginform.value)
      .subscribe(
        user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['']);
        },
        error => {
          this.error = error;
        }
      );

}
}



