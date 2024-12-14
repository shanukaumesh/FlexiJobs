package com.ead.payment_ms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ead.payment_ms.data.Payment;
import com.ead.payment_ms.service.PaymentService;

@RestController
public class PaymentController {

    @Autowired
    private PaymentService obj;

    @GetMapping(path = "/payments")
    public List<Payment> getPayment() {
        return obj.getPayment();
    }

    @GetMapping(path = "/payments/{id}")
    public Payment getPaymentById(@PathVariable int id) {
        return obj.getPaymentById(id);
    }

    @PostMapping(path = "/payments")
    public Payment createPayment(@RequestBody Payment payment) {
        return obj.createPayment(payment);
    }

    @PutMapping(path = "/payments")
    public Payment updatePayment(@RequestBody Payment payment) {
        return obj.updatePayment(payment);
    }

    @DeleteMapping(path = "/payments/{id}")
    public void deletePayment(@PathVariable int id) {
        obj.deletePayment(id);
    }

    @GetMapping(path = "/payments")
    public List<Payment> getPayments(@RequestParam(required = false) String email) {
        if (email != null && !email.isEmpty()) {
            return obj.getPaymentsByUserEmail(email); // Fetch payments by email
        }
        return obj.getPayment(); // Fetch all payments
    }
}
