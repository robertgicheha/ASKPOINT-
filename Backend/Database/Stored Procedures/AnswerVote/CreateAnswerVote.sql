
CREATE OR ALTER PROCEDURE createAnswerVote
    @voteid VARCHAR ( 255 ),
    @vote INT,
    @created_at DATETIME,
    @userid VARCHAR ( 255 ),
    @answerid VARCHAR ( 255 )
AS
BEGIN
    IF EXISTS (SELECT * FROM answervotes WHERE voteid = @voteid)
    BEGIN
        UPDATE answervotes SET
            vote = @vote,
            created_at = @created_at,
            userid = @userid,
            answerid = @answerid
        WHERE voteid = @voteid
        SELECT * FROM answervotes WHERE voteid = @voteid
    END
    ELSE
    BEGIN
        INSERT INTO answervotes (voteid, vote, created_at, userid, answerid)
        VALUES (@voteid, @vote, @created_at, @userid, @answerid)
        SELECT * FROM answervotes WHERE voteid = @voteid 
    END
END

