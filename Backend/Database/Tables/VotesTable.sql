

CREATE TABLE votes (
  vote_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY (vote_id),
  post_id INT NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  upvotes INT NOT NULL DEFAULT 0,
  downvotes INT NOT NULL DEFAULT 0,
  created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
 updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
 FOREIGN KEY (post_id) REFERENCES posts(post_id),
  
 FOREIGN KEY (user_id)  REFERENCES users(user_id)
    
);

drop table votes
-- INSERT INTO votes (post_id, user_id, upvotes, downvotes) VALUES 
--   (1, 'U002', 1, 0),
--   (2, 'U003', 0, 1),
--   (3, 'U002', 1, 0);
