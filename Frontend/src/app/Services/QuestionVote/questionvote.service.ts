import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionVote } from '../../Interfaces';
import {Observable}  from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class QuestionvoteService {
  private baseUrl = 'http://localhost:4000/questionvote';

  constructor(private http: HttpClient) { }

  //get questions
  getQuestionVotes(): Observable<QuestionVote[]> {
    return this.http.get<QuestionVote[]>(`GET http://localhost:4000/questionvote/getall`);
  }
  //get question by id
  getQuestionVoteById(voteid:string): Observable<QuestionVote> {
    return this.http.get<QuestionVote>(`http://localhost:4000/questionvote/${voteid}`);
  }
   //add question
  addQuestionVote(questionvote: QuestionVote): Observable<QuestionVote> {
    return this.http.post<QuestionVote>(` http://localhost:4000/questionvote/createvote`,questionvote);
  }
  //update question
  updateQuestionVote(questionvote: QuestionVote, voteid:string): Observable<QuestionVote> {
    return this.http.put<QuestionVote>(`http://localhost:4000/questionvote/update/${voteid}`, questionvote);
  }
  //delete question
  deleteQuestion(voteid: string): Observable<void> {
    return this.http.delete<void>(` http://localhost:4000/questionvote/delete/${voteid}`);
  }




}
