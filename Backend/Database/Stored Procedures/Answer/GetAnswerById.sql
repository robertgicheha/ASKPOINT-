
CREATE OR ALTER PROCEDURE getAnswerById
    @answerid VARCHAR ( 255 )
AS
BEGIN
    SELECT * FROM answers WHERE answerid = @answerid
     SELECT * FROM answers


END

