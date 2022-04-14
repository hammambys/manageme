package com.example.demo.controllers;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.models.Course;
import com.example.demo.models.Group;
import com.example.demo.models.User;
import com.example.demo.repository.GroupRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = new ArrayList<User>();
        userRepository.findAll().forEach(users::add);

        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/groups/{groupId}/users")
    public ResponseEntity<List<User>> getAllUsersByGroupId(@PathVariable(value = "groupId") Long groupId ) {
        if (!groupRepository.existsById(groupId)) {
            throw new ResourceNotFoundException("Not found Group with id = " + groupId);
        }
        List<User> users = userRepository.findByGroupId(groupId);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    @PostMapping("/groups/{userId}/{groupId}")
    public ResponseEntity<User> addUserToGroup(@PathVariable(value = "userId") Long userId,
                                               @PathVariable(value="groupId") Long groupId
                                                 ) {
        Optional<User> user = userRepository.findById(userId);
        Optional<Group> group = groupRepository.findById(groupId);
        if(group.isPresent()){
            Group _group=group.get();
            if (user.isPresent()) {
                User _user = user.get();
                _user.setGroup(_group);
                return new ResponseEntity<>(userRepository.save(_user), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
}
