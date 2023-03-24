import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../app.state';
import { authReducer, AuthState } from './user.reducer';
import { questionReducer, QuestionState } from './question.reducer';

export const reducers: ActionReducerMap<AppState> = {
    user: authReducer,
    question: questionReducer
};

export interface State {
    auth: AuthState;
    question: QuestionState;
}
