USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_UpdateQuestion
    @questionId VARCHAR(255),
    @Title VARCHAR(255),
    @Tag VARCHAR(255),
    @Body VARCHAR(255),
    @CreatedAt DATE,
    @UserId VARCHAR(255)
AS
BEGIN
 IF EXISTS (SELECT * FROM questions WHERE questions_id = @questionId)

    UPDATE questions
    SET title = @Title, body = @Body, tag_name = @Tag , created_at=@CreatedAt, @userId = user_id
    WHERE questions_id = @questionId;

    SELECT * FROM questions WHERE questions_id = @questionId
    
END
