USE StackOverflow
GO


CREATE TABLE answers (
  answer_id VARCHAR(255) NOT NULL,
  questions_id VARCHAR(255)  NOT NULL,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  user_id VARCHAR(255) NOT NULL,
   created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (answer_id),

    FOREIGN KEY (user_id) REFERENCES users(user_id)  ON DELETE CASCADE,
    FOREIGN KEY (questions_id) REFERENCES questions(questions_id),
);


drop table answers

-- INSERT INTO answers (questions_id, answer_title, tag_name,  answer_body, user_id, tag_id ,answer_upvotes, answer_downvotes) VALUES 
--   (1, 'This is my answer to the question', 'CSS', 'This is my answer to the question','U002', 2, 1, 0),
--   (2, 'Another user''s answer to the question', 'SQL','This is my answer to the question', 'U003', 1 , 0, 1),
--   (3, 'This is my answer to a different question', 'CSS','This is my answer to the question','U002', 2 ,1, 0);
