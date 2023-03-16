
CREATE PROCEDURE sp_GetTotalQuestionsbyUser
  @user_id VARCHAR(255)
AS
BEGIN
  SELECT COUNT(*) AS total_questions
  FROM questions
  WHERE user_id = @user_id;
END;

EXEC sp_GetTotalQuestionsbyUser @user_id = 'U002';
