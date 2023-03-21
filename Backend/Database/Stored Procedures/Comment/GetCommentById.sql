
CREATE OR ALTER PROCEDURE getCommentById
    @commentid VARCHAR ( 255 )
AS
BEGIN
    SELECT * FROM comments WHERE commentid = @commentid
END