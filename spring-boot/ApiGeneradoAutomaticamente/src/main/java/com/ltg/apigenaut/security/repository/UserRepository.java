package com.ltg.apigenaut.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ltg.apigenaut.security.model.User;


public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
