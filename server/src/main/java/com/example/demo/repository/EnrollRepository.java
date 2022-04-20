package com.example.demo.repository;

import com.example.demo.models.Course;
import com.example.demo.models.Enroll;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EnrollRepository extends JpaRepository<Enroll,Long> {
    List<Course> findCoursesByUserId(Long user);
}
