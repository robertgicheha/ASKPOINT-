
CREATE PROCEDURE sp_registerUser
    @userId VARCHAR(255),
    @Name VARCHAR(50),
    @Email VARCHAR(255),
    @Password VARCHAR(255)
    
    AS

BEGIN
    INSERT INTO users
        (user_id, username, email, password )
    VALUES
        (@userId,@Name, @Email, @Password);
END


