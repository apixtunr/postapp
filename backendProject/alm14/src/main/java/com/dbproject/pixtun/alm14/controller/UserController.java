package com.dbproject.pixtun.alm14.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dbproject.pixtun.alm14.model.entity.User;
import com.dbproject.pixtun.alm14.service.UserService;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("api/create_users")
    public User createUser(@RequestBody User user) {
        // Lógica para crear un nuevo usuario utilizando el servicio UserService
        return userService.save(user);
    }

    @PostMapping("api/user/login")
    public User login(@RequestBody User user) {
        return userService.login(user);
    }
}
