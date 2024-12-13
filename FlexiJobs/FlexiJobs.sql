CREATE DATABASE user_ms;

USE user_ms;

CREATE TABLE user (
	id INT PRIMARY KEY auto_increment,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL unique,
    password VARCHAR(255),
    role ENUM('student','employer') NOT NULL DEFAULT 'student',
    status BOOLEAN DEFAULT true
);

CREATE TABLE student (
	id INT PRIMARY KEY auto_increment,
    user_id INT NOT NULL,
    nic BIGINT,
    dob DATE,
    address VARCHAR(200),
    nic_photo VARCHAR(255),
    university VARCHAR(255),
    uni_index VARCHAR(50),
    uni_email VARCHAR(100),
    uni_id VARCHAR(255),
    status BOOLEAN DEFAULT true,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE employer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    web_url VARCHAR(255),
    logo VARCHAR(255),
    status BOOLEAN DEFAULT true,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE -- Ensures cascading deletes
);