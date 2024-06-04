package com.viniciusfinger.rsflood;

import com.viniciusfinger.rsflood.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller // != @RestController
public class UserController {

    @GetMapping("/user")
    public String showForm(Model model) {
        model.addAttribute("user", new User());
        return "user-form";
    }

    @PostMapping("/user")
    public String submitForm(@ModelAttribute User user, Model model) {
        model.addAttribute("user", user);
        return "user";
    }
}
