
CREATE  TABLE users (
  user_id  VARCHAR(255) PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  is_admin BIT NOT NULL DEFAULT 0,
  created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (email)
);

drop table users

INSERT INTO users (user_id, username, email, password, is_admin) VALUES 
  ('U001', 'JohnDoe', 'johndoe@example.com', 'password123', 1),
  ('U002', 'JaneDoe', 'janedoe@example.com', 'password456', 0),
  ('U003', 'BobSmith', 'bobsmith@example.com', 'password789', 0);





CREATE PROCEDURE uspSignUpUser
    @user_id VARCHAR(255),
    @username VARCHAR(50),
    @email VARCHAR(255),
    @password VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO users (user_id, username, email, password)
    VALUES (@user_id, @username, @email, @password);
END



















  Create a stored procedure in sql server