import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  LoginSuccess, LoginUser, Message, User,  } from '../Interfaces/index';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private route: Router) {}
//registers the users
  registerUser(user: User): Observable<User> {
  return this.http.post<User>(` http://localhost:4000/user/register`,user);
}

loginUser(user:LoginUser ):Observable<LoginSuccess> {
  return this.http.post<LoginSuccess>('http://localhost:4000/user/login',user);

}

getUsers(): Observable<User[]> {
  return this.http.get<User[]>('http://localhost:4000/user/all/all')

}
}
