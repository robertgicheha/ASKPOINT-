USE StackOverflow
GO
CREATE OR ALTER PROCEDURE sp_createQuestion
  @questionId VARCHAR(255),
  @Title varchar(255),
  @Tag VARCHAR(255),
  @Body VARCHAR(255),
  @CreatedAt DATE,
  @UserId VARCHAR(255)
  
AS
  BEGIN
  INSERT INTO questions ( questions_id, title, tag_name, body, created_at, user_id)
  VALUES (@questionId, @Title, @Tag, @Body, @CreatedAt, @UserId);
  
   SELECT * FROM questions WHERE questions_id = @questionId
END;


-- SELECT * FROM questions