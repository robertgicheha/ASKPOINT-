CREATE PROCEDURE GetAllAnsweredQuestions
AS
BEGIN
    SELECT *
    FROM questions
    WHERE is_answered = 1;
END
