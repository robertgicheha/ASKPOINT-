import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../footer/footer.component";
import { HeaderComponent } from "../../header/header.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-question-details',
    standalone: true,
    templateUrl: './question-details.component.html',
    styleUrls: ['./question-details.component.css'],
    imports: [CommonModule, RouterModule, FooterComponent, HeaderComponent]
})
export class QuestionDetailsComponent {

}
