
CREATE OR ALTER PROCEDURE deleteQuestion
    @questionid VARCHAR ( 255 )
AS
BEGIN
    DELETE questions  WHERE questionid =  @questionid
    SELECT * FROM questions WHERE questionid =  @questionid
END