
CREATE OR ALTER PROCEDURE createQuestionVote
    @voteid VARCHAR ( 255 ),
    @vote INT,
    @created_at DATETIME,
    @userid VARCHAR ( 255 ),
    @questionid VARCHAR ( 255 )
AS
BEGIN
   
        INSERT INTO questionvotes (voteid, vote, created_at,  userid, questionid) VALUES (@voteid, @vote, @created_at, @userid, @questionid)
        SELECT * FROM questionvotes WHERE voteid = @voteid
  
END

 -- IF EXISTS (SELECT * FROM questionvotes WHERE voteid = @voteid)
    -- BEGIN
    --     UPDATE questionvotes SET vote = @vote WHERE voteid = @voteid
    --     SELECT * FROM questionvotes WHERE voteid = @voteid
    -- END
    -- ELSE
    -- BEGIN