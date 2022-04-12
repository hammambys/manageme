package com.example.demo.repository;

import com.example.demo.models.EGroup;
import com.example.demo.models.Group;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GroupRepository extends JpaRepository<Group,Long> {
    Optional<Group> findByLevel(EGroup level);

}
