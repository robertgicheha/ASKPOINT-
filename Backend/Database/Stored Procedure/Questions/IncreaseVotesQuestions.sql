CREATE OR ALTER PROCEDURE sp_IncreaseUpvotes
  @user_id INT
AS
BEGIN
  UPDATE questions
  SET question_upvotes = question_upvotes + 1, updatedAt = CURRENT_TIMESTAMP
  WHERE user_id = @user_id
END
