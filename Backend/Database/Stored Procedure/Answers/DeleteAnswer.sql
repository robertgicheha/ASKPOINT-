CREATE PROCEDURE sp_Deleteanswer
  @answer_id INT
AS
BEGIN
  DELETE FROM answers
  WHERE answer_id = @answer_id;
END;

-- EXEC sp_Deleteanswer @answer_id = 1;
