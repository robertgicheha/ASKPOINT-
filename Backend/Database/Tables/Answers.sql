
CREATE TABLE answers (
  answer_id INT IDENTITY(1,1) NOT NULL,
  questions_id INT  NOT NULL,
  answer_title VARCHAR(255) NOT NULL,
  answer_body TEXT NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
  upvotes INT NOT NULL DEFAULT 0,
  downvotes INT NOT NULL DEFAULT 0,
  PRIMARY KEY (answer_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (questions_id) REFERENCES questions(questions_id),
);


drop table answers
INSERT INTO answers (questions_id, answer_title,  answer_body, user_id, upvotes, downvotes) VALUES 
  (1, 'This is my answer to the question',  'This is my answer to the question','U002', 1, 0),
  (2, 'Another user''s answer to the question', 'This is my answer to the question', 'U003', 0, 1),
  (3, 'This is my answer to a different question', 'This is my answer to the question','U002', 1, 0);
