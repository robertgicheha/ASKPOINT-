CREATE PROCEDURE sp_GetTotalTags
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT COUNT(tag_id) FROM tags;
END

EXEC sp_GetTotalTags;
