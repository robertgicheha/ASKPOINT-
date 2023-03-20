USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_UpdateAnswerVote
    @voteId VARCHAR ( 255 ),
    @Value INT,
    @CreatedAt DATETIME,
    @userId VARCHAR ( 255 ),
    @answerId VARCHAR ( 255 )
AS
BEGIN
    IF EXISTS (SELECT * FROM AnswerVote WHERE  vote_id =@voteId)
    
        UPDATE AnswerVote SET
             value = @Value,
            created_at = @CreatedAt,
            user_id = @userId,
            answer_id = @answerId
        WHERE  vote_id =@voteId
        
        SELECT * FROM AnswerVote WHERE  vote_id =@voteId

    END