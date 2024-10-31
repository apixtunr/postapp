package com.dbproject.pixtun.alm14.model.entity;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @Column(length = 5000)
    private String contenido;

    private String creador;

    private String imagen;

    private Date fecha;

    private int likes;

    private int vistas;
    
    private List<String> etiquetas;

}
