import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnswerVote,UpdateAnswerVote } from '../../Interfaces';
import {Observable }  from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AnswervoteService {

  private baseUrl = 'http://localhost:4000/answervote';

  constructor(private http: HttpClient) { }

  //get answers
  getAnswerVotes(): Observable<AnswerVote[]> {
    return this.http.get<AnswerVote[]>(` http://localhost:4000/answervote/getall`);
  }
  //get answer by id
  getAnswerVoteById(voteid:string): Observable<AnswerVote> {
    return this.http.get<AnswerVote>(`http://localhost:4000/answervote/${voteid}`);
  }
   //add answer
  addAnswerVote(answervote: AnswerVote): Observable<AnswerVote> {
    return this.http.post<AnswerVote>(` http://localhost:4000/answervote/create`, answervote);
  }
  //update answer
  updateAnswerVote(answervote: UpdateAnswerVote , voteid:string): Observable<UpdateAnswerVote> {
    return this.http.put<UpdateAnswerVote>(`http://localhost:4000/answervote/update/$${voteid}`, answervote);
  }
  // updateAnsVote(answervote: AnswerVote):Observable<AnswerVote>{
  //   return this.http.put<AnswerVote>(`http://localhost:4000/answervote/update/${voteid.voteid}`, answervote);
  // }
  //delete answer
  deleteAnswerVote(voteid: string): Observable<void> {
    return this.http.delete<void>(`  http://localhost:4000/answervote/delete/${voteid}`);
  }

}

