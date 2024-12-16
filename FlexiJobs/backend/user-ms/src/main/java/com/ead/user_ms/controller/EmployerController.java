package com.ead.user_ms.controller;

import com.ead.user_ms.data.Employer;
import com.ead.user_ms.data.ErrorResponse;
import com.ead.user_ms.data.Student;
import com.ead.user_ms.service.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployerController {
    @Autowired
    EmployerService employerService;


    @GetMapping(path ="/employers")
    public List<Employer> getEmployer()
    {
        return employerService.getEmployer();
    }

    @GetMapping(path="/employers/{id}")
    public Employer getEmployerById(@PathVariable int id)
    {
        return employerService.getEmployerById(id);
    }

    @PostMapping(path= "/employers")
    public Employer createEmployer(@RequestBody Employer employer)
    {
        return employerService.createEmployer(employer);
    }

    @PutMapping(path= "/employers")
    public Employer updateEmployer(@RequestBody Employer employer)
    {
        return employerService.updateEmployer(employer);
    }

    @DeleteMapping(path = "/employers/{id}")
    public void deleteEmployer(@PathVariable int id)
    {
        employerService.deleteEmployer(id);

    }

    @PostMapping (path = "/employers/login")
    public ResponseEntity<?> loginUser(@RequestBody Employer.EmployerLoginRequest  loginRequest) {
        Employer employer = employerService.getEmployerByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());

        if (employer != null) {
            return new ResponseEntity<>(employer, HttpStatus.OK); // 200 OK, user object with role
        } else {
            return new ResponseEntity<>(new ErrorResponse("Invalid email or password"), HttpStatus.UNAUTHORIZED); // 401 Unauthorized
        }
    }
}