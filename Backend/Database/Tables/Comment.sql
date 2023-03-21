
CREATE TABLE comments
(
    commentid VARCHAR ( 255 ) PRIMARY KEY ,
    comment VARCHAR ( 255 ) NOT NULL ,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    userid VARCHAR ( 255 ) NOT NULL ,
    answerid VARCHAR ( 255 ) NOT NULL ,
    is_deleted BIT DEFAULT  0 ,
    FOREIGN KEY (userid) REFERENCES users(userid) ON DELETE CASCADE,
    FOREIGN KEY (answerid) REFERENCES answers(answerid),

);


