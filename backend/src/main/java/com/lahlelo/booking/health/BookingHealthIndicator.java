package com.lahlelo.booking.health;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.lahlelo.booking.repository.BookingRepository;
import com.lahlelo.booking.service.EmailService;
import java.util.HashMap;
import java.util.Properties;
import java.util.Map;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import jakarta.mail.Session;
import jakarta.mail.Transport;

@RestController
@Component
public class BookingHealthIndicator {
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private EmailService emailService;

    private boolean checkDatabaseConnection() {
        try {
            bookingRepository.count();
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @GetMapping("/health/detailed")
    public ResponseEntity<Map<String, Object>> getDetailedHealth(){
        Map<String, Object> heathDetails = new HashMap<>();

        //Application Info
        heathDetails.put("application", "Lahlelo Creative Events");
        heathDetails.put("status", "RUNNING");
        heathDetails.put("timestamp", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));

        //Database stats
        Map<String, Object> dbStats = new HashMap<>();
        dbStats.put("totalBookings", checkDatabaseConnection() ?bookingRepository.count() : 0);
        dbStats.put("status", checkDatabaseConnection() ? "connected" : "disconnected");
        heathDetails.put("database", dbStats);

        //Email Service status
        Map<String, Object> emailStats = new HashMap<>();
        emailStats.put("service", emailService.isWorking() ? "available" : "unavailable");
        emailStats.put("auto_confirmation", "enabled");
        emailStats.put("admin_notifications", "enabled");
        emailStats.put("from_address", "lahlelocreativeevents@gmail.com");
        emailStats.put("admin_address", "lahlelocreativeevents@gmail.com");
        heathDetails.put("email_service", emailStats);

        //System Info
        Map<String, Object> systemInfo = new HashMap<>();
        systemInfo.put("java_version", System.getProperty("java.version"));
        systemInfo.put("available_processors", Runtime.getRuntime().availableProcessors());
        systemInfo.put("free_memory_mb", Runtime.getRuntime().freeMemory() / 1024 / 1024 + " MB");
        systemInfo.put("max_memory", Runtime.getRuntime().maxMemory() / 1024 / 1024 + " MB");
        heathDetails.put("system", systemInfo);

        return ResponseEntity.ok(heathDetails);
    }

    @GetMapping("/health/simple")
    public ResponseEntity<Map<String, String>> getSimpleHealth(){
        Map<String, String> response = new HashMap<>();
        response.put("status", "UP");
        response.put("message", "Lahlelo Creative Events backend is running.");
        response.put("bookings", String.valueOf(bookingRepository.count()));
        response.put("email", emailService.isWorking() ? "OK" : "Check");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/test-email")
    public String testEmail() {
        try {
            Properties props = new Properties();
            props.put("mail.smtp.host", System.getenv("MAIL_HOST"));
            props.put("mail.smtp.port", System.getenv("MAIL_PORT"));
            props.put("mail.smtp.auth", "true");
            props.put("mail.smtp.starttls.enable", "true");
            
            Session session = Session.getInstance(props);
            Transport transport = session.getTransport("smtp");
            transport.connect(
                System.getenv("MAIL_HOST"),
                Integer.parseInt(System.getenv("MAIL_PORT")),
                System.getenv("MAIL_USERNAME"),
                System.getenv("MAIL_PASSWORD")
            );
            transport.close();
            return "Email connection successful! ✓";
        } catch (Exception e) {
            return "Email connection failed: " + e.getMessage();
        }
    }
}
