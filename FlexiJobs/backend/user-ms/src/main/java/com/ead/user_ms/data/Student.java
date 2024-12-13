package com.ead.user_ms.data;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "user_id")
    private int userId;

    @Column(name = "nic", nullable = true)
    private Long nic;

    @Column(name = "dob", nullable = true)
    private Date dob;

    @Column(name = "address", nullable = true)
    private String address;

    @Column(name = "nic_photo", nullable = true)
    private String nicPhoto;

    @Column(name = "university", nullable = true)
    private String university;

    @Column(name = "uni_index", nullable = true)
    private String uniIndex;

    @Column(name = "uni_email", nullable = true)
    private String uniEmail;

    @Column(name = "uni_id", nullable = true)
    private String uniIdPhoto;

    @Column(name = "status")
    private boolean status = true;

    // Default constructor
    public Student() {}

    // Constructor with userId
    public Student(int userId) {
        this.userId = userId;
    }

    @Override
    public int getId() {
        return id;
    }

    @Override
    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public Long getNic() {
        return nic;
    }

    public void setNic(Long nic) {
        this.nic = nic;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    @Override
    public boolean isStatus() {
        return status;
    }

    @Override
    public void setStatus(boolean status) {
        this.status = status;
    }
}
