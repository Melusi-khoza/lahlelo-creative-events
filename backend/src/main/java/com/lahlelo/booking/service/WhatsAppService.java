package com.lahlelo.booking.service;

import org.springframework.stereotype.Service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;

@Service
public class WhatsAppService {

    private final String ACCOUNT_SID = "AC2c5c4eb7aa50460ffdbce22c0351dc48";
    private final String AUTH_TOKEN = "504a8ed9a1348bfcee7aba137631e480";

    //Twillio sandbox number
    private final String FROM_NUMBER = "whatsapp:+14155238886";

    //Admin WhatsApp number
    private final String TO_NUMBER = "whatsapp:+27681928157";

    public void sendNewBookingAlert(String fullname, String eventType, String eventDate){

        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

        String messageBody = "🚨 New Booking Alert!\n\n" +
                "Name: "+ fullname +"\n" +
                "Event Type: "+ eventType +"\n"+
                "Event Date: "+ eventDate+"\n\n"+
                "Check your admin dashboard.";

        Message.creator(
            new com.twilio.type.PhoneNumber(TO_NUMBER),
            new com.twilio.type.PhoneNumber(FROM_NUMBER),
            messageBody
        ).create();  
    }
}
