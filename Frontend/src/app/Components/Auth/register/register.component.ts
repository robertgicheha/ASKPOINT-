import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { User } from 'src/app/Interfaces';
import { UserService } from '../../../Services/user.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HeaderComponent],
})
export class RegisterComponent implements OnInit {
  // user: User = {
  //   name: '', email: '', password: '',
  // };
  form: FormGroup;


  constructor(private router: Router, private userService: UserService,private auth: AuthService,private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
  
  })
  }
  ngOnInit() {
  
  }

  submitData(): void {
    console.log(this.form.value);
    this.userService.registerUser(this.form.value).subscribe((response) => {
      console.log(response);
      this.auth.setName(response.name);
      this.auth.register();
      localStorage.setItem('token', response.token);
      if(response.token){
        this.router.navigate(['/login'])
      }
      
    });
  }
}
     