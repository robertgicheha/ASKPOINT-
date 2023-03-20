USE StackOverflow
GO


CREATE PROCEDURE sp_GetUserbyEmail (@Email VARCHAR(255))
AS
BEGIN
    SELECT *
    FROM users
    WHERE email = @Email
END