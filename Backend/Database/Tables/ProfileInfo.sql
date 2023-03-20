USE StackOverflow
GO


CREATE TABLE profile (
  profile_id VARCHAR(255) NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  display_name VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  about TEXT,
  created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
  
  PRIMARY KEY (profile_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

drop table profile



-- INSERT INTO profile_info (user_id, display_name, title, location, about, GitHub, LinkedIn)
-- VALUES ('U002', 'John Smith', 'New York City', 'Software Developer','I am a software developer with 5 years of experience.', 'https://github.com/johnsmith', 'https://www.linkedin.com/in/johnsmith/'),
-- ('U003', 'John Smith', 'New York City', 'Software Developer','I am a software developer with 5 years of experience.', 'https://github.com/johnsmith', 'https://www.linkedin.com/in/johnsmith/'),
-- ('U002', 'John Smith', 'New York City', 'Software Developer','I am a software developer with 5 years of experience.', 'https://github.com/johnsmith', 'https://www.linkedin.com/in/johnsmith/')

