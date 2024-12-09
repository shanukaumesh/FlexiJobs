package com.ead.job_ms.service;


import com.ead.job_ms.data.Job;
import com.ead.job_ms.data.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobService {
    @Autowired
    private JobRepository jobRepo;

    public List<Job> getJob()
    {
        return jobRepo.findAll();
    }

    public Job getJobById(int id)
    {
        Optional<Job> job = jobRepo.findById(id);
        if(job.isPresent()){
            return job.get();
        }
        return null;
    }

    public Job createJob(Job job)
    {
        return (Job) jobRepo.save(job);
    }

    public Job updateJob(Job job)
    {
        return (Job) jobRepo.save(job);
    }

    public void deleteJob(int id)
    {
        jobRepo.deleteById(id);

    }
}
