CREATE or ALTER PROCEDURE sp_GetTotalUnansweredQuestions
AS
BEGIN

 SELECT COUNT(answer_id) FROM answers
    
   
END

-- EXEC sp_GetTotalUnansweredQuestions;


