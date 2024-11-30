package com.ead.user_ms.data;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Student extends User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "dob")
    private Date dob;

    @Column(name = "nic")
    private Long nic;

    @Column(name = "nic_photo")
    private String nicPhoto;

    @Column(name = "university")
    private String university;

    @Column(name = "uni_index")
    private String uniIndex;

    @Column(name = "uni_email")
    private String uniEmail;

    @Column(name = "uni_id_photo")
    private String uniIdPhoto;

    @Column(name = "bio")
    private String bio;

    @Column(name = "skill", columnDefinition = "JSON")
    private String skill;

    @Column(name = "field")
    private String field;

    @Column(name = "available_dates", columnDefinition = "JSON")
    private String availableDates;

    @Column(name = "start_time")
    private String startTime;

    @Column(name = "end_time")
    private String endTime;

    @Column(name = "bank_name")
    private String bankName;

    @Column(name = "bank_accno")
    private String bankAccNo;

    @Column(name = "status")
    private boolean status = true;

    @Override
    public int getId() {
        return id;
    }

    @Override
    public void setId(int id) {
        this.id = id;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public Long getNic() {
        return nic;
    }

    public void setNic(Long nic) {
        this.nic = nic;
    }

    public String getNicPhoto() {
        return nicPhoto;
    }

    public void setNicPhoto(String nicPhoto) {
        this.nicPhoto = nicPhoto;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getUniIndex() {
        return uniIndex;
    }

    public void setUniIndex(String uniIndex) {
        this.uniIndex = uniIndex;
    }

    public String getUniEmail() {
        return uniEmail;
    }

    public void setUniEmail(String uniEmail) {
        this.uniEmail = uniEmail;
    }

    public String getUniIdPhoto() {
        return uniIdPhoto;
    }

    public void setUniIdPhoto(String uniIdPhoto) {
        this.uniIdPhoto = uniIdPhoto;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getAvailableDates() {
        return availableDates;
    }

    public void setAvailableDates(String availableDates) {
        this.availableDates = availableDates;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getBankAccNo() {
        return bankAccNo;
    }

    public void setBankAccNo(String bankAccNo) {
        this.bankAccNo = bankAccNo;
    }

    @Override
    public boolean isStatus() {
        return status;
    }

    @Override
    public void setStatus(boolean status) {
        this.status = status;
    }
}
