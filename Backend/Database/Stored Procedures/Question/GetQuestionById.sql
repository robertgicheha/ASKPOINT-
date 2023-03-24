
CREATE OR ALTER PROCEDURE getQuestionById
    @id VARCHAR ( 255 )
AS
BEGIN
    SELECT * FROM questions WHERE questionid = @id
END

