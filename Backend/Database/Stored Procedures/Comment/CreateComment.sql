
CREATE OR ALTER PROCEDURE createComment
    @commentid VARCHAR ( 255 ),
    @comment VARCHAR ( 255 ),
    @created_at DATETIME,
    @userid VARCHAR ( 255 ),
    @answerid VARCHAR ( 255 ),
    @is_deleted BIT
AS
BEGIN

        INSERT INTO comments (commentid, comment, created_at,  userid, answerid, is_deleted)
        VALUES (@commentid, @comment, @created_at, @userid, @answerid, @is_deleted)
        SELECT * FROM comments WHERE commentid = @commentid
    
END

    -- IF EXISTS (SELECT * FROM comments WHERE commentid = @commentid)
    -- BEGIN
    --     UPDATE comments SET
    --         comment = @comment,
    --         created_at = @created_at,
    --         userid = @userid,
    --         answerid = @answerid,
    --         is_deleted = @is_deleted
    --     WHERE commentid = @commentid
    --     SELECT * FROM comments WHERE commentid = @commentid
    -- END
    -- ELSE
    -- BEGIN