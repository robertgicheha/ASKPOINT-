-- Use ANSWERPOINT
-- GO

CREATE or alter PROCEDURE insertUser
@userid VARCHAR ( 255 ),
@name VARCHAR ( 255 ),
@email VARCHAR ( 255 ),
@password VARCHAR ( 255 ),
@created_at DATE,
@is_sent BIT,
@role BIT,
@is_deleted BIT
AS
   
    BEGIN
        INSERT INTO users (userid, name, email, password, created_at, is_sent, role, is_deleted) VALUES (@userid, @name, @email, @password, @created_at, @is_sent, @role, @is_deleted)
        SELECT * FROM users WHERE userid = @userid

END






 -- IF EXISTS (SELECT * FROM users WHERE userid = @userid)
    -- BEGIN
    --     UPDATE users SET name = @name, email = @email, password = @password, created_at = @created_at,  is_sent = @is_sent, role = @role, is_deleted = @is_deleted WHERE userid = @userid
    --     SELECT * FROM users WHERE userid = @userid
    -- END
    -- ELSE
