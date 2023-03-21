
CREATE OR ALTER PROCEDURE IncreaseViews
    @questionid VARCHAR ( 255 )
AS
BEGIN
    UPDATE questions
    SET views = views + 1
    WHERE  questionid =  @questionid;
   
 SELECT * FROM questions WHERE  questionid =  @questionid;
END;
