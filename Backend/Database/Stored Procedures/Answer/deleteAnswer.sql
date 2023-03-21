
CREATE OR ALTER PROCEDURE deleteAnswer
    @answerid VARCHAR ( 255 )
AS
BEGIN
    DELETE answers  WHERE answerid = @answerid
    SELECT * FROM answers WHERE answerid = @answerid
END

