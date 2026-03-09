package com.lahlelo.booking.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.lahlelo.booking.entity.Booking;
import com.lahlelo.booking.repository.BookingRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.lahlelo.booking.service.WhatsAppService;
import com.lahlelo.booking.service.EmailService;

@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true") // Allow requests from React frontend
@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private WhatsAppService whatsAppService;

    @Autowired
    private EmailService emailService;

    //Fetch all bookings
    @GetMapping
    public List<Booking> getAllBookings(){
        return bookingRepository.findAll();
    }

    //Add a new booking
    @PostMapping
    public Booking createBooking(@RequestBody Booking booking){
        booking.setBookedAt(LocalDateTime.now());
        Booking savedBooking = bookingRepository.save(booking);

        //Send WhatsApp alert to admin
        whatsAppService.sendNewBookingAlert(
            savedBooking.getFullname(),
            savedBooking.getEventType(),
            savedBooking.getEventDate().toString()
        );

        //Send auto confirmation email to client
        try{
            emailService.sendAutoConfirmation(
                savedBooking.getEmail(),
                savedBooking.getFullname(),
                savedBooking.getEventType(),
                savedBooking.getEventDate().toString()
            );

            //Admin notification email
            emailService.sendNewBookingNotification(
                savedBooking.getFullname(),
                savedBooking.getEventType(),
                savedBooking.getEventDate().toString(),
                savedBooking.getEmail()
            );
        }catch(Exception e){
            System.out.println("Auto email failed but booking saved.");
        }

        return savedBooking;
    }

    //Get number of bookings
    @GetMapping("/count")
    public long getBookingCount(){
        return bookingRepository.count();
    }

    //Get number of new bookings
    @GetMapping("/new-count")
    public long getNewBookingCount(
        @RequestParam("lastCheck") String lastCheck){
        LocalDateTime lastCheckedTime = LocalDateTime.parse(lastCheck);

        return bookingRepository.countByBookedAtAfter(lastCheckedTime);
    }

    @GetMapping("/latest-time")
    public LocalDateTime getLatestBookingTime(){
        Booking latestBooking = bookingRepository.findTopByOrderByBookedAtDesc();
        return latestBooking != null ? latestBooking.getBookedAt() : LocalDateTime.now();
    }

    // Fetch new bookings since last check
    @GetMapping("/new")
    public List<Booking> getNewBookings(@RequestParam("lastCheck") String lastCheck) {
        LocalDateTime lastCheckedTime = LocalDateTime.parse(lastCheck);
        return bookingRepository.findByBookedAtAfter(lastCheckedTime);
    }

    @GetMapping("/stats/event-types")
    public List<Map<String, Object>> getEventTypeStats(){
        List<Object[]> results = bookingRepository.countBookingsByEventType();

        return results.stream()
            .map(result -> Map.of("name", result[0], "value", result[1]))
            .toList();
    }

    @PostMapping("/send-email")
    public String sendMail(@RequestParam String email, @RequestParam String name, @RequestParam String eventType, @RequestParam String eventDate){
        emailService.sendBookingResponse(email, name, eventType, eventDate);

        return "Email sent successfully";
    }
}
