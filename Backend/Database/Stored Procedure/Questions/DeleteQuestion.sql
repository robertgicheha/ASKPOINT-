CREATE PROCEDURE sp_DeleteQuestion
    @QUESTIONID VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;

    DELETE FROM questions
    WHERE questions_id = @QUESTIONID;
END