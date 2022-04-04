package com.example.demo.controllers;


import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.models.Course;
import com.example.demo.models.User;
import com.example.demo.repository.CourseRepository;
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
    private UserRepository userRepository;
    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getAllCourses(@RequestParam(required = false) String title) {
        try {
            List<Course> courses = new ArrayList<Course>();
            if (title == null)
                courseRepository.findAll().forEach(courses::add);
            else
                courseRepository.findByTitleContaining(title).forEach(courses::add);
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
    @GetMapping("/users/{userId}/course")
    public ResponseEntity<List<Course>> getAllCoursesByUserId(@PathVariable(value = "userId") Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new ResourceNotFoundException("Not found User with id = " + userId);
        }
        List<Course> course = courseRepository.findCoursesByUsersId(userId);
        return new ResponseEntity<>(course, HttpStatus.OK);
    }

    @GetMapping("/course/{courseId}/users")
    public ResponseEntity<List<User>> getAllUsersByCourseId(@PathVariable(value = "courseId") Long courseId) {
        if (!courseRepository.existsById(courseId)) {
            throw new ResourceNotFoundException("Not found Course  with id = " + courseId);
        }
        List<User> users = userRepository.findUsersByCoursesId(courseId);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/courses")
    public ResponseEntity<Course> createCourse(@RequestBody Course course) {
        try {
            Course _course = courseRepository
                    .save(new Course(course.getTitle(), course.getDescription(), false));
            return new ResponseEntity<>(_course, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/users/{userId}/course")
    public ResponseEntity<Course> addCourse(@PathVariable(value = "userId") Long userId, @RequestBody Course courseRequest) {
        Course tag = userRepository.findById(userId).map(user -> {
            long courseId = courseRequest.getId();

            // tag is existed
            if (courseId != 0L) {
                Course _tag = courseRepository.findById(courseId)
                        .orElseThrow(() -> new ResourceNotFoundException("Not found Course with id = " + courseId));
                user.addCourse(_tag);
                userRepository.save(user);
                return _tag;
            }

            // add and create new Course
            user.addCourse(courseRequest);
            return courseRepository.save(courseRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found User with id = " + userId));
        return new ResponseEntity<>(tag, HttpStatus.CREATED);
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
    @DeleteMapping("/users/{userId}/course/{courseId}")
    public ResponseEntity<HttpStatus> deleteCourseFromUser(@PathVariable(value = "userId") Long userId, @PathVariable(value = "courseId") Long courseId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Not found User with id = " + userId));

        user.removeCourse(courseId);
        userRepository.save(user);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
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
}
