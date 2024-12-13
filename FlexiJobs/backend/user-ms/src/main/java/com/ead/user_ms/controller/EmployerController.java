package com.ead.user_ms.controller;

import com.ead.user_ms.data.Employer;
import com.ead.user_ms.service.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployerController {
    @Autowired
    EmployerService employerService;

    // Update the employer record associated with userId
    @PutMapping(path = "/users/{userId}/employers")
    public ResponseEntity<Employer> updateEmployer(@PathVariable int userId, @RequestBody Employer employer) {
        Employer existingEmployer = employerService.getEmployerByUserId(userId);
        if (existingEmployer != null) {
            employer.setId(existingEmployer.getId()); // Ensure the same record is updated
            employer.setUserId(userId); // Maintain the association
            employer.setFirstName(existingEmployer.getFirstName());
            employer.setLastName(existingEmployer.getLastName());
            employer.setEmail(existingEmployer.getEmail());
            employer.setPassword(existingEmployer.getPassword());
            employer.setRole(existingEmployer.getRole());
            Employer updatedEmployer = employerService.updateEmployer(employer);
            return new ResponseEntity<>(updatedEmployer, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
}
