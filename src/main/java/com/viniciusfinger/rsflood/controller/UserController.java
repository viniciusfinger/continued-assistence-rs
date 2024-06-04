package com.viniciusfinger.rsflood.controller;

import com.viniciusfinger.rsflood.model.User;
import com.viniciusfinger.rsflood.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public String showForm(Model model) {
        model.addAttribute("user", new User());
        return "user-form";
    }

    @PostMapping("/user")
    public String submitForm(@ModelAttribute User user, Model model) {
        user = userService.save(user);
        model.addAttribute("user", user);
        return "user";
    }
}
