CREATE TABLE questions
(
  questions_id INT IDENTITY(1,1) NOT NULL,
  question_title VARCHAR(255) NOT NULL,
  tag_id INT NOT NULL,
  tag_name VARCHAR(255) NOT NULL,
  question_body TEXT NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  views INT NOT NULL DEFAULT 0,
  question_upvotes INT NOT NULL DEFAULT 0,
  question_downvotes INT NOT NULL DEFAULT 0,
  PRIMARY KEY (questions_id),

  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (tag_name) REFERENCES tags(tag_name),
  FOREIGN KEY (tag_id) REFERENCES tags(tag_id),
);

drop table questions

-- INSERT INTO questions (question_title,  tag_id, tag_name, question_body, user_id, views, question_upvotes, question_downvotes) VALUES 
--   ('How to join tables in SQL?', 1,'SQL', 'I am trying to join two tables in SQL, but I am not sure how to do it. Can someone please help me with this?', 'U002', 20, 5, 1),
--   ('Best practices for database design', 2, 'CSS', 'I am designing a new database and want to know the best practices for designing a database. Can anyone give me some tips?', 'U003', 10, 2, 0),
--   ('Data modeling for e-commerce applications', 3 ,'HTML', 'I am working on a data modeling project for an e-commerce application. Can anyone suggest some good resources for data modeling in e-commerce?', 'U002', 15, 3, 1);

