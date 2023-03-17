CREATE PROCEDURE sp_GetUserAnswerUpvotes
    @userId VARCHAR(255),
    @questionId INT
AS
BEGIN
    SELECT answer_upvotes
    FROM votes
    WHERE user_id = @userId AND questions_id = @questionId
END
