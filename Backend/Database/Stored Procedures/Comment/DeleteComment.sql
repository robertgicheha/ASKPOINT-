
CREATE OR ALTER PROCEDURE deleteComment
    @commentid VARCHAR ( 255 )
AS
BEGIN
    DELETE comments   WHERE commentid = @commentid
    -- SELECT * FROM comments WHERE commentid = @commentid
END