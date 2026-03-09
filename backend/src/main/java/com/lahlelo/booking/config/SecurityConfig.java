package com.lahlelo.booking.config;

import org.springframework.security.core.userdetails.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import java.util.List;

@Configuration
public class SecurityConfig {
    
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http
            .csrf(csrf -> csrf.disable())
            .cors(cors -> {})
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(HttpMethod.OPTIONS, "./**").permitAll()
                .requestMatchers(HttpMethod.POST, "/bookings").permitAll()
                .requestMatchers(HttpMethod.GET,"/bookings/**").permitAll()
                .requestMatchers(HttpMethod.GET,"/bookings/stats/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.DELETE, "/bookings/**").hasRole("ADMIN")
                .anyRequest().permitAll()
            )
            .httpBasic(httpBasic -> {});
            
        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService(){
        UserDetails admin = User
            .withUsername("admin")
            .password(passwordEncoder().encode("lahlelo123"))
            .roles("ADMIN")
            .build();

        return new InMemoryUserDetailsManager(admin);
    }

    @Bean
    public org.springframework.web.cors.CorsConfigurationSource corsConfigurationSource() {
        org.springframework.web.cors.CorsConfiguration configuration =
                new org.springframework.web.cors.CorsConfiguration();
    
        configuration.setAllowedOrigins(java.util.List.of("http://localhost:5173"));
        configuration.setAllowedMethods(java.util.List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(java.util.List.of("*"));
        configuration.setAllowCredentials(true);
    
        org.springframework.web.cors.UrlBasedCorsConfigurationSource source =
                new org.springframework.web.cors.UrlBasedCorsConfigurationSource();
    
        source.registerCorsConfiguration("/**", configuration);
        return source;
    } 
}
