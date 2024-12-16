package com.ead.user_ms.data;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

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


    public int getId() {
        return id;
    }


    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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


    public boolean isStatus() {
        return status;
    }


    public void setStatus(boolean status) {
        this.status = status;
    }

    public static class StudentLoginRequest {
        private String email;
        private String password;

        // Getters and setters
        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}