









import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, mergeMap, catchError } from "rxjs/operators";
import { AnswerVote } from "../../Interfaces/index";
import { AnswervoteService } from "../../Services/AnswerVote/answervote.service";
import * as answerVoteActions from "../Actions/answervote.actions";


@Injectable()
export class AnswerVoteEffects {
    
        constructor(private actions$: Actions, private answerVoteService: AnswervoteService) {}
    
        showAnswerVotes$ = createEffect(() =>
            this.actions$.pipe(
            ofType(answerVoteActions.showAnswerVotes),
            mergeMap(() =>
                this.answerVoteService.getAnswerVotes().pipe(
                map((answerVotes: AnswerVote[]) => answerVoteActions.showAnswerVotesSuccessful({ answerVotes })),
                catchError(async (error) => answerVoteActions.showAnswerVotesFailed({ error }))
                )
            )
            )
        );
        }