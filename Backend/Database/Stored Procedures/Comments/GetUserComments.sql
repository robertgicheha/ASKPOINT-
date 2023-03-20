USE StackOverflow
GO


CREATE OR ALTER PROCEDURE sp_GetUserComments
    @userId VARCHAR(255)
AS
BEGIN
    SELECT * FROM comments WHERE user_id = @userId;
END

-- EXEC sp_GetUserComments @user_id = 'U002';
