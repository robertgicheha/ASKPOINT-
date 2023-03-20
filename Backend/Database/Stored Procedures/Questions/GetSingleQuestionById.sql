USE StackOverflow
GO

CREATE OR ALTER  PROCEDURE sp_GetQuestionById
  @questionId VARCHAR(255)
AS
BEGIN

  SELECT * FROM questions WHERE questions_id = @questionId;

   SELECT * FROM questions WHERE questions_id = @questionId
END


-- EXEC sp_GetQuestionById @QuestionId = 1;
