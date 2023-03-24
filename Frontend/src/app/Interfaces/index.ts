
export interface User{
  name:string;
  email:string;
  password:string;
  token:string;
  message:string;
  role:string;
}

export interface Message{
  name:string;
  token:string
  message:string;
  role:string;
}
export interface token{
  token:string;
}
export interface LoginUser{
  email:string
  password:string
  message:string
  role:string
  name:string
}

export interface LoginSuccess{
  message:string
  token:string
  role:string
  name:string
}

//Question
export interface Question {
  questionid: string;
  question: string;
  body: string;
}

export interface QuestionSuccess{
  token: string;
  message:string;
  question:string;
  body:string;
  userid:string;

}
//Add Question
export interface AddQuestion{
  question: string;
  body: string;
  // userid:string;
  // views:number;
  token:string;
  
}
//Answer
export interface Answer{
    answerid: string;
    answer: string;
    created_at: string;
    userid: string;
    questionid: string;
    is_accepted: string;
}
//add answer
export interface AddAnswer{
  answerid:string;
  answer: string;
  userid: string;
}
export interface AnswerSuccess{
  message:string;
  answer:string;
}
//question vote
export interface QuestionVote {
  voteid: string;
  vote: number;
  created_at: string;
  userid: string;
  questionid: string;

 
}
//Add vote

export interface AddQuestionVote {
  vote: number;
}

//Answe vote
export interface AnswerVote{
    voteid:string;
    created_at: string;
    userid: string;
    answerid: string;
    vote: number;
}
export interface UpdateAnswerVote{
  voteid:string;
  created_at: string;
  userid: string;
  answerid: string;
  vote: number;
}

//Add Answervote
export interface AddAnswerVote{
     vote:number;
}

//Comments
export interface Comment{
  commentid: string;
  comment: string;
  created_at: string;
  userid: string;
  answerid: string;
  is_deleted:string;
}

//Add comment
export interface AddComment{
     comment:string;
}

//tag
export interface Tag{
  tagid: string;
  tag: string;
  created_at: string;

 
}

//Add tag
export interface AddTag{
    tag:string
}

export interface QuestionState {
    questions: Question[];
    isLoading: boolean;
    error: string;
}

export interface AnswerState {
  questions: Question[];
  isLoading: boolean;
  error: string;
}
