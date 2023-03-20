USE StackOverflow
GO


CREATE OR ALTER  PROCEDURE sp_UpdateUser(
    @userId  VARCHAR(255),
    @Name VARCHAR(255),
    @Email VARCHAR(255) ,
    @Password VARCHAR(255),
    @CreatedAt DATE,
    @ROLE VARCHAR(255) = 'user',
    @IsDeleted BIT = 0
)
AS
BEGIN
 IF EXISTS (SELECT * FROM users WHERE  user_id = @userId)
        UPDATE users SET username = @name, email = @Email, password = @Password, created_at = @CreatedAt, Role=@ROLE, isDeleted = @IsDeleted WHERE user_id = @userId
        SELECT * FROM users WHERE user_id = @userId
END

-- DROP PROCEDURE IF EXISTS sp_UpdateUser;