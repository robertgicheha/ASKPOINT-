USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_GetAllAnswerVotes
AS
BEGIN
    SELECT * FROM AnswerVote
END