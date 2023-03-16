CREATE PROCEDURE sp_UpdateUser(
    @userId  VARCHAR(255),
    @Name NVARCHAR(255) = NULL,
    @Email NVARCHAR(255) = NULL,
    @Password NVARCHAR(255) = NULL,
    @Role VARCHAR = 'user',
    @isDeleted BIT = 0
)
AS
BEGIN
    UPDATE users
        SET username = COALESCE(@Name, username),
        Email = COALESCE(@Email, email),
        password = COALESCE(@Password, password),
        Role = COALESCE(@Role, Role),
        isDeleted = COALESCE(@isDeleted, isDeleted),
        updatedAt = GETDATE()
        WHERE user_id= @userId;
    SELECT *
    FROM users
    WHERE user_id = @userId;
END

DROP PROCEDURE IF EXISTS sp_UpdateUser;