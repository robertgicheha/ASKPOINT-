
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { QuestionService } from '../../Services/Question/question.service';
import * as QuestionActions from '../Actions/question.action';
import { Question } from 'src/app/Interfaces';

@Injectable()
export class QuestionEffects {

   constructor(
    private actions$: Actions,
    private questionService: QuestionService
  ) { }
  showQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionActions.showQuestions),
      mergeMap(() =>
        this.questionService.getQuestions().pipe(
          map((questions) =>
            QuestionActions.showQuestionsSuccessful({ questions })
          ),
          catchError((error) =>
            of(QuestionActions.showQuestionsFailed({ error: error.message }))
          )
        )
      )
    )
  );

  // addQuestion$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(QuestionActions.addquestion),
  //     mergeMap(({ question }) =>
  //       this.questionService.addQuestion(question).pipe(
  //         map((addedQuestion) =>
  //           QuestionActions.addQuestionSuccessful({addedQuestion: })
  //         ),
  //         catchError((error) =>
  //           of(QuestionActions.addQuestionFailed({ error: error.message }))
  //         )
  //       )
  //     )
  //   )
  // );

 
}
