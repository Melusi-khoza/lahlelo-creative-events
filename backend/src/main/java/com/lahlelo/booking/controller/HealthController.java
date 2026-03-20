package com.lahlelo.booking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import com.lahlelo.booking.repository.BookingRepository;
import com.lahlelo.booking.service.EmailService;
import java.util.HashMap;
import java.util.Map;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
public class HealthController {
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private EmailService emailService;

    @GetMapping("/health/simple")
    public ResponseEntity<Map<String, String>> getSimpleHealth(){
        Map<String, String> response = new HashMap<>();
        response.put("status", "UP");
        response.put("message", "Lahlelo Creative Events backend is running.");
        response.put("bookings", String.valueOf(bookingRepository.count()));
        response.put("email", emailService.isWorking() ? "OK" : "Check");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/health/detailed")
    public ResponseEntity<Map<String, Object>> getDetailedHealth(){
        Map<String, Object> healthDetails = new HashMap<>();

        healthDetails.put("application", "Lahlelo Creative Events");
        healthDetails.put("status", "RUNNING");
        healthDetails.put("timestamp", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));

        Map<String, Object> dbStats = new HashMap<>();
        dbStats.put("totalBookings", bookingRepository.count());
        dbStats.put("status", "connected");
        healthDetails.put("database", dbStats);

        Map<String, Object> emailStats = new HashMap<>();
        emailStats.put("service", emailService.isWorking() ? "available" : "unavailable");
        emailStats.put("auto_confirmation", "enabled");
        emailStats.put("admin_notifications", "enabled");
        emailStats.put("from_address", "lahlelocreativeevents@gmail.com");
        emailStats.put("admin_address", "lahlelocreativeevents@gmail.com");
        healthDetails.put("email_service", emailStats);

        Map<String, Object> systemInfo = new HashMap<>();
        systemInfo.put("java_version", System.getProperty("java.version"));
        systemInfo.put("available_processors", Runtime.getRuntime().availableProcessors());
        systemInfo.put("free_memory_mb", Runtime.getRuntime().freeMemory() / 1024 / 1024 + " MB");
        systemInfo.put("max_memory", Runtime.getRuntime().maxMemory() / 1024 / 1024 + " MB");
        healthDetails.put("system", systemInfo);

        return ResponseEntity.ok(healthDetails);
    }

    @GetMapping("/test-email")
    public String testEmail() {
        try {
            boolean isWorking = emailService.isWorking();
            return "Email service status: " + (isWorking ? "OK ✓" : "Check configuration");
        } catch (Exception e) {
            return "Email test failed: " + e.getMessage();
        }
    }
}