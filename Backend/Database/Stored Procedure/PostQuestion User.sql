

CREATE PROCEDURE sp_post_question
    @user_id VARCHAR(255),
    @title VARCHAR(255),
    @tag_name VARCHAR(255),
    @body TEXT
AS
BEGIN
    SET NOCOUNT ON;
    
    DECLARE @post_id INT;
    
    INSERT INTO posts (title, tag_name, body, user_id)
    VALUES (@title, @tag_name, @body, @user_id);
    
    
END;


-- EXEC sp_post_question 'U003', 'How do I create a stored procedure?', 'SQL', 'I am trying to create a stored procedure in SQL Server, but I am having trouble...';
