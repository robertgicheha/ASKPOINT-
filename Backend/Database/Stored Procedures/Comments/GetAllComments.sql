USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_GetAllComments
AS
BEGIN
    SELECT * FROM comments
END
