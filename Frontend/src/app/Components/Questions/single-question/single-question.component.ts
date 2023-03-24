import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { OnInitEffects } from '@ngrx/effects';
import { Question } from 'src/app/Interfaces';
import { QuestionService } from 'src/app/Services/Question/question.service';

@Component({
    selector: 'app-single-question',
    standalone: true,
    templateUrl: './single-question.component.html',
    styleUrls: ['./single-question.component.css'],
    imports: [CommonModule, HeaderComponent, FooterComponent]
})
export class SingleQuestionComponent implements OnInit {
    question:Question[] = []
    constructor(private questionService: QuestionService){}

    ngOnInit(): void {
        this.questionService.getQuestions().subscribe((response)=>{
            // this.question=question
            console.log(response);
            this.question=response
    });

}
}