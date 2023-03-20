USE StackOverflow
GO
CREATE TABLE comments (
  comment_id  VARCHAR(255) NOT NULL PRIMARY KEY (comment_id),
  body TEXT NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  answer_id VARCHAR(255)  NOT NULL,
  created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
   FOREIGN KEY (answer_id) REFERENCES answers(answer_id) 
);

drop table comments

-- INSERT INTO comments (body, user_id, questions_id , answer_id)  
-- VALUES ('This is a comment.', 'U002', 1 , 1) ,
-- ('This is a comment.', 'U003', 2 , 2) ,
-- ('This is a comment.', 'U002', 3 , 3)

