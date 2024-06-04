package com.viniciusfinger.rsflood.repository;

import com.viniciusfinger.rsflood.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
