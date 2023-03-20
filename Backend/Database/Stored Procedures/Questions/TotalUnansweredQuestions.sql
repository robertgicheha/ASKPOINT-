USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_TotalUnansweredQuestions
    @questionId VARCHAR(255)
AS
BEGIN

SELECT COUNT(questions_id) FROM questions WHERE questions_id NOT IN (SELECT questions_id FROM answers);
    
END


