
CREATE TABLE user_answers
(
  useranswers_id INT IDENTITY(1,1) NOT NULL PRIMARY KEY (useranswers_id),
  questions_id INT NOT NULL,
  tag_id INT NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  useranswer_title VARCHAR(255) NOT NULL,
  useranswer_body TEXT NOT NULL,
  created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  upvotes INT NOT NULL DEFAULT 0,
  downvotes INT NOT NULL DEFAULT 0,

  FOREIGN KEY (tag_id) REFERENCES tags(tag_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (questions_id) REFERENCES questions(questions_id),

);

-- INSERT INTO user_answers (questions_id, useranswer_title,  tag_id, user_id,  useranswer_body)
-- VALUES (1, 'Sample Title', '1', 'U002', 'This is an answer to the sample question.'),
-- (2, 'Sample Title', '2', 'U003', 'This is an answer to the sample question.'),
-- (3, 'Sample Title', '3', 'U003', 'This is an answer to the sample question.')


DROP TABLE user_answers


