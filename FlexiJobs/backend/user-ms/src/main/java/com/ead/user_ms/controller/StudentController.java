package com.ead.user_ms.controller;

import com.ead.user_ms.data.Student;
import com.ead.user_ms.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {
    @Autowired
    StudentService studentService;

    // Update the student record associated with the userId
    @PutMapping (path = "/users/{userId}/students")
    public ResponseEntity<Student> updateStudent(@PathVariable int userId, @RequestBody Student student) {
        Student existingStudent = studentService.getStudentByUserId(userId);
        if (existingStudent != null) {
            student.setId(existingStudent.getId()); // Ensure the same record is updated
            student.setUserId(userId); // Maintain the association
            student.setEmail(existingStudent.getEmail());
            student.setRole(existingStudent.getRole());
            Student updatedStudent = studentService.updateStudent(student);
            return new ResponseEntity<>(updatedStudent, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
}
