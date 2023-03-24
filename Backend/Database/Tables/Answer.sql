

CREATE TABLE answers
(
    answerid VARCHAR ( 255 ) PRIMARY KEY ,
    answer VARCHAR ( 255 ) NOT NULL ,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    userid VARCHAR ( 255 ) NOT NULL ,
    question_id VARCHAR ( 255 ) NOT NULL ,

    FOREIGN KEY (userid) REFERENCES users(userid) ,
    FOREIGN KEY (question_id) REFERENCES questions(questionid) ON DELETE CASCADE,
    
);


drop table answers