package com.ead.user_ms.service;

import com.ead.user_ms.data.Employer;
import com.ead.user_ms.data.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployerService {

    @Autowired
    private EmployerRepository empRepo;

    @Autowired
    private BCryptPasswordEncoder encoder;




    public List<Employer> getEmployer()
    {
        return empRepo.findAll();
    }

    public Employer getEmployerById(int id)
    {
        Optional<Employer> employer = empRepo.findById(id);
        if(employer.isPresent()){
            return employer.get();
        }
        return null;
    }


    public Employer createEmployer(Employer employer)
    {
        employer.setPassword(encoder.encode(employer.getPassword()));
        return empRepo.save(employer);
    }

    public Employer updateEmployer(Employer employer)
    {

        return empRepo.save(employer);
    }


    public void deleteEmployer(int id)
    {
        empRepo.deleteById(id);


    }

    public Employer getEmployerByEmailAndPassword (String email, String password) {
        Optional<Employer> employer = empRepo.findByEmail(email);
        if (employer.isPresent() && encoder.matches(password, employer.get().getPassword())){
            return employer.get();
        } else {
            return null;
        }
    }
}