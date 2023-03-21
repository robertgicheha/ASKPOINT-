
CREATE OR ALTER PROCEDURE createQuestion
    @questionid VARCHAR ( 255 ),
    @question VARCHAR ( 255 ),
    @body VARCHAR ( 255 ),
    @created_at DATETIME,
    @userid VARCHAR ( 255 ),
    @views INT
AS
-- 
    BEGIN
        INSERT INTO questions (questionid, question, body,  created_at,  userid, views) VALUES (@questionid, @question, @body,  @created_at, @userid, @views)
        
        SELECT * FROM questions
END


--     IF EXISTS (SELECT * FROM questions WHERE questionid =  @questionid)
--     BEGIN
--         UPDATE questions SET question = @question, body = @body, created_at = @created_at, userid = @userid, views = @views WHERE questionid =  @questionid
--         SELECT * FROM questions WHERE questionid =  @questionid
--     END