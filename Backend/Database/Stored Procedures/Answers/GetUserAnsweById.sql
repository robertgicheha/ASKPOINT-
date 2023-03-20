USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_GetUserAnswerbyId
  @userId VARCHAR(255)
AS
BEGIN
  SELECT *
  FROM answers WHERE user_id = @userId;
END;


-- EXEC  sp_GetUserAnswerbyId @user_id = 'U002';
