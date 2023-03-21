class CommentBody{
    commentid: string;
    comment: string;
    created_at: string;
    userid: string;
    answerid: string;
    is_deleted:string;



    constructor(comentid: string, comment: string,created_at: string,  userid: string, answer_id: string,is_deleted:string) {
        this.commentid = comentid;
        this.comment = comment;
        this.created_at = created_at;
        this.userid = userid;
        this.answerid =answer_id;
        this.is_deleted= is_deleted;
    
    }
   
    }

    export default CommentBody