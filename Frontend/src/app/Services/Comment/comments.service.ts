import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../../Interfaces';
import { Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private baseUrl = ' http://localhost:4000/comment';

  constructor(private http: HttpClient) { }

  //get answers
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`  http://localhost:4000/comment/getall`);
  }
  //get answer by id
  getCommentById(commentid:string): Observable<Comment> {
    return this.http.get<Comment>(` http://localhost:4000/comment/${commentid}`);
  }
   //add answer
  addCommet(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(` http://localhost:4000/comment/create`, comment);
  }
  //update answer
  updateCommet(comment: Comment, commentid:string): Observable<Comment> {
    return this.http.put<Comment>(`http://localhost:4000/comment/update/${commentid}`, comment);
  }
  //delete answer
  deleteComment(commentid: string): Observable<void> {
    return this.http.delete<void>(`  http://localhost:4000/comment/delete/${commentid}`);
  }
}
