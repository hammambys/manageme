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

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class CourseController {
    @Autowired
    CourseRepository courseRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    GroupRepository groupRepository;
    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getAllCourses() {
        try {
            List<Course> courses = new ArrayList<Course>();
                courseRepository.findAll().forEach(courses::add);
            if (courses.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(courses, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/courses/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable("id") long id) {
        Optional<Course> courseData = courseRepository.findById(id);
        if (courseData.isPresent()) {
            return new ResponseEntity<>(courseData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }




    @PostMapping("/courses")
    public ResponseEntity<Course> createCourse(@RequestBody Course course) {
        try {
            Course _course = courseRepository
                    .save(new Course(course.getTitle(), course.getDescription(), course.isPublished(), course.getGroup()));

            return new ResponseEntity<>(_course, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable("id") long id, @RequestBody Course course) {
        Optional<Course> courseData = courseRepository.findById(id);
        if (courseData.isPresent()) {
            Course _course = courseData.get();
            _course.setTitle(course.getTitle());
            _course.setDescription(course.getDescription());
            _course.setPublished(course.isPublished());
            return new ResponseEntity<>(courseRepository.save(_course), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable("id") long id) {
        try {
            courseRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/courses")
    public ResponseEntity<HttpStatus> deleteAllCourses() {
        try {
            courseRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/courses/published")
    public ResponseEntity<List<Course>> findByPublished() {
        try {
            List<Course> courses = courseRepository.findByPublished(true);
            if (courses.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(courses, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/courses/{courseId}/{groupId}")
    public ResponseEntity<Course> assignCourseToGroup(@PathVariable(value = "courseId") Long courseId,
                                               @PathVariable(value="groupId") Long groupId
    ) {
        Optional<Course> course = courseRepository.findById(courseId);
        Optional<Group> group = groupRepository.findById(groupId);
        if(group.isPresent()){
            Group _group=group.get();
            if (course.isPresent()) {
                Course _course = course.get();
                _course.setGroup(_group);
                return new ResponseEntity<>(courseRepository.save(_course), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
}