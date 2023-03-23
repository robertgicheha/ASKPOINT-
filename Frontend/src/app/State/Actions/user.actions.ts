import { createAction, props } from '@ngrx/store';
import { LoginUser, User } from '../../Interfaces/index';




export const login = createAction('[Auth] Login', props<{ email: string, password: string }>());
export const loginSuccessful= createAction('[Auth] Login Successful', props<{ loguser: LoginUser }>());
export const loginFailed = createAction('[Auth] Login Failed', props<{ error: string }>());




export const logout = createAction('[Auth] Logout');
export const logoutSuccessful = createAction('[Auth] Logout Successful');
export const logoutFailed = createAction('[Auth] Logout Failed', props<{ error: string }>());
