import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
    selector: 'app-update-answer',
    standalone: true,
    templateUrl: './update-answer.component.html',
    styleUrls: ['./update-answer.component.css'],
    imports: [CommonModule, HeaderComponent, FooterComponent]
})
export class UpdateAnswerComponent {

}
