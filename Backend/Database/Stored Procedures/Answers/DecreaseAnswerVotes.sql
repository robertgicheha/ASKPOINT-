CREATE OR ALTER PROCEDURE sp_DecreaseUpvotes
  @user_id INT
AS
BEGIN
  UPDATE answers
  SET answer_downvotes = answer_downvotes - 1, updatedAt = CURRENT_TIMESTAMP
  WHERE user_id = @user_id
END
