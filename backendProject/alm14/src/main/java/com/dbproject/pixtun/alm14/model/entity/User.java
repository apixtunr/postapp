package com.dbproject.pixtun.alm14.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name = "user")
@Entity
public class User {
    @Id
    @Column(nullable = false, unique = true) // Asegúrate de que el correo sea único
    private String correo;
    @Column(nullable = false)
    private String pass;
    private String nombre;
    private String direccion;
    private String telefono;
}
