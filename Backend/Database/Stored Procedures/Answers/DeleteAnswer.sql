USE StackOverflow
GO


CREATE OR ALTER PROCEDURE sp_Deleteanswer
  @answerId VARCHAR(255)
AS
BEGIN
  DELETE FROM answers WHERE answer_id = @answerId;

  
   SELECT *  FROM answers WHERE answer_id = @answerId


END;

-- EXEC sp_Deleteanswer @answer_id = 1;
