
CREATE OR ALTER PROCEDURE deleteUser
@userid VARCHAR ( 255 )
AS
BEGIN
    UPDATE users SET is_deleted = 1 WHERE userid = @userid
    SELECT * FROM users WHERE userid = @userid
END
