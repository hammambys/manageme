package com.example.demo.controllers;


import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.models.Course;
import com.example.demo.models.Group;
import com.example.demo.models.User;
import com.example.demo.repository.CourseRepository;
import com.example.demo.repository.GroupRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class GroupController {
    @Autowired
    GroupRepository groupRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    CourseRepository courseRepository;
    @GetMapping("/groups")
    public ResponseEntity<List<Group>> getAllGroups(){
        List<Group> groups = new ArrayList<Group>();
            groupRepository.findAll().forEach(groups::add);

        if (groups.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(groups, HttpStatus.OK);
    }
    @PostMapping("/groups")
    public ResponseEntity<Group> createGroup(@RequestBody Group group) {
        Group _group = groupRepository.save(new Group(group.getName(), group.getLevel() ));
        return new ResponseEntity<>(_group, HttpStatus.CREATED);
    }
    @PutMapping("/groups/{id}")
    public ResponseEntity<Group> updateGroup(@PathVariable("id") long id, @RequestBody Group group) {
        Group _group = groupRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Group with id = " + id));
        _group.setLevel(group.getLevel());
        _group.setName(group.getName());

        return new ResponseEntity<>(groupRepository.save(_group), HttpStatus.OK);
    }
    @DeleteMapping("/groups/{id}")
    public ResponseEntity<HttpStatus> deleteGroup(@PathVariable("id") long id) {
        groupRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/groups/{groupId}/users")
    public ResponseEntity<List<User>> getAllUsersByGroupId(@PathVariable(value = "groupId") Long groupId ) {
        if (!groupRepository.existsById(groupId)) {
            throw new ResourceNotFoundException("Not found Group with id = " + groupId);
        }
        List<User> users = userRepository.findByGroupId(groupId);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    @GetMapping("/groups/{groupId}/courses")
    public ResponseEntity<Set<Course>> getAllCoursesByGroupId(@PathVariable(value = "groupId") Long groupId ) {
        Optional<Group> _group = groupRepository.findById(groupId);
        if (_group.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Group group = _group.get();
        Set<Course> courses = group.getCourses();
        return new ResponseEntity<>(courses, HttpStatus.OK);
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
