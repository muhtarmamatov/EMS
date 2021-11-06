package com.ems.web;

import com.ems.service.DepartmentService;
import com.ems.service.DesignationService;
import com.ems.service.EmployeeService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminController {

    private final EmployeeService employeeService;

    private final DepartmentService departmentService;

    private final DesignationService designationService;

    public AdminController(EmployeeService employeeService,
                           DepartmentService departmentService,
                           DesignationService designationService) {
        this.employeeService = employeeService;
        this.departmentService = departmentService;
        this.designationService = designationService;
    }


    @GetMapping("/add_employee")
    public String getAddEmployeeScreen(Model model){
        return "/admin/add_employee";
    }
    @GetMapping("/add_department")
    public String getDepartmentAddScreen(Model model){
        return "/admin/add_department";
    }

    @GetMapping("/manage_department")
    public String getManageDepartmentScreen(Model model){
        return "/admin/manage_department";
    }

    @GetMapping("/add_designation")
    public String getDesignationAddScreen(Model model){
        return "/admin/add_designation";
    }

    @GetMapping("/manage_designation")
    public String getManageDesignationScreen(Model model){
        return "/admin/manage_designation";
    }


    @GetMapping("/add_leave_type")
    public String getAddLeaveTypeScreen(Model model){
        return "/admin/add_leave_type";
    }

    @GetMapping("/all_leaves")
    public String getAllLeavesScreen(Model model){
        return "/admin/all_leaves";
    }

    @GetMapping("/manage_leave_types")
    public String getManageLeaveTypesScreen(Model model){
        return "/admin/manage_leave_types";
    }

    @GetMapping("/reports")
    public String getReportsScreen(Model model){
        return "/admin/reports";
    }
}
