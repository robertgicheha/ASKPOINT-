CREATE  PROCEDURE  sp_CraeteAnswer
  @questionsId INT,
  @tagId INT,
  @TagName VARCHAR(255),
  @userId VARCHAR(255),
  @answerTitle VARCHAR(255),
  @answerBody TEXT

AS
BEGIN
  INSERT INTO answers (questions_id, tag_id, tag_name, user_id, answer_title, answer_body)

  VALUES (@questionsId, @tagId,@TagName, @userId, @answerTitle, @answerBody);
END;

-- EXEC  sp_CraeteAnswer @questionsId = 1, @tagId = 2, @TagName='CSS' , @userId ='U002', @answerTitle = 'My Answer', @answerBody = 'This is my answer to the question';
