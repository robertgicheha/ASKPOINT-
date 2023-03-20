USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_IncreaseViews
    @questionId VARCHAR(255)
AS
BEGIN
    UPDATE questions
    SET views = views + 1
    WHERE questions_id = @questionId
    
     SELECT * FROM questions WHERE questions_id = @questionId;
END

-- EXEC  sp_IncreaseViews @questionId = 1


