CREATE  PROCEDURE sp_PostAnswerUser
    @QuestionsID VARCHAR(255),
    @title VARCHAR(255),
    @tagID VARCHAR(255),
    @UserID VARCHAR(255),
    @body TEXT


AS
BEGIN
    SET NOCOUNT ON; 

    DECLARE @useranswers_id INT;

    INSERT INTO user_answers
        (questions_id, useranswer_title, tag_id, user_id , useranswer_body)
    VALUES
        ( @QuestionsID , @title, @tagID, @UserId, @body);


END;
