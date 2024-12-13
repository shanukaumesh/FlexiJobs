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
        // Find user by ID using the repository
        Optional<User> user = userRepo.findById(id);

        // Check if the user is present, return it; otherwise, throw an exception or return null
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new RuntimeException("User with ID " + id + " not found");
        }
    }

    //create user
    public User createUser(User user) {
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

    public User getUserByEmailAndPassword (String email, String password) {
        Optional<User> user = userRepo.findByEmail(email);
        if (user.isPresent() && user.get().getPassword().equals(password)){
            return user.get();
        } else {
            return null;
        }
    }
}