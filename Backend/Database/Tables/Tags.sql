USE StackOverflow
GO

CREATE TABLE tags
(
  tag_id VARCHAR(255) NOT NULL,
  tag_name VARCHAR(255) NOT NULL,
  created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (tag_id),

);



Drop TABLE tags

-- INSERT INTO tags (tag_name, questions_id, answer_id) VALUES 
--   ('SQL', 1 , 1),
--   ('CSS' , 2 ,3),
--   ('HTML' , 3 ,3)
