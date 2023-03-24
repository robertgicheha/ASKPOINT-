import { createReducer, on } from '@ngrx/store';
import { LoginUser, User } from '../../Interfaces/index';
import * as AuthActions from '../Actions/user.actions';

export interface AuthState {
  user: User | null;
  error: string | null;
  loguser: LoginUser | null;
}

export const initialState: AuthState = {
  user: null,
  error: null,
  loguser: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccessful, (state, { loguser }) => ({ ...state, loguser, error: null })),
  on(AuthActions.loginFailed, (state, { error }) => ({ ...state, user: null, error })),
  on(AuthActions.logoutSuccessful, state => ({ ...state, user: null, error: null })),
  on(AuthActions.logoutFailed, (state, { error }) => ({ ...state, error })),
);

export const selectAuthState = (state: { auth: AuthState }) => state.auth;
export const selectCurrentUser = (state: { auth: AuthState }) => state.auth.user;
export const selectAuthError = (state: { auth: AuthState }) => state.auth.error;
