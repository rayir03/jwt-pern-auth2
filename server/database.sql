CREATE DATABASE jwttutorial;

--set extention  create extension if not exists "uuid-ossp";
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_mail VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

--insert fake users

INSERT INTO users (user_name, user_mail, user_password) VALUES ('rrrr', 'rgg@node.js', '12345678');