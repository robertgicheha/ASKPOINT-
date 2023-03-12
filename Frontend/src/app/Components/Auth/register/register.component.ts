import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../../header/header.component";
import { User } from 'src/app/Interfaces';
import { UserService } from '../../Services/user.service';

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    imports: [CommonModule, ReactiveFormsModule, RouterModule, HeaderComponent]
})
export class RegisterComponent implements OnInit {
 user: User = { username: '', email: '',  password: '' };
form!:FormGroup

constructor(private router: Router, private userService: UserService) { }
ngOnInit() {
  this.form = new FormGroup({
    username: new FormControl(null,[Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null,[Validators.required])
  })
}

submitData(): void {
  console.log(this.form.value);

  this.userService.register(this.form.value).subscribe(response => {

    console.log(response);
    this.router.navigate(['']);
  })
}
}
