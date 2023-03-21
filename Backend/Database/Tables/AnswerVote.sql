

CREATE TABLE answervotes
(
    voteid VARCHAR ( 255 ) PRIMARY KEY ,
    vote INT NOT NULL ,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    userid VARCHAR ( 255 ) NOT NULL ,
    answerid VARCHAR ( 255 ) NOT NULL ,
    FOREIGN KEY (userid) REFERENCES users(userid),
    FOREIGN KEY (answerid) REFERENCES answers(answerid) ON DELETE CASCADE,
   
);

