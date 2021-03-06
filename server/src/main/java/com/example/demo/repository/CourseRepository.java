package com.example.demo.repository;

import com.example.demo.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course,Long> {
    List<Course> findByPublished(boolean published);
    List<Course> findByTitleContaining(String title);
}
