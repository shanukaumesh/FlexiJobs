CREATE DATABASE user_ms;

USE user_ms;

CREATE TABLE user (
	id INT PRIMARY KEY auto_increment,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
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

DELIMITER $$

CREATE TRIGGER after_user_insert
AFTER INSERT ON user
FOR EACH ROW
BEGIN
    IF NEW.role = 'student' THEN
        INSERT INTO student (user_id) VALUES (NEW.id);
    ELSEIF NEW.role = 'employer' THEN
        INSERT INTO employer (user_id) VALUES (NEW.id);
    END IF;
END$$

DELIMITER ;

CREATE DATABASE job_ms;

USE job_ms;

CREATE TABLE job (
	id INT PRIMARY KEY auto_increment,
    job_title VARCHAR(255),
    company_name VARCHAR(100),
    description VARCHAR(255),
    location VARCHAR(100),
    salary VARCHAR(100),
    employment_type ENUM('Full_Time','Part_Time','Contract','Freelance'),
    skills VARCHAR(100),
    experience_level ENUM('Entry_Level','Mid_Level','Senior_Level'),
    deadline DATE,
    contact_email VARCHAR(100),
    category ENUM('IT','Marketing','Sales','Accounting'),
    logo VARCHAR(255),
    posted_by VARCHAR(255), 
    job_status BOOLEAN
);

CREATE DATABASE application_ms;

USE application_ms;

CREATE TABLE application(
	id INT PRIMARY KEY auto_increment,
    job_title VARCHAR(255),
    location VARCHAR(100),
    full_name VARCHAR(150),
    email VARCHAR(100),
    resume VARCHAR(255),
    status BOOLEAN
);

CREATE DATABASE payment_ms;

USE payment_ms;

CREATE TABLE payment(
	id INT PRIMARY KEY auto_increment,
    user_email VARCHAR(100),
    job_title VARCHAR(255),
    amount DECIMAL(10,2),
    paid_date DATE,
    status BOOLEAN
);