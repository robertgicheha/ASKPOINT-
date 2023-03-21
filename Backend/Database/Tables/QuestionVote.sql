

CREATE TABLE questionvotes
(
    voteid VARCHAR ( 255 ) PRIMARY KEY ,
    vote INT NOT NULL ,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    userid VARCHAR ( 255 ) NOT NULL ,
    questionid VARCHAR ( 255 ) NOT NULL ,
    FOREIGN KEY (userid) REFERENCES users(userid) ON DELETE CASCADE,
    FOREIGN KEY (questionid) REFERENCES questions(questionid)
   

);
