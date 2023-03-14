CREATE TABLE profile_info (
  profile_id INT IDENTITY(1,1) NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  display_name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  about TEXT,
  GitHub VARCHAR(255),
  LinkedIn VARCHAR(255),
  PRIMARY KEY (profile_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

drop table profile_info

-- INSERT INTO profile_info (user_id, display_name, title, location, about, GitHub, LinkedIn)
-- VALUES ('U002', 'John Smith', 'New York City', 'Software Developer','I am a software developer with 5 years of experience.', 'https://github.com/johnsmith', 'https://www.linkedin.com/in/johnsmith/'),
-- ('U003', 'John Smith', 'New York City', 'Software Developer','I am a software developer with 5 years of experience.', 'https://github.com/johnsmith', 'https://www.linkedin.com/in/johnsmith/'),
-- ('U002', 'John Smith', 'New York City', 'Software Developer','I am a software developer with 5 years of experience.', 'https://github.com/johnsmith', 'https://www.linkedin.com/in/johnsmith/')

