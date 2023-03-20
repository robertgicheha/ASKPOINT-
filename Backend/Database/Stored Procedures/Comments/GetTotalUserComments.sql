USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_GetUserCommentCount
  @userId VARCHAR(255)
AS
BEGIN
  SELECT COUNT(comment_id) as comment_count FROM comments
  WHERE user_id = @userId

  SELECT * FROM comments  WHERE user_id = @userId

END


-- EXEC sp_GetUserCommentCount @user_id= 'U002';
