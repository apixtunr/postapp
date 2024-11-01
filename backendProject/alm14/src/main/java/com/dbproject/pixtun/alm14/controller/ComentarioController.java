package com.dbproject.pixtun.alm14.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dbproject.pixtun.alm14.service.ComentarioService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/")
public class ComentarioController {
    @Autowired
    private ComentarioService comentarioService;

    @PostMapping("comentarios/crear")
    public ResponseEntity<?> crearComentario(@RequestParam Long postId,
                                             @RequestParam String creador,
                                             @RequestBody String contenido){
        try {
            return ResponseEntity.ok(comentarioService.crearComentario(postId, creador, contenido));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage());
        }
    }

    @GetMapping("comentarios/{postId}")
    public ResponseEntity<?> getCommentsByPostId(@PathVariable Long postId){
        try {
            return ResponseEntity.ok(comentarioService.getCommentsByPostId(postId));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Algo salió mal");
        }
    }

}
