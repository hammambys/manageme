package com.example.demo.repository;

import java.util.List;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByUsername(String username);

    Iterable<User> findByUsernameContaining(String username);
}
