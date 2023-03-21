class QuestionVoteBody{

    voteid: string;
    vote: number;
    created_at: string;
    userid: string;
    questionid: string;


    constructor(voteid: string, vote: number, created_at: string,  userid: string, questionid: string) {
        this.voteid = voteid;
        this.vote = vote;
        this.created_at = created_at;
        this.userid = userid;
        this.questionid = questionid;
    }


    }


export default QuestionVoteBody