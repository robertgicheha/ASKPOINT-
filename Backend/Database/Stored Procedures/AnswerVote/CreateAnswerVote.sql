USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_CreateAnswerVote
    @voteId VARCHAR ( 255 ),
    @Value INT,
    @CreatedAt DATETIME,
    @userId VARCHAR ( 255 ),
    @answerId VARCHAR ( 255 )
AS
BEGIN

        INSERT INTO AnswerVote (vote_id, value, created_at, user_id, answer_id)

        VALUES (@voteId, @Value, @CreatedAt, @userId, @answerId)
        
        SELECT * FROM AnswerVote WHERE vote_id = @voteId   
    END

