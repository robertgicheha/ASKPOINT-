USE StackOverflow
GO


CREATE  OR ALTER PROCEDURE sp_GetUnansweredQuestions
AS
BEGIN
    SELECT questions_id FROM questions WHERE questions_id NOT IN (SELECT questions_id FROM answers)

     SELECT * FROM questions 

END

-- EXEC sp_GetUnansweredQuestions;
