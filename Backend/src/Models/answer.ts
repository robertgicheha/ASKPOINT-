//AnswerInterface
class AnswerBody{
   
    answerid: string;
    answer: string;
    created_at: string;
    userid: string;
    questionid: string;
    is_accepted: string;



    constructor(answerid: string, answer:string, created_at: string,  userid: string, questionid: string, is_accepted:string) {
        this.answerid = answerid;
        this.answer = answer;
        this.created_at = created_at;
        this.userid = userid;
        this.questionid = questionid;
        this.is_accepted = is_accepted;
    }

    }


    export default AnswerBody