package com.viniciusfinger.rsflood.service;

import com.viniciusfinger.rsflood.model.User;
import com.viniciusfinger.rsflood.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User save(User user) {
        return userRepository.save(user);
    }
}
