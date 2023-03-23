import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from '../app/Interfaces/index';
import { Question } from '../app/Interfaces/index';
import { Message, User } from '../app/Interfaces/index';
import { Comment } from '../app/Interfaces/index';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAllUSers(){
    return this.http.get<User[]>('http://localhost:4000/user/all/all')
  }
  getAllQuestions(){
    return this.http.get<Question[]>('http://localhost:4000/question/all/all')
  }
  deleteQuestion(questionid:string):Observable<Message>{
    return this.http.delete<Message>(`http://localhost:4000/question/delete/${questionid}`)
  }
  deleteUser(id:string){

  }
  // getAllAnswers(){
  //   return this.http.get<Answer[]>('http://localhost:4000/auth/answer')
  // }
  // getAllComments(){
  //   return this.http.get<Comment[]>('http://localhost:4000/auth/comment')
  // }
}