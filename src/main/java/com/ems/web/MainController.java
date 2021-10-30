package com.ems.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/public")
public class MainController {

    @GetMapping("/login")
    public String getLoginScreen(){
        return "/public/login";
    }
}
