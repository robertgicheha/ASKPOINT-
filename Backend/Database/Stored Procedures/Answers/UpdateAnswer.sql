USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_Updateanswer
  @answerId VARCHAR(255),
  @questionsId VARCHAR(255),
  @userId VARCHAR(255),
  @Title VARCHAR(255),
  @CreatedAt DATe,
  @Body TEXT

AS
BEGIN

  IF EXISTS (SELECT * FROM answers WHERE answer_id = @answerId)

  UPDATE answers

  SET title = @Title,
      body = @Body,
     created_at =@CreatedAt,
     user_id = @userId
  WHERE answer_id = @answerId;
  
   SELECT * FROM answers WHERE answer_id = @answerId
END;

-- EXEC sp_Updateanswer @answer_id = 1, @answer_title = 'New Answer Title', @tag_name = 'New Tag Name', @answer_body = 'New Answer Body', @upvotes = 10, @downvotes = 2;
