SELECT 'CREATE DATABASE gradnet'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'gradnet')\gexec
\c gradnet;

DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(64) NOT NULL,
  salt VARCHAR(64), 
  session_token VARCHAR(64),
  biography TEXT,
  time_created DATE DEFAULT CURRENT_TIMESTAMP,
  job_title VARCHAR(50),
  photo TEXT
 );

DROP TABLE IF EXISTS Connections;
CREATE TABLE Connections (
  id SERIAL PRIMARY KEY NOT NULL,
  current_user_id INT,
  connection_id INT,
  time_connected DATE DEFAULT CURRENT_TIMESTAMP,
  user_id INT
);

DROP TABLE IF EXISTS Technologies;
CREATE TABLE Technologies (
  id SERIAL PRIMARY KEY NOT NULL,
  tech_name VARCHAR(100),
  tech_logo_img TEXT,
  years_of_experience INT,
  user_id INT
);

DROP TABLE IF EXISTS Posts;
CREATE TABLE Posts (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(500),
  body TEXT,
  post_img TEXT,
  time_created DATE DEFAULT CURRENT_TIMESTAMP,
  user_id INT
);

DROP TABLE IF EXISTS Tags; 
CREATE TABLE Tags (
  id SERIAL PRIMARY KEY NOT NULL,
  tag_name VARCHAR(100),
  post_id INT
);

DROP TABLE IF EXISTS Post_tags; 
CREATE TABLE Post_tags (
  id SERIAL PRIMARY KEY NOT NULL,
  tag_id INT,
  post_id INT
);


ALTER TABLE Connections ADD FOREIGN KEY (user_id) REFERENCES Users (id);
ALTER TABLE Technologies ADD FOREIGN KEY (user_id) REFERENCES Users (id);
ALTER TABLE Posts ADD FOREIGN KEY (user_id) REFERENCES Users (id);
ALTER TABLE Tags ADD FOREIGN KEY (post_id) REFERENCES Posts (id);


CREATE INDEX connections_id_index ON Connections (user_id);
CREATE INDEX technologies_id_index ON Technologies (user_id);
CREATE INDEX posts_id_index ON Posts (user_id);
CREATE INDEX tags_id_index ON Tags (post_id);