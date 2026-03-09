package com.lahlelo.booking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;
    
    public void sendBookingResponse(String toEmail, String customerName, String eventType, String eventDate) {
    
        SimpleMailMessage message = new SimpleMailMessage();
    
        message.setTo(toEmail);
        message.setSubject("Lahlelo Creative Events - Booking Received");
    
        message.setText(
            "Dear " + customerName + ",\n\n" +
            "Thank you for choosing Lahlelo Creative Events for your upcoming event.\n" +
            "We are truly excited to be part of your special occasion and look forward to creating a memorable experience for you.\n\n" +
            "We have received your booking with the following details:\n" +
            "Event Type: " + eventType + "\n" +
            "Event Date: " + eventDate + "\n\n" +
            "To ensure that we plan everything according to your expectations, please kindly provide us with the following additional details:\n" +
            "o Event venue/location\n" +
            "o Event start and end time\n" +
            "o Estimated number of guests\n" +
            "o Theme or color scheme (if applicable)\n" +
            "o Any special requests or preferences\n\n" +
            "This information will help our team prepare and tailor our services specifically to your needs.\n\n" +
            "Thank you once again for trusting Lahlelo Creative Events. We look forward to working with you.\n\n" +
            "Warm regards,\n" +
            "Lahlelo Creative Events"
        );
    
        message.setFrom("lahlelocreativeevents@gmail.com");
    
        mailSender.send(message);
    }

    public void sendAutoConfirmation(String toMail, String customerName, String eventType, String eventDate){
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(toMail);
        message.setSubject("Booking Confirmation - Lahlelo Creative Events");

        message.setText(
            "Dear "+ customerName+ ",\n\n"+
            "Thank you for booking with Lahlelo Creative Events.\n\n"+
            "We have successfully received your booking request:\n"+
            "Event Type: "+eventType+"\n"+
            "Event Date: "+eventDate+"\n\n"+
            "Our team will review your booking and contact you shortly to discuss further details.\n\n"+
            "Kind regards,\n"+
            "Lahlelo Creative Events"
        );
        message.setFrom("lahlelocreativeevents@gmail.com");
        mailSender.send(message);
    }
    public void sendNewBookingNotification(String customerName, String eventType, String eventDate, String clientEmail){

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo("lahlelocreativeevents@gmail.com");
        message.setSubject("🔔 New Booking Received");

        message.setText(
            "New booking received!\n\n"+
            "Client Name: "+customerName+"\n"+
            "Client Email: "+clientEmail+"\n"+
            "Event Type: "+eventType+"\n"+
            "Event Date: "+eventDate+"\n\n"+
            "Please log into the admin dashboard for full details."
        );
        message.setFrom("lahlelocreativeevents@gmail.com");
        mailSender.send(message);
    }
}
