USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_GetCommentsById
    @commentId VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM comments  WHERE comment_id = @commentId
END


-- EXEC sp_GetCommentsByQuestionId @QuestionId = '2';
