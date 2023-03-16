CREATE PROCEDURE sp_UpdateComment
  @comment_id INT,
  @body TEXT
AS
BEGIN
  UPDATE comments
  SET body = @body,
      updatedAt = CURRENT_TIMESTAMP
  WHERE comment_id = @comment_id;
END;
