import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-admin-questions',
    standalone: true,
    templateUrl: './admin-questions.component.html',
    styleUrls: ['./admin-questions.component.css'],
    imports: [CommonModule, RouterModule,]
})
export class AdminQuestionsComponent {

}
