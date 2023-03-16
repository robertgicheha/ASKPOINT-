CREATE PROCEDURE sp_GetCommentsByQuestionId
    @QuestionId INT
AS
BEGIN
    SELECT *
    FROM comments
    WHERE questions_id = @QuestionId
END


EXEC sp_GetCommentsByQuestionId @QuestionId = '2';
