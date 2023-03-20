USE StackOverflow
GO



CREATE OR ALTER PROCEDURE sp_GetAllAnswers
AS
BEGIN
    SELECT *  FROM answers
END


-- EXEC sp_GetAllAnswers
