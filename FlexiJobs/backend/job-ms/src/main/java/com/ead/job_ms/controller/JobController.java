package com.ead.job_ms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ead.job_ms.data.Job;
import com.ead.job_ms.service.JobService;

@RestController
public class JobController {

    @Autowired
    private JobService obj;

    @GetMapping(path = "/jobs")
    public List<Job> getJob() {
        return obj.getJob();
    }

    @GetMapping(path = "/jobs/{id}")
    public Job getJobById(@PathVariable int id) {
        return obj.getJobById(id);
    }

    @PostMapping(path = "/jobs")
    public Job createJob(@RequestBody Job job) {
        return obj.createJob(job);
    }

    @PutMapping(path = "/jobs")
    public Job updateJob(@RequestBody Job job) {
        return obj.updateJob(job);
    }

    @DeleteMapping(path = "/jobs/{id}")
    public void deleteJob(@PathVariable int id) {
        obj.deleteJob(id);
    }
}
