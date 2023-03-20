USE StackOverflow
GO
CREATE OR ALTER PROCEDURE sp_GetAnswerVoteById
    @voteId VARCHAR ( 255 )
AS
BEGIN
    SELECT * FROM AnswerVote WHERE vote_id =  @voteId
END
