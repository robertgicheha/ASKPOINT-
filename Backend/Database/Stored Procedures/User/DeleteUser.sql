
CREATE OR ALTER PROCEDURE deleteUser
@id VARCHAR ( 255 )
AS
BEGIN
    UPDATE users SET is_deleted = 1 WHERE userid = @id
    SELECT * FROM users WHERE userid = @id
END
