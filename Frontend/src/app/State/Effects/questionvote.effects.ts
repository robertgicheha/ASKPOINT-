// import { createEffect, ofType, Actions } from "@ngrx/effects";
// import { Injectable } from "@angular/core";
// import { map, mergeMap, catchError } from "rxjs/operators";
// import { QuestionVote } from "../../Interfaces/index";
// import { QuestionvoteService } from "../../Services/QuestionVote/questionvote.service";
// import * as questionVoteActions from "../Actions/questionvote";



// @Injectable()
// export class QuestionVoteEffects {

//     constructor(private actions$: Actions, private questionVoteService: QuestionvoteService) { }

//     showQuestionVotes$ = createEffect(() =>
//         this.actions$.pipe(
//             ofType(questionVoteActions.showQuestionVotes),
//             mergeMap(() =>
//                 this.questionVoteService.getQuestionVotes().pipe(
//                     map((questionVotes: QuestionVote[]) => questionVoteActions.showQuestionVotesSuccessful({ questionVotes })),
//                     catchError(async (error) => questionVoteActions.showQuestionVotesFailed({ error }))
//                 )
//             )
//         )
//     );
// }


