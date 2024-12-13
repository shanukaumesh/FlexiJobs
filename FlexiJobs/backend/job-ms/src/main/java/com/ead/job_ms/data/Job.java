package com.ead.job_ms.data;

import java.math.BigDecimal;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "job_type", nullable = false)
    private String jobTitle;

    @Column(name = "job_role")
    private String jobRole;

    @Column(name = "district")
    private String district;

    @Column(name = "city")
    private String city;

    @Enumerated(EnumType.STRING)
    @Column(name = "application_receiving")
    private ApplicationReceiving applicationReceiving;

    @Column(name = "education")
    private String education;

    @Column(name = "starting_salary")
    private BigDecimal startingSalary;

    @Column(name = "salary_limit")
    private BigDecimal salaryLimit;

    @Column(name = "application_deadline")
    private Date applicationDeadline;

    @Column(name = " job_status")
    private boolean jobStatus;

    @Column(name = "job_photo")
    private String jobPhoto;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getJobRole() {
        return jobRole;
    }

    public void setJobRole(String jobRole) {
        this.jobRole = jobRole;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public BigDecimal getStartingSalary() {
        return startingSalary;
    }

    public void setStartingSalary(BigDecimal startingSalary) {
        this.startingSalary = startingSalary;
    }

    public BigDecimal getSalaryLimit() {
        return salaryLimit;
    }

    public void setSalaryLimit(BigDecimal salaryLimit) {
        this.salaryLimit = salaryLimit;
    }

    public Date getApplicationDeadline() {
        return applicationDeadline;
    }

    public void setApplicationDeadline(Date applicationDeadline) {
        this.applicationDeadline = applicationDeadline;
    }

    public boolean isJobStatus() {
        return jobStatus;
    }

    public void setJobStatus(boolean jobStatus) {
        this.jobStatus = jobStatus;
    }

    public String getJobPhoto() {
        return jobPhoto;
    }

    public void setJobPhoto(String jobPhoto) {
        this.jobPhoto = jobPhoto;
    }

    public enum ApplicationReceiving {
        email, dashboard
    }
}
