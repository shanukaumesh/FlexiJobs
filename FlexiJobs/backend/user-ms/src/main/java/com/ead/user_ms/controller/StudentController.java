package com.ead.user_ms.controller;

import com.ead.user_ms.data.ErrorResponse;
import com.ead.user_ms.data.Student;
import com.ead.user_ms.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {
    @Autowired
    StudentService studentService;

    @GetMapping(path ="/students")
    public List<Student> getStudent()
    {
        return studentService.getStudent();
    }

    @GetMapping(path="/students/{id}")
    public Student getStudentById(@PathVariable int id)
    {
        return studentService.getStudentById(id);
    }

    @PostMapping(path= "/students")
    public Student createStudent(@RequestBody Student student)
    {
        return studentService.createStudent(student);
    }
    @PutMapping(path= "/students/{id}")
    public ResponseEntity<?> updateStudent(@PathVariable int id, @RequestBody Student student) {
        Student existingStudent = studentService.getStudentById(id);
        if (existingStudent == null) {
            return new ResponseEntity<>(new ErrorResponse("Student not found"), HttpStatus.NOT_FOUND); // 404 Not Found
        }

        student.setId(id); // Ensure the ID from the URL is set in the student object
        Student updatedStudent = studentService.updateStudent(student);
        return new ResponseEntity<>(updatedStudent, HttpStatus.OK); // 200 OK
    }

    @DeleteMapping(path = "/students/{id}")
    public void deleteCourse(@PathVariable int id)
    {
        studentService.deleteStudent(id);

    }

    @PostMapping (path = "/students/login")
    public ResponseEntity<?> loginUser(@RequestBody Student.StudentLoginRequest  loginRequest) {
        Student student = studentService.getStudentByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());

        if (student != null) {
            return new ResponseEntity<>(student, HttpStatus.OK); // 200 OK, user object with role
        } else {
            return new ResponseEntity<>(new ErrorResponse("Invalid email or password"), HttpStatus.UNAUTHORIZED); // 401 Unauthorized
        }
    }
}