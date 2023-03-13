import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../app/Services/auth.service';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./Components/home/home.component').then((h) => h.HomeComponent),
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./Components/home/home.component').then((h) => h.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./Components/about-us/about-us.component').then(
        (a) => a.AboutUsComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./Components/Auth/login/login.component').then(
        (l) => l.LoginComponent
      ),
  },
  {
    path: 'logout',
    loadComponent: () =>
      import('./Components/Auth/logout/logout.component').then(
        (o) => o.LogoutComponent
      ),
  },
  {
    path: 'recovery',
    loadComponent: () =>
      import(
        './Components/Auth/forgot-password/forgot-password.component'
      ).then((r) => r.ForgotPasswordComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./Components/Auth/register/register.component').then(
        (r) => r.RegisterComponent
      ),
  },
  {
    path: 'question',
    loadComponent: () =>
      import(
        './Components/Questions/single-question/single-question.component'
      ).then((s) => s.SingleQuestionComponent),
  },
  {
    path: 'askquestion',
    loadComponent: () =>
      import('./Components/Questions/ask-question/ask-question.component').then(
        (a) => a.AskQuestionComponent
      ),
  },
  {
    path: 'answer',
    loadComponent: () =>
      import('./Components/Answers/single-answer/single-answer.component').then(
        (s) => s.SingleAnswerComponent
      ),
  },
  {
    path: 'update',
    loadComponent: () =>
      import('./Components/Answers/update-answer/update-answer.component').then(
        (u) => u.UpdateAnswerComponent
      ),
  },
  {
    path: 'questions',
    loadComponent: () =>
      import(
        './Components/Questions/question-details/question-details.component'
      ).then((s) => s.QuestionDetailsComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./Components/Profiles/profile/profile.component').then(
        (g) => g.ProfileComponent
      ),
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./Components/Profiles/edit-profile/edit-profile.component').then(
        (e) => e.EditProfileComponent
      ),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./Components/Admin/admin/admin.component').then(
        (a) => a.AdminComponent
      ),
  },
  {
    path: 'aq',
    loadComponent: () =>
      import(
        './Components/Admin/admin-questions/admin-questions.component'
      ).then((m) => m.AdminQuestionsComponent),
  },
  {
    path: 'au',
    loadComponent: () =>
      import('./Components/Admin/admin-users/admin-users.component').then(
        (u) => u.AdminUsersComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./Components/page-not-found/page-not-found.component').then(
        (p) => p.PageNotFoundComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
