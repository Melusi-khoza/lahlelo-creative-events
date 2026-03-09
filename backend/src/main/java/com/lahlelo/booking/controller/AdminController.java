package com.lahlelo.booking.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import com.lahlelo.booking.entity.Booking;
import com.lahlelo.booking.repository.BookingRepository;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final BookingRepository bookingRepository;

    public AdminController(BookingRepository bookingRepository){
        this.bookingRepository = bookingRepository;
    }

    @GetMapping("/bookings")
    public List<Booking> getAllBookings(){
        return bookingRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id){
        if(!bookingRepository.existsById(id)){
            return ResponseEntity.notFound().build();
        }

        bookingRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }
}
