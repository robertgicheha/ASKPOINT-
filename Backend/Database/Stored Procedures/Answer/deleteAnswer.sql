
CREATE OR ALTER PROCEDURE deleteAnswer
    @id VARCHAR ( 255 )
AS
BEGIN
    DELETE answers  WHERE answerid = @id

    SELECT * FROM answers 
END

