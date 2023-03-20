USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_CreateTag
    @tagId VARCHAR ( 255 ),
    @Tag VARCHAR ( 255 ),
    @CreatedAt DATETIME
    
AS
BEGIN
   
        INSERT INTO tags (tag_id, tag_name, created_at) VALUES (@tagId, @Tag, @CreatedAt) 
        
        SELECT * FROM tags WHERE tag_id= @tagId
  
END