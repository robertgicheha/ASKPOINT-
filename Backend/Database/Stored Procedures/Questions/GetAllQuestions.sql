USE StackOverflow
GO

CREATE  OR ALTER  PROCEDURE sp_GetAllQuestions
AS
BEGIN
    SELECT * FROM questions
END