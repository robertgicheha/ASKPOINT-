import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../footer/footer.component";
import { HeaderComponent } from "../../header/header.component";
import { RouterModule } from '@angular/router';
import { Question } from 'src/app/Interfaces';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { Observable } from 'rxjs'
import { showQuestions } from 'src/app/State/Actions/question.action';
// import { selectAllQuestions } from 'src/app/State/Selectors/question.selector';

@Component({
    selector: 'app-question-details',
    standalone: true,
    templateUrl: './question-details.component.html',
    styleUrls: ['./question-details.component.css'],
    imports: [CommonModule, RouterModule, FooterComponent, HeaderComponent]
})
export class QuestionDetailsComponent implements OnInit {
    question:Question[] = []
    // questions$?: Observable<Question[]>;
    // store: any;

    constructor(private questionService: QuestionService){}

    ngOnInit(): void{
        this.questionService.getQuestions().subscribe((response)=>{
            // this.question=question
            console.log(response);
            this.question=response
    });
    // this.store.dispatch(showQuestions());
    // this.questions$ = this.store.select(selectAllQuestions);
}
}