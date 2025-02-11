package com.ead.payment_ms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ead.payment_ms.data.Payment;
import com.ead.payment_ms.data.PaymentRepository;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository payRepo;

    public List<Payment> getPayment() {
        return payRepo.findAll();
    }

    public Payment getPaymentById(int id) {
        Optional<Payment> payment = payRepo.findById(id);
        if (payment.isPresent()) {
            return payment.get();
        }
        return null;
    }

    public Payment createPayment(Payment payment) {
        return (Payment) payRepo.save(payment);
    }

    public Payment updatePayment(Payment payment) {
        return (Payment) payRepo.save(payment);
    }

    public void deletePayment(int id) {
        payRepo.deleteById(id);
    }

    public List<Payment> getPaymentsByUserEmail(String userEmail) {
        return payRepo.findByUserEmail(userEmail);
    }
}
