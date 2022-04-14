package com.example.demo.repository;

import com.example.demo.models.StudentCourseDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentCourseDetailsRepository extends JpaRepository<StudentCourseDetails,Long> {
}
