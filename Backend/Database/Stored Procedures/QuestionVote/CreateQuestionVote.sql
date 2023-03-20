USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_CreateQuestionVote
    @voteId VARCHAR ( 255 ),
    @Value INT,
    @CreatedAt DATETIME,
    @userId VARCHAR ( 255 ),
    @questionId VARCHAR ( 255 )
AS
BEGIN

        INSERT INTO QuestionVote (vote_id, value, created_at, user_id, questions_id)
        VALUES (@voteId, @Value, @CreatedAt, @userId, @questionId)
        
        SELECT * FROM QuestionVote WHERE vote_id = @voteId   
    END

