package com.ead.user_ms;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Disable CSRF protection
                .cors(Customizer.withDefaults()) // Enable CORS with defaults
                .authorizeHttpRequests(auth -> auth.anyRequest().permitAll()); // Allow all requests (customize as needed)

        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        // Define the BCryptPasswordEncoder with a strength of 12
        return new BCryptPasswordEncoder(12);
    }
}
