import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
// import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.authService.getauthStatus().then((status: boolean) => {
      if (localStorage.getItem('token') != undefined) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    });
  }
}

//  canActivate(): boolean {
//       if (this.UserService.isLoggedIn) {
//         return true;
//       } else {
//         this.router.navigate(['/login']);
//         return false;
//       }
//     }
