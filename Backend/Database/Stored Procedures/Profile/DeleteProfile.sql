USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_deleteProfile
 (@userId VARCHAR(255))
AS
BEGIN
    DELETE FROM users
    WHERE user_id = @userId

    SELECT * FROM USERS WHERE user_id = @userId

END