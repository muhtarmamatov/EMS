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

    @GetMapping("/index")
    public String getIndexPage(){
        return "/public/index";
    }

    @GetMapping("/apply_leave")
    public String getApplyLeaveScreen(){
        return "/public/apply_leave";
    }
    @GetMapping("/update_password")
    public String getUpdatePasswordScreen(){
        return "/public/update_password";
    }
    @GetMapping("/update_profile")
    public String getUpdateProfileScreen(){
        return "/public/update_profile";
    }

}
