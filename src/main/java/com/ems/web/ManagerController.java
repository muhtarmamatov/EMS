package com.ems.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/manager")
public class ManagerController {

    @GetMapping("/approve_leaves")
    public String getApproveLeavesScreen(){
        return "/manager/approve_leaves";
    }

    @GetMapping("/dashboard")
    public String getDashboardScreen(){
        return "/manager/dashboard";
    }

    @GetMapping("/leave_details")
    public String getLeaveDetailsScreen(){
        return "/manager/leave_details";
    }

    @GetMapping("/leave_status")
    public String getLeaveStatusScreen(){
        return "/manager/leave_status";
    }

    @GetMapping("/not_approved_leaves")
    public String getNotApprovedLeavesScreen(){
        return "/manager/not_approved_leaves";
    }

    @GetMapping("/pending_leaves")
    public String getPendingLeavesScreen(){
        return "/manager/pending_leaves";
    }
}
