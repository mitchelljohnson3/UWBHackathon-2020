CREATE DATABASE species_quiz;
USE species_quiz;

CREATE TABLE scoreboard (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    score INT
);