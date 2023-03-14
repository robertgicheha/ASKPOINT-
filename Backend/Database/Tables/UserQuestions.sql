
CREATE TABLE user_questions (
  userquestions_id INT IDENTITY(1,1) NOT NULL,
  title VARCHAR(255) NOT NULL,
  tag_name VARCHAR(255) NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
  upvotes INT NOT NULL DEFAULT 0,
  downvotes INT NOT NULL DEFAULT 0,
  PRIMARY KEY (userquestions_id),
    FOREIGN KEY (tag_name) REFERENCES tags(tag_name),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

drop table user_questions



-- INSERT INTO user_questions (title, tag_name, body, user_id, upvotes, downvotes) VALUES 
--   ('Introduction to SQL', 'SQL', 'This is a brief introduction to SQL.', 'U002', 10, 2),
--   ('Data Modeling Techniques', 'CSS', 'Learn about the various techniques for data modeling.', 'U003', 5, 1),
--   ('Advanced SQL Queries', 'HTML', 'In this tutorial, we explore advanced SQL queries.', 'U002', 15, 3);
