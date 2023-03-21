
CREATE OR ALTER PROCEDURE getTagById
    @tagid VARCHAR ( 255 )
AS
BEGIN
    SELECT * FROM tags WHERE tagid = @tagid
END