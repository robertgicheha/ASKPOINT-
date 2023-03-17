
CREATE PROCEDURE sp_RemoveUserFromDatabase (@userId VARCHAR(255))
AS
BEGIN
    DELETE 
    FROM users
    WHERE user_id = @userId
END

EXEC sp_RemoveUserFromDatabase @userId='U004'