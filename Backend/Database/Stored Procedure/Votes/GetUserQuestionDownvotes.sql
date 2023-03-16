CREATE PROCEDURE sp_GetUserQuestionDownvotes
    @userId VARCHAR(255),
    @questionId INT
AS
BEGIN
    SELECT question_downvotes
    FROM votes
    WHERE user_id = @userId AND questions_id = @questionId
END
