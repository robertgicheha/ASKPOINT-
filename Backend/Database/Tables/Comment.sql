
CREATE TABLE comments (
  comment_id INT NOT NULL IDENTITY(1,1)  PRIMARY KEY (comment_id),
  body TEXT NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  post_id INT NOT NULL,
  created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,

   FOREIGN KEY (user_id) REFERENCES users(user_id),
   FOREIGN KEY (post_id) REFERENCES posts(post_id)
    
);

drop table comments

-- INSERT INTO comments (body, user_id, post_id) 
-- VALUES ('This is a comment.', 'U002', 1),
-- ('This is a comment.', 'U003', 2),
-- ('This is a comment.', 'U002', 3)

