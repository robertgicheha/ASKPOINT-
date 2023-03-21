

CREATE OR ALTER PROCEDURE deleteTag
    @tagid VARCHAR ( 255 )
AS
BEGIN
    DELETE tags WHERE tagid = @tagid
    SELECT * FROM tags WHERE tagid = @tagid
END