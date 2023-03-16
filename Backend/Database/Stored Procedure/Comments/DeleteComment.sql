CREATE OR ALTER PROCEDURE sp_DeleteComment
    @comment_id INT
AS
BEGIN
    DELETE FROM comments WHERE comment_id = @comment_id;
END;


-- EXEC  sp_DeleteComment @comment_id=1;