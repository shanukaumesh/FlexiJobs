package com.ead.user_ms.service;

import com.ead.user_ms.data.Employer;
import com.ead.user_ms.data.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployerService {

    @Autowired
    private EmployerRepository empRepo;

    public Employer updateEmployer (Employer employer) {
        return empRepo.save(employer);
    }

    public Employer getEmployerByUserId(int userId) {
        return empRepo.findByUserId(userId);
    }
}
