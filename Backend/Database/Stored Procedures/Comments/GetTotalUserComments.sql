CREATE OR ALTER PROCEDURE sp_GetUserCommentCount
  @user_id VARCHAR(255)
AS
BEGIN
  SELECT COUNT(comment_id) as comment_count
  FROM comments
  WHERE user_id = @user_id
END


-- EXEC sp_GetUserCommentCount @user_id= 'U002';
