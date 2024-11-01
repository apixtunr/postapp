package com.dbproject.pixtun.alm14.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://149.50.145.214:5545")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Incluye OPTIONS para preflight
                        .allowedHeaders("Content-Type", "Authorization", "X-Requested-With", "Accept") // Headers específicos
                        .exposedHeaders("Authorization") // Exponer headers si es necesario
                        .allowCredentials(true); // Permitir credenciales
            }
        };
    }
}
