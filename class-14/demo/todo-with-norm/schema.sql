DROP TABLE IF EXISTS users, tasks;

CREATE TABLE IF NOT EXISTS users (
  u_id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255)
);
CREATE TABLE IF NOT EXISTS tasks (
  t_id SERIAL PRIMARY KEY,
  t_name VARCHAR(255),
  t_date VARCHAR(255),
  u_id integer REFERENCES users (u_id)
);


INSERT INTO users (username,password) VALUES ('Razan','12345');
INSERT INTO users (username,password) VALUES ('Sherry','12345');