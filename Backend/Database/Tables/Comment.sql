
CREATE TABLE comments (
  comment_id INT NOT NULL IDENTITY(1,1)  PRIMARY KEY (comment_id),
  body TEXT NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  questions_id INT NOT NULL,
  created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME2 DEFAULT CURRENT_TIMESTAMP,

   FOREIGN KEY (user_id) REFERENCES users(user_id),
   FOREIGN KEY (questions_id) REFERENCES questions(questions_id)
    
);

drop table comments

INSERT INTO comments (body, user_id, questions_id) 
VALUES ('This is a comment.', 'U002', 1),
('This is a comment.', 'U003', 2),
('This is a comment.', 'U002', 3)

