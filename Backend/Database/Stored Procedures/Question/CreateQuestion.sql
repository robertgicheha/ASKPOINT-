
CREATE OR ALTER PROCEDURE InsertUpdateQuestion

@id VARCHAR(255),
@description VARCHAR(255),
@question VARCHAR(255),
@userid VARCHAR (255)

AS
BEGIN
    IF EXISTS (SELECT * FROM questions WHERE questionid = @id) 
    BEGIN
        UPDATE questions
        SET question = @question , description = @description , userid=@userid
        WHERE questionid = @id
    END
    ELSE
    BEGIN
        INSERT INTO questions (questionid, question, description,userid)
        VALUES (@id, @question, @description,@userid)
     
    END
END

















-- CREATE OR ALTER PROCEDURE createQuestion
--     @questionid VARCHAR ( 255 ),
--     @question VARCHAR ( 255 ),
--     @body VARCHAR ( 255 )
--     -- @created_at DATETIME,
--     -- @userid VARCHAR ( 255 ),
--     -- @views INT
-- AS
--     BEGIN
--         INSERT INTO questions (questionid, question, body) VALUES (@questionid, @question, @body)
        
--         SELECT * FROM questions
-- END


--     IF EXISTS (SELECT * FROM questions WHERE questionid =  @questionid)
--     BEGIN
--         UPDATE questions SET question = @question, body = @body, created_at = @created_at, userid = @userid, views = @views WHERE questionid =  @questionid
--         SELECT * FROM questions WHERE questionid =  @questionid
--     END