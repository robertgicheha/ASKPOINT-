USE StackOverflow
GO



CREATE OR ALTER  PROCEDURE sp_GetTotalQuestionsbyUser
  @userId VARCHAR(255)
AS
BEGIN
  SELECT COUNT(*) AS total_questions FROM questions WHERE user_id = @userId;

   SELECT *  FROM answers WHERE user_id = @userId


END;

-- EXEC sp_GetTotalQuestionsbyUser @user_id = 'U002';
