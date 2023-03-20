USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_DeleteTag
    @tagId VARCHAR ( 255 )
AS
BEGIN
   DELETE tags where tag_id =@tagId
   
    SELECT * FROM tags WHERE tag_id =@tagId
END