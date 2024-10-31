package com.dbproject.pixtun.alm14.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dbproject.pixtun.alm14.model.entity.Post;
import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long>{
    List<Post> findAllByNombreContaining(String nombre);
}
