CREATE OR ALTER PROCEDURE sp_GetQuestionViews
    @questionId INT,
    @totalViews INT OUTPUT
AS
BEGIN
    SELECT @totalViews = views
    FROM questions
    WHERE questions_id = @questionId;


END



DECLARE @views INT;
EXEC sp_GetQuestionViews @questionId = 1, @totalViews = @views OUTPUT;
SELECT @views;
