
CREATE OR ALTER PROCEDURE getQuestionById
    @questionid VARCHAR ( 255 )
AS
BEGIN
    SELECT * FROM questions WHERE questionid = @questionid
END

