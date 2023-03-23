import { createEffect, ofType,Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, mergeMap, catchError } from "rxjs/operators";
import * as CommentActions from "../Actions/comments.actions";
import { CommentsService } from "../../Services/Comment/comments.service";


@Injectable()
export class CommentEffects {
    constructor(private actions$: Actions, private commentService: CommentsService) {}
    
    showComments$ = createEffect(() =>
        this.actions$.pipe(
        ofType(CommentActions.showComments),
        mergeMap(() =>
            this.commentService.getComments().pipe(
            map((comments) => CommentActions.showCommentsSuccessful({ comments })),
            catchError(async (error) => CommentActions.showCommentsFailed({ error }))
            )
        )
        )
    );
    }

