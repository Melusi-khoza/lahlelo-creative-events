// Gives basic CRUD operations for the bookings table

package com.lahlelo.booking.repository;

import com.lahlelo.booking.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long>{
}
