package com.dbproject.pixtun.alm14.service;


import java.util.Optional;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbproject.pixtun.alm14.model.entity.Comentario;
import com.dbproject.pixtun.alm14.model.entity.Post;
import com.dbproject.pixtun.alm14.model.repository.ComentarioRepository;
import com.dbproject.pixtun.alm14.model.repository.PostRepository;
import java.util.List;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ComentarioService {
    
    @Autowired
    private ComentarioRepository comentarioRepository;
    
    @Autowired
    private PostRepository postRepository;

    public Comentario crearComentario(Long postId, String creador, String contenido){
        Optional<Post> optionalPost = postRepository.findById(postId);
        if(optionalPost.isPresent()){
            Comentario comentario = new Comentario();

            comentario.setPost(optionalPost.get());
            comentario.setContenido(contenido);
            comentario.setCreador(creador);
            comentario.setFechaCreacion(new Date());

            return comentarioRepository.save(comentario);
        }
        throw new EntityNotFoundException("El Post no está funcionando");
    }

    public List<Comentario> getCommentsByPostId(Long postId){
        return comentarioRepository.findByPostId(postId);
    }

    
    
}
