
CREATE OR ALTER PROCEDURE getAnswerById
    @id VARCHAR ( 255 )
AS
BEGIN
    SELECT * FROM answers WHERE answerid = @id
    --  SELECT * FROM answers


END

