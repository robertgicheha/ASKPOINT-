USE StackOverflow
GO

CREATE OR ALTER  PROCEDURE sp_GetUserProfile(@userId VARCHAR(255))
AS
BEGIN
SELECT profile_id ,user_id ,display_name ,title,location, about, GitHub,LinkedIn
 FROM profile_info WHERE user_id = @userId;
END


-- EXEC sp_GetUserProfile @userId = 'U002'

DROP PROCEDURE sp_GetUserProfile