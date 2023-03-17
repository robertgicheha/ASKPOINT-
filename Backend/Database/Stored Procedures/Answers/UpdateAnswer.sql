CREATE PROCEDURE sp_Updateanswer
  @answer_id INT,
  @answer_title VARCHAR(255),
  @tag_name VARCHAR(255),
  @answer_body TEXT,
  @upvotes INT,
  @downvotes INT
AS
BEGIN
  UPDATE answers
  SET answer_title = @answer_title,
      tag_name = @tag_name,
      answer_body = @answer_body,
      upvotes = @upvotes,
      downvotes = @downvotes,
      updatedAt = CURRENT_TIMESTAMP
  WHERE answer_id = @answer_id;
END;

-- EXEC sp_Updateanswer @answer_id = 1, @answer_title = 'New Answer Title', @tag_name = 'New Tag Name', @answer_body = 'New Answer Body', @upvotes = 10, @downvotes = 2;
