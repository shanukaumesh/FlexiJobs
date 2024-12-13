package com.ead.user_ms.controller;

import java.util.List;

import com.ead.user_ms.data.ErrorResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ead.user_ms.data.User;
import com.ead.user_ms.service.UserService;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(path = "/users")
    public ResponseEntity<Integer> createUser(@RequestBody User user) {
        User createdUser = userService.createUser(user);
        return new ResponseEntity<>(createdUser.getId(), HttpStatus.CREATED); // 201 Created
    }

    @GetMapping(path = "/users")
    public ResponseEntity<List<User>> getUser() {
        List<User> users = userService.getUser();
        return new ResponseEntity<>(users, HttpStatus.OK); // 200 OK
    }

    @GetMapping(path = "/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id) {
        User user = userService.getUserById(id);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK); // 200 OK
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND); // 404 Not Found
    }

    @PutMapping(path = "/users")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User updatedUser = userService.updateUser(user);
        if (updatedUser != null) {
            return new ResponseEntity<>(updatedUser, HttpStatus.OK); // 200 OK
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND); // 404 Not Found
    }

    @DeleteMapping(path = "/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable int id) {
        User user = userService.getUserById(id);
        if (user != null) {
            userService.deleteUser(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 204 No Content
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND); // 404 Not Found
    }

    @PostMapping (path = "/users/login")
    public ResponseEntity<?> loginUser(@RequestBody User.UserLoginRequest loginRequest) {
        User user = userService.getUserByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());

        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK); // 200 OK, user object with role
        } else {
            return new ResponseEntity<>(new ErrorResponse("Invalid email or password"), HttpStatus.UNAUTHORIZED); // 401 Unauthorized
        }
    }
}
