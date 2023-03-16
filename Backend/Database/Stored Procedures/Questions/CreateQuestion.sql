
CREATE OR ALTER PROCEDURE sp_createQuestion
  @questionID VARCHAR(255),
  @Title varchar(255),
  @Tag VARCHAR(255),
  @Body VARCHAR(255),
  @UserID VARCHAR(255)
  
AS
  BEGIN
  INSERT INTO questions ( questions_id,tag_name,question_title, question_body, user_id)
  VALUES (@questionID, @Title, @Tag, @Body, @UserID);
END;
GO

-- SELECT * FROM questions