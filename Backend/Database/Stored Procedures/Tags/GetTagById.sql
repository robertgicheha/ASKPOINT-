USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_GetTagById
    @tagId VARCHAR ( 255 )
AS
BEGIN
    SELECT * FROM tags WHERE tag_id=@tagId
END