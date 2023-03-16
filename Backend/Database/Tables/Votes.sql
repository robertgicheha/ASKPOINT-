

CREATE TABLE votes (
  vote_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY (vote_id),
  questions_id INT NOT NULL,
  answer_id INT NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  answer_upvotes INT NOT NULL DEFAULT 0,
  answer_downvotes INT NOT NULL DEFAULT 0,
  question_upvotes INT NOT NULL DEFAULT 0,
  question_downvotes INT NOT NULL DEFAULT 0,
  created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY (answer_id) REFERENCES answers(answer_id),
 FOREIGN KEY (questions_id) REFERENCES questions(questions_id),
 FOREIGN KEY (user_id)  REFERENCES users(user_id)
    
);

drop table votes

-- INSERT INTO votes (questions_id, answer_id, user_id, answer_upvotes, answer_downvotes , question_upvotes, question_downvotes) VALUES 
--   (1,  1, 'U002', 1, 0 , 1 , 1),
--   (2,  2,  'U003', 0, 1 , 2 ,4  ) ,
--   (3,  3 , 'U002', 1, 0 , 3 , 4 );
