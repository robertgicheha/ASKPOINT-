
CREATE OR ALTER PROCEDURE getCommentById
    @id VARCHAR ( 255 )
AS
BEGIN
    SELECT * FROM comments WHERE commentid = @id
END