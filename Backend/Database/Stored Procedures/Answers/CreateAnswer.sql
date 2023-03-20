USE StackOverflow
GO

CREATE OR ALTER  PROCEDURE  sp_CraeteAnswer
   @answerId VARCHAR(255),
  @questionsId VARCHAR(255),
  @userId VARCHAR(255),
  @Title VARCHAR(255),
  @CreatedAt DATE,
  @Body TEXT

AS
BEGIN
  INSERT INTO answers (questions_id,  user_id, title, body, created_at, answer_id)

  VALUES (@questionsId, @userId, @Title, @Body, @CreatedAt ,@answerId)

      SELECT *  FROM answers WHERE answer_id = @answerId

END;

-- EXEC  sp_CraeteAnswer @questionsId = 1, @tagId = 2, @TagName='CSS' , @userId ='U002', @answerTitle = 'My Answer', @answerBody = 'This is my answer to the question';
