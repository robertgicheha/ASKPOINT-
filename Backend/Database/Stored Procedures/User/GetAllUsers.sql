
CREATE OR ALTER PROCEDURE getAllUsers
AS
BEGIN
    SELECT * FROM users where is_deleted =0;
END
