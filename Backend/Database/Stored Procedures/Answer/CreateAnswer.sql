
CREATE OR ALTER PROCEDURE createAnswer
    @answerid VARCHAR ( 255 ) ,
    @answer VARCHAR ( 255 ) ,
    @created_at DATETIME ,
    @userid VARCHAR ( 255 ) ,
    @questionid VARCHAR ( 255 ),
    @is_accepted BIT

AS

    BEGIN
        INSERT INTO answers (answerid, answer, created_at, userid, questionid, is_accepted)
        VALUES (@answerid, @answer, @created_at,  @userid, @questionid, @is_accepted)
        SELECT * FROM answers WHERE answerid = @answerid
    
END

-- BEGIN
--     IF EXISTS (SELECT * FROM answers WHERE answerid = @answerid)
--     BEGIN
--         UPDATE answers SET
--             answer = @answer,
--             created_at = @created_at,
--             userid = @userid,
--             questionid = @questionid,
--             is_accepted = @is_accepted
--         WHERE answerid = @answerid
--         SELECT * FROM answers WHERE answerid = @answerid   
--     END
--     ELSE