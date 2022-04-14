package com.example.demo.repository;

import com.example.demo.models.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssignmentsRepository extends JpaRepository<Assignment,Long> {
}
