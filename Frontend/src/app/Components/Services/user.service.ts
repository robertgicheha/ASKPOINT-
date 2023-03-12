import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User, UserLogin} from '../../Interfaces/index'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  Users: User[] = []


  constructor(private http: HttpClient, private route: Router) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:4000/api/users/register`, user);
    // return this.http.post<User>('http://localhost:4000/users/register', user)
  }

  login(user: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('http://localhost:4000/api/users/login', user);
  }

  getUsers(): Observable<User[]> {
    // return this.Products
    return this.http.get<User[]>('http://localhost:4000/api/users')

  }
}
