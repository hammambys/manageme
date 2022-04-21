package com.example.demo.controllers;


import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.models.Group;
import com.example.demo.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class GroupController {
    @Autowired
    GroupRepository groupRepository;
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


}
