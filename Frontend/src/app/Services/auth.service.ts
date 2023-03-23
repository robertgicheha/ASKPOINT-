
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // role: any;
  // name: any;

  constructor(private router: Router, private userService:UserService) { }

  isRegistered = false
  isLoggedIn = false
  name = ''
  role = ''
  
  getauthStatus(): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn)
      }, 10)
    })
    return promise;
  }
  getRole() {
    return this.role
  }

  setRole(role: string) {
    this.role = role
  }
  login() {
    this.isLoggedIn = true
    alert('Logged In Successfully to AskPoint ' + this.name + '');
    this.router.navigate(['/questions'])
  }

  getName() {
    return this.name
  }

  setName(name: string) {
    this.name = name
  }
  

  getregisterStatus(): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isRegistered)
      }, 10)
    })
    return promise;
  }

  

  register() {
    this.isRegistered = true
    alert('Successfully registered on AskPoint. Welcome ' + this.name + '');
    // this.router.navigate(['/login'])

  }

  
  logout() {
    this.isLoggedIn = false
    this.router.navigate(['/login'])
    localStorage.removeItem('token')
  }
}












