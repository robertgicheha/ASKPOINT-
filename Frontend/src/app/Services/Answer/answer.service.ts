import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer, AnswerSuccess } from '../../Interfaces/index';
import {Observable}  from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  
  // private baseUrl = 'http://localhost:4000/answer';

  constructor(private http: HttpClient) { }

  //get answers
  getAnswers(): Observable<Answer[]> {
    return this.http.get<Answer[]>(` http://localhost:4000/answer/all/all`);
  }
  //get answer by id
  getAnswerById(answerid:string): Observable<Answer> {
    return this.http.get<Answer>(`http://localhost:4000/answer/${answerid}`);
  }
   //add answer
  createAnswer(answer: Answer): Observable<AnswerSuccess> {
    return this.http.post<AnswerSuccess>(`http://localhost:4000/answer/createanswer`, answer);
  }
  //update answer
  updateAnswer(answer: Answer): Observable<Answer> {
    return this.http.put<Answer>(`http://localhost:400/answer/update/${answer.answerid}`, answer);
  }
  //delete answer
  deleteAnswer(answerid: string): Observable<void> {
    return this.http.delete<void>(`  http://localhost:4000/answer/delete/${answerid}`);
  }

}
