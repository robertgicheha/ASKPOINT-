
CREATE TABLE answers (
  answer_id INT IDENTITY(1,1) NOT NULL,
  questions_id INT  NOT NULL,
  answer_title VARCHAR(255) NOT NULL,
  tag_name VARCHAR(255) NOT NULL,
  answer_body TEXT NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  tag_id INT NOT NULL,
  created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  answer_upvotes INT NOT NULL DEFAULT 0,
  answer_downvotes INT NOT NULL DEFAULT 0,
  PRIMARY KEY (answer_id),

    FOREIGN KEY (tag_id) REFERENCES tags(tag_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (questions_id) REFERENCES questions(questions_id),
);


drop table answers

-- INSERT INTO answers (questions_id, answer_title, tag_name,  answer_body, user_id, tag_id ,answer_upvotes, answer_downvotes) VALUES 
--   (1, 'This is my answer to the question', 'CSS', 'This is my answer to the question','U002', 2, 1, 0),
--   (2, 'Another user''s answer to the question', 'SQL','This is my answer to the question', 'U003', 1 , 0, 1),
--   (3, 'This is my answer to a different question', 'CSS','This is my answer to the question','U002', 2 ,1, 0);
