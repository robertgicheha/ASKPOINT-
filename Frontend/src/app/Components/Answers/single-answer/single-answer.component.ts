import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnswerService } from '../../../Services/Answer/answer.service';
import { Question } from 'src/app/Interfaces';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { Route, Router } from '@angular/router';
import {Observable} from 'rxjs'

@Component({
    selector: 'app-single-answer',
    standalone: true,
    templateUrl: './single-answer.component.html',
    styleUrls: ['./single-answer.component.css'],
    imports: [CommonModule, HeaderComponent, FooterComponent,ReactiveFormsModule]
})
export class SingleAnswerComponent implements OnInit {
  question:Question[] = []
    addAns!: FormGroup;
    constructor(private questionService: QuestionService, private answerService:AnswerService, private route:Router){
      this.addAns = new FormGroup({
        // title: new FormControl(null, [Validators.required]),
        body: new FormControl(null, [Validators.required])
      })
    }
    ngOnInit():void {
          this.questionService.getQuestions().subscribe((response)=>{
            // this.question=question
            console.log(response);
            this.question=response
          });


    }

    Send(){
        // console.log(this.addAns.value);
        // this.answerService(this.addAns.value).subscribe((response) => {
        //   console.log(response);
        
        // });
        // )}
      
    }
  }

 
   
