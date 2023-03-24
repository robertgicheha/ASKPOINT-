import { createAction, props } from "@ngrx/store";
import { Comment } from "../../Interfaces/index";

export const showComment = createAction('[Comment] Show Comments');

export const showComments = createAction(
    '[Comment] show Comments',
);

export const showCommentsSuccessful = createAction(
    '[Comment] Load Comments Successful',
    props<{comments: Comment[]}>()
);


export const showCommentsFailed = createAction(
    '[Comment] Load Comments Failed',
    props<{error: any}>()
);
