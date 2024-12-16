package com.ead.user_ms.service;

import com.ead.user_ms.data.Student;
import com.ead.user_ms.data.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository stuRepo;

    @Autowired
    private BCryptPasswordEncoder encoder;


    public List<Student> getStudent()
    {
        return stuRepo.findAll();
    }

    public Student getStudentById(int id)
    {
        Optional<Student> course = stuRepo.findById(id);
        if(course.isPresent()){
            return course.get();
        }
        return null;
    }


    public Student createStudent(Student student)
    {
        student.setPassword(encoder.encode(student.getPassword()));
        return stuRepo.save(student);
    }


    public Student updateStudent(Student student) {
        return stuRepo.save(student);
    }


    public void deleteStudent(int id)
    {
        stuRepo.deleteById(id);


    }

    public Student getStudentByEmailAndPassword (String email, String password) {
        Optional<Student> student = stuRepo.findByEmail(email);
        if (student.isPresent() && encoder.matches(password, student.get().getPassword())){
            return student.get();
        } else {
            return null;
        }
    }
}