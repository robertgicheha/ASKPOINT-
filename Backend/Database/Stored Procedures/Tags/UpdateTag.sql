USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_UpdateteTag
    @tagId VARCHAR ( 255 ),
    @Tag VARCHAR ( 255 ),
    @CreatedAt DATETIME
AS
BEGIN
    IF EXISTS (SELECT * FROM tags WHERE tag_id=@tagId)
        UPDATE tags SET tag_name=@Tag, created_at=@CreatedAt WHERE tag_id=@tagId
        
        SELECT * FROM tags WHERE tag_id = @tagId
        END
