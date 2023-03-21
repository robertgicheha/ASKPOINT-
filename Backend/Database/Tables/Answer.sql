

CREATE TABLE answers
(
    answerid VARCHAR ( 255 ) PRIMARY KEY ,
    answer VARCHAR ( 255 ) NOT NULL ,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    userid VARCHAR ( 255 ) NOT NULL ,
    question_id VARCHAR ( 255 ) NOT NULL ,
    is_accepted BIT DEFAULT  0 ,

    FOREIGN KEY (userid) REFERENCES users(userid) ON DELETE CASCADE,
    FOREIGN KEY (question_id) REFERENCES questions(questionid)
    
);


drop table answers