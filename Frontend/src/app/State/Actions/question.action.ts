import { createAction, props } from '@ngrx/store';
import { Question } from '../../Interfaces/index';

export const showQuestions = createAction('[Question] Load Questions');

export const showQuestionsSuccessful = createAction(
  '[Question] Show Questions Successful',
  props<{ questions: Question[] }>()
);

export const showQuestionsFailed = createAction(
  '[Question] Show Questions Failure',
  props<{ error: string }>()
);

export const addquestion = createAction(
  '[Question] Add Question',
  props<{ question: Question }>()
);

export const addQuestionSuccessful= createAction(
  '[Question] Add Question Succeded',
  props<{ question: Question }>()
);

export const addQuestionFailed= createAction(
  '[Question] Add Question Failed',
  props<{ error: string }>()
);

export const upvoteQuestion = createAction(
  '[Questions] Upvote Question',
  props<{ questionid: string, userid: string }>()
);




























// export const updateQuestion = createAction(
//   '[Question] Update Question',
//   props<{ question: Question }>()
// );

// export const updateQuestionSuccessful = createAction(
//   '[Question] Update Question Success',
//   props<{ question: Question }>()
// );

// export const updateQuestionFailed = createAction(
//   '[Question] Update Question Failure',
//   props<{ error: string }>()
// );

// export const deleteQuestion = createAction(
//   '[Question] Delete Question',
//   props<{ id: string }>()
// );

// export const deleteQuestionSuccessful = createAction(
//   '[Question] Delete Question Success',
//   props<{ id: string }>()
// );

// export const deleteQuestionFailed = createAction(
//   '[Question] Delete Question Failed',
//   props<{ error: string }>()
// );
