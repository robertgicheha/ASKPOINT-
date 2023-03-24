import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthActions from '../Actions/user.actions';
import { UserService } from '../../Services/user.service';


@Injectable()
export class AuthEffects {
  constructor(@Inject(Actions) private actions$: Actions, private userService: UserService) { }


  // login$ = createEffect(() => this.actions$.pipe(
  //   ofType(AuthActions.login),
  //   exhaustMap(({ email, password }) =>
  //     this.userService.login({ email, password }).pipe(
  //       map(loguser => AuthActions.loginSuccessful({ loguser })),
  //       catchError(error => of(AuthActions.loginFailed({ error: error.message })))
  //     )
  //   )
  // ));


  // login$ = createEffect(() => this.actions$.pipe(
  //   ofType(AuthActions.login),
  //   exhaustMap(({ email, password }) =>
  //     this.userService.login({ email, password }).pipe(
  //       map(loggedInUser => AuthActions.loginSuccessful({ loggedInUser })),
  //       catchError(error => of(AuthActions.loginFailed({ error: error.message })))
  //     )
  //   )
  // ));

}

