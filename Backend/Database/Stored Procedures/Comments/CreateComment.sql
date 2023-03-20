USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_CreateComment 
  @commentId VARCHAR(255),
  @userId VARCHAR(255),
  @answerId VARCHAR(255),
  @CreatedAt DATE,
  @body TEXT
AS
BEGIN
    INSERT INTO comments (comment_id , user_id, answer_id,created_at,body) 
    VALUES (@commentId , @userId , @answerId , @CreatedAt , @body);

      SELECT * FROM comments WHERE comment_id=@commentId
END;

