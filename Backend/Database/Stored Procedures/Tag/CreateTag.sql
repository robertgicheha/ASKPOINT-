

CREATE OR ALTER PROCEDURE createTag
    @tagid VARCHAR ( 255 ),
    @tag VARCHAR ( 255 ),
    @created_at DATETIME
    
AS
BEGIN
    IF EXISTS (SELECT * FROM tags WHERE tagid = @tagid)
    BEGIN
        UPDATE tags SET tag = @tag, created_at = @created_at WHERE tagid = @tagid
        SELECT * FROM tags WHERE tagid = @tagid
    END
    ELSE
    BEGIN
        INSERT INTO tags (tagid, tag, created_at) VALUES (@tagid, @tag,  @created_at)
        SELECT * FROM tags WHERE tagid = @tagid
    END
END