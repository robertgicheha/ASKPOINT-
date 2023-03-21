

CREATE TABLE users
(
    userid VARCHAR ( 255 ) PRIMARY KEY ,
    name VARCHAR ( 255 ) NOT NULL ,
    email VARCHAR ( 255 ) NOT NULL ,
    password VARCHAR ( 255 ) NOT NULL ,
    created_at DATE NOT NULL DEFAULT GETDATE(),
    is_sent BIT DEFAULT  0 ,
    is_admin BIT DEFAULT  0,
    is_deleted BIT DEFAULT  0,
    UNIQUE (email)

);

drop TABLE users

