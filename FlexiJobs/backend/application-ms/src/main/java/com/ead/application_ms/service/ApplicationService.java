package com.ead.application_ms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ead.application_ms.data.Application;
import com.ead.application_ms.data.ApplicationRepository;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepo;

    public List<Application> getApplication() {
        return applicationRepo.findAll();
    }

    public Application getApplicationById(int id) {
        Optional<Application> application = applicationRepo.findById(id);
        if (application.isPresent()) {
            return application.get();
        }
        return null;
    }

    public Application createApplication(Application application) {
        return (Application) applicationRepo.save(application);
    }

    public Application updateApplication(Application application) {
        return (Application) applicationRepo.save(application);
    }

    public void deleteApplication(int id) {
        applicationRepo.deleteById(id);
    }

    public List<Application> getApplicationByEmail (String email) {
        return applicationRepo.getApplicationByEmail(email);
    }
}
