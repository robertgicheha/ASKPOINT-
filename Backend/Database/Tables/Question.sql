

CREATE TABLE questions
(
    questionid VARCHAR ( 255 ) PRIMARY KEY ,
    question VARCHAR ( 255 ) NOT NULL ,
    description VARCHAR ( 255 ) NOT NULL ,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    userid VARCHAR ( 255 ) NOT NULL ,
    views INT NOT NULL DEFAULT 0 
    FOREIGN KEY (userid) REFERENCES users(userid) ON DELETE CASCADE,
    
);
INSERT INTO questions
VALUES
    ('Q001', 'Football', 'The best team?', '12-13-15' , 'U006', 0)


drop table questions