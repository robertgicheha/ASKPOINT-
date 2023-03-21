
CREATE OR ALTER PROCEDURE getAnswerVoteById
    @voteid VARCHAR ( 255 )
AS
BEGIN
    SELECT * FROM answervotes WHERE voteid = @voteid
END
