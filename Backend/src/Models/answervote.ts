//AnswerVoteInterface
export interface AnswerVoteBody{
    voteId: string;
    userId: string;
    answerId: string;
    Value: number;
    CreatedAt: Date;

    }