package com.ead.application_ms.controller;


import com.ead.application_ms.data.Application;
import com.ead.application_ms.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ApplicationController {

    @Autowired
    private ApplicationService obj;

    @GetMapping(path = "/applications")
    public List<Application> getApplication()
    {
        return obj.getApplication();
    }

    @GetMapping(path = "/applications/{id}")
    public Application getApplicationById(@PathVariable int id)
    {
        return obj.getApplicationById(id);
    }

    @PostMapping(path = "/applications")
    public Application createApplication(@RequestBody Application application)
    {
        return obj.createApplication(application);
    }

    @PutMapping(path = "/applications")
    public Application updateApplication(@RequestBody Application application)
    {
        return obj.updateApplication(application);
    }

    @DeleteMapping(path = "/applications/{id}")
    public void deleteApplication(@PathVariable int id)
    {
        obj.deleteApplication(id);
    }
}
