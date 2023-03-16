

CREATE PROCEDURE sp_PostQuestionUser
    @UserId VARCHAR(255),
    @title VARCHAR(255),
    @tag VARCHAR(255),
    @body TEXT
AS
BEGIN
    SET NOCOUNT ON;
    
    DECLARE @post_id INT;
    
    INSERT INTO posts (user_id ,post_title, tag_name, post_body)
    VALUES (@UserId, @title, @Tag, @body);
    
    
END;


-- EXEC sp_post_question 'U003', 'How do I create a stored procedure?', 'SQL', 'I am trying to create a stored procedure in SQL Server, but I am having trouble...';
