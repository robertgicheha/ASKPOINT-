USE StackOverflow
GO

CREATE PROCEDURE sp_DeleteQuestion
    @questionId VARCHAR(255)
AS
BEGIN

    DELETE FROM questions
    WHERE questions_id = @questionId;

  SELECT * FROM questions WHERE questions_id = @questionId
END