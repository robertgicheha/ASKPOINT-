CREATE PROCEDURE uspSignUpUser
    @user_id VARCHAR(255),
    @username VARCHAR(50),
    @email VARCHAR(255),
    @password VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO users (user_id, username, email, password)
    VALUES (@user_id, @username, @email, @password);
END
