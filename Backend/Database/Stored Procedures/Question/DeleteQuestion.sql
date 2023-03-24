
CREATE OR ALTER PROCEDURE deleteQuestion
    @id VARCHAR ( 255 )
AS
BEGIN
    DELETE questions  WHERE questionid =  @id
    
    SELECT * FROM questions WHERE questionid =  @id
END