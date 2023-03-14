
CREATE TABLE user_answers
(
  useranswers_id INT IDENTITY(1,1) NOT NULL PRIMARY KEY (useranswers_id),
  questions_id INT NOT NULL,
  question_title VARCHAR(255) NOT NULL,
  tag_name VARCHAR(255) NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  useranswer_body TEXT NOT NULL,
  created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
  upvotes INT NOT NULL DEFAULT 0,
  downvotes INT NOT NULL DEFAULT 0,

  FOREIGN KEY (tag_name) REFERENCES tags(tag_name),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (questions_id) REFERENCES questions(questions_id),

);

INSERT INTO user_answers (questions_id, question_title , tag_name, user_id, useranswer_body)
VALUES (1, 'Sample Question', 'CSS', 'U002', 'This is an answer to the sample question.'),
(2, 'Sample Question', 'SQL', 'U003', 'This is an answer to the sample question.'),
(3, 'Sample Question', 'HTML', 'U003', 'This is an answer to the sample question.')


DROP TABLE user_answers


