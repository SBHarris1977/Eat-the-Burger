CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOt NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)


);

