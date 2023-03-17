CREATE PROCEDURE sp_GetUserQuestionUpvotes
    @userId VARCHAR(255),
    @questionId INT
AS
BEGIN
    SELECT question_upvotes
    FROM votes
    WHERE user_id = @userId AND questions_id = @questionId
END
