import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { Question } from '../../../Interfaces/index';
import  {QuestionService} from '../../../Services/Question/question.service'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthGuardService } from '../../../Services/auth-guard.service';
@Component({
  selector: 'app-ask-question',
  standalone: true,
  imports: [CommonModule, HeaderComponent,FooterComponent,RouterModule,ReactiveFormsModule],
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit  {
  askForm!: FormGroup;
 
  constructor(private router: Router, private questionService: QuestionService) {
   
  }
  ngOnInit() {

    this.askForm = new FormGroup({
      question: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required])


    });
    
  }

  SubmitData(){
    console.log(this.askForm.value);
    this.questionService.addQuestion(this.askForm.value).subscribe((response) => {
    console.log(response);
    
      localStorage.setItem('token', response.token);
      this.router.navigate(['questions']);
    });
  }
  
   };
  




