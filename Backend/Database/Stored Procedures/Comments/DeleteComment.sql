USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_DeleteComment
    @commentId VARCHAR(255)
AS
BEGIN
    DELETE FROM comments WHERE comment_id = @commentId;
END;


-- EXEC  sp_DeleteComment @comment_id=1;