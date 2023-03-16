CREATE OR ALTER PROCEDURE sp_CreateComment 
    @body TEXT,
    @user_id VARCHAR(255),
    @questions_id INT
AS
BEGIN
    INSERT INTO comments (body, user_id, questions_id) 
    VALUES (@body, @user_id, @questions_id);
END;

