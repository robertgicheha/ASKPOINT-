import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddQuestion, Message, Question, QuestionSuccess } from '../../Interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  question: Question[] = [];
  private baseUrl = 'http://localhost:4000/question';

  constructor(private http: HttpClient) { }
  
  //get questions
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`http://localhost:4000/question/all/all`);
  }
  //get question by id
  getQuestionById(questionid:string): Observable<Question> {
    return this.http.get<Question>(`http://localhost:4000/question/${questionid}`);
  }
   //add question
  addQuestion(question:Question): Observable<QuestionSuccess> {
    return this.http.post<QuestionSuccess>(` http://localhost:4000/question/create`,question);
  }
  //update question
  updateQuestion(questionid:string): Observable<Message> {
    return this.http.put<Message>(`http://localhost:4000/question/update/${questionid}`, this.updateQuestion);
  }
  //delete question
  deleteQuestion(questionid: string): Observable<Message> {
    return this.http.delete<Message>(` http://localhost:4000/questions/delete/${questionid}`);
  }
}


