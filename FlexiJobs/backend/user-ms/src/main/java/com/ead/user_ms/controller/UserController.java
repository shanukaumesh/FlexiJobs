package com.ead.user_ms.controller;


import com.ead.user_ms.UserMsApplication;
import com.ead.user_ms.data.User;
import com.ead.user_ms.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController
{
    @Autowired
    private UserService obj;

    @GetMapping(path = "/users")
    public List<User> getUser()
    {
        return obj.getUser();
    }

    @GetMapping(path = "/users/{id}")
    public User getUserById(@PathVariable int id)
    {
        return obj.getUserById(id);
    }

    @PostMapping(path = "/users")
    public User createUser(@RequestBody User user)
    {
        return obj.createUser(user);
    }

    @PutMapping(path = "/users")
    public User updateUser(@RequestBody User user)
    {
        return obj.updateUser(user);
    }

    @DeleteMapping(path = "/users/{id}")
    public void deleteUser(@PathVariable int id)
    {
        obj.deleteUser(id);
    }
}