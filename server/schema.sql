DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT(10),
  userID INT(10) REFERENCES users(id),
  room VARCHAR (20),
  message VARCHAR (250),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT(10),
  userName VARCHAR (20),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

