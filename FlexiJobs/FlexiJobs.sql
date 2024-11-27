CREATE DATABASE user_ms;
CREATE DATABASE application_ms;
CREATE DATABASE job_ms;
CREATE DATABASE payment_ms;

USE user_ms;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, -- Accommodates hashed passwords
    contact_no VARCHAR(15), -- Adjusted for international formats
    address VARCHAR(255),
    display_name VARCHAR(100),
    role ENUM('student','employer') NOT NULL DEFAULT 'student',
    status BOOLEAN DEFAULT true
);

CREATE TABLE student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    dob DATE,
    nic BIGINT, -- Changed to BIGINT for larger NIC values
    nic_photo VARCHAR(255),
    university VARCHAR(100),
    uni_index VARCHAR(20),
    uni_email VARCHAR(100),
    uni_id_photo VARCHAR(255),
    bio VARCHAR(255),
    skill JSON, -- Allows flexible skill storage
    field VARCHAR(100),
    available_dates JSON, -- Allows flexible date storage
    start_time TIME,
    end_time TIME,
    bank_name VARCHAR(100),
    bank_accno VARCHAR(100),
    status BOOLEAN DEFAULT true,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- Ensures cascading deletes
);

CREATE TABLE employer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    web_url VARCHAR(255),
    logo VARCHAR(255),
    status BOOLEAN DEFAULT true,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- Ensures cascading deletes
);

USE application_ms;

CREATE TABLE application (
    id INT PRIMARY KEY AUTO_INCREMENT,
    job_title VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    contact_no VARCHAR(15) NOT NULL, -- Adjusted for international formats
    email VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18 AND age <= 65), -- Logical range for working ages
    address VARCHAR(255),
    current_job VARCHAR(100),
    university VARCHAR(100),
    work_experience TEXT, -- Allows detailed descriptions
    cv VARCHAR(255) NOT NULL, -- Assumes mandatory CV uploads
    application_status ENUM('pending', 'approved', 'in review', 'rejected') DEFAULT 'pending',
    applied_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status BOOLEAN DEFAULT true
);

USE job_ms;

CREATE TABLE job (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    job_type VARCHAR(100) NOT NULL,
    job_role VARCHAR(100),
    district VARCHAR(50),
    city VARCHAR(60),
    application_receiving ENUM('email', 'dashboard') DEFAULT 'dashboard',
    education TEXT, -- Assumes detailed education requirements
    starting_salary DECIMAL(10, 2) NOT NULL CHECK (starting_salary >= 0), -- Non-negative values
    salary_limit DECIMAL(10, 2) CHECK (salary_limit >= starting_salary), -- Logical range enforcement
    application_deadline DATE NOT NULL,
    job_status BOOLEAN DEFAULT true, -- Active (true) or closed (false)
    job_photo VARCHAR(255),
    status BOOLEAN DEFAULT true
);

USE payment_ms;

CREATE TABLE payment (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(100) NOT NULL,
    job_title VARCHAR(100) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL CHECK (amount >= 0), -- Ensures non-negative amounts
    paid_date DATE NOT NULL,
    status BOOLEAN DEFAULT true
);
