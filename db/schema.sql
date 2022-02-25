-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

CREATE TABLE Category(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    category_name '' VARCHAR(30) NOT NULL
)

CREATE TABLE Product(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name '' NOT NULL,
    price DECIMAL NOT NULL CHECK (DECIMAL) ,
    stock INTEGER NOT NULL DEFAULT '10' CHECK (NUMERIC),
    category_id INTEGER
)

CREATE TABLE Tag(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tag_name ''
)

Create TABLE ProductTag(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_id INTEGER,
    tag_id INTEGER
)