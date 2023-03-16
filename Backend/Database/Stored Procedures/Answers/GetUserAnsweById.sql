CREATE PROCEDURE sp_GetUserAnswerbyId
  @user_id VARCHAR(255)
AS
BEGIN
  SELECT *
  FROM answers
  WHERE user_id = @user_id;
END;


EXEC  sp_GetUserAnswerbyId @user_id = 'U002';
