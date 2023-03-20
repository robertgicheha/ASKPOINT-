USE StackOverflow
GO


CREATE TABLE QuestionVote
(
    vote_id VARCHAR(255) PRIMARY KEY ,
    user_id VARCHAR(255) NOT NULL,
    questions_id VARCHAR(255) NOT NULL,
    value INT NOT NULL,
     created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id ) ON DELETE CASCADE,
    FOREIGN KEY (questions_id) REFERENCES questions( questions_id),
);
 

 DROP TABLE QuestionVote