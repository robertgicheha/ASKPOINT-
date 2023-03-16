CREATE OR ALTER PROCEDURE sp_DeleteCcommentbyUserId
  @user_id VARCHAR(255)
AS
BEGIN
  DELETE FROM comments
  WHERE user_id = @user_id 
END

EXEC  sp_DeleteCcommentbyUserId @user_id='U002';