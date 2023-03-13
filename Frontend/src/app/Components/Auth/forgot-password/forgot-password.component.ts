import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
    selector: 'app-forgot-password',
    standalone: true,
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css'],
    imports: [CommonModule, ReactiveFormsModule, HeaderComponent, FooterComponent]
})
export class ForgotPasswordComponent  implements OnInit{
  recovery!: FormGroup



  ngOnInit(){
    this.recovery = new FormGroup({
      email:new FormControl(null,[Validators.required, Validators.email]),
      
    })
  }
ChangePassword(){
  console.log(this.ChangePassword);
  
  
}
}
