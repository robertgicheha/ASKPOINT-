CREATE OR ALTER PROCEDURE sp_IncreaseViews
    @question_id INT
AS
BEGIN
    UPDATE questions
    SET views = views + 1
    WHERE questions_id = @question_id
END

EXEC  sp_IncreaseViews @question_id = 1

