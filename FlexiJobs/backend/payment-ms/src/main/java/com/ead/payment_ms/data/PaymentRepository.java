package com.ead.payment_ms.data;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRepository extends JpaRepository <Payment, Integer>{
    List<Payment> findByUserEmail(String userEmail);
}
