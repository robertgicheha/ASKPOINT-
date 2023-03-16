CREATE OR ALTER PROCEDURE sp_GetUserComments
    @user_id VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;

    SELECT * FROM comments WHERE user_id = @user_id;
END

EXEC sp_GetUserComments @user_id = 'U002';
