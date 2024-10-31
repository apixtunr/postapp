package com.dbproject.pixtun.alm14.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbproject.pixtun.alm14.model.entity.Post;
import com.dbproject.pixtun.alm14.service.PostService;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("api/posts")
@CrossOrigin(origins = "http://localhost:5545")
public class PostController {
    @Autowired
    private PostService postService;

    @PostMapping 
    public ResponseEntity<?> crearPost(@RequestBody Post post) {
        try {
            Post crearPost = postService.savePost(post);
            return ResponseEntity.status(HttpStatus.CREATED).body(crearPost);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Post>> getAllPosts(){
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(postService.getAllPosts());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{postId}")
    public ResponseEntity<?> getPostById(@PathVariable Long postId){
        try {
            Post post = postService.getPostById(postId);
            return ResponseEntity.ok(post);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PutMapping("/{postId}/meGusta")
    public ResponseEntity<?> likePost(@PathVariable Long postId){
        try {
            postService.likePost(postId);
            return ResponseEntity.ok(new String[]{"Me gusta creado exitosamente"});
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/buscar/{nombre}")
    public ResponseEntity<?> searchByName(@PathVariable String nombre){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(postService.searchByName(nombre));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

}
