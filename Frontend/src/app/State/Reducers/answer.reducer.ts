import { createReducer,on  } from "@ngrx/store";
import { Answer } from "../../Interfaces/index";
import * as AnswerActions from "../Actions/answer.actions"


export interface AnswerState {
    answers: Answer[];
    loading: boolean;
    error: any;
}

export const initialState: AnswerState = {
    answers: [],
    loading: false,
    error: null
}

export const answerReducer = createReducer (
    initialState,
    on(AnswerActions.showAnswers, state => ({
        ...state,
        loading: true
    })),
    on(AnswerActions.showAnswersSuccessful, (state, {answers}) => ({
        ...state,
        answers: [...answers],
        loading: false,
        error: null
    })),
    on(AnswerActions.showAnswersFailed, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),
)