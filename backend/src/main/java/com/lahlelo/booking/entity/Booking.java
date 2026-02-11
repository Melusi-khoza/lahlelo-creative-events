package com.lahlelo.booking.entity;

import java.time.LocalDateTime;
import lombok.Data;
import jakarta.persistence.*;

@Data
@Entity
@Table(name = "bookings")
public class Booking {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullname;
    private String email;
    private String phone;

    @Column(name = "event_type")
    private String eventType;

    private String province;
    private String comments;

    @Column(name = "booked_at")
    private LocalDateTime bookedAt;
}
