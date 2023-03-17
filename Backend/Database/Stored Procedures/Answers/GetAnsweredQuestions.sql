CREATE PROCEDURE sp_GetAnsweredQuestions
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT questions_id, COUNT(answer_id) as AnswerCount
    FROM answers
    GROUP BY questions_id
    HAVING COUNT(answer_id) > 0;
END

EXEC sp_GetAnsweredQuestions;