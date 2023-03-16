CREATE PROCEDURE sp_GetAllUsers
AS
BEGIN
    SELECT user_id, username, email, Role, isDeleted, created_at, updatedAt
    FROM users
    WHERE isDeleted = 0;
END