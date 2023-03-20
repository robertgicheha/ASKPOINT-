USE StackOverflow
GO


CREATE  PROCEDURE sp_GetUserbyId (@userId  VARCHAR(255))
AS
BEGIN
    SELECT *
    FROM users
    WHERE user_id = @userId
END

