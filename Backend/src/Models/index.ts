

export class Question {

    constructor(public questionid: string, public question: string, public desccription: string, public created_at: Date, userid: string) { }

}


export class Answer {
    constructor(public answerid: string, public answer: string, public created_at: Date, public userId: string, public questionid: string, is_accepted: string) { }
}


export class User {
    constructor(public userid: string,public name: string, public email: string, public password: string, public created_at: Date, public role: boolean, is_deleted: boolean, public forgot_sent: boolean,public welcome_sent: boolean,) { }
}


export interface DecodedData {
    userid: string,
    email: string,
    created_at : Date,
    is_sent: boolean,
    role: boolean,
    is_deleted: boolean,
    iat: number,
    exp: number
}





