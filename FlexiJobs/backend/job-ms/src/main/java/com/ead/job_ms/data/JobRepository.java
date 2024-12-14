package com.ead.job_ms.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JobRepository extends JpaRepository <Job, Integer>{
    @Query("SELECT j FROM Job j WHERE j.postedBy = :postedBy")
    public List<Job> getJobsByPostedBy(@Param("postedBy") String postedBy);
}
