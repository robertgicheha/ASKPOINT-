
import { createAction, props } from '@ngrx/store';
import { QuestionVote } from '../../Interfaces/index';

export const showQuestionVote = createAction('[QuestionVote] Show QuestionVotes');

export const showQuestionVotes = createAction(
    '[QuestionVote] Show AnswerVotes',
);

export const showQuestionVotesSuccessful = createAction(
    '[QuestionVote] Show QuestionVote Successful',
    props<{questionote: QuestionVote[]}>()
);

export const showQuestionVotesFailed = createAction(
    '[QuestionVote] show QuestionVotes Failed',
    props<{error: any}>()
);
