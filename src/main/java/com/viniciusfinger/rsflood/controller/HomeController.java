package com.viniciusfinger.rsflood.controller;

import com.viniciusfinger.rsflood.dto.HomeDTO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home")
public class HomeController {

    @GetMapping("/new")
    private String newHome(Model model) {
        model.addAttribute("homeDTO", new HomeDTO());
        return "home-form";
    }
}
