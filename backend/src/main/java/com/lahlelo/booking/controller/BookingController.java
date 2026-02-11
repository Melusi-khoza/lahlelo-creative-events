package com.lahlelo.booking.controller;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.lahlelo.booking.entity.Booking;
import com.lahlelo.booking.repository.BookingRepository;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    //Fetch all bookings
    @GetMapping
    public List<Booking> getAllBookings(){
        return bookingRepository.findAll();
    }

    //Add a new booking
    @PostMapping
    public Booking createBooking(@RequestBody Booking booking){
        booking.setBookedAt(LocalDateTime.now());
        return bookingRepository.save(booking);
    }
}
