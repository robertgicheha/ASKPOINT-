USE StackOverflow
GO

CREATE OR ALTER  PROCEDURE sp_UpdateComment
  @commentId VARCHAR(255),
  @userId VARCHAR(255),
  @answerId VARCHAR(255),
  @CreatedAt DATE,
  @body TEXT
AS
BEGIN
 IF EXISTS (SELECT * FROM comments WHERE comment_id = @commentId)

  UPDATE comments

  SET 
       user_id = @userId,
       answer_id =@answerId,
       created_at = @CreatedAt,
       body = @body
  WHERE comment_id = @commentId;
    SELECT * FROM comments WHERE comment_id=@commentId
END;
