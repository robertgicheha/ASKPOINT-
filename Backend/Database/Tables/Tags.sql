

CREATE TABLE tags
(
    tagid VARCHAR ( 255 ) PRIMARY KEY ,
    tag VARCHAR ( 255 ) NOT NULL ,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
   
);
