USE StackOverflow
GO


CREATE OR ALTER  PROCEDURE createuser(
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
 
        INSERT INTO users  (user_id, username, email, password, created_at,  Role, isDeleted) VALUES (@userId, @Name, @Email, @Password, @CreatedAt, @ROLE, @IsDeleted)
        SELECT * FROM users WHERE user_id = @userId
END
