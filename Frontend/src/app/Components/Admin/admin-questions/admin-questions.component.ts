import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { Question } from '../../../Interfaces/index';

@Component({
    selector: 'app-admin-questions',
    standalone: true,
    templateUrl: './admin-questions.component.html',
    styleUrls: ['./admin-questions.component.css'],
    imports: [CommonModule, RouterModule,]
})
export class AdminQuestionsComponent implements OnInit {
    questions :Question[]=[]

    constructor(private AdminService:AdminService){}

    ngOnInit(): void {
        this.AdminService.getAllQuestions().subscribe((questions)=>{
            console.log(questions);
            this.questions = questions
      
          })
        }
        deleteQuestion(questionid:string){
          console.log(questionid);
      
        }
    }


