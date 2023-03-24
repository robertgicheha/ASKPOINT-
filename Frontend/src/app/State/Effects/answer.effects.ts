
// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { of } from 'rxjs';
// import { AnswerService } from '../../Services/Answer/answer.service';
// import * as AnswerActions from '../Actions/answer.actions';

// @Injectable()
// export class Effects {
//   ShowAnswer$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(AnswerActions.showAnswers),
//       mergeMap(() =>
//         this.answerService.getAnswers().pipe(
//           map((answers) =>
//             AnswerActions.showAnswersSuccessful({ answers })
//           ),
//           catchError((error) =>
//             of(AnswerActions.showAnswersFailed({ error: error.message }))
//           )
//         )
//       )
//     )
//   );

  // addAnswer$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AnswerActions.addAnswer),
  //     mergeMap(({ answers }) =>
  //       this.answerService.addAnswer().pipe(
  //         map((addedAnswer) =>
  //           AnswerActions.addAnswerSuccessful({ answers: addedAnswer })
  //         ),
  //         catchError((error) =>
  //           of(AnswerActions.addAnswerFailed({ error: error.message }))
  //         )
  //       )
  //     )
  //   )
  // );

//   constructor(
//     private actions$: Actions,
//     private answerService: AnswerService
//   ) { }
// }
