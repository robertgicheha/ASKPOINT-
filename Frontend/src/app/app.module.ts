import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from "./Components/home/home.component";
import { LoginComponent } from './Components/Auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from "./Components/Auth/register/register.component";
import { AskQuestionComponent } from "./Components/Questions/ask-question/ask-question.component";
import {HttpClientModule} from "@angular/common/http"
import { AdminComponent } from './Components/Admin/admin/admin.component';
import { AdminQuestionsComponent } from './Components/Admin/admin-questions/admin-questions.component';
import { AdminUsersComponent } from './Components/Admin/admin-users/admin-users.component';


@NgModule({
    declarations: [
        AppComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        BrowserAnimationsModule,
        LoginComponent,
        FormsModule,
        ReactiveFormsModule,
        RegisterComponent,
        AskQuestionComponent,
        HttpClientModule,
        AdminComponent,
        AdminQuestionsComponent,
        AdminUsersComponent
    ]
})
export class AppModule { }
