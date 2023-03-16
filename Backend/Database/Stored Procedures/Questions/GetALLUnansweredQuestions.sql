CREATE  OR ALTER PROCEDURE sp_GetUnansweredQuestions
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT questions_id
    FROM questions
    WHERE questions_id NOT IN (SELECT questions_id FROM answers)
END

EXEC sp_GetUnansweredQuestions;
