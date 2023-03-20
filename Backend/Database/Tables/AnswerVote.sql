USE StackOverflow
GO

CREATE TABLE AnswerVote
(
    vote_id VARCHAR(255) PRIMARY KEY ,
    user_id VARCHAR(255) NOT NULL,
    answer_id VARCHAR(255) NOT NULL,
    value INT NOT NULL,
     created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id ) ON DELETE CASCADE,
    FOREIGN KEY ( answer_id) REFERENCES answers( answer_id),
);

DROP TABLE AnswerVote