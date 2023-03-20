USE StackOverflow
GO

CREATE OR ALTER PROCEDURE sp_createProfile
    @userId VARCHAR(255),
    @DisplayName VARCHAR(255),
    @Location VARCHAR(255),
    @CreatedAt DATE,
    @About VARCHAR(255)
    
    AS

BEGIN
    INSERT INTO profile_info
        (user_id, display_name, location, created_at, about)
    VALUES
        (@userId,@DisplayName, @Location,@CreatedAt, @About);

    SELECT * FROM profile_info WHERE user_id = @userId
END



