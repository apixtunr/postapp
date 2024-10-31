package com.dbproject.pixtun.alm14.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.dbproject.pixtun.alm14.model.entity.User;
import com.dbproject.pixtun.alm14.model.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

   public UserService(UserRepository userRepository)
    {
        this.userRepository=userRepository;
    }

     public List<User> getAllPosts(){
        return (List<User>) userRepository.findAll();
    }
   
    public User save(User par_user) {
        return userRepository.save(par_user);
    }

    public Optional<User> findByCorreo(String correo) {
        return userRepository.findByCorreo(correo);
    }
   
    public User login(User user){
        List<User> listUsers = userRepository.findByCorreoAndPass(user.getCorreo(),user.getPass());
        User userReturn = null;

        if(!listUsers.isEmpty()){
            userReturn = listUsers.get(0);
        }
        return userReturn;
    }

}
