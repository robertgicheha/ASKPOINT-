import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
    selector: 'app-single-question',
    standalone: true,
    templateUrl: './single-question.component.html',
    styleUrls: ['./single-question.component.css'],
    imports: [CommonModule, HeaderComponent, FooterComponent]
})
export class SingleQuestionComponent {

}
