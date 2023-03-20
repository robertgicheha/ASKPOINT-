USE StackOverflow
GO
CREATE  TABLE users (
  user_id  VARCHAR(255) PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  Role VARCHAR(255) NOT NULL DEFAULT 'user',
  created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
  isDeleted BIT NOT NULL DEFAULT 0,
);

drop table users

-- INSERT INTO users (user_id, username, email, password, Role, isDeleted) VALUES 
--   ('U001', 'JohnDoe', 'johndoe@example.com', 'password123', 'admin' ,1),
--   ('U002', 'JaneDoe', 'janedoe@example.com', 'password456', 'user', 0),
--   ('U003', 'BobSmith', 'bobsmith@example.com', 'password789','user', 0)