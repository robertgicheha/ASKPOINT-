USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_DeleteCcommentbyUserId
  @userId VARCHAR(255)
AS
BEGIN
  DELETE FROM comments WHERE user_id = @userId

  SELECT * FROM comments 
 
END

-- EXEC  sp_DeleteCcommentbyUserId @user_id='U002';