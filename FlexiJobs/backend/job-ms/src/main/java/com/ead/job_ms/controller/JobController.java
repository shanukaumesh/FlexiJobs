package com.ead.job_ms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping(path = "/jobs", params = "postedBy")
    public List<Job> getJobsByPostedBy(@RequestParam String postedBy) {
        return obj.getJobsByPostedBy(postedBy);
    }
}
