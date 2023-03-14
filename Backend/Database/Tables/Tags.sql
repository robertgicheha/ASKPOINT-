
CREATE TABLE tags (
  tag_id INT NOT NULL IDENTITY(1,1),
  tag_name VARCHAR(255) NOT NULL,
  created_at DATETIME2 DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (tag_id),

CONSTRAINT fk_tags UNIQUE (tag_name)
);

Drop TABLE tags

INSERT INTO tags (tag_name) VALUES 
  ('SQL'),
  ('CSS'),
  ('HTML');
