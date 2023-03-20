USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_UpdateQuestionVote
    @voteId VARCHAR ( 255 ),
    @Value INT,
    @CreatedAt DATETIME,
    @userId VARCHAR ( 255 ),
    @questionId VARCHAR ( 255 )
AS
BEGIN
    IF EXISTS (SELECT * FROM QuestionVote WHERE  vote_id =@voteId)
    
        UPDATE QuestionVote SET
             value = @Value,
            created_at = @CreatedAt,
            user_id = @userId,
            questions_id = @questionId
        WHERE  vote_id =@voteId
        
        SELECT * FROM QuestionVote WHERE  vote_id =@voteId

    END