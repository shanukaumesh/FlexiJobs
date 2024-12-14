package com.ead.application_ms.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ApplicationRepository extends JpaRepository <Application, Integer> {
    @Query("SELECT a FROM Application a WHERE a.email = :email")
    public List<Application> getApplicationByEmail(@Param("email") String email);
}
