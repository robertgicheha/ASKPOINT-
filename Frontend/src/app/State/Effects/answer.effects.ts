
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AnswerService } from '../../Services/Answer/answer.service';
import * as AnswerActions from '../Actions/answer.actions';

@Injectable()
export class AnswerEffects {
  constructor(
    private actions$: Actions,
    private answerService: AnswerService
  ) { }
  ShowAnswer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AnswerActions.showAnswers),
      mergeMap(() =>
        this.answerService.getAnswers().pipe(
          map((answers) =>
            AnswerActions.showAnswersSuccessful({ answers })
          ),
          catchError((error) =>
            of(AnswerActions.showAnswersFailed({ error: error.message }))
          )
        )
      )
    )
  );

}
