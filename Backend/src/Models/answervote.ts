//AnswerVoteInterface
class AnswerVoteBody{
    voteid: string;
    created_at: string;
    userid: string;
    answerid: string;
    vote: number;

    

    constructor(voteid: string,  created_at: string, userid: string, answerid: string ,vote: number,) {
        this.voteid = voteid;
        this.created_at = created_at;
        this.userid = userid;
        this.answerid =answerid;
        this.vote = vote;
    }


    }
    
    export default AnswerVoteBody