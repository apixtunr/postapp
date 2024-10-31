package com.dbproject.pixtun.alm14.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.dbproject.pixtun.alm14.model.entity.Post;
import com.dbproject.pixtun.alm14.model.repository.PostRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class PostService{
     private final PostRepository postRepository;

      public PostService(PostRepository postRepository)
    {
        this.postRepository =postRepository;
    }

    public Post savePost(Post post){
        post.setLikes(0);
        post.setVistas(0);
        post.setFecha(new Date());
        
        return postRepository.save(post);
    }

    public List<Post> getAllPosts(){
        return postRepository.findAll();
    }

    public Post getPostById(Long postId){
        Optional<Post> optionalPost = postRepository.findById(postId);
        if(optionalPost.isPresent()){
            Post post = optionalPost.get();
            post.setVistas(post.getVistas()+1);
            return postRepository.save(post);
        }else{
            throw new EntityNotFoundException("El Post no funciona");
        }
    }

    public void likePost(Long postId){
        Optional<Post> optionalPost= postRepository.findById(postId);
        if(optionalPost.isPresent()){
            Post post = optionalPost.get();
            post.setLikes(post.getLikes()+1);
            postRepository.save(post);
        }else{
            throw new EntityNotFoundException("El Post no funciona");
        }
    }

        public List<Post> searchByName(String nombre){
            return postRepository.findAllByNombreContaining(nombre);
        }
             
}
