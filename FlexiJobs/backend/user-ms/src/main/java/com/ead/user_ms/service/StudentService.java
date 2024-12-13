package com.ead.user_ms.service;

import com.ead.user_ms.data.Student;
import com.ead.user_ms.data.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    private StudentRepository stuRepo;

    public Student updateStudent(Student student) {
        return stuRepo.save(student);
    }

    public Student getStudentByUserId(int userId) {
        return stuRepo.findByUserId(userId);
    }
}
