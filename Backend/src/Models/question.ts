//Question Interface
class QuestionBody {
  questionid: string;
  question: string;
  body: string;
  created_at: string;
  userid: string;
  views: number;



  constructor(questionid: string,question:string ,body:string, created_at: string,  userid: string,views: number,) {
    this.questionid = questionid;
    this.question= question
    this.body = body;
    this.created_at = created_at;
    this.userid = userid;
    this.views = views;
}

}


export default QuestionBody