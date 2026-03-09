package com.lahlelo.booking.entity;

import java.time.LocalDateTime;
import lombok.Data;
import jakarta.persistence.*;
import java.time.LocalDate;

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

    @Column(name = "event_date")
    private LocalDate eventDate;
    public LocalDate getEventDate(){
        return eventDate;
    }
    public void setEventDate(LocalDate eventDate){
        this.eventDate = eventDate;
    }

    @Column(name = "booked_at")
    private LocalDateTime bookedAt;

    @PrePersist
    protected void onCreate() {
        bookedAt = LocalDateTime.now();
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public LocalDateTime getBookedAt() {
        return bookedAt;
    }

    public void setBookedAt(LocalDateTime bookedAt) {
        this.bookedAt = bookedAt;
    }
}
