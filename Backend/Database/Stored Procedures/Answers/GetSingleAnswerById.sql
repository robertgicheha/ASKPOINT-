USE StackOverflow
GO

CREATE  OR ALTER PROCEDURE sp_GetAnswerById
    @answerId VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM answers
    WHERE answer_id = @answerId
    
END


-- EXEC sp_GetAnswerById @answerId = 1;
