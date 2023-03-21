

CREATE TABLE questions
(
    questionid VARCHAR ( 255 ) PRIMARY KEY ,
    question VARCHAR ( 255 ) NOT NULL ,
    body VARCHAR ( 255 ) NOT NULL ,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    userid VARCHAR ( 255 ) NOT NULL ,
    views INT NOT NULL ,
    FOREIGN KEY (userid) REFERENCES users(userid) ON DELETE CASCADE,
    
);

drop table questions