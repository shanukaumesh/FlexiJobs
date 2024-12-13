package com.ead.user_ms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ead.user_ms.data.User;
import com.ead.user_ms.service.UserService;

@RestController
public class UserController {

    @Autowired
    private UserService obj;

    @GetMapping(path = "/users")
    public List<User> getUser() {
        return obj.getUser();
    }

    @GetMapping(path = "/users/{id}")
    public User getUserById(@PathVariable int id) {
        return obj.getUserById(id);
    }

    @PostMapping(path = "/users")
    public User createUser(@RequestBody User user) {
        return obj.createUser(user);
    }

    @PutMapping(path = "/users")
    public User updateUser(@RequestBody User user) {
        return obj.updateUser(user);
    }

    @DeleteMapping(path = "/users/{id}")
    public void deleteUser(@PathVariable int id) {
        obj.deleteUser(id);
    }
}
