

SELECT COUNT(questions_id) FROM questions WHERE questions_id NOT IN (SELECT questions_id FROM answers);
