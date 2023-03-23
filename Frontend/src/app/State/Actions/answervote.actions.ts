
import { createAction, props } from '@ngrx/store';
import { AnswerVote } from '../../Interfaces/index';

export const showAnswerVote = createAction('[AnswerVote] Show AnswerVotes');

export const showAnswerVotes = createAction(
    '[AnswerVote] Show AnswerVotes',
);

export const showAnswerVotesSuccessful = createAction(
    '[AnswerVote] Show AnswerVotes Successful',
    props<{answerVotes: AnswerVote[]}>()
);

export const showAnswerVotesFailed = createAction(
    '[AnswerVote] show AnswerVotes Failed',
    props<{error: any}>()
);
