CREATE PROCEDURE sp_GetAllTags
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT * FROM tags;
END


EXEC sp_GetAllTags;
