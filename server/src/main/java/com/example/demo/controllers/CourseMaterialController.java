package com.example.demo.controllers;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.models.Course;
import com.example.demo.models.CourseMaterial;
import com.example.demo.models.Group;
import com.example.demo.models.CourseMaterial;
import com.example.demo.repository.CourseMaterialRepository;
import com.example.demo.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class CourseMaterialController {

    @Autowired
    CourseRepository courseRepository;
    @Autowired
    CourseMaterialRepository courseMaterialRepository;


    @GetMapping("/courses/{id}/materials")
    public ResponseEntity<List<CourseMaterial>> getAllMaterialsByCourseId(@PathVariable(value = "id") Long courseId) {
        if (!courseRepository.existsById(courseId)) {
            throw new ResourceNotFoundException("Not found Course with id = " + courseId);
        }

        List<CourseMaterial> courseMaterials = courseMaterialRepository.findByCourseId(courseId);
        return new ResponseEntity<>(courseMaterials, HttpStatus.OK);
    }


    @PostMapping("/material")
    public ResponseEntity<CourseMaterial> createCourseMaterial(
                                                 @RequestBody CourseMaterial courseMaterialRequest) {
        try {
            CourseMaterial _courseMaterial = courseMaterialRepository
                    .save(new CourseMaterial(courseMaterialRequest.getLink(), courseMaterialRequest.getType()));

            return new ResponseEntity<>(_courseMaterial, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/courses/{courseId}/materials/{materialId}")
    public ResponseEntity<CourseMaterial> addCourseMaterialToCourse(@PathVariable(value = "courseId") Long courseId,
                                               @PathVariable(value="materialId") Long materialId
    ) {
        Optional<CourseMaterial> courseMaterial = courseMaterialRepository.findById(materialId);
        Optional<Course> course = courseRepository.findById(courseId);
        if(course.isPresent()){
            Course _course=course.get();
            if (courseMaterial.isPresent()) {
                CourseMaterial _courseMaterial = courseMaterial.get();
                _courseMaterial.setCourse(_course);
                return new ResponseEntity<>(courseMaterialRepository.save(_courseMaterial), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
    @DeleteMapping("/material/{id}")
    public ResponseEntity<HttpStatus> deleteCourseMaterial(@PathVariable("id") long id) {
        try {
            courseMaterialRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }





}
