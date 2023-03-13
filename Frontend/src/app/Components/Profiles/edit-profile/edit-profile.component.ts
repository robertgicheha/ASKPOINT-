import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
    selector: 'app-edit-profile',
    standalone: true,
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.css'],
    imports: [CommonModule, HeaderComponent, FooterComponent]
})
export class EditProfileComponent {

}
