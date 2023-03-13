import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
    selector: 'app-single-answer',
    standalone: true,
    templateUrl: './single-answer.component.html',
    styleUrls: ['./single-answer.component.css'],
    imports: [CommonModule, HeaderComponent, FooterComponent]
})
export class SingleAnswerComponent {

}
