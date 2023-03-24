import { createReducer, on } from '@ngrx/store';
import { Question } from '../../Interfaces/index';
import * as QuestionActions from '../Actions/question.action';

export interface QuestionState {
  questions: Question[];
  isLoading: boolean;
  error: string;
}

export const initialState: QuestionState = {
  questions: [],
  isLoading: false,
  error: ''
};

export const questionReducer = createReducer(
  initialState,
  on(QuestionActions.showQuestions, (state) => ({
    ...state,
    isLoading: true
  })),
  on(QuestionActions.showQuestionsSuccessful, (state, { questions }) => ({
    ...state,
    isLoading: false,
    questions
  })),
  on(QuestionActions.showQuestionsFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(QuestionActions.addquestion, (state) => ({
    ...state,
    isLoading: true
  })),
  on(QuestionActions.addQuestionSuccessful, (state, { question }) => ({
    ...state,
    isLoading: false,
    questions: [...state.questions, question]
  })),
  on(QuestionActions.addQuestionFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
);