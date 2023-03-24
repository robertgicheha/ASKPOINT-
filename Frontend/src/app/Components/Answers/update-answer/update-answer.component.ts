import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-update-answer',
    standalone: true,
    templateUrl: './update-answer.component.html',
    styleUrls: ['./update-answer.component.css'],
    imports: [CommonModule, HeaderComponent, FooterComponent,ReactiveFormsModule]
})
export class UpdateAnswerComponent implements OnInit {

    AnsUpdate!: FormGroup;
    ngOnInit(): void {
        this.AnsUpdate = new FormGroup({
            // title: new FormControl(null, [Validators.required]),
            description: new FormControl(null, [Validators.required])
          });
    }


    Update(){
    //     console.log(this.AnsUpdate.value);
    //     this.answerService.addQuestion(this.AnsUpdate.value).subscribe((response) => {
    //       console.log(response);
    // });



    }
}
