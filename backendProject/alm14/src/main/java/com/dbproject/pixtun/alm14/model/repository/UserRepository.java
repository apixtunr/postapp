package com.dbproject.pixtun.alm14.model.repository;

import org.springframework.data.repository.CrudRepository;

import com.dbproject.pixtun.alm14.model.entity.User;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User, String> {
   List<User> findByCorreoAndPass(String correo, String pass);

Optional<User> findByCorreo(String correo);

List<User> findAllByNombreContaining(String nombre);
}
