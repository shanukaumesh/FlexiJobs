package com.ead.user_ms.service;


import com.ead.user_ms.data.User;
import com.ead.user_ms.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService
{
    @Autowired
    private UserRepository userRepo;


    //get users
    public List<User> getUser()
    {
        return userRepo.findAll();
    }

    //get user by their id
    public User getUserById(int id)
    {
        Optional<User> course = userRepo.findById(id);
        if(course.isPresent()){
            return course.get();
        }
        return null;
    }

    //create user
    public User createUser(User user)
    {
        return (User) userRepo.save(user);

    }

    //update user
    public User updateUser(User user)
    {
        return (User) userRepo.save(user);
    }

    //delete user
    public void deleteUser(int id)
    {
        userRepo.deleteById(id);


    }
}