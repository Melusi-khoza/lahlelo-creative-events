// Gives basic CRUD operations for the bookings table

package com.lahlelo.booking.repository;

import com.lahlelo.booking.entity.Booking;
<<<<<<< HEAD
import org.springframework.data.jpa.repository.JpaRepository;
=======

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
>>>>>>> 602dc171e1b10551d9724b898562a3287ac8b4d2
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long>{
<<<<<<< HEAD
}
=======
    long countByBookedAtAfter(LocalDateTime time);
    Booking findTopByOrderByBookedAtDesc();
    List<Booking> findByBookedAtAfter(LocalDateTime time);
    @Query("SELECT b.eventType, COUNT(b) FROM Booking b GROUP BY b.eventType")
    List<Object[]> countBookingsByEventType();
} 
>>>>>>> 602dc171e1b10551d9724b898562a3287ac8b4d2
