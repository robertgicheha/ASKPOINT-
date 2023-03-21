
CREATE OR ALTER PROCEDURE getQuestionVoteById
    @voteid VARCHAR ( 255 )
AS
BEGIN
    SELECT * FROM questionvotes WHERE voteid = @voteid
END
