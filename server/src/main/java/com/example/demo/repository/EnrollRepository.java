package com.example.demo.repository;

import com.example.demo.models.Enroll;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnrollRepository extends JpaRepository<Enroll,Long> {
}
