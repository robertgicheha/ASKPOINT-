CREATE OR ALTER PROCEDURE sp_UpdateQuestion
    @QuestionID VARCHAR(255),
    @Title VARCHAR(255),
     @Tag VARCHAR(255),
    @Body VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE questions
    SET question_title = @Title, question_body = @Body, tag_name = @Tag
    WHERE questions_id = @QuestionID;
    
END
