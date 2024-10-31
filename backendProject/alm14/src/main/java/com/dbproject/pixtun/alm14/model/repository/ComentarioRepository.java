package com.dbproject.pixtun.alm14.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dbproject.pixtun.alm14.model.entity.Comentario;
import java.util.List;

public interface ComentarioRepository extends JpaRepository<Comentario, Long>{
    List<Comentario> findByPostId(Long PostId);
}
