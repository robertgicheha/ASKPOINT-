
CREATE OR ALTER PROCEDURE sp_DeleteUser(@userId VARCHAR(255))
AS

BEGIN

UPDATE users SET isDeleted='1' WHERE user_id=@userId
END
GO

