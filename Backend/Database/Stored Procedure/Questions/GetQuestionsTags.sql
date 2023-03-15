CREATE  PROCEDURE SP_GetQuestionsWithTags
AS
BEGIN
    SELECT questions_id, user_id, question_title, questions.created_at 
    FROM questions 
    LEFT JOIN tags  ON tag_id = tag_id
    GROUP BY questions_id, user_id, question_title , questions.created_at 
    ORDER BY created_at DESC;
END


