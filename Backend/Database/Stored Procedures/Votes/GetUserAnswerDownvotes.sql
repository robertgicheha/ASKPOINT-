CREATE PROCEDURE sp_GetUserAnswerDownvotes
    @userId VARCHAR(255),
    @questionId INT
AS
BEGIN
    SELECT answer_downvotes
    FROM votes
    WHERE user_id = @userId AND questions_id = @questionId
END
